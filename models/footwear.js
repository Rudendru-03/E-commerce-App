const mongoose = require("mongoose");

const footwearSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    subCategory: {
      type: String,
      required: true,
      enum: ["Men", "Women", "Kids"],
    },
    subSubCategory: {
      type: String,
      required: true,
      enum: ["Casual", "Formal", "Sports", "Sandals"],
    },
    size: { type: Number, required: true },
    color: { type: String, required: true },
    brand: { type: String, required: true },
    stock: { type: Number, required: true, min: 0 },
    images: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Footwear", footwearSchema);
