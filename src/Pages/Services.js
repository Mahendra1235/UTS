import React from "react";
import ServicesImage1 from "../assets/Logo2.png";
import ServicesImage2 from "../assets/Logo3.png";
import ServicesImage3 from "../assets/Logo4.png";

export default function Services() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        <img src={ServicesImage1} alt="Service 1" className="services-image" />
        <img src={ServicesImage2} alt="Service 2" className="services-image" />
        <img src={ServicesImage3} alt="Service 3" className="services-image" />
      </div>
    </div>
  );
}
