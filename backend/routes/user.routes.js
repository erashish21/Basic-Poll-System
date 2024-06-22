const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const { auth } = require("../middleware/auth.middleware");

// Define routes
router.get("/", auth, getAllUsers);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

module.exports = router;
