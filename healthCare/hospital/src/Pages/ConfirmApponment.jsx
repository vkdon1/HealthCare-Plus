"use client";

import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function AppointmentButton({ doctorId, doctorName }) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
    setFormSubmitted(false);
    setDate("");
  };

  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setFormSubmitted(true);

    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  return (
    <>
      

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
                  Your appointment with {doctorName} has been successfully
                  scheduled.
                </p>
              </div>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
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
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]} // Restrict past dates
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Preferred Time</Form.Label>
                <Form.Select required>
                  <option value="">Select Time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Reason for Visit</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Describe your symptoms or reason"
                />
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
    </>
  );
}
