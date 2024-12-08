const productRepository = require("../repository/productRepository");

exports.createProduct = async (productData) => {
  return productRepository.create(productData);
};

exports.getProducts = async (filters) => {
  return productRepository.findAll(filters);
};

exports.getProductById = async (id) => {
  return productRepository.findById(id);
};

exports.updateProduct = async (id, productData) => {
  return productRepository.update(id, productData);
};

exports.deleteProduct = async (id) => {
  return productRepository.delete(id);
};
