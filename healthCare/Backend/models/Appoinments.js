const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    doctorEmail: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
    reason: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
