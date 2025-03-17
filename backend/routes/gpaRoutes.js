const express = require("express");
const GPA = require("../models/GPA");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add or Update GPA for a specific semester
router.post("/add-gpa", authMiddleware, async (req, res) => {
  const { gpa, semester, year } = req.body;

  // Validate GPA
  if (gpa < 0 || gpa > 4) {
    return res.status(400).json({ message: "GPA must be between 0 and 4" });
  }

  try {
    let gpaRecord = await GPA.findOne({ userId: req.user.id, semester, year });

    if (!gpaRecord) {
      gpaRecord = new GPA({
        userId: req.user.id,
        gpa,
        semester,
        year,
      });
    } else {
      gpaRecord.gpa = gpa;
      gpaRecord.semester = semester;
      gpaRecord.year = year;
    }

    await gpaRecord.save();

    res.status(200).json(gpaRecord);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// Get GPA records for a student
router.get("/gpa-records", authMiddleware, async (req, res) => {
  try {
    const gpas = await GPA.find({ userId: req.user.id });
    res.status(200).json(gpas);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
