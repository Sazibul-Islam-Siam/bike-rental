import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Scooters.css';

function Scooters() {
  const navigate = useNavigate();
  
  const scooters = [
    {
      id: 1,
      name: "Honda Activa 6G",
      brand: "Honda",
      startingPrice: 1500,
      image: "🛵",
      rating: 4.8,
      reviews: 284,
      status: "available",
      versions: [
        {
          id: "activa-standard",
          name: "Standard",
          price: 1500,
          features: ["110cc Engine", "CVT Automatic", "LED Headlamp", "External Fuel Fill"],
          specs: {
            engine: "109.51cc",
            power: "7.68 HP",
            torque: "8.79 Nm",
            weight: "107 kg",
            topSpeed: "85 km/h"
          },
          description: "India's most trusted scooter with smooth performance and excellent fuel efficiency.",
          image: "🛵"
        },
        {
          id: "activa-deluxe",
          name: "Deluxe",
          price: 1700,
          features: ["110cc Engine", "CVT Automatic", "Full LED", "Digital Console", "USB Charger"],
          specs: {
            engine: "109.51cc",
            power: "7.68 HP",
            torque: "8.79 Nm",
            weight: "109 kg",
            topSpeed: "85 km/h"
          },
          description: "Enhanced features with digital console and USB charging for modern riders.",
          image: "🛵"
        }
      ]
    },
    {
      id: 2,
      name: "TVS Jupiter 125",
      brand: "TVS",
      startingPrice: 1600,
      image: "🛵",
      rating: 4.7,
      reviews: 217,
      status: "available",
      versions: [
        {
          id: "jupiter-standard",
          name: "Standard",
          price: 1600,
          features: ["125cc Engine", "CVT Automatic", "LED Lights", "Bluetooth Console"],
          specs: {
            engine: "124.8cc",
            power: "8.15 HP",
            torque: "10.5 Nm",
            weight: "108 kg",
            topSpeed: "90 km/h"
          },
          description: "Feature-rich scooter with Bluetooth connectivity and powerful 125cc engine.",
          image: "🛵"
        }
      ]
    },
    {
      id: 3,
      name: "Suzuki Access 125",
      brand: "Suzuki",
      startingPrice: 1550,
      image: "🛵",
      rating: 4.6,
      reviews: 198,
      status: "available",
      versions: [
        {
          id: "access-standard",
          name: "Standard",
          price: 1550,
          features: ["125cc Engine", "CVT Automatic", "LED Lights", "Large Storage"],
          specs: {
            engine: "124cc",
            power: "8.7 HP",
            torque: "10 Nm",
            weight: "104 kg",
            topSpeed: "90 km/h"
          },
          description: "Lightweight scooter with excellent maneuverability and spacious under-seat storage.",
          image: "🛵"
        },
        {
          id: "access-special",
          name: "Special Edition",
          price: 1750,
          features: ["125cc Engine", "CVT Automatic", "Full LED", "Digital Console", "Chrome Parts"],
          specs: {
            engine: "124cc",
            power: "8.7 HP",
            torque: "10 Nm",
            weight: "105 kg",
            topSpeed: "90 km/h"
          },
          description: "Premium edition with chrome accents and fully digital instrumentation.",
          image: "🛵"
        }
      ]
    },
    {
      id: 4,
      name: "Vespa VXL 150",
      brand: "Vespa",
      startingPrice: 2500,
      image: "🛵",
      rating: 4.9,
      reviews: 156,
      status: "limited",
      versions: [
        {
          id: "vespa-standard",
          name: "Standard",
          price: 2500,
          features: ["150cc Engine", "CVT Automatic", "Full LED", "Steel Monocoque Body"],
          specs: {
            engine: "149.5cc",
            power: "10.06 HP",
            torque: "11.5 Nm",
            weight: "122 kg",
            topSpeed: "95 km/h"
          },
          description: "Iconic Italian design meets modern performance. Premium scooter for style-conscious riders.",
          image: "🛵"
        }
      ]
    },
    {
      id: 5,
      name: "Hero Maestro Edge 125",
      brand: "Hero",
      startingPrice: 1450,
      image: "🛵",
      rating: 4.5,
      reviews: 173,
      status: "available",
      versions: [
        {
          id: "maestro-standard",
          name: "Standard",
          price: 1450,
          features: ["125cc Engine", "CVT Automatic", "LED Lights", "i3S Technology"],
          specs: {
            engine: "124.6cc",
            power: "9.1 HP",
            torque: "10.2 Nm",
            weight: "111 kg",
            topSpeed: "88 km/h"
          },
          description: "Budget-friendly scooter with idle start-stop technology for fuel savings.",
          image: "🛵"
        }
      ]
    },
    {
      id: 6,
      name: "Yamaha Fascino 125",
      brand: "Yamaha",
      startingPrice: 1650,
      image: "🛵",
      rating: 4.7,
      reviews: 189,
      status: "available",
      versions: [
        {
          id: "fascino-standard",
          name: "Standard",
          price: 1650,
          features: ["125cc Engine", "CVT Automatic", "Full LED", "Side Stand Alarm"],
          specs: {
            engine: "125cc",
            power: "8.2 HP",
            torque: "10.3 Nm",
            weight: "105 kg",
            topSpeed: "90 km/h"
          },
          description: "Stylish scooter with premium build quality and Yamaha's legendary reliability.",
          image: "🛵"
        }
      ]
    }
  ];

  const handleViewDetails = (bike) => {
    navigate(`/scooters/${bike.id}`, { state: { bike } });
  };

  const faqs = [
    {
      question: "Do I need a motorcycle license to rent a scooter?",
      answer: "Yes, you need a valid two-wheeler license. However, scooters are easier to ride than manual motorcycles, making them perfect for beginners."
    },
    {
      question: "Are scooters good for Dhaka city traffic?",
      answer: "Absolutely! Scooters are lightweight, easy to maneuver, and perfect for navigating through city traffic. They're fuel-efficient and easy to park."
    },
    {
      question: "Can two people ride comfortably on a scooter?",
      answer: "Yes, all our scooters can accommodate two riders comfortably with proper seating and footrests."
    },
    {
      question: "How much fuel do scooters consume?",
      answer: "Scooters are very fuel-efficient, averaging 40-55 km/l depending on the model and riding conditions."
    },
    {
      question: "Are scooters automatic or manual?",
      answer: "All our scooters feature CVT (Continuously Variable Transmission) automatic gearboxes - no clutch or gear shifting required!"
    },
    {
      question: "Can I use scooters for long-distance travel?",
      answer: "While scooters are primarily designed for city use, they can handle highway rides comfortably for distances up to 100-150 km."
    }
  ];

  return (
    <div className="scooters-page">
      {/* Hero Section */}
      <section className="scooters-hero">
        <div className="scooters-hero-content">
          <h1>Scooter Rentals</h1>
          <p>Easy, automatic, and perfect for city riding</p>
          <div className="hero-stats">
            <div className="stat">
              <h3>6+</h3>
              <p>Popular Models</p>
            </div>
            <div className="stat">
              <h3>৳1,450+</h3>
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
            <h2>Available Scooters</h2>
            <p>Choose from our collection of automatic scooters</p>
          </div>

          <div className="bikes-grid">
            {scooters.map((bike) => (
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
                        🛵 {bike.versions.length} version{bike.versions.length > 1 ? 's' : ''} available
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
          <h2>Scooter Rental Policy</h2>
          <div className="policy-grid">
            <div className="policy-card">
              <div className="policy-icon">📋</div>
              <h3>Requirements</h3>
              <ul>
                <li>Valid two-wheeler license</li>
                <li>Minimum age: 18 years</li>
                <li>No prior experience required</li>
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
                <li>Deposit: ৳3,000-5,000</li>
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
          <h2>Ready to Ride?</h2>
          <p>Book your scooter today and enjoy hassle-free city commuting</p>
          <button className="cta-btn">Contact Us for Booking</button>
        </div>
      </section>
    </div>
  );
}

export default Scooters;
