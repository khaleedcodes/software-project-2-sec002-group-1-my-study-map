const express = require("express");
const Reminder = require("../models/Reminder");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add a reminder for a student
router.post("/add-reminder", authMiddleware, async (req, res) => {
  const { title, date, time, description } = req.body;

  try {
    const reminder = new Reminder({
      userId: req.user.id,
      title,
      date,
      time,
      description,
    });

    await reminder.save();
    res.status(201).json(reminder);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all reminders for a student
router.get("/reminders", authMiddleware, async (req, res) => {
  try {
    const reminders = await Reminder.find({ userId: req.user.id });
    res.status(200).json(reminders);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
