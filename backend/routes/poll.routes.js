// routes/poll.routes.js

const express = require("express");
const router = express.Router();
const {
  getPolls,
  createPoll,
  updatePoll,
  deletePoll,
} = require("../controllers/poll.controller");

// Define your routes here
router.get("/api/polls", getPolls);
router.post("/api/polls", createPoll);
router.put("/api/polls/:id", updatePoll);
router.delete("/api/polls/:id", deletePoll);

module.exports = router;
