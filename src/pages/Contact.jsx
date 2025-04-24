import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Sending...");

    emailjs
      .sendForm(
        "service_k0z2vyx",
        "template_2x4a4i7",
        form.current,
        "KCC0wsIRtuMC9jxZF"
      )
      .then(
        () => {
          setIsSubmitting(false);
          setStatusMessage("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setIsSubmitting(false);
          setStatusMessage("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello 👋</p>

      <div className="contact-cards-container">
        <div className="contact-card">
          <strong>Email:</strong><br />
          <a href="mailto:rajeevkumarsingh9065@gmail.com">rajeevkumarsingh9065@gmail.com</a>
        </div>
        <div className="contact-card">
          <strong>Phone:</strong><br />
          <a href="tel:+918002140164">8002140164</a>
        </div>
        <div className="contact-card">
          <strong>Address:</strong><br />
          Aurangabad, Bihar
        </div>
      </div>

      {/* 3D Styled Send Message Form */}
      <div className="form-card">
        <h3>Send a Message</h3>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/rajeevk18/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.instagram.com/_iam_rajeev/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="https://github.com/rajeevkr18" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
