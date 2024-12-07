const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); // Mount auth routes under /api/auth
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to the E-Commerce API");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
