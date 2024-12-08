const clothesRepository = require("../repository/clothesRepository");

exports.createClothes = async (clothesData) => {
  return clothesRepository.create(clothesData);
};

exports.getClothes = async (filters) => {
  return clothesRepository.findAll(filters);
};

exports.getClothesById = async (id) => {
  return clothesRepository.findById(id);
};

exports.getClothesByCategory = async (subCategory, subSubCategory) => {
  return clothesRepository.findByCategory(subCategory, subSubCategory);
};

exports.updateClothes = async (id, clothesData) => {
  return clothesRepository.update(id, clothesData);
};

exports.deleteClothes = async (id) => {
  return clothesRepository.delete(id);
};
