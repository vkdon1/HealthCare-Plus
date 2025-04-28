const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Doctors = require("../models/Doctors");

const SEC_CODE = "vallabh@123"; // Secret code for JWT
const COMMON_PASSWORD = "Doctor@123"; // Common password for doctors

// POST Route: Doctor Login
router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide email and password." });
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    // Check if doctor exists in the database
    const doctor = await Doctors.findOne({ email });
    if (!doctor) {
      return res
        .status(400)
        .json({ error: "Doctor not found. Please register first." });
    }

    // Check password
    if (password !== COMMON_PASSWORD) {
      return res.status(400).json({ error: "Incorrect password." });
    }

    // Create token payload
    const data = { doctor: { id: doctor.id } };
    const token = jwt.sign(data, SEC_CODE, { expiresIn: "1h" });

    res.json({
      message: "Login successful.",
      token_id: token,
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

module.exports = router;
