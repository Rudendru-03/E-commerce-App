const clothesService = require("../services/clothesService");

exports.createClothes = async (req, res) => {
  try {
    const clothes = await clothesService.createClothes(req.body);
    res.status(201).json(clothes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getClothes = async (req, res) => {
  try {
    const clothes = await clothesService.getClothes(req.query);
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClothesById = async (req, res) => {
  try {
    const clothes = await clothesService.getClothesById(req.params.id);
    if (!clothes) {
      return res.status(404).json({ message: "Clothes not found" });
    }
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClothesByCategory = async (req, res) => {
  try {
    const { subCategory, subSubCategory } = req.params;
    const clothes = await clothesService.getClothesByCategory(
      subCategory,
      subSubCategory
    );
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateClothes = async (req, res) => {
  try {
    const clothes = await clothesService.updateClothes(req.params.id, req.body);
    res.json(clothes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteClothes = async (req, res) => {
  try {
    await clothesService.deleteClothes(req.params.id);
    res.json({ message: "Clothes deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
