const Poll = require("../models/poll.model");

const getPolls = async (req, res) => {
  try {
    const polls = await Poll.findAll();
    res.status(200).json(polls);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch polls" });
  }
};

const createPoll = async (req, res) => {
  const { title, description, targetRole } = req.body;
  try {
    const newPoll = await Poll.create({ title, description, targetRole });
    res.status(201).json(newPoll);
  } catch (error) {
    res.status(400).json({ error: "Failed to create poll" });
  }
};

module.exports = { getPolls, createPoll };
