import React from 'react';
import './AboutUs.css';

function AboutUs() {
  const teamMembers = [
    {
      name: "Kamal Hassan",
      role: "Founder & CEO",
      bio: "With 10+ years in the transportation industry, Kamal founded BikeRentalBD to make quality bike rentals accessible to everyone in Dhaka.",
      image: "👨‍💼"
    },
    {
      name: "Nusrat Alam",
      role: "Operations Manager",
      bio: "Nusrat ensures smooth operations and exceptional customer service. Her attention to detail keeps our fleet in perfect condition.",
      image: "👩‍💼"
    },
    {
      name: "Rafiq Ahmed",
      role: "Fleet Manager",
      bio: "A motorcycle enthusiast with expert mechanical knowledge, Rafiq maintains our diverse fleet to the highest standards.",
      image: "👨‍🔧"
    }
  ];

  const values = [
    {
      icon: "🛡️",
      title: "Safety First",
      description: "All bikes are regularly maintained and safety-checked before every rental."
    },
    {
      icon: "😊",
      title: "Customer Happiness",
      description: "Your satisfaction is our priority. We go the extra mile to ensure a great experience."
    },
    {
      icon: "⚡",
      title: "Reliability",
      description: "Count on us for prompt service, well-maintained bikes, and 24/7 support."
    },
    {
      icon: "💰",
      title: "Affordability",
      description: "Premium bikes at competitive prices. Quality rentals shouldn't break the bank."
    },
    {
      icon: "🌟",
      title: "Quality Fleet",
      description: "From sports bikes to scooters, we offer diverse, high-quality motorcycles."
    }
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About <span className="highlight">BikeRentalBD</span></h1>
          <p className="hero-subtitle">Your trusted partner for premium bike rentals in Dhaka</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="about-section intro-section">
        <div className="container">
          <h2>Who We Are</h2>
          <p className="intro-text">
            BikeRentalBD is Dhaka's leading motorcycle rental service, providing quality bikes 
            and exceptional service since 2019. We believe in making transportation accessible, 
            affordable, and enjoyable for everyone. Whether you need a bike for daily commute, 
            weekend adventure, or special occasions, we've got you covered with our diverse fleet 
            and experienced team.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-section story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                BikeRentalBD was born from a simple observation: Dhaka needed a reliable, 
                customer-focused bike rental service. Founded in 2019 by motorcycle enthusiast 
                Kamal Hassan, we started with just 5 bikes and a vision to revolutionize urban 
                mobility in Bangladesh's capital.
              </p>
              <p>
                What began as a small venture has grown into the city's most trusted bike rental 
                service. Today, we proudly serve over 500 happy customers with a fleet of 50+ 
                premium motorcycles. Our growth reflects our commitment to quality, safety, and 
                customer satisfaction.
              </p>
              <p>
                We've built our reputation on trust, transparency, and a genuine passion for 
                motorcycles. Every bike in our fleet is hand-picked and meticulously maintained 
                to ensure you have the best riding experience possible.
              </p>
            </div>
            <div className="story-image">
              <div className="story-icon">🏍️</div>
              <div className="story-stats">
                <div className="stat-item">
                  <h3>2019</h3>
                  <p>Founded</p>
                </div>
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Happy Customers</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Premium Bikes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="about-section mission-section">
        <div className="container">
          <h2>Our Mission & Values</h2>
          <div className="mission-statement">
            <p>
              <strong>Our Mission:</strong> To provide safe, reliable, and affordable motorcycle 
              rentals that empower people to explore Dhaka with freedom and confidence. We strive 
              to deliver exceptional service and build lasting relationships with our customers.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="about-section offer-section">
        <div className="container">
          <h2>What We Offer</h2>
          <div className="offer-grid">
            <div className="offer-card">
              <div className="offer-icon">🏍️</div>
              <h3>Diverse Fleet</h3>
              <p>Sports bikes, cruisers, scooters, and electric bikes - we have something for every rider and occasion.</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">👨‍✈️</div>
              <h3>Experienced Riders</h3>
              <p>Optional professional riders available for those who prefer a chauffeur service.</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">🔧</div>
              <h3>Well-Maintained Bikes</h3>
              <p>Regular maintenance and safety checks ensure every bike is in perfect condition.</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">⏰</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer service and roadside assistance for peace of mind.</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">📱</div>
              <h3>Easy Booking</h3>
              <p>Quick online booking with instant confirmation and flexible rental periods.</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">💳</div>
              <h3>Flexible Payment</h3>
              <p>Multiple payment options including cash, mobile banking, and card payments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="about-section team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-subtitle">
            The passionate people behind BikeRentalBD who make it all happen
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">{member.image}</div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join hundreds of satisfied customers and experience the best bike rental service in Dhaka</p>
            <div className="cta-buttons">
              <button className="cta-btn primary-btn">Book a Bike Now</button>
              <button className="cta-btn secondary-btn">Contact Us</button>
            </div>
            <div className="social-connect">
              <p>Connect with us:</p>
              <div className="social-icons">
                <a href="#facebook" className="social-icon facebook">📘</a>
                <a href="#instagram" className="social-icon instagram">📷</a>
                <a href="#whatsapp" className="social-icon whatsapp">💬</a>
                <a href="#phone" className="social-icon phone">📞</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
