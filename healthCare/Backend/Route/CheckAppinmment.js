const express = require("express");
const router = express.Router();
const Appoinments = require("../models/Appoinments");

router.post("/", async (req, res) => {
  try {
    const { email } = req.body; // Extract email from body

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const data = await Appoinments.find({ doctorEmail: email });

    if (!data || data.length === 0) {
      return res.status(404).json({ error: "No data found for this email" });
    }

    res.status(200).json({ message: "Data fetched successfully", info: data });
  } catch (e) {
    console.error(e); // Log the error
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
