const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");
const beautyRoutes = require("./routes/beauty");
const clothesRoutes = require("./routes/clothes");
const footwearRoutes = require("./routes/footwear");
const electronicsRoutes = require("./routes/electronics");

const app = express();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
};

// Middleware
app.use(cors(corsOptions));

// Custom JSON parsing middleware
app.use((req, res, next) => {
  let data = "";
  req.setEncoding("utf8");
  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    if (data) {
      try {
        req.body = JSON.parse(data);
      } catch (e) {
        return res.status(400).json({ message: "Invalid JSON" });
      }
    }
    next();
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/products", beautyRoutes);
app.use("/api/products", clothesRoutes);
app.use("/api/products", footwearRoutes);
app.use("/api/products", electronicsRoutes);

// 404 Not Found middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (!res.headersSent) {
    res.status(500).json({ message: "Something went wrong!" });
  }
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
