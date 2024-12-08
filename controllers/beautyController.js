const beautyService = require("../services/beautyService");

exports.createBeauty = async (req, res) => {
  try {
    const beauty = await beautyService.createBeauty(req.body);
    res.status(201).json(beauty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBeauty = async (req, res) => {
  try {
    const beauty = await beautyService.getBeauty(req.query);
    res.json(beauty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBeautyById = async (req, res) => {
  try {
    const beauty = await beautyService.getBeautyById(req.params.id);
    if (!beauty) {
      return res.status(404).json({ message: "Beauty product not found" });
    }
    res.json(beauty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBeautyByCategory = async (req, res) => {
  try {
    const { subCategory } = req.params;
    const beauty = await beautyService.getBeautyByCategory(subCategory);
    res.json(beauty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBeauty = async (req, res) => {
  try {
    const beauty = await beautyService.updateBeauty(req.params.id, req.body);
    res.json(beauty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBeauty = async (req, res) => {
  try {
    await beautyService.deleteBeauty(req.params.id);
    res.json({ message: "Beauty product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
