const authService = require("../services/authService");

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await authService.registerUser(username, email, password);
    res.status(201).json(result);
  } catch (error) {
    console.error("Registration error:", error);
    res
      .status(error.status || 500)
      .json({ message: error.message || "Server error during registration" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUser(email, password);
    res.json(result);
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(error.status || 500)
      .json({ message: error.message || "Server error during login" });
  }
};
