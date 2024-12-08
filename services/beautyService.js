const beautyRepository = require("../repository/beautyRepository");

exports.createBeauty = async (beautyData) => {
  return beautyRepository.create(beautyData);
};

exports.getBeauty = async (filters) => {
  return beautyRepository.findAll(filters);
};

exports.getBeautyById = async (id) => {
  return beautyRepository.findById(id);
};

exports.getBeautyByCategory = async (subCategory) => {
  return beautyRepository.findByCategory(subCategory);
};

exports.updateBeauty = async (id, beautyData) => {
  return beautyRepository.update(id, beautyData);
};

exports.deleteBeauty = async (id) => {
  return beautyRepository.delete(id);
};
