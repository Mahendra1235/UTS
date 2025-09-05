import React from "react";
import uspImage from "../assets/USP.png";
import Leadership from "./Leadership";
import ContactUs from "./ContactUs";

// Import multiple images
import extraImage1 from "../assets/Logo2.png";
import extraImage2 from "../assets/Logo3.png";
import extraImage3 from "../assets/Logo4.png";

const extraImages = [
  { src: extraImage1, alt: "Logo 1" },
  { src: extraImage2, alt: "Logo 2" },
  { src: extraImage3, alt: "Logo 3" },
];

export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>

      {/* USP Section */}
      <section className="usp-section">
        <div className="usp-content">
          <h2>USP</h2>
          <p className="usp-text">
            Our logo signifies that we cover the entire value chain of developing hardware,
            connecting it to the cloud, and adding intelligence to the system. From customer
            specifications to cloud-connected products — we deliver it all.
          </p>
          <ul className="usp-highlights">
            <li>Silicon to Cloud</li>
            <li>End-to-End Services</li>
            <li>Solutions and Frameworks</li>
          </ul>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="vision-content">
          <h2>Vision</h2>
          <p className="vision-text">
            To build a Technology Services Company which does not focus on pure services,
            but on services based on IP, solutions, and frameworks...
          </p>
          <p className="vision-text">
            We aim to offer end-to-end solutions so that Fortune 500 companies can rely on us
            as a one-stop shop...
          </p>
        </div>
        <img src={uspImage} alt="Company Vision" className="vision-image" />
      </section>

      {/* Leadership */}
      <Leadership />

      {/* Horizontal Scrolling Images */}
      <h3>Group structure [How UTS was formed]</h3>
      <div className="about-images-marquee">
        <div className="about-images-track">
          {extraImages.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} className="about-extra-image" />
          ))}
          {/* Duplicate images for seamless scroll */}
          {extraImages.map((img, i) => (
            <img key={i + extraImages.length} src={img.src} alt={img.alt} className="about-extra-image" />
          ))}
        </div>
      </div>

      {/* Contact */}
      <ContactUs />
    </div>
  );
}
