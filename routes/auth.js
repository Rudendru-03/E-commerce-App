const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// Handle preflight requests
router.options("*", (req, res) => {
  res.sendStatus(204);
});

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password", authController.resetPassword);

module.exports = router;
