const express = require("express");
const Event = require("../models/Event");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create a new event
router.post("/add-event", authMiddleware, async (req, res) => {
  const { title, date, description } = req.body;

  try {
    const event = new Event({
      userId: req.user.id,
      title,
      date,
      description,
    });

    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all events for a user
router.get("/events", authMiddleware, async (req, res) => {
  try {
    const events = await Event.find({ userId: req.user.id });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update event details
router.put("/event/:id", authMiddleware, async (req, res) => {
  const { title, date, description } = req.body;

  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    event.title = title || event.title;
    event.date = date || event.date;
    event.description = description || event.description;

    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete event
router.delete("/event/:id", authMiddleware, async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
