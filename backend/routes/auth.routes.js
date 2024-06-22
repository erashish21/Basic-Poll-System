const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// Define your routes here
router.post("/register", authController.register); // Ensure register is defined and exported in auth.controller.js
router.post("/login", authController.login); // Ensure login is defined and exported in auth.controller.js

module.exports = router;
