const footwearService = require("../services/footwearService");

exports.createFootwear = async (req, res) => {
  try {
    const footwear = await footwearService.createFootwear(req.body);
    res.status(201).json(footwear);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getFootwear = async (req, res) => {
  try {
    const footwear = await footwearService.getFootwear(req.query);
    res.json(footwear);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFootwearById = async (req, res) => {
  try {
    const footwear = await footwearService.getFootwearById(req.params.id);
    if (!footwear) {
      return res.status(404).json({ message: "Footwear not found" });
    }
    res.json(footwear);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFootwearByCategory = async (req, res) => {
  try {
    const { subCategory, subSubCategory } = req.params;
    const footwear = await footwearService.getFootwearByCategory(
      subCategory,
      subSubCategory
    );
    res.json(footwear);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateFootwear = async (req, res) => {
  try {
    const footwear = await footwearService.updateFootwear(
      req.params.id,
      req.body
    );
    res.json(footwear);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFootwear = async (req, res) => {
  try {
    await footwearService.deleteFootwear(req.params.id);
    res.json({ message: "Footwear deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
