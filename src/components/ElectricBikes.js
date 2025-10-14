import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ElectricBikes.css';

function ElectricBikes() {
  const navigate = useNavigate();
  
  const electricBikes = [
    {
      id: 1,
      name: "Ather 450X",
      brand: "Ather",
      startingPrice: 2000,
      image: "⚡",
      rating: 4.9,
      reviews: 167,
      status: "available",
      versions: [
        {
          id: "ather-450x",
          name: "450X",
          price: 2000,
          features: ["6kW Motor", "3.7 kWh Battery", "85 km Range", "TFT Touchscreen"],
          specs: {
            engine: "6kW Motor",
            power: "8.58 HP",
            torque: "26 Nm",
            weight: "108 kg",
            topSpeed: "90 km/h"
          },
          description: "India's smartest electric scooter with connected features and impressive performance.",
          image: "⚡"
        },
        {
          id: "ather-450x-pro",
          name: "450X Pro",
          price: 2300,
          features: ["6kW Motor", "3.7 kWh Battery", "85 km Range", "TFT Touchscreen", "Navigation", "OTA Updates"],
          specs: {
            engine: "6kW Motor",
            power: "8.58 HP",
            torque: "26 Nm",
            weight: "108 kg",
            topSpeed: "90 km/h"
          },
          description: "Premium variant with navigation and regular OTA updates for enhanced features.",
          image: "⚡"
        }
      ]
    },
    {
      id: 2,
      name: "Revolt RV400",
      brand: "Revolt",
      startingPrice: 2200,
      image: "⚡",
      rating: 4.7,
      reviews: 134,
      status: "available",
      versions: [
        {
          id: "rv400-standard",
          name: "Standard",
          price: 2200,
          features: ["3kW Motor", "3.24 kWh Battery", "150 km Range", "Artificial Sounds"],
          specs: {
            engine: "3kW Motor",
            power: "4.02 HP",
            torque: "170 Nm",
            weight: "108 kg",
            topSpeed: "85 km/h"
          },
          description: "First AI-enabled motorcycle with customizable artificial exhaust sounds.",
          image: "⚡"
        }
      ]
    },
    {
      id: 3,
      name: "Tork Kratos R",
      brand: "Tork",
      startingPrice: 2500,
      image: "⚡",
      rating: 4.8,
      reviews: 98,
      status: "limited",
      versions: [
        {
          id: "kratos-r",
          name: "Kratos R",
          price: 2500,
          features: ["9kW Motor", "4 kWh Battery", "180 km Range", "Fast Charging"],
          specs: {
            engine: "9kW Motor",
            power: "12 HP",
            torque: "38 Nm",
            weight: "135 kg",
            topSpeed: "105 km/h"
          },
          description: "High-performance electric motorcycle with longest range and fast charging capability.",
          image: "⚡"
        }
      ]
    },
    {
      id: 4,
      name: "Simple One",
      brand: "Simple",
      startingPrice: 1900,
      image: "⚡",
      rating: 4.6,
      reviews: 145,
      status: "available",
      versions: [
        {
          id: "simple-one",
          name: "One",
          price: 1900,
          features: ["8.5kW Motor", "4.8 kWh Battery", "236 km Range", "Loop Navigation"],
          specs: {
            engine: "8.5kW Motor",
            power: "11.4 HP",
            torque: "72 Nm",
            weight: "110 kg",
            topSpeed: "105 km/h"
          },
          description: "Revolutionary electric scooter with industry-leading 236 km range on single charge.",
          image: "⚡"
        }
      ]
    },
    {
      id: 5,
      name: "Ola S1 Pro",
      brand: "Ola",
      startingPrice: 1800,
      image: "⚡",
      rating: 4.5,
      reviews: 189,
      status: "available",
      versions: [
        {
          id: "s1-pro",
          name: "S1 Pro",
          price: 1800,
          features: ["8.5kW Motor", "3.97 kWh Battery", "181 km Range", "Hyper Mode"],
          specs: {
            engine: "8.5kW Motor",
            power: "11.4 HP",
            torque: "58 Nm",
            weight: "121 kg",
            topSpeed: "115 km/h"
          },
          description: "Fastest electric scooter in India with 115 km/h top speed and hyper mode.",
          image: "⚡"
        }
      ]
    }
  ];

  const handleViewDetails = (bike) => {
    navigate(`/electric-bikes/${bike.id}`, { state: { bike } });
  };

  const faqs = [
    {
      question: "How long does it take to charge an electric bike?",
      answer: "Charging time varies by model: 3-5 hours for full charge with standard charger, 1-2 hours with fast charger. All our electric bikes can be charged at home."
    },
    {
      question: "What is the real-world range of electric bikes?",
      answer: "Real-world range depends on riding conditions. Typically 60-180 km on a single charge. City riding in Eco mode provides maximum range."
    },
    {
      question: "Are electric bikes cheaper to run than petrol bikes?",
      answer: "Yes! Electric bikes cost approximately ৳0.50 per km compared to ৳3-4 per km for petrol bikes. Minimal maintenance costs too."
    },
    {
      question: "Can I charge the electric bike at home?",
      answer: "Yes, all electric bikes come with a standard charger that works with regular 220V household power outlets."
    },
    {
      question: "What happens if the battery runs out during my rental?",
      answer: "We provide 24/7 roadside assistance. We'll either bring a charged battery or arrange pickup. We recommend planning routes considering range."
    },
    {
      question: "Are electric bikes good for long rides?",
      answer: "Modern electric bikes like Simple One and Tork Kratos offer 180+ km range, suitable for long rides. Fast charging stations are increasingly available."
    }
  ];

  return (
    <div className="electric-bikes-page">
      {/* Hero Section */}
      <section className="electric-hero">
        <div className="electric-hero-content">
          <h1>Electric Bike Rentals</h1>
          <p>Experience the future with zero-emission electric bikes</p>
          <div className="hero-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Electric Models</p>
            </div>
            <div className="stat">
              <h3>৳1,800+</h3>
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
            <h2>Available Electric Bikes</h2>
            <p>Choose from our collection of eco-friendly electric motorcycles</p>
          </div>

          <div className="bikes-grid">
            {electricBikes.map((bike) => (
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
                        ⚡ {bike.versions.length} version{bike.versions.length > 1 ? 's' : ''} available
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
          <h2>Electric Bike Rental Policy</h2>
          <div className="policy-grid">
            <div className="policy-card">
              <div className="policy-icon">📋</div>
              <h3>Requirements</h3>
              <ul>
                <li>Valid two-wheeler license</li>
                <li>Minimum age: 18 years</li>
                <li>No prior EV experience needed</li>
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
                <li>Battery warranty covered</li>
                <li>Two helmets provided</li>
                <li>24/7 roadside assistance</li>
              </ul>
            </div>
            <div className="policy-card">
              <div className="policy-icon">💳</div>
              <h3>Charging & Payment</h3>
              <ul>
                <li>Home charger included</li>
                <li>Deposit: ৳5,000-8,000</li>
                <li>Electricity cost extra</li>
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
          <h2>Ready to Go Electric?</h2>
          <p>Book your electric bike today and experience the future of mobility</p>
          <button className="cta-btn">Contact Us for Booking</button>
        </div>
      </section>
    </div>
  );
}

export default ElectricBikes;
