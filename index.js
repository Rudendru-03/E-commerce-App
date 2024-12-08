const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const beautyRoutes = require("./routes/beauty");
const clothesRoutes = require("./routes/clothes");
const footwearRoutes = require("./routes/footwear");
const electronicsRoutes = require("./routes/electronics");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/products", beautyRoutes);
app.use("/api/products", clothesRoutes);
app.use("/api/products", footwearRoutes);
app.use("/api/products", electronicsRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
