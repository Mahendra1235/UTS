import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo2.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // close menu when a nav item is clicked
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="Company Logo" className="logo" />
        </Link>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/about" onClick={handleLinkClick}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/solutions" onClick={handleLinkClick}>Solutions</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" onClick={handleLinkClick}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/partners" onClick={handleLinkClick}>Industry Partners</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
