const express = require("express");
const router = express.Router();
const Doctors = require("../models/Doctors");
router.get("/", async (req, res) => {
  try {
    const data = await Doctors.find();
    if (!data) {
      return res.status(400).send("No Data Found");
    }
    res.status(200).json({ message: "data fetched !", info: data });
  } catch (e) {
    consile.log(e);
  }
});

module.exports = router;
