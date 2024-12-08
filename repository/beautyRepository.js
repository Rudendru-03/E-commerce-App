const Beauty = require("../models/beauty");

exports.create = async (beautyData) => {
  const beauty = new Beauty(beautyData);
  return beauty.save();
};

exports.findAll = async (filters = {}) => {
  return Beauty.find(filters);
};

exports.findById = async (id) => {
  return Beauty.findById(id);
};

exports.findByCategory = async (subCategory) => {
  return Beauty.find({ subCategory });
};

exports.update = async (id, beautyData) => {
  return Beauty.findByIdAndUpdate(id, beautyData, {
    new: true,
    runValidators: true,
  });
};

exports.delete = async (id) => {
  return Beauty.findByIdAndDelete(id);
};
