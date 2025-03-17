const express = require("express");
const Timetable = require("../models/Timetable");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add-event", authMiddleware, async (req, res) => {
  const { title, date, time, description } = req.body;
  try {
    let timetable = await Timetable.findOne({ userId: req.user.id });

    if (!timetable) {
      timetable = new Timetable({ userId: req.user.id, events: [] });
    }

    timetable.events.push({ title, date, time, description });
    await timetable.save();

    res.status(201).json(timetable);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
