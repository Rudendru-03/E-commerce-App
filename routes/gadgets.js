const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", (req, res) =>
  productController.getProductsByCategory(req, res)
);
router.get("/:subCategory", (req, res) =>
  productController.getProductsByCategory(req, res)
);
router.get("/:subCategory/:subSubCategory", (req, res) =>
  productController.getProductsByCategory(req, res)
);

module.exports = router;
