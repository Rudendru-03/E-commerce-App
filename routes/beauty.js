const express = require("express");
const beautyController = require("../controllers/beautyController");

const router = express.Router();

router.post("/", beautyController.createBeauty);
router.get("/", beautyController.getBeauty);
router.get("/category/:subCategory", beautyController.getBeautyByCategory);
router.get("/:id", beautyController.getBeautyById);
router.put("/:id", beautyController.updateBeauty);
router.delete("/:id", beautyController.deleteBeauty);

module.exports = router;
