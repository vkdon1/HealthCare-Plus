import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Users, UserRound, Calendar, Activity } from "lucide-react";

const Dashboard = () => {
  return (
    <Container className="py-4">
      <h2 className="mb-4">Dashboard</h2>
      <Row>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body className="d-flex align-items-center">
              <Users className="text-primary me-3" size={24} />
              <div>
                <Card.Title>Total Patients</Card.Title>
                <h3>150</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body className="d-flex align-items-center">
              <UserRound className="text-success me-3" size={24} />
              <div>
                <Card.Title>Doctors</Card.Title>
                <h3>25</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body className="d-flex align-items-center">
              <Calendar className="text-warning me-3" size={24} />
              <div>
                <Card.Title>Appointments</Card.Title>
                <h3>45</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Body className="d-flex align-items-center">
              <Activity className="text-danger me-3" size={24} />
              <div>
                <Card.Title>Active Cases</Card.Title>
                <h3>30</h3>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
