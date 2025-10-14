import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SportsBikes.css';

function SportsBikes() {
  const navigate = useNavigate();
  
  const sportsBikes = [
    {
      id: 1,
      name: "Yamaha R15 V4",
      brand: "Yamaha",
      startingPrice: 2500,
      image: "🏍️",
      rating: 4.8,
      reviews: 124,
      status: "available",
      versions: [
        {
          id: "r15-standard",
          name: "Standard",
          price: 2500,
          features: ["155cc Engine", "6-speed Gearbox", "ABS", "LED Lights"],
          specs: {
            engine: "155cc",
            power: "18.6 HP",
            torque: "14.2 Nm",
            weight: "142 kg",
            topSpeed: "136 km/h"
          },
          description: "Perfect for daily commuting and weekend rides. The standard version offers great value with essential features.",
          image: "🏍️"
        },
        {
          id: "r15-racing",
          name: "Racing Edition",
          price: 3000,
          features: ["155cc Engine", "6-speed Gearbox", "Dual ABS", "Full LED", "Racing Exhaust", "Quickshifter"],
          specs: {
            engine: "155cc",
            power: "18.6 HP",
            torque: "14.2 Nm",
            weight: "139 kg",
            topSpeed: "140 km/h"
          },
          description: "Enhanced performance with racing DNA. Features upgraded exhaust and quickshifter for serious riders.",
          image: "🏍️"
        }
      ]
    },
    {
      id: 2,
      name: "Honda CBR150R",
      brand: "Honda",
      startingPrice: 2800,
      image: "🏍️",
      rating: 4.7,
      reviews: 98,
      status: "available",
      versions: [
        {
          id: "cbr-standard",
          name: "Standard",
          price: 2800,
          features: ["149cc Engine", "6-speed Gearbox", "ABS", "Digital Display"],
          specs: {
            engine: "149cc",
            power: "17.1 HP",
            torque: "14.4 Nm",
            weight: "138 kg",
            topSpeed: "135 km/h"
          },
          description: "Honda's reliable sports bike with excellent fuel efficiency and smooth performance.",
          image: "🏍️"
        },
        {
          id: "cbr-pro",
          name: "Pro Edition",
          price: 3200,
          features: ["149cc Engine", "6-speed Gearbox", "Dual ABS", "Full Digital Console", "Slipper Clutch"],
          specs: {
            engine: "149cc",
            power: "17.1 HP",
            torque: "14.4 Nm",
            weight: "136 kg",
            topSpeed: "138 km/h"
          },
          description: "Advanced features with slipper clutch for better control and safety during aggressive riding.",
          image: "🏍️"
        }
      ]
    },
    {
      id: 3,
      name: "Suzuki GSX-R150",
      brand: "Suzuki",
      startingPrice: 2700,
      image: "🏍️",
      rating: 4.6,
      reviews: 87,
      status: "available",
      versions: [
        {
          id: "gsxr-standard",
          name: "Standard",
          price: 2700,
          features: ["147cc Engine", "6-speed Gearbox", "ABS", "LED Headlamps"],
          specs: {
            engine: "147cc",
            power: "19.2 HP",
            torque: "14 Nm",
            weight: "135 kg",
            topSpeed: "140 km/h"
          },
          description: "Lightweight and agile sports bike with impressive power-to-weight ratio.",
          image: "🏍️"
        },
        {
          id: "gsxr-ultimate",
          name: "Ultimate",
          price: 3300,
          features: ["147cc Engine", "6-speed Gearbox", "Dual Channel ABS", "Full LED", "Racing Suspension", "Performance Exhaust"],
          specs: {
            engine: "147cc",
            power: "19.2 HP",
            torque: "14 Nm",
            weight: "133 kg",
            topSpeed: "145 km/h"
          },
          description: "Track-ready configuration with upgraded suspension and exhaust for maximum performance.",
          image: "🏍️"
        }
      ]
    },
    {
      id: 4,
      name: "KTM RC 200",
      brand: "KTM",
      startingPrice: 3500,
      image: "🏍️",
      rating: 4.9,
      reviews: 156,
      status: "available",
      versions: [
        {
          id: "rc200-standard",
          name: "Standard",
          price: 3500,
          features: ["199cc Engine", "6-speed Gearbox", "ABS", "Split Seats"],
          specs: {
            engine: "199.5cc",
            power: "25 HP",
            torque: "19.5 Nm",
            weight: "147 kg",
            topSpeed: "145 km/h"
          },
          description: "Aggressive styling with powerful single-cylinder engine. Perfect for thrill-seekers.",
          image: "🏍️"
        },
        {
          id: "rc200-track",
          name: "Track Edition",
          price: 4000,
          features: ["199cc Engine", "6-speed Gearbox", "Dual ABS", "Racing Tires", "Adjustable Suspension", "Slip-Assist Clutch"],
          specs: {
            engine: "199.5cc",
            power: "25 HP",
            torque: "19.5 Nm",
            weight: "145 kg",
            topSpeed: "150 km/h"
          },
          description: "Track-focused setup with racing tires and adjustable suspension for competitive riders.",
          image: "🏍️"
        }
      ]
    },
    {
      id: 5,
      name: "Kawasaki Ninja 250",
      brand: "Kawasaki",
      startingPrice: 4000,
      image: "🏍️",
      rating: 4.8,
      reviews: 142,
      status: "available",
      versions: [
        {
          id: "ninja250-standard",
          name: "Standard",
          price: 4000,
          features: ["248cc Twin-Cylinder", "6-speed Gearbox", "ABS", "Slipper Clutch"],
          specs: {
            engine: "248cc",
            power: "39 HP",
            torque: "23.5 Nm",
            weight: "172 kg",
            topSpeed: "175 km/h"
          },
          description: "Twin-cylinder power with legendary Ninja performance and reliability.",
          image: "🏍️"
        },
        {
          id: "ninja250-pro",
          name: "Pro",
          price: 4500,
          features: ["248cc Twin-Cylinder", "6-speed Gearbox", "Dual ABS", "TFT Display", "Ride Modes", "Quick Shifter"],
          specs: {
            engine: "248cc",
            power: "39 HP",
            torque: "23.5 Nm",
            weight: "170 kg",
            topSpeed: "180 km/h"
          },
          description: "Advanced electronics with ride modes and quickshifter for enhanced riding experience.",
          image: "🏍️"
        },
        {
          id: "ninja250-ultimate",
          name: "Ultimate",
          price: 5000,
          features: ["248cc Twin-Cylinder", "6-speed Gearbox", "Cornering ABS", "TFT Display", "Ride Modes", "Quick Shifter", "Racing Exhaust", "Carbon Fiber Parts"],
          specs: {
            engine: "248cc",
            power: "39 HP",
            torque: "23.5 Nm",
            weight: "168 kg",
            topSpeed: "185 km/h"
          },
          description: "Top-tier configuration with carbon fiber parts and racing exhaust for ultimate performance.",
          image: "🏍️"
        }
      ]
    },
    {
      id: 6,
      name: "Bajaj Pulsar RS200",
      brand: "Bajaj",
      startingPrice: 2400,
      image: "🏍️",
      rating: 4.5,
      reviews: 76,
      status: "limited",
      versions: [
        {
          id: "rs200-standard",
          name: "Standard",
          price: 2400,
          features: ["199cc Engine", "6-speed Gearbox", "ABS", "Projector Headlamps"],
          specs: {
            engine: "199.5cc",
            power: "24.5 HP",
            torque: "18.7 Nm",
            weight: "165 kg",
            topSpeed: "141 km/h"
          },
          description: "Budget-friendly sports bike with great value for money and decent performance.",
          image: "🏍️"
        }
      ]
    }
  ];

  const [selectedBike, setSelectedBike] = useState(null);

  const handleViewDetails = (bike) => {
    navigate(`/sports-bikes/${bike.id}`, { state: { bike } });
  };

  const faqs = [
    {
      question: "What documents do I need to rent a sports bike?",
      answer: "You'll need a valid motorcycle license, national ID or passport, and a security deposit. International customers need a valid international driving permit."
    },
    {
      question: "Is there an age requirement for renting sports bikes?",
      answer: "Yes, you must be at least 21 years old with a minimum of 2 years riding experience to rent our sports bikes."
    },
    {
      question: "What's included in the rental price?",
      answer: "The rental includes the bike, two helmets, basic insurance, and 24/7 roadside assistance. Fuel is not included."
    },
    {
      question: "Can I take the sports bike outside Dhaka?",
      answer: "Yes, you can travel anywhere in Bangladesh. Please inform us in advance for long-distance trips."
    },
    {
      question: "What happens if the bike breaks down?",
      answer: "We provide 24/7 roadside assistance. Contact us immediately and we'll either repair on-site or provide a replacement bike."
    },
    {
      question: "Is insurance included?",
      answer: "Basic insurance is included. You can upgrade to comprehensive insurance for additional coverage at a nominal fee."
    }
  ];

  return (
    <div className="sports-bikes-page">
      {/* Hero Section */}
      <section className="sports-hero">
        <div className="sports-hero-content">
          <h1>Sports Bike Rentals</h1>
          <p>Experience the thrill of high-performance motorcycles</p>
          <div className="hero-stats">
            <div className="stat">
              <h3>6+</h3>
              <p>Premium Models</p>
            </div>
            <div className="stat">
              <h3>₹2,400+</h3>
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
            <h2>Available Sports Bikes</h2>
            <p>Choose from our collection of high-performance motorcycles</p>
          </div>

          <div className="bikes-grid">
            {sportsBikes.map((bike) => (
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
          <h2>Sports Bike Rental Policy</h2>
          <div className="policy-grid">
            <div className="policy-card">
              <div className="policy-icon">📋</div>
              <h3>Requirements</h3>
              <ul>
                <li>Valid motorcycle license</li>
                <li>Minimum age: 21 years</li>
                <li>2+ years riding experience</li>
                <li>Security deposit required</li>
              </ul>
            </div>
            <div className="policy-card">
              <div className="policy-icon">⏰</div>
              <h3>Rental Duration</h3>
              <ul>
                <li>Minimum: 1 day</li>
                <li>Daily: 24-hour period</li>
                <li>Weekly discounts available</li>
                <li>Monthly packages available</li>
              </ul>
            </div>
            <div className="policy-card">
              <div className="policy-icon">🛡️</div>
              <h3>Insurance & Safety</h3>
              <ul>
                <li>Basic insurance included</li>
                <li>Comprehensive insurance optional</li>
                <li>Two helmets provided</li>
                <li>24/7 roadside assistance</li>
              </ul>
            </div>
            <div className="policy-card">
              <div className="policy-icon">💳</div>
              <h3>Payment & Deposit</h3>
              <ul>
                <li>Cash, card, mobile banking</li>
                <li>Security deposit: ৳5,000-15,000</li>
                <li>Refundable after inspection</li>
                <li>Advance booking: 20% payment</li>
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
          <p>Book your dream sports bike today and experience the thrill</p>
          <button className="cta-btn">Contact Us for Booking</button>
        </div>
      </section>
    </div>
  );
}

export default SportsBikes;
