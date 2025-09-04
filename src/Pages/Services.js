import React from "react";
import ServicesImage from "../assets/uc.jpg"

export default function Services() {
  return (
    <div>
      <img
              src={ServicesImage}
              alt="Our services"
              className="services-image"
            />
    </div>
  );
}
