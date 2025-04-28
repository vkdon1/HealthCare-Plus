import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://healthcare-plus-backend.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Login successful!");
        navigate("/");
        localStorage.setItem("token", data.token_id);
        localStorage.setItem("Email", loginData.email);
        console.log("Login successful:", data);
      } else {
        console.error("Login error:", data);
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      toast.warning("An error occurred. Please try again later.");
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div
        className="card shadow-lg"
        style={{ maxWidth: "500px", width: "100%" }}>
        <div className="card-header bg-primary text-white text-center py-3">
          <h3 className="mb-0">Patient Login</h3>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <label htmlFor="login-email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="login-email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="login-password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="login-password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                placeholder="Enter your password"
              />
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary btn-lg">
                Login
              </button>
            </div>
            <p className="d-flex justify-content-center align-items-center mt-2">
              Login as a <Link to="/doctorLogin"> Doctor</Link> ?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
