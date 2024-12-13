const Beauty = require("../models/beauty");

exports.createBeauty = async (req, res) => {
  try {
    const beauty = new Beauty(req.body);
    await beauty.save();
    res.status(201).json(beauty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBeauty = async (req, res) => {
  try {
    const beauty = await Beauty.find();
    res.json(beauty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBeautyById = async (req, res) => {
  try {
    const beauty = await Beauty.findById(req.params.id);
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
    const beauty = await Beauty.find({ subCategory });
    res.json(beauty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBeauty = async (req, res) => {
  try {
    const beauty = await Beauty.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!beauty) {
      return res.status(404).json({ message: "Beauty product not found" });
    }
    res.json(beauty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteBeauty = async (req, res) => {
  try {
    const beauty = await Beauty.findByIdAndDelete(req.params.id);
    if (!beauty) {
      return res.status(404).json({ message: "Beauty product not found" });
    }
    res.json({ message: "Beauty product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
