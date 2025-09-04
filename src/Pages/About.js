import React from "react";
import uspImage from "../assets/USP.png";
import Leadership from "./Leadership";
import extraImage from "../assets/group structure.png"


export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>

    <section className="usp-section">
  <div className="usp-content">
    <h2>USP</h2>
    <p className="usp-text">
      Our logo signifies that we cover the entire value chain of developing hardware, connecting it to the cloud, and adding intelligence to the system. From customer specifications to cloud-connected products — we deliver it all.
    </p>
    <ul className="usp-highlights">
      <li>Silicon to Cloud</li>
      <li>End-to-End Services</li>
      <li>Solutions and Frameworks</li>
    </ul>
  </div>
</section>
      <section className="vision-section">
  <div className="vision-content">
    <h2>Vision</h2>
    <p className="vision-text">
      To build a Technology Services Company which does not focus on pure services,
      but on services based on IP, solutions, and frameworks. Our goal is to create
      a sustainable model that does not rely on just-in-time hiring but instead focuses
      on hiring and training low-cost resources to gain high margins.
    </p>
    <p className="vision-text">
      We aim to offer end-to-end solutions so that Fortune 500 companies can rely on us
      as a one-stop shop for all their technology needs. Our focus is on being a value-added
      partner rather than just another vendor.
    </p>
  </div>
  <img
    src={uspImage}
    alt="Company Vision"
    className="vision-image"
  />
</section>
      <Leadership/>
      <h3>Group structure [How UTS was formed]</h3>
<img
  src={extraImage}
  alt="Extra visual about the company"
  className="about-extra-image"
/>

    </div>
  );
}
