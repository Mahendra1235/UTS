import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"; // Make sure this path is correct

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="Company Logo" className="logo" />
        </Link>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/solutions">Solutions</Link>
            </li>
            <li className="nav-item">
              <Link to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/partners">Industry Partners</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
