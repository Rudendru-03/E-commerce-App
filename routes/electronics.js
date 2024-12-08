const express = require("express");
const electronicsController = require("../controllers/electronicsController");

const router = express.Router();

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

module.exports = router;
