import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <div className="position-relative" style={{ height: "500px" }}>
        <div
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2022/06/14/12/48/jamila-polatova-7261803_640.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            backgroundAttachment: "fixed",
          }}>
          <div
            className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
            style={{ opacity: 0.5 }}></div>
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="text-center px-4">
              <h1 className="display-4 fw-bold text-white mb-4">Contact Us</h1>
              <p
                className="fs-4 text-white mx-auto"
                style={{ maxWidth: "700px" }}>
                Fitness is not about being better than someone else. It's about
                being better than you used to be.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-5 bg-light-subtle">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-success bg-opacity-10 p-3 d-inline-flex mb-3">
                    <i className="bi bi-geo-alt-fill fs-3 text-success"></i>
                  </div>
                  <h3 className="fs-4 fw-semibold mb-3">Visit Us</h3>
                  <p className="text-secondary mb-1">123 Serenity Lane</p>
                  <p className="text-secondary mb-1">Harmony District</p>
                  <p className="text-secondary">Peaceful City, PC 12345</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-success bg-opacity-10 p-3 d-inline-flex mb-3">
                    <i className="bi bi-envelope-fill fs-3 text-success"></i>
                  </div>
                  <h3 className="fs-4 fw-semibold mb-3">Email Us</h3>
                  <p className="text-secondary mb-1">info@healthcare.com</p>

                  <p className="text-secondary">support@healthcare.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-success bg-opacity-10 p-3 d-inline-flex mb-3">
                    <i className="bi bi-telephone-fill fs-3 text-success"></i>
                  </div>
                  <h3 className="fs-4 fw-semibold mb-3">Call Us</h3>
                  <p className="text-secondary mb-1">Main: (555) 123-4567</p>
                  <p className="text-secondary mb-1">Classes: (555) 123-4568</p>
                  <p className="text-secondary">Support: (555) 123-4569</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="row g-5">
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold text-dark mb-4">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
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
                    />
                  </div>
                  <div className="col-md-6">
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
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <select
                      className="form-select"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required>
                      <option value="" disabled>
                        Choose a subject
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Class Information">
                        Class Information
                      </option>
                      <option value="Membership">Membership</option>
                      <option value="Private Sessions">Private Sessions</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-success px-4 py-2">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold text-dark mb-4">Find Us</h2>
              <div className="ratio ratio-4x3 rounded shadow overflow-hidden">
                {/* Embedded map - in a real application, replace with actual Google Maps embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119270.47538538731!2d77.60584514627162!3d20.90417689779644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a67774bc15%3A0x3c7b3f78ca4f9635!2sAmravati%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sbg!4v1740755628339!5m2!1sen!2sbg"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ZenYoga Location"></iframe>
              </div>
              <div className="mt-4">
                <h3 className="fs-4 fw-semibold mb-3">Hospital Hours</h3>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="fw-medium">Monday - Friday</td>
                        <td>6:00 AM - 9:00 PM</td>
                      </tr>
                      <tr>
                        <td className="fw-medium">Saturday</td>
                        <td>8:00 AM - 6:00 PM</td>
                      </tr>
                      <tr>
                        <td className="fw-medium">Sunday</td>
                        <td>9:00 AM - 4:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <h2 className="display-6 fw-bold text-center text-dark mb-5">
            Frequently Asked Questions
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="faqAccordion">
                {[
                  {
                    id: "faq1",
                    question: "How can I book an appointment?",
                    answer:
                      "You can book an appointment online through our website, via our mobile app, or by calling our reception desk directly.",
                  },
                  {
                    id: "faq2",
                    question: "What should I bring for my first visit?",
                    answer:
                      "Please bring your ID, medical records, and insurance details. If you are taking any medications, kindly carry a list of those as well.",
                  },
                  {
                    id: "faq3",
                    question: "Do you provide emergency services?",
                    answer:
                      "Yes, our emergency services are available 24/7. In case of an emergency, visit our emergency department immediately or call our helpline.",
                  },
                  {
                    id: "faq4",
                    question: "What insurance plans do you accept?",
                    answer:
                      "We accept most major insurance plans. Please contact our billing department for more details about coverage and claims.",
                  },
                  {
                    id: "faq5",
                    question: "Are there any discounts for senior citizens?",
                    answer:
                      "Yes, we offer special discounts for senior citizens and also have exclusive wellness programs tailored for them.",
                  },
                ].map((faq, index) => (
                  <div
                    className="accordion-item border-0 mb-3 shadow-sm"
                    key={index}>
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          index !== 0 ? "collapsed" : ""
                        } bg-white`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faq.id}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={faq.id}>
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={faq.id}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        <p className="text-secondary mb-0">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-6 fw-bold text-dark mb-4">
                Stay Connected
              </h2>
              <p className="text-secondary mb-5">
                Subscribe to our newsletter to receive updates on new classes,
                workshops, and special events.
              </p>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <form className="d-flex">
                    <input
                      type="email"
                      className="form-control me-2"
                      placeholder="Your email address"
                      required
                    />
                    <button type="submit" className="btn btn-success px-4">
                      Subscribe
                    </button>
                  </form>
                  <div className="mt-4">
                    <div className="d-flex justify-content-center gap-3">
                      <a href="#" className="text-decoration-none">
                        <div
                          className="rounded-circle bg-dark p-2 d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}>
                          <i className="bi bi-facebook text-white"></i>
                        </div>
                      </a>
                      <a href="#" className="text-decoration-none">
                        <div
                          className="rounded-circle bg-dark p-2 d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}>
                          <i className="bi bi-instagram text-white"></i>
                        </div>
                      </a>
                      <a href="#" className="text-decoration-none">
                        <div
                          className="rounded-circle bg-dark p-2 d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}>
                          <i className="bi bi-twitter-x text-white"></i>
                        </div>
                      </a>
                      <a href="#" className="text-decoration-none">
                        <div
                          className="rounded-circle bg-dark p-2 d-flex align-items-center justify-content-center"
                          style={{ width: "40px", height: "40px" }}>
                          <i className="bi bi-youtube text-white"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
