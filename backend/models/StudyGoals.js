const mongoose = require("mongoose");

const StudyGoalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  targetDate: { type: Date, required: true },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("StudyGoal", StudyGoalSchema);
