const Electronics = require("../models/electronics");

exports.create = async (electronicsData) => {
  const electronics = new Electronics(electronicsData);
  return electronics.save();
};

exports.findAll = async (filters = {}) => {
  return Electronics.find(filters);
};

exports.findById = async (id) => {
  return Electronics.findById(id);
};

exports.findByCategory = async (subCategory) => {
  return Electronics.find({ subCategory });
};

exports.update = async (id, electronicsData) => {
  return Electronics.findByIdAndUpdate(id, electronicsData, {
    new: true,
    runValidators: true,
  });
};

exports.delete = async (id) => {
  return Electronics.findByIdAndDelete(id);
};
