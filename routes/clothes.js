const express = require("express");
const clothesController = require("../controllers/clothesController");

const router = express.Router();

// Clothes routes
router.post("/clothes", clothesController.createClothes);
router.get("/clothes", clothesController.getClothes);
router.get("/clothes/:id", clothesController.getClothesById);
router.get(
  "/clothes/:subCategory/:subSubCategory?",
  clothesController.getClothesByCategory
);
router.put("/clothes/:id", clothesController.updateClothes);
router.delete("/clothes/:id", clothesController.deleteClothes);

module.exports = router;
