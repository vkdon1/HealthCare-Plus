import React, { useState, useEffect } from "react";
import { Brain, Calendar, Mail, MapPin, Phone, User } from "lucide-react";
import { useParams } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

export default function BookAppointment() {
  const [doctor, setDoctor] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    async function fetchDoctorData() {
      try {
        const response = await fetch(
          `https://5x5syj-3001.csb.app/Doctor/${id}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch doctor data: ${response.status}`);
        }
        const data = await response.json();
        setDoctor(data.info);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        setError(error.message);
      }
    }
    fetchDoctorData();
  }, [id]);

  if (error) return <p className="text-danger text-center">Error: {error}</p>;
  if (!doctor)
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  const handleClose = () => {
    setShow(false);
    setFormSubmitted(false);
    setDate("");
  };

  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      doctorEmail: doctor.email, // Corrected field
      firstName: e.target[1].value,
      lastName: e.target[2].value,
      email: e.target[3].value,
      date,
      reason: e.target[4].value,
    };

    try {
      setLoading(true);
      const response = await fetch("https://5x5syj-3001.csb.app/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to book appointment.");
      }

      const result = await response.json();
      console.log("Appointment booked successfully:", result);

      setFormSubmitted(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error("Error booking appointment:", error.message);
      alert("Failed to book appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        backgroundImage:
          "URL('https://cdn.pixabay.com/photo/2015/02/26/15/40/doctor-650534_640.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "500px",
      }}>
      <div
        className="card mx-auto shadow-lg mt-5"
        style={{ maxWidth: "400px" }}>
        <div className="card-header bg-primary text-white">
          <h5 className="card-title d-flex align-items-center gap-3">
            <User size={20} /> {doctor.name}
          </h5>
          <h6 className="mb-0 d-flex align-items-center gap-2">
            <Brain size={18} /> {doctor.specialization}
          </h6>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex align-items-center gap-2">
              <Calendar size={18} className="text-primary" />
              <strong>Experience:</strong> {doctor.experience} years
            </li>
            <li className="list-group-item d-flex align-items-center gap-2">
              <User size={18} className="text-primary" />
              <strong>Education:</strong> {doctor.education}
            </li>
            <li className="list-group-item d-flex align-items-center gap-2">
              <Phone size={18} className="text-primary" />
              <strong>Contact:</strong> {doctor.contactNumber}
            </li>
            <li className="list-group-item d-flex align-items-center gap-2">
              <Mail size={18} className="text-primary" />
              <strong>Email:</strong> {doctor.email}
            </li>
            <li className="list-group-item d-flex align-items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <strong>Clinic Address:</strong> {doctor.clinicAddress}
            </li>
          </ul>
          <button className="w-100 btn btn-primary py-2" onClick={handleShow}>
            Book Appointment
          </button>
        </div>
      </div>
      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Book an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formSubmitted ? (
            <div className="text-center">
              <div className="alert alert-success">
                <h5>Appointment Booked!</h5>
                <p>
                  Your appointment with {doctor.name} has been successfully
                  scheduled on {date}.
                </p>
              </div>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Doctor's Name</Form.Label>
                <Form.Control type="text" required value={doctor.email} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Reason for Visit</Form.Label>
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
              <div className="d-flex justify-content-end gap-2">
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={loading || !date}>
                  {loading ? "Booking..." : "Book Appointment"}
                </Button>
              </div>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
