const mongoose = require("mongoose");

const clothesSchema = new mongoose.Schema(
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
      enum: ["Summer", "Winter", "Formal", "Casual", "Sports"],
    },
    size: {
      type: String,
      required: true,
      enum: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    color: { type: String, required: true },
    brand: { type: String, required: true },
    stock: { type: Number, required: true, min: 0 },
    images: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Clothes", clothesSchema);
