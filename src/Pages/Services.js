import React from "react";
import ServicesImage from "../assets/group structure.png"

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
