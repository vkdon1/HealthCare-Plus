import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      const response = await fetch(
        "https://healthcare-plus-backend.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Paitent Register successfully");
        setFormData("");
        const data = await response.json();
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }

    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="signup-form"
      style={{
        backgroundImage:
          "URL('https://cdn.pixabay.com/photo/2017/06/18/19/35/x-ray-of-the-jaw-2416944_960_720.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div
          className="card shadow-lg"
          style={{ maxWidth: "500px", width: "100%" }}>
          <div className="card-header bg-primary text-white text-center py-3">
            <h3 className="mb-0">Patient Registration</h3>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="dob" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
