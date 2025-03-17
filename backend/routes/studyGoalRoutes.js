const express = require("express");
const StudyGoal = require("../models/StudyGoal");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create a study goal
router.post("/add-goal", authMiddleware, async (req, res) => {
  const { title, description, targetDate } = req.body;

  try {
    const studyGoal = new StudyGoal({
      userId: req.user.id,
      title,
      description,
      targetDate,
    });

    await studyGoal.save();
    res.status(201).json(studyGoal);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all study goals for a user
router.get("/goals", authMiddleware, async (req, res) => {
  try {
    const studyGoals = await StudyGoal.find({ userId: req.user.id });
    res.status(200).json(studyGoals);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update study goal (mark as completed)
router.put("/goal/:id", authMiddleware, async (req, res) => {
  const { completed } = req.body;

  try {
    const studyGoal = await StudyGoal.findById(req.params.id);
    if (!studyGoal) {
      return res.status(404).json({ message: "Study goal not found" });
    }

    studyGoal.completed =
      completed !== undefined ? completed : studyGoal.completed;

    await studyGoal.save();
    res.status(200).json(studyGoal);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a study goal
router.delete("/goal/:id", authMiddleware, async (req, res) => {
  try {
    const studyGoal = await StudyGoal.findByIdAndDelete(req.params.id);
    if (!studyGoal) {
      return res.status(404).json({ message: "Study goal not found" });
    }
    res.status(200).json({ message: "Study goal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
