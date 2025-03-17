const mongoose = require("mongoose");

const GPASchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  gpa: { type: Number, required: true },
  semester: { type: String, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("GPA", GPASchema);
