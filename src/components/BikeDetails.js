import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BikeDetails.css';

function BikeDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bike } = location.state || {};

  const [selectedVersion, setSelectedVersion] = useState(bike?.versions[0] || null);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedForCompare, setSelectedForCompare] = useState([]);

  if (!bike) {
    return (
      <div className="error-page">
        <h2>Bike not found</h2>
        <button onClick={() => navigate('/sports-bikes')}>Back to Sports Bikes</button>
      </div>
    );
  }

  const handleVersionChange = (version) => {
    setSelectedVersion(version);
  };

  const toggleCompare = (version) => {
    if (selectedForCompare.find(v => v.id === version.id)) {
      setSelectedForCompare(selectedForCompare.filter(v => v.id !== version.id));
    } else {
      if (selectedForCompare.length < 3) {
        setSelectedForCompare([...selectedForCompare, version]);
      }
    }
  };

  const reviews = [
    { id: 1, author: "Rakib Hassan", rating: 5, date: "2 weeks ago", comment: "Excellent bike! Smooth performance and great handling. The rental process was hassle-free." },
    { id: 2, author: "Mehedi Alam", rating: 5, date: "1 month ago", comment: "Best sports bike rental service in Dhaka. Well-maintained bikes and professional staff." },
    { id: 3, author: "Fahim Ahmed", rating: 4, date: "2 months ago", comment: "Good experience overall. The bike was in perfect condition. Highly recommended!" },
  ];

  return (
    <div className="bike-details-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span onClick={() => navigate('/')}>Home</span> / 
        <span onClick={() => navigate('/sports-bikes')}> Sports Bikes</span> / 
        <span> {bike.name}</span>
      </div>

      {/* Main Content */}
      <div className="details-container">
        <div className="details-grid">
          {/* Left: Image Gallery */}
          <div className="image-section">
            <div className="main-image">
              {selectedVersion.image}
            </div>
            <div className="image-thumbnails">
              <div className="thumbnail active">{selectedVersion.image}</div>
              <div className="thumbnail">{selectedVersion.image}</div>
              <div className="thumbnail">{selectedVersion.image}</div>
            </div>
            <div className="image-note">
              <p>📸 Actual bike images. What you see is what you get.</p>
            </div>
          </div>

          {/* Right: Details */}
          <div className="info-section">
            <div className="bike-header">
              <h1>{bike.name}</h1>
              <div className="bike-meta">
                <span className="brand-badge">{bike.brand}</span>
                <span className={`status-badge ${bike.status}`}>
                  {bike.status === 'available' ? '✓ Available Now' : '⚠ Limited Stock'}
                </span>
              </div>
              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="rating-value">{bike.rating}</span>
                <span className="reviews-count">({bike.reviews} reviews)</span>
              </div>
            </div>

            {/* Version Selector */}
            <div className="version-selector">
              <h3>Select Version:</h3>
              <div className="version-buttons">
                {bike.versions.map((version) => (
                  <button
                    key={version.id}
                    className={`version-btn ${selectedVersion.id === version.id ? 'active' : ''}`}
                    onClick={() => handleVersionChange(version)}
                  >
                    <span className="version-name">{version.name}</span>
                    <span className="version-price">৳{version.price}/day</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Display */}
            <div className="price-section">
              <div className="current-price">
                <span className="price-label">Rental Price:</span>
                <span className="price-value">৳{selectedVersion.price}</span>
                <span className="price-unit">/day</span>
              </div>
              <div className="price-breakdown">
                <p>💡 Weekly rental: Save 15%</p>
                <p>💡 Monthly rental: Save 30%</p>
              </div>
            </div>

            {/* Description */}
            <div className="description-section">
              <h3>About {selectedVersion.name}</h3>
              <p>{selectedVersion.description}</p>
            </div>

            {/* Key Features */}
            <div className="features-section">
              <h3>Key Features:</h3>
              <div className="features-grid">
                {selectedVersion.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    ✓ {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="book-now-btn">
                🏍️ Book Now
              </button>
              <button className="contact-btn">
                📞 Call for Inquiry
              </button>
            </div>

            {/* Compare Toggle */}
            <div className="compare-section">
              <button 
                className="compare-toggle-btn"
                onClick={() => setCompareMode(!compareMode)}
              >
                {compareMode ? '✕ Close Comparison' : '⚖️ Compare Versions'}
              </button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="specs-section">
          <h2>Technical Specifications - {selectedVersion.name}</h2>
          <div className="specs-grid">
            <div className="spec-item">
              <span className="spec-icon">🔧</span>
              <span className="spec-label">Engine</span>
              <span className="spec-value">{selectedVersion.specs.engine}</span>
            </div>
            <div className="spec-item">
              <span className="spec-icon">⚡</span>
              <span className="spec-label">Max Power</span>
              <span className="spec-value">{selectedVersion.specs.power}</span>
            </div>
            <div className="spec-item">
              <span className="spec-icon">💪</span>
              <span className="spec-label">Max Torque</span>
              <span className="spec-value">{selectedVersion.specs.torque}</span>
            </div>
            <div className="spec-item">
              <span className="spec-icon">⚖️</span>
              <span className="spec-label">Weight</span>
              <span className="spec-value">{selectedVersion.specs.weight}</span>
            </div>
            <div className="spec-item">
              <span className="spec-icon">🚀</span>
              <span className="spec-label">Top Speed</span>
              <span className="spec-value">{selectedVersion.specs.topSpeed}</span>
            </div>
          </div>
        </div>

        {/* Comparison View */}
        {compareMode && (
          <div className="comparison-section">
            <h2>Compare Versions</h2>
            <p className="compare-instruction">Select up to 3 versions to compare:</p>
            
            <div className="compare-selector">
              {bike.versions.map((version) => (
                <label key={version.id} className="compare-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedForCompare.find(v => v.id === version.id) !== undefined}
                    onChange={() => toggleCompare(version)}
                    disabled={selectedForCompare.length >= 3 && !selectedForCompare.find(v => v.id === version.id)}
                  />
                  <span>{version.name} - ৳{version.price}/day</span>
                </label>
              ))}
            </div>

            {selectedForCompare.length >= 2 && (
              <div className="comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      {selectedForCompare.map(version => (
                        <th key={version.id}>{version.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Price/Day</strong></td>
                      {selectedForCompare.map(version => (
                        <td key={version.id}>৳{version.price}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Engine</strong></td>
                      {selectedForCompare.map(version => (
                        <td key={version.id}>{version.specs.engine}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Max Power</strong></td>
                      {selectedForCompare.map(version => (
                        <td key={version.id}>{version.specs.power}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Max Torque</strong></td>
                      {selectedForCompare.map(version => (
                        <td key={version.id}>{version.specs.torque}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Weight</strong></td>
                      {selectedForCompare.map(version => (
                        <td key={version.id}>{version.specs.weight}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Top Speed</strong></td>
                      {selectedForCompare.map(version => (
                        <td key={version.id}>{version.specs.topSpeed}</td>
                      ))}
                    </tr>
                    <tr>
                      <td><strong>Features</strong></td>
                      {selectedForCompare.map(version => (
                        <td key={version.id}>
                          <ul className="compare-features">
                            {version.features.map((f, i) => (
                              <li key={i}>{f}</li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Reviews Section */}
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          <div className="reviews-summary">
            <div className="summary-score">
              <div className="score-number">{bike.rating}</div>
              <div className="score-stars">★★★★★</div>
              <div className="score-text">Based on {bike.reviews} reviews</div>
            </div>
            <div className="rating-bars">
              <div className="rating-bar">
                <span>5★</span>
                <div className="bar"><div className="fill" style={{width: '75%'}}></div></div>
                <span>75%</span>
              </div>
              <div className="rating-bar">
                <span>4★</span>
                <div className="bar"><div className="fill" style={{width: '20%'}}></div></div>
                <span>20%</span>
              </div>
              <div className="rating-bar">
                <span>3★</span>
                <div className="bar"><div className="fill" style={{width: '3%'}}></div></div>
                <span>3%</span>
              </div>
              <div className="rating-bar">
                <span>2★</span>
                <div className="bar"><div className="fill" style={{width: '1%'}}></div></div>
                <span>1%</span>
              </div>
              <div className="rating-bar">
                <span>1★</span>
                <div className="bar"><div className="fill" style={{width: '1%'}}></div></div>
                <span>1%</span>
              </div>
            </div>
          </div>

          <div className="reviews-list">
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">👤</div>
                    <div>
                      <h4>{review.author}</h4>
                      <span className="review-date">{review.date}</span>
                    </div>
                  </div>
                  <div className="review-rating">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}
                  </div>
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BikeDetails;
