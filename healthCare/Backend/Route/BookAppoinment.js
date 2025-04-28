const express = require("express");
const router = express.Router();
const Appoinments = require("../models/Appoinments");

router.post("/appointments", async (req, res) => {
  try {
    const { doctorEmail, firstName, lastName, email, date, reason } = req.body;

    if (!doctorEmail || !firstName || !lastName || !email || !date || !reason) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const data = await Appoinments.create({
      doctorEmail,
      firstName,
      lastName,
      email,
      date,
      reason,
    });

    return res
      .status(201)
      .json({ message: "Appointment booked successfully", data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
