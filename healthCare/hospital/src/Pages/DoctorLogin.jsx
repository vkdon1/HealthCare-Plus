import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DoctorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://healthcare-plus-backend.onrender.com/DoctorLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("Email", email);
        localStorage.setItem("token", data.token_id);
        setMessage(data.message || "Login successful!");
        navigate("/");
      } else {
        setMessage(data.error || "Error logging in.");
      }
    } catch (error) {
      setMessage("Error logging in. Please try again.");
    }
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card p-4 shadow-sm w-100" style={{ maxWidth: "400px" }}>
        <h1 className="text-center mb-4">Doctor Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        {message && <p className="mt-3 text-center text-dark">{message}</p>}
      </div>
    </div>
  );
};

export default DoctorLogin;
