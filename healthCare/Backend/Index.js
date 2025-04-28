const express = require("express");
const mongoose = require("mongoose");
const Database = require("./Database");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(express.json());
Database();
app.use(cors());

app.use("/auth", require("./Route/NewPatient"));
app.use("/AllDoctor", require("./Route/DoctorsDetail"));
app.use("/Doctor", require("./Route/GetDoctorById"));
app.use("/", require("./Route/BookAppoinment"));
app.use("/DoctorLogin", require("./Route/DoctorLogin"));
app.use("/CheckAppoinment", require("./Route/CheckAppinmment"));
app.use("/CancelAppoinment", require("./Route/DeleteAppoinment"));

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "vallabhdongre2002@gmail.com",
    pass: "yyqf abcy uivo itog", // Make sure to use an App Password instead of your Gmail password
  },
});

app.post("/send-email", async (req, res) => {
  const { email, name, appointmentDate, type } = req.body;

  let subject = "";
  let message = "";

  if (type === "confirm") {
    subject = "Appointment Confirmation From HealthCare Plus";
    message = `Hello ${name},\n\nYour appointment is confirmed for ${appointmentDate}.\n\nBest Regards,\nHealthCare Plus`;
  } else if (type === "cancel") {
    subject = "Appointment Confirmation From HealthCare Plus";
    message = `Hello ${name},\n\nWe regret to inform you that your appointment scheduled for ${appointmentDate} has been canceled Due to some Prior Appointment please book another appointment slot \n\nBest Regards,\nHealthCare Plus`;
  }

  // Define mailOptions before sending the email
  const mailOptions = {
    from: "HealthCare plus vallabhdongre2002@gmail.com",
    to: email,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
