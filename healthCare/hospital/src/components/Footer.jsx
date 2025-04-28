import React from "react";
import { Link } from "react-router-dom";
import { Stethoscope } from "lucide-react";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark text-light py-5 mt-5">
        <div className="container">
          <div className="row g-4">
            {/* About Section */}
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center mb-3">
                <Stethoscope size={40} className="text-primary mb-3" />
                <span className="fw-bold fs-4">HealthCare Plus</span>
              </div>
              <p className="text-secondary">
                Compassionate Care, Advanced Medicine, Trusted by You.
              </p>
              <div className="d-flex mt-4">
                <Link href="#" className="me-3 text-secondary hover:text-light">
                  <i className="bi bi-instagram fs-4"></i>
                </Link>
                <Link href="#" className="me-3 text-secondary hover:text-light">
                  <i className="bi bi-facebook fs-4"></i>
                </Link>
                <Link href="#" className="me-3 text-secondary hover:text-light">
                  <i className="bi bi-twitter-x fs-4"></i>
                </Link>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-lg-2 col-md-6">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    href="/"
                    className="text-decoration-none text-secondary hover:text-light">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/about"
                    className="text-decoration-none text-secondary hover:text-light">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/doctors"
                    className="text-decoration-none text-secondary hover:text-light">
                    Find Doctors
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/doctors"
                    className="text-decoration-none text-secondary hover:text-light">
                    Book Appoinment
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#pricing"
                    className="text-decoration-none text-secondary hover:text-light">
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="col-lg-2 col-md-6">
              <h5 className="fw-bold mb-3">Resources</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary hover:text-light">
                    Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/gallery"
                    className="text-decoration-none text-secondary hover:text-light">
                    Confirm Slot
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary hover:text-light">
                    Meditation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary hover:text-light">
                    FAQ
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="text-decoration-none text-secondary hover:text-light">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="col-lg-4 col-md-6">
              <h5 className="fw-bold mb-3">Newsletter</h5>
              <p className="text-secondary">
                Subscribe to our newsletter for tips, updates, and special
                offers.
              </p>
              <form className="mt-3">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control bg-secondary text-light border-0"
                    value={localStorage.getItem("Email")}
                  />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <hr className="my-4 border-secondary opacity-50" />

          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="small text-secondary mb-0">
                © 2025 HealthCare Plus. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="small text-secondary mb-0">
                <Link
                  href="#"
                  className="text-secondary text-decoration-none hover:text-light">
                  Terms of Service |
                </Link>{" "}
                <Link
                  href="#"
                  className="text-secondary text-decoration-none hover:text-light ms-2">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
