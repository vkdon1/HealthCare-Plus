const mongoose = require("mongoose");
const express = require("express");
const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Patient", patientSchema);
