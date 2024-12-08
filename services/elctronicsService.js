const electronicsRepository = require("../repository/elctronicsRepository");

exports.createElectronics = async (electronicsData) => {
  return electronicsRepository.create(electronicsData);
};

exports.getElectronics = async (filters) => {
  return electronicsRepository.findAll(filters);
};

exports.getElectronicsById = async (id) => {
  return electronicsRepository.findById(id);
};

exports.getElectronicsByCategory = async (subCategory) => {
  return electronicsRepository.findByCategory(subCategory);
};

exports.updateElectronics = async (id, electronicsData) => {
  return electronicsRepository.update(id, electronicsData);
};

exports.deleteElectronics = async (id) => {
  return electronicsRepository.delete(id);
};
