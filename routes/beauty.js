const express = require("express");
const beautyController = require("../controllers/beautyController");

const router = express.Router();

// Beauty routes
router.post("/beauty", beautyController.createBeauty);
router.get("/beauty", beautyController.getBeauty);
router.get("/beauty/:id", beautyController.getBeautyById);
router.get("/beauty/:subCategory", beautyController.getBeautyByCategory);
router.put("/beauty/:id", beautyController.updateBeauty);
router.delete("/beauty/:id", beautyController.deleteBeauty);

module.exports = router;
