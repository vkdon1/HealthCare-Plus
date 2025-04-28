import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  Stethoscope,
  Clock,
  Calendar,
  UserPlus,
  Award,
  HeartPulse,
} from "lucide-react";
import { jwtDecode } from "jwt-decode";

const Landing = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    const { id, email } = jwtDecode(token);
    console.log("User ID:", id);
    console.log("User Email:", email);
  }
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="display-4 fw-bold">Welcome to HealthCare Plus</h1>
              <p className="lead mb-4">
                Advanced Hospital Management System for modern healthcare
                facilities
              </p>
              <Button variant="light" size="lg" className="me-3">
                Get Started
              </Button>
              <Button variant="outline-light" size="lg">
                Learn More
              </Button>
            </Col>
            <Col lg={6}>
              <img
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80"
                alt="Healthcare Professional"
                className="img-fluid rounded-3 shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5">Our Features</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <Stethoscope size={40} className="text-primary mb-3" />
                <Card.Title>Patient Management</Card.Title>
                <Card.Text>
                  Efficiently manage patient records, medical history, and
                  treatment plans.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <Calendar size={40} className="text-primary mb-3" />
                <Card.Title>Appointment Scheduling</Card.Title>
                <Card.Text>
                  Easy and flexible appointment booking system for patients and
                  doctors.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <HeartPulse size={40} className="text-primary mb-3" />
                <Card.Title>Medical Records</Card.Title>
                <Card.Text>
                  Secure and organized storage of all medical records and test
                  results.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Statistics Section */}
      <div className="bg-light py-5">
        <Container>
          <Row className="text-center">
            <Col md={3}>
              <h2 className="fw-bold text-primary">1000+</h2>
              <p>Patients Served</p>
            </Col>
            <Col md={3}>
              <h2 className="fw-bold text-primary">50+</h2>
              <p>Expert Doctors</p>
            </Col>
            <Col md={3}>
              <h2 className="fw-bold text-primary">24/7</h2>
              <p>Available Support</p>
            </Col>
            <Col md={3}>
              <h2 className="fw-bold text-primary">98%</h2>
              <p>Patient Satisfaction</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Why Choose Us Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5">Why Choose Us</h2>
        <Row className="g-4">
          <Col md={6} lg={3}>
            <div className="text-center">
              <Clock size={32} className="text-primary mb-3" />
              <h5>24/7 Service</h5>
              <p>Round-the-clock medical assistance</p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="text-center">
              <UserPlus size={32} className="text-primary mb-3" />
              <h5>Easy Registration</h5>
              <p>Simple and quick patient registration</p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="text-center">
              <Award size={32} className="text-primary mb-3" />
              <h5>Qualified Doctors</h5>
              <p>Expert healthcare professionals</p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="text-center">
              <HeartPulse size={32} className="text-primary mb-3" />
              <h5>Emergency Care</h5>
              <p>Immediate medical attention</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* CTA Section */}
      <div className="bg-primary text-white py-5">
        <Container className="text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">
            Join us today and experience the future of healthcare management
          </p>
          <Button variant="light" size="lg">
            Contact Us
          </Button>
        </Container>
      </div>
    </>
  );
};

export default Landing;
