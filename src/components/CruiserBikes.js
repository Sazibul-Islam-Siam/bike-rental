import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CruiserBikes.css';

function CruiserBikes() {
  const navigate = useNavigate();
  
  const cruiserBikes = [
    {
      id: 1,
      name: "Royal Enfield Classic 350",
      brand: "Royal Enfield",
      startingPrice: 3500,
      image: "🏍️",
      rating: 4.9,
      reviews: 203,
      status: "available",
      versions: [
        {
          id: "classic-standard",
          name: "Standard",
          price: 3500,
          features: ["349cc Engine", "5-speed Gearbox", "Dual Channel ABS", "Classic Styling"],
          specs: {
            engine: "349cc",
            power: "20.2 HP",
            torque: "27 Nm",
            weight: "192 kg",
            topSpeed: "120 km/h"
          },
          description: "Timeless classic design with modern reliability. Perfect for long rides and city cruising.",
          image: "🏍️"
        },
        {
          id: "classic-chrome",
          name: "Chrome Edition",
          price: 4000,
          features: ["349cc Engine", "5-speed Gearbox", "Dual ABS", "Chrome Parts", "Premium Seat"],
          specs: {
            engine: "349cc",
            power: "20.2 HP",
            torque: "27 Nm",
            weight: "195 kg",
            topSpeed: "120 km/h"
          },
          description: "Premium chrome finish with enhanced comfort features for discerning riders.",
          image: "🏍️"
        }
      ]
    },
    {
      id: 2,
      name: "Harley-Davidson Street 750",
      brand: "Harley-Davidson",
      startingPrice: 6000,
      image: "🏍️",
      rating: 4.8,
      reviews: 128,
      status: "available",
      versions: [
        {
          id: "street750-standard",
          name: "Standard",
          price: 6000,
          features: ["749cc V-Twin", "6-speed Gearbox", "ABS", "Liquid Cooled"],
          specs: {
            engine: "749cc",
            power: "53 HP",
            torque: "59 Nm",
            weight: "233 kg",
            topSpeed: "165 km/h"
          },
          description: "Authentic Harley-Davidson experience with powerful V-twin engine and iconic styling.",
          image: "🏍️"
        }
      ]
    },
    {
      id: 3,
      name: "Bajaj Avenger Cruise 220",
      brand: "Bajaj",
      startingPrice: 2800,
      image: "🏍️",
      rating: 4.6,
      reviews: 167,
      status: "available",
      versions: [
        {
          id: "avenger-standard",
          name: "Standard",
          price: 2800,
          features: ["220cc Engine", "5-speed Gearbox", "ABS", "Comfortable Seating"],
          specs: {
            engine: "220cc",
            power: "19 HP",
            torque: "17.5 Nm",
            weight: "152 kg",
            topSpeed: "115 km/h"
          },
          description: "Affordable cruiser with comfortable riding position for long-distance touring.",
          image: "🏍️"
        },
        {
          id: "avenger-street",
          name: "Street Edition",
          price: 3000,
          features: ["220cc Engine", "5-speed Gearbox", "Dual ABS", "Sport Exhaust", "LED Lights"],
          specs: {
            engine: "220cc",
            power: "19 HP",
            torque: "17.5 Nm",
            weight: "150 kg",
            topSpeed: "118 km/h"
          },
          description: "Urban cruiser with sporty styling and enhanced features for city rides.",
          image: "🏍️"
        }
      ]
    },
    {
      id: 4,
      name: "Honda Rebel 500",
      brand: "Honda",
      startingPrice: 4500,
      image: "🏍️",
      rating: 4.9,
      reviews: 195,
      status: "limited",
      versions: [
        {
          id: "rebel-standard",
          name: "Standard",
          price: 4500,
          features: ["471cc Twin", "6-speed Gearbox", "ABS", "Low Seat Height"],
          specs: {
            engine: "471cc",
            power: "46 HP",
            torque: "43 Nm",
            weight: "190 kg",
            topSpeed: "160 km/h"
          },
          description: "Modern bobber styling with accessible ergonomics. Perfect for beginners and experienced riders.",
          image: "🏍️"
        }
      ]
    },
    {
      id: 5,
      name: "Suzuki Intruder 150",
      brand: "Suzuki",
      startingPrice: 2500,
      image: "🏍️",
      rating: 4.5,
      reviews: 143,
      status: "available",
      versions: [
        {
          id: "intruder-standard",
          name: "Standard",
          price: 2500,
          features: ["155cc Engine", "5-speed Gearbox", "ABS", "Chopper Styling"],
          specs: {
            engine: "154.9cc",
            power: "14.8 HP",
            torque: "14 Nm",
            weight: "148 kg",
            topSpeed: "110 km/h"
          },
          description: "Affordable entry-level cruiser with head-turning chopper design.",
          image: "🏍️"
        }
      ]
    }
  ];

  const handleViewDetails = (bike) => {
    navigate(`/cruiser-bikes/${bike.id}`, { state: { bike } });
  };

  const faqs = [
    {
      question: "Are cruiser bikes suitable for long-distance touring?",
      answer: "Yes! Cruiser bikes are designed for comfort on long rides with relaxed seating positions and smooth power delivery. Perfect for highway cruising and weekend getaways."
    },
    {
      question: "What's the difference between cruiser and sports bikes?",
      answer: "Cruisers offer a relaxed, upright riding position with focus on comfort and style, while sports bikes prioritize performance and aggressive riding positions."
    },
    {
      question: "Can beginners ride cruiser bikes?",
      answer: "Yes, many cruisers like the Honda Rebel 500 and Suzuki Intruder 150 are beginner-friendly with manageable power and low seat heights."
    },
    {
      question: "Do I need special gear for cruiser bikes?",
      answer: "While we provide helmets, we recommend wearing riding jackets, gloves, and proper footwear for safety and comfort on longer rides."
    },
    {
      question: "What's included in the cruiser bike rental?",
      answer: "Rental includes the bike, two helmets, basic insurance, and 24/7 roadside assistance. Fuel and optional comprehensive insurance are extra."
    },
    {
      question: "Can I rent a cruiser for multiple days?",
      answer: "Absolutely! We offer daily, weekly, and monthly rental packages with significant discounts for longer durations."
    }
  ];

  return (
    <div className="cruiser-bikes-page">
      {/* Hero Section */}
      <section className="cruiser-hero">
        <div className="cruiser-hero-content">
          <h1>Cruiser Bike Rentals</h1>
          <p>Cruise in style with our premium collection of comfortable bikes</p>
          <div className="hero-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Premium Models</p>
            </div>
            <div className="stat">
              <h3>৳2,500+</h3>
              <p>Starting Price/Day</p>
            </div>
            <div className="stat">
              <h3>4.7★</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bikes Grid */}
      <section className="bikes-section">
        <div className="container">
          <div className="section-header">
            <h2>Available Cruiser Bikes</h2>
            <p>Choose from our collection of comfortable touring motorcycles</p>
          </div>

          <div className="bikes-grid">
            {cruiserBikes.map((bike) => (
              <div key={bike.id} className="bike-card">
                <div className="bike-card-inner">
                  <div className="bike-image">{bike.image}</div>
                  
                  <div className="bike-content">
                    <div className="bike-header-section">
                      <h3 className="bike-name">{bike.name}</h3>
                      <span className={`availability-badge ${bike.status}`}>
                        {bike.status === 'available' ? 'Available' : 'Limited Stock'}
                      </span>
                    </div>

                    <div className="bike-pricing-section">
                      <div className="price-display">
                        <span className="currency">৳</span>
                        <span className="price-amount">{bike.startingPrice}</span>
                        <span className="price-period">/day</span>
                      </div>
                      <p className="starting-text">Starting from</p>
                    </div>

                    <div className="versions-info">
                      <span className="versions-count">
                        🏍️ {bike.versions.length} version{bike.versions.length > 1 ? 's' : ''} available
                      </span>
                    </div>

                    <button 
                      className="view-details-button"
                      onClick={() => handleViewDetails(bike)}
                    >
                      <span className="btn-text">View Details & Book</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Policy */}
      <section className="policy-section">
        <div className="container">
          <h2>Cruiser Bike Rental Policy</h2>
          <div className="policy-grid">
            <div className="policy-card">
              <div className="policy-icon">📋</div>
              <h3>Requirements</h3>
              <ul>
                <li>Valid motorcycle license</li>
                <li>Minimum age: 21 years</li>
                <li>1+ years riding experience</li>
                <li>Security deposit required</li>
              </ul>
            </div>
            <div className="policy-card">
              <div className="policy-icon">⏰</div>
              <h3>Rental Duration</h3>
              <ul>
                <li>Minimum: 1 day</li>
                <li>Daily: 24-hour period</li>
                <li>Weekly: Save 15%</li>
                <li>Monthly: Save 30%</li>
              </ul>
            </div>
            <div className="policy-card">
              <div className="policy-icon">🛡️</div>
              <h3>Insurance & Safety</h3>
              <ul>
                <li>Basic insurance included</li>
                <li>Comprehensive option available</li>
                <li>Two helmets provided</li>
                <li>24/7 roadside assistance</li>
              </ul>
            </div>
            <div className="policy-card">
              <div className="policy-icon">💳</div>
              <h3>Payment & Deposit</h3>
              <ul>
                <li>Multiple payment options</li>
                <li>Deposit: ৳5,000-10,000</li>
                <li>Refundable after inspection</li>
                <li>Advance booking: 20%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Cruise?</h2>
          <p>Book your cruiser bike today and enjoy the open road</p>
          <button className="cta-btn">Contact Us for Booking</button>
        </div>
      </section>
    </div>
  );
}

export default CruiserBikes;
