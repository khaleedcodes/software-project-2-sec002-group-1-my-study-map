const mongoose = require("mongoose");

const TimetableSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  events: [
    {
      title: String,
      date: String,
      time: String,
      description: String,
    },
  ],
});

module.exports = mongoose.model("Timetable", TimetableSchema);
