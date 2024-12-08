const footwearRepository = require("../repository/footwearRepository");

exports.createFootwear = async (footwearData) => {
  return footwearRepository.create(footwearData);
};

exports.getFootwear = async (filters) => {
  return footwearRepository.findAll(filters);
};

exports.getFootwearById = async (id) => {
  return footwearRepository.findById(id);
};

exports.getFootwearByCategory = async (subCategory, subSubCategory) => {
  return footwearRepository.findByCategory(subCategory, subSubCategory);
};

exports.updateFootwear = async (id, footwearData) => {
  return footwearRepository.update(id, footwearData);
};

exports.deleteFootwear = async (id) => {
  return footwearRepository.delete(id);
};
