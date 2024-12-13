const Footwear = require("../models/footwear");

exports.createFootwear = async (req, res) => {
  try {
    const footwear = new Footwear(req.body);
    await footwear.save();
    res.status(201).json(footwear);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getFootwear = async (req, res) => {
  try {
    const footwear = await Footwear.find(req.query);
    res.json(footwear);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getFootwearById = async (req, res) => {
  try {
    const footwear = await Footwear.findById(req.params.id);
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
    let query = { subCategory };
    if (subSubCategory) query.subSubCategory = subSubCategory;
    const footwear = await Footwear.find(query);
    res.json(footwear);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateFootwear = async (req, res) => {
  try {
    const footwear = await Footwear.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!footwear) {
      return res.status(404).json({ message: "Footwear not found" });
    }
    res.json(footwear);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFootwear = async (req, res) => {
  try {
    const footwear = await Footwear.findByIdAndDelete(req.params.id);
    if (!footwear) {
      return res.status(404).json({ message: "Footwear not found" });
    }
    res.json({ message: "Footwear deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
