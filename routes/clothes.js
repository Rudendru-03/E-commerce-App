const express = require("express");
const clothesController = require("../controllers/clothesController");

const router = express.Router();

router.post("/", clothesController.createClothes);
router.get("/", clothesController.getClothes);
router.get(
  "/category/:subCategory/:subSubCategory?",
  clothesController.getClothesByCategory
);
router.get("/:id", clothesController.getClothesById);
router.put("/:id", clothesController.updateClothes);
router.delete("/:id", clothesController.deleteClothes);

module.exports = router;
