const Footwear = require("../models/footwear");

exports.create = async (footwearData) => {
  const footwear = new Footwear(footwearData);
  return footwear.save();
};

exports.findAll = async (filters = {}) => {
  return Footwear.find(filters);
};

exports.findById = async (id) => {
  return Footwear.findById(id);
};

exports.findByCategory = async (subCategory, subSubCategory) => {
  let query = {};
  if (subCategory) query.subCategory = subCategory;
  if (subSubCategory) query.subSubCategory = subSubCategory;
  return Footwear.find(query);
};

exports.update = async (id, footwearData) => {
  return Footwear.findByIdAndUpdate(id, footwearData, {
    new: true,
    runValidators: true,
  });
};

exports.delete = async (id) => {
  return Footwear.findByIdAndDelete(id);
};
