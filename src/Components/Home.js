import React from "react";
import cloudIcon from "../assets/cloud.png";
import automotiveIcon from "../assets/automotive.jpeg";
import aiIcon from "../assets/ai.jpg";
import ContactUs from "../Pages/ContactUs";
import Partners from "../Pages/Partners";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Driving the Future with Cloud, Automotive & AI</h1>
        <p>
          We are shaping the future of mobility and digital innovation by combining cutting-edge cloud technologies,
          advanced automotive solutions, and artificial intelligence. Our goal is to empower industries with intelligent,
          connected, and scalable systems that redefine performance and user experience.
        </p>
      </section>

      <section className="features-section">
        <div className="feature">
          <img src={cloudIcon} alt="Cloud Solutions" className="feature-icon" />
          <h2>Cloud Solutions</h2>
          <p>
            Architect, deploy, and manage robust cloud infrastructure tailored for high-performance applications.
            We specialize in cloud-native development, data integration, and IoT platforms to enable scalable,
            connected ecosystems — from smart factories to intelligent vehicles.
          </p>
        </div>

        <div className="feature">
          <img src={automotiveIcon} alt="Automotive Technologies" className="feature-icon" />
          <h2>Automotive Technologies</h2>
          <p>
            Accelerate innovation in the automotive sector with our end-to-end expertise in embedded systems,
            connected car solutions, and AUTOSAR-compliant platforms. From ECU development to cloud-connected infotainment,
            we power the next generation of smart, safe, and efficient vehicles.
          </p>
        </div>

        <div className="feature">
          <img src={aiIcon} alt="Artificial Intelligence" className="feature-icon" />
          <h2>Artificial Intelligence</h2>
          <p>
            Leverage AI and machine learning to unlock predictive capabilities, enhance autonomous driving,
            and improve decision-making in real time. Our AI solutions integrate with sensor data, telematics,
            and cloud platforms to create intelligent automotive and industrial systems.
          </p>
        </div>
      </section>
      {/* <IndustryPartners/> */}
      <Partners/>
      <ContactUs/>

    </div>
  );
}
