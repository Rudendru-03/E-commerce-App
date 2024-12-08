const express = require("express");
const router = express.Router();

const clothesController = require("../controllers/clothesController");
const footwearController = require("../controllers/footwearController");
const electronicsController = require("../controllers/electronicsController");
const beautyController = require("../controllers/beautyController");

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

// Electronics routes
router.post("/electronics", electronicsController.createElectronics);
router.get("/electronics", electronicsController.getElectronics);
router.get("/electronics/:id", electronicsController.getElectronicsById);
router.get(
  "/electronics/:subCategory",
  electronicsController.getElectronicsByCategory
);
router.put("/electronics/:id", electronicsController.updateElectronics);
router.delete("/electronics/:id", electronicsController.deleteElectronics);

// Beauty routes
router.post("/beauty", beautyController.createBeauty);
router.get("/beauty", beautyController.getBeauty);
router.get("/beauty/:id", beautyController.getBeautyById);
router.get("/beauty/:subCategory", beautyController.getBeautyByCategory);
router.put("/beauty/:id", beautyController.updateBeauty);
router.delete("/beauty/:id", beautyController.deleteBeauty);

module.exports = router;
