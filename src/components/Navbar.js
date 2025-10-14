import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showRentDropdown, setShowRentDropdown] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h2>BikeRental<span className="logo-highlight">BD</span></h2>
          </Link>
        </div>
        
        <ul className="navbar-menu">
          <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#photos" className="nav-link">Rental Bike Photos</a></li>
          <li className="nav-dropdown">
            <a 
              href="#rent" 
              className="nav-link"
              onMouseEnter={() => setShowRentDropdown(true)}
              onFocus={() => setShowRentDropdown(true)}
            >
              Rent a Bike <span className="dropdown-arrow">▼</span>
            </a>
            {showRentDropdown && (
              <ul 
                className="dropdown-menu"
                onMouseEnter={() => setShowRentDropdown(true)}
                onMouseLeave={() => setShowRentDropdown(false)}
              >
                <li><Link to="/sports-bikes" onClick={() => setShowRentDropdown(false)}>Sports Bikes</Link></li>
                <li><a href="#cruiser-bikes">Cruiser Bikes</a></li>
                <li><a href="#scooters">Scooters</a></li>
                <li><a href="#electric-bikes">Electric Bikes</a></li>
              </ul>
            )}
          </li>
          <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link></li>
          <li>
            <button className="login-register-btn">
              <span className="user-icon">👤</span> Login/Register
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
