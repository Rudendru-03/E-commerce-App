const Clothes = require("../models/clothes");

exports.create = async (clothesData) => {
  const clothes = new Clothes(clothesData);
  return clothes.save();
};

exports.findAll = async (filters = {}) => {
  return Clothes.find(filters);
};

exports.findById = async (id) => {
  return Clothes.findById(id);
};

exports.findByCategory = async (subCategory, subSubCategory) => {
  let query = {};
  if (subCategory) query.subCategory = subCategory;
  if (subSubCategory) query.subSubCategory = subSubCategory;
  return Clothes.find(query);
};

exports.update = async (id, clothesData) => {
  return Clothes.findByIdAndUpdate(id, clothesData, {
    new: true,
    runValidators: true,
  });
};

exports.delete = async (id) => {
  return Clothes.findByIdAndDelete(id);
};
