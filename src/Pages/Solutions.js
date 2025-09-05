import React from "react";
import SolutionsImage from "../assets/uc.jpg";

export default function Solutions() {
  return (
    <div className="solution-container">
      <img
        src={SolutionsImage}
        alt="Our solution"
        className="solution-image"
      />
    </div>
  );
}
