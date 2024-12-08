const electronicsService = require("../services/elctronicsService");

exports.createElectronics = async (req, res) => {
  try {
    const electronics = await electronicsService.createElectronics(req.body);
    res.status(201).json(electronics);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getElectronics = async (req, res) => {
  try {
    const electronics = await electronicsService.getElectronics(req.query);
    res.json(electronics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getElectronicsById = async (req, res) => {
  try {
    const electronics = await electronicsService.getElectronicsById(
      req.params.id
    );
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
    const electronics = await electronicsService.getElectronicsByCategory(
      subCategory
    );
    res.json(electronics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateElectronics = async (req, res) => {
  try {
    const electronics = await electronicsService.updateElectronics(
      req.params.id,
      req.body
    );
    res.json(electronics);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteElectronics = async (req, res) => {
  try {
    await electronicsService.deleteElectronics(req.params.id);
    res.json({ message: "Electronics item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
