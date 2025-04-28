import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Stethoscope,
  Clock,
  Calendar,
  UserPlus,
  Award,
  HeartPulse,
} from "lucide-react";

const Navigation = () => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const navigate = useNavigate();
  // Check authentication status
  useEffect(() => {
    if (localStorage.length > 0) {
      setIsAuthenticate(true);
    } // Converts to boolean for clarity
  }, []);
  console.log(isAuthenticate);
  // Logout Handler
  const handleLogout = () => {
    // localStorage.removeItem("token");
    localStorage.clear();

    setIsAuthenticate(false); // Instantly update UI
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Logo Section */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <Stethoscope size={40} className="text-primary mb-3" />
          <span className="fw-bold ms-2">HealthCare Plus</span>
        </Link>

        {/* Mobile Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>

            {isAuthenticate ? (
              <>
                <li className="nav-item">
                  <Link to="/patients" className="nav-link">
                    Patients
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/doctors" className="nav-link">
                    Doctors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/appointments" className="nav-link">
                    Appointments
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item"></li>
            )}
          </ul>

          {/* Authentication Buttons */}
          <div className="d-flex">
            {isAuthenticate ? (
              <button
                onClick={handleLogout}
                className="btn btn-outline-primary ms-3">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="btn btn-primary me-2">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-outline-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
