const express = require("express");
const electronicsController = require("../controllers/electronicsController");

const router = express.Router();

router.post("/", electronicsController.createElectronics);
router.get("/", electronicsController.getElectronics);
router.get(
  "/category/:subCategory",
  electronicsController.getElectronicsByCategory
);
router.get("/:id", electronicsController.getElectronicsById);
router.put("/:id", electronicsController.updateElectronics);
router.delete("/:id", electronicsController.deleteElectronics);

module.exports = router;
