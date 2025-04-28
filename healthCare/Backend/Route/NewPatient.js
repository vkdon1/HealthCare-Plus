const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Patient = require("../models/Patient");
// const fetchuser = require("../middleware/fetchUsers");
// const Email = require("../nodemailer/SendEmail");
const sec_code = "vallabh@123";

// Registration Route
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, dob, phone } = req.body;
    const exists = await Patient.findOne({ email: email });
    if (exists) {
      return res.status(409).send("User with this email already exists");
    }

    const salt = await bcrypt.genSalt(5);
    const sec_pass = await bcrypt.hash(password, salt);

    const patient = await Patient.create({
      name,
      email,
      password: sec_pass,
      dob,
      phone,
    });

    const Data = {
      patient: {
        id: patient.id,
      },
    };
    const token = jwt.sign(Data, sec_code);

    res.json({
      message: "User created successfully. This is your token",
      token_id: token,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const paitent = await Patient.findOne({ email });
    if (!paitent) {
      return res.status(400).send("Login with correct credentials");
    }

    let passwordCompair = await bcrypt.compare(password, paitent.password);

    if (!passwordCompair) {
      return res.status(400).send("Login with correct credentials");
    }

    const Data = {
      paitent: {
        id: paitent.id,
      },
    };
    const token = jwt.sign(Data, sec_code);
    // Email(email);
    res.json({
      message: "Login successful. This is your token",
      token_id: token,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// // Get User by Token
// router.post("/getuser", fetchuser, async (req, res) => {
//   try {
//     console.log("User ID:", req.user.id); // Debug
//     const user = await User.findById(req.user.id).select("-password");
//     res.send(user);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

router.get("/allData", async (req, res) => {
  try {
    const data = await Patient.find();
    if (data) {
      return res.status(200).json({ info: data });
    }
    res.send("no paitent found");
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
