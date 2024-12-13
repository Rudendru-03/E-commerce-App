const Clothes = require("../models/clothes");

exports.createClothes = async (req, res) => {
  try {
    const clothes = new Clothes(req.body);
    await clothes.save();
    res.status(201).json(clothes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getClothes = async (req, res) => {
  try {
    const clothes = await Clothes.find(req.query);
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getClothesById = async (req, res) => {
  try {
    const clothes = await Clothes.findById(req.params.id);
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
    let query = { subCategory };
    if (subSubCategory) query.subSubCategory = subSubCategory;
    const clothes = await Clothes.find(query);
    res.json(clothes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateClothes = async (req, res) => {
  try {
    const clothes = await Clothes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!clothes) {
      return res.status(404).json({ message: "Clothes not found" });
    }
    res.json(clothes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteClothes = async (req, res) => {
  try {
    const clothes = await Clothes.findByIdAndDelete(req.params.id);
    if (!clothes) {
      return res.status(404).json({ message: "Clothes not found" });
    }
    res.json({ message: "Clothes deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
