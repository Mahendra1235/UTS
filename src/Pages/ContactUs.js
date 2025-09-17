import React from "react";
import contactImg from "../assets/Contact wm.jpeg";

export default function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Left Side - Image */}
        <div className="contact-image">
          <img src={contactImg} alt="Contact" />
        </div>

        {/* Right Side - Content */}
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>
            <strong>Address:</strong> #473, Swathi Towers, 3rd Floor,
            <br />
            JP Nagar, 7th Phase, Bangalore-560078
          </p>
          <p>
            <strong>Tel:</strong> 8048909199
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@univisiontechnocon.com">
              contact@univisiontechnocon.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
