import React from "react";
import partners from "../assets/coming soon2.jpg";

export default function IndustryPartners() {
  return (
    <div className="industry-partners-container">
      {/* <h1 className="industry-heading">Our Industry Partners</h1> */}
      <img
        src={partners}
        alt="Our Industry Partners"
        className="partnership-image"
      />
    </div>
  );
}
