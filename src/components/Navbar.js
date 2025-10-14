import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [showRentDropdown, setShowRentDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>BikeRental<span className="logo-highlight">BD</span></h2>
        </div>
        
        <ul className="navbar-menu">
          <li><a href="#home" className="nav-link active">Home</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#photos" className="nav-link">Rental Bike Photos</a></li>
          <li 
            className="nav-dropdown"
            onMouseEnter={() => setShowRentDropdown(true)}
            onMouseLeave={() => setShowRentDropdown(false)}
          >
            <a href="#rent" className="nav-link">
              Rent a Bike <span className="dropdown-arrow">▼</span>
            </a>
            {showRentDropdown && (
              <ul className="dropdown-menu">
                <li><a href="#sports-bikes">Sports Bikes</a></li>
                <li><a href="#cruiser-bikes">Cruiser Bikes</a></li>
                <li><a href="#scooters">Scooters</a></li>
                <li><a href="#electric-bikes">Electric Bikes</a></li>
              </ul>
            )}
          </li>
          <li><a href="#about" className="nav-link">About Us</a></li>
          <li><a href="#blog" className="nav-link">Blog</a></li>
          <li><a href="#contact" className="nav-link">Contact Us</a></li>
        </ul>

        <button className="call-now-btn">
          <span className="phone-icon">📞</span> Call Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
