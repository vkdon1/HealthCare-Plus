const express = require("express");
const router = express.Router();
const Appoinment = require("../models/Appoinments");
router.delete("/id", async (req, res) => {
  try {
    const id = req.params.id;
    await Appoinment.deleteOne({ _id: id });
    res.send("Appoinment cancel");
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
