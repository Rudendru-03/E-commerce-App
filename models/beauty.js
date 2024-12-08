const mongoose = require("mongoose");

const beautySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    subCategory: {
      type: String,
      required: true,
      enum: ["Skincare", "Makeup", "Haircare", "Fragrances"],
    },
    brand: { type: String, required: true },
    ingredients: [{ type: String }],
    volume: { type: String, required: true }, // e.g., "100ml", "50g"
    expiryDate: { type: Date, required: true },
    stock: { type: Number, required: true, min: 0 },
    images: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Beauty", beautySchema);
