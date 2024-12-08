const User = require("../models/user");

exports.findByEmailOrUsername = async (email, username) => {
  return User.findOne({ $or: [{ email }, { username }] });
};

exports.findByEmail = async (email) => {
  return User.findOne({ email });
};

exports.create = async (userData) => {
  const user = new User(userData);
  return user.save();
};
