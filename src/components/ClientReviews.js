import React, { useState } from 'react';
import './ClientReviews.css';

function ClientReviews() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "BikeRentalBD provided an exceptional service! The bike was in perfect condition and the rider was professional and punctual. Highly recommend their services for anyone looking for reliable bike rentals.",
      rating: 5,
      clientName: "Arif Rahman",
      designation: "Business Owner",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      bgColor: "white"
    },
    {
      id: 2,
      text: "I've used many rental services, but BikeRentalBD stands out. Their 24/7 support is amazing, and the variety of bikes they offer is unmatched. Great pricing and excellent customer care!",
      rating: 5,
      clientName: "Nusrat Jahan",
      designation: "Marketing Manager",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      bgColor: "green"
    },
    {
      id: 3,
      text: "Fantastic experience with BikeRentalBD! The booking process was smooth, the bike was well-maintained, and the rider knew all the routes perfectly. Will definitely use their service again.",
      rating: 5,
      clientName: "Kamal Hossain",
      designation: "Software Engineer",
      photo: "https://randomuser.me/api/portraits/men/46.jpg",
      bgColor: "white"
    }
  ];

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">Clients Reviews</h2>
          <p className="reviews-subtitle">What our clients say about us</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-card ${testimonial.bgColor === 'green' ? 'green-bg' : 'white-bg'}`}
            >
              <div className="quote-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              <p className="testimonial-text">{testimonial.text}</p>

              <div className="star-rating">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <span key={index} className="star">★</span>
                ))}
              </div>

              <div className="client-info">
                <img src={testimonial.photo} alt={testimonial.clientName} className="client-photo" />
                <div className="client-details">
                  <h4 className="client-name">{testimonial.clientName}</h4>
                  <p className="client-designation">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientReviews;
