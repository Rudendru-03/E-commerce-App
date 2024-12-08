const Product = require("../models/product");

exports.create = async (productData) => {
  const product = new Product(productData);
  return product.save();
};

exports.findAll = async (filters) => {
  return Product.find(filters);
};

exports.findById = async (id) => {
  return Product.findById(id);
};

exports.update = async (id, productData) => {
  return Product.findByIdAndUpdate(id, productData, {
    new: true,
    runValidators: true,
  });
};

exports.delete = async (id) => {
  return Product.findByIdAndDelete(id);
};
