const express = require("express");
const footwearController = require("../controllers/footwearController");

const router = express.Router();

router.post("/", footwearController.createFootwear);
router.get("/", footwearController.getFootwear);
router.get(
  "/category/:subCategory/:subSubCategory?",
  footwearController.getFootwearByCategory
);
router.get("/:id", footwearController.getFootwearById);
router.put("/:id", footwearController.updateFootwear);
router.delete("/:id", footwearController.deleteFootwear);

module.exports = router;
