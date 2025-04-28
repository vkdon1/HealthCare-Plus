import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import Doctors from "./Pages/Doctors";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import About from "./Pages/About";
import BookAppoinment from "./Pages/BookAppoinment";
import ConfirmAppoinment from "./Pages/ConfirmApponment";
import DoctorLogin from "./Pages/DoctorLogin";
import CheckAppointments from "./Pages/CheckAppoinment";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<BookAppoinment />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctorLogin" element={<DoctorLogin />} />
          <Route path="/appointments" element={<CheckAppointments />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
