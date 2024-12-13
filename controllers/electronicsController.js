const Electronics = require("../models/electronics");

exports.createElectronics = async (req, res) => {
  try {
    const electronics = new Electronics(req.body);
    await electronics.save();
    res.status(201).json(electronics);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getElectronics = async (req, res) => {
  try {
    const electronics = await Electronics.find(req.query);
    res.json(electronics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getElectronicsById = async (req, res) => {
  try {
    const electronics = await Electronics.findById(req.params.id);
    if (!electronics) {
      return res.status(404).json({ message: "Electronics item not found" });
    }
    res.json(electronics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getElectronicsByCategory = async (req, res) => {
  try {
    const { subCategory } = req.params;
    const electronics = await Electronics.find({ subCategory });
    res.json(electronics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateElectronics = async (req, res) => {
  try {
    const electronics = await Electronics.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!electronics) {
      return res.status(404).json({ message: "Electronics item not found" });
    }
    res.json(electronics);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteElectronics = async (req, res) => {
  try {
    const electronics = await Electronics.findByIdAndDelete(req.params.id);
    if (!electronics) {
      return res.status(404).json({ message: "Electronics item not found" });
    }
    res.json({ message: "Electronics item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
