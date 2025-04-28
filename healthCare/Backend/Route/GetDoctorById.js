const express = require("express");
const router = express.Router();
const Doctors = require("../models/Doctors");
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Doctors.findOne({ _id: id });
    if (!data) {
      return res.status(400).send("data not found");
    }
    return res.json({ info: data });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
