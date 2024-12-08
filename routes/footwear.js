const express = require("express");
const footwearController = require("../controllers/footwearController");

const router = express.Router();

// Footwear routes
router.post("/footwear", footwearController.createFootwear);
router.get("/footwear", footwearController.getFootwear);
router.get("/footwear/:id", footwearController.getFootwearById);
router.get(
  "/footwear/:subCategory/:subSubCategory?",
  footwearController.getFootwearByCategory
);
router.put("/footwear/:id", footwearController.updateFootwear);
router.delete("/footwear/:id", footwearController.deleteFootwear);

module.exports = router;
