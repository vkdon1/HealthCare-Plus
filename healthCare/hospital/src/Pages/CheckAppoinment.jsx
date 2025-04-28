import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./CheckAppoinment.css"; // Import CSS for styling

const CheckAppointments = () => {
  const [email, setEmail] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("Email");
    if (storedEmail) {
      setEmail(storedEmail);
      fetchAppointments(storedEmail);
    }
  }, []);

  const fetchAppointments = async (doctorEmail) => {
    setMessage("");
    setAppointments([]);

    try {
      const response = await fetch(
        "https://5x5syj-3001.csb.app/CheckAppoinment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: doctorEmail }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setAppointments(data.info);
        setMessage("Appointments fetched successfully!");
      } else {
        setMessage(data.error || "No appointments found.");
      }
    } catch (error) {
      setMessage("Error fetching appointments. Please try again.");
    }
  };

  const handleFetchAppointments = async (e) => {
    e.preventDefault();
    localStorage.setItem("doctorEmail", email);
    fetchAppointments(email);
  };

  // Function to send confirmation email
  const handleConfirmAppointment = async (appointment) => {
    try {
      const response = await fetch("https://5x5syj-3001.csb.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: appointment.email,
          name: `${appointment.firstName} ${appointment.lastName}`,
          appointmentDate: appointment.reason,
          type: "confirm",
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Appointment confirmed and email sent!");
      } else {
        toast.error("Error: " + data.message);
      }
    } catch (error) {
      toast.error("Failed to send email.");
    }
  };

  // Function to send cancellation email
  const handleCancelAppointment = async (appointment) => {
    try {
      const response = await fetch("https://5x5syj-3001.csb.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: appointment.email,
          name: `${appointment.firstName} ${appointment.lastName}`,
          appointmentDate: appointment.reason,
          type: "cancel",
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.warning("Appointment canceled and email sent!");
      } else {
        toast.error("Error: " + data.message);
      }
    } catch (error) {
      toast.error("Failed to send email.");
    }
  };

  return (
    <div className="background">
      <div className="container py-5 d-flex flex-column align-items-center">
        <div className="appointment-box card p-4 shadow-sm text-center">
          <h1 className="text-center mb-4">Check Appointments</h1>
          <form onSubmit={handleFetchAppointments}>
            <div className="mb-3">
              <label className="form-label">Doctor Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Fetch Appointments
            </button>
          </form>
          {message && <p className="mt-3 text-info">{message}</p>}
        </div>

        {appointments.length > 0 && (
          <div className="appointment-cards row g-3 mt-4">
            {appointments.map((appointment, index) => (
              <div key={index} className="col-md-4">
                <div className="card appointment-card shadow-lg border-0">
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      {appointment.firstName} {appointment.lastName}
                    </h5>
                    <p className="card-text">
                      Appointment Date: {appointment.reason}
                    </p>
                    <p className="card-text">
                      Patient Email: {appointment.email}
                    </p>
                    <button
                      className="btn btn-success action-btn"
                      onClick={() => handleConfirmAppointment(appointment)}>
                      Confirm Appointment
                    </button>

                    <button
                      className="btn btn-danger action-btn ms-2"
                      onClick={() => handleCancelAppointment(appointment)}>
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckAppointments;
