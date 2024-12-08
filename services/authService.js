const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRepository = require("../repository/userRepository");

exports.registerUser = async (username, email, password) => {
  const existingUser = await userRepository.findByEmailOrUsername(
    email,
    username
  );
  if (existingUser) {
    throw {
      status: 400,
      message:
        existingUser.email === email
          ? "Email already exists"
          : "Username already exists",
    };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await userRepository.create({
    username,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return {
    message: "User registered successfully",
    token,
    user: {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    },
  };
};

exports.loginUser = async (email, password) => {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw { status: 400, message: "Invalid credentials" };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw { status: 400, message: "Invalid credentials" };
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return {
    message: "Login successful",
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  };
};
