const mongoose = require("mongoose");

const electronicsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    subCategory: {
      type: String,
      required: true,
      enum: ["Smartphones", "Laptops", "Tablets", "TVs", "Audio"],
    },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    specifications: { type: Map, of: String },
    warranty: { type: Number, required: true }, // in months
    stock: { type: Number, required: true, min: 0 },
    images: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Electronics", electronicsSchema);
