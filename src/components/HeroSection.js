import React, { useState, useEffect } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const bikes = [
    {
      id: 1,
      name: 'Yamaha R15',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
      category: 'Sports Bike'
    },
    {
      id: 2,
      name: 'Honda CBR',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
      category: 'Racing Bike'
    },
    {
      id: 3,
      name: 'Suzuki Gixxer',
      image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80',
      category: 'Street Bike'
    },
    {
      id: 4,
      name: 'Royal Enfield',
      image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80',
      category: 'Cruiser'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bikes.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [bikes.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bikes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bikes.length) % bikes.length);
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">🏍️ Premium Bike Rental Service</div>
          <h1 className="hero-title">
            Best Rent a Bike <br />
            <span className="title-highlight">in Dhaka</span>
          </h1>
          <p className="hero-subtitle">
            Book safely with experienced riders and explore our diverse collection 
            of high-quality bikes. Your journey starts here with reliable service 
            and unbeatable prices.
          </p>
          
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Experienced Riders</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Diverse Bike Options</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>24/7 Support</span>
            </div>
          </div>

          <div className="cta-buttons">
            <a href="tel:+8801234567890" className="cta-btn phone-btn">
              <span className="btn-icon">📞</span>
              <div className="btn-text">
                <span className="btn-label">Call Now</span>
                <span className="btn-number">+880 1234-567890</span>
              </div>
            </a>
            <a href="https://wa.me/8801234567890" className="cta-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
              <span className="btn-icon">💬</span>
              <div className="btn-text">
                <span className="btn-label">WhatsApp</span>
                <span className="btn-number">Chat with Us</span>
              </div>
            </a>
            <button className="cta-btn book-btn">
              <span className="btn-icon">🚀</span>
              <div className="btn-text">
                <span className="btn-label">Book Now</span>
                <span className="btn-number">Instant Booking</span>
              </div>
            </button>
          </div>
        </div>

        <div className="hero-images">
          <div className="carousel-container">
            <button className="carousel-btn prev-btn" onClick={prevSlide}>
              ‹
            </button>
            
            <div className="carousel-slides">
              {bikes.map((bike, index) => (
                <div
                  key={bike.id}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={bike.image} alt={bike.name} className="bike-image" />
                  <div className="bike-info">
                    <span className="bike-category">{bike.category}</span>
                    <h3 className="bike-name">{bike.name}</h3>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-btn next-btn" onClick={nextSlide}>
              ›
            </button>

            <div className="carousel-indicators">
              {bikes.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="floating-stats">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Premium Bikes</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;