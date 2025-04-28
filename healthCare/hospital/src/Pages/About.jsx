import React from "react";
import { Heart, Users, Trophy, Stethoscope, Mail } from "lucide-react";

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-5 mb-5">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-4">About HealthCare Plus</h1>
          <p className="lead mb-4">
            Providing Exceptional Healthcare Services Since 1995
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mb-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Our Mission</h2>
            <p className="lead">
              To provide exceptional healthcare services and improve the
              well-being of our community through compassionate care,
              cutting-edge technology, and continuous innovation.
            </p>
            <p>
              We strive to be the leading healthcare provider in the region,
              setting the standard for medical excellence and patient care. Our
              commitment to quality, safety, and patient satisfaction drives
              everything we do.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Hospital Team"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-light py-5 mb-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Core Values</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card h-100 border-0 shadow-sm value-card">
                <div className="card-body text-center">
                  <Heart className="text-danger mb-3" size={40} />
                  <h4 className="card-title">Compassion</h4>
                  <p className="card-text">
                    We treat every patient with kindness, empathy, and respect.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 border-0 shadow-sm value-card">
                <div className="card-body text-center">
                  <Trophy className="text-warning mb-3" size={40} />
                  <h4 className="card-title">Excellence</h4>
                  <p className="card-text">
                    We strive for the highest standards in healthcare delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 border-0 shadow-sm value-card">
                <div className="card-body text-center">
                  <Users className="text-primary mb-3" size={40} />
                  <h4 className="card-title">Teamwork</h4>
                  <p className="card-text">
                    We collaborate to provide comprehensive care solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 border-0 shadow-sm value-card">
                <div className="card-body text-center">
                  <Stethoscope className="text-success mb-3" size={40} />
                  <h4 className="card-title">Innovation</h4>
                  <p className="card-text">
                    We embrace advanced medical technologies and practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mb-5">
        <h2 className="text-center fw-bold mb-5">Our Leadership Team</h2>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          <div className="text-center">
            <img
              src="https://cdn.pixabay.com/photo/2020/09/22/03/23/doctor-5591782_640.jpg"
              alt="Dr. Sarah Johnson"
              className="team-member-img mb-3 rounded-circle"
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
            <h4>Dr. Sarah Johnson</h4>
            <p className="text-muted">Chief Medical Officer</p>
          </div>
          <div className="text-center">
            <img
              src="https://cdn.pixabay.com/photo/2021/02/09/06/45/doctor-5997504_640.jpg"
              alt="Dr. Michael Chen"
              className="team-member-img mb-3 rounded-circle"
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
            <h4>Dr. Michael Chen</h4>
            <p className="text-muted">Hospital Director</p>
          </div>
          <div className="text-center">
            <img
              src="https://cdn.pixabay.com/photo/2021/02/15/16/01/woman-6018388_640.jpg"
              alt="Dr. Emily Martinez"
              className="team-member-img mb-3 rounded-circle"
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
            <h4>Dr. Emily Martinez</h4>
            <p className="text-muted">Head of Patient Care</p>
          </div>
        </div>
      </section>

      {/* Contact Email Section */}
    </div>
  );
}

export default About;
