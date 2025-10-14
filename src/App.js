import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import ClientReviews from './components/ClientReviews';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import BikeList from './components/BikeList';
import PaymentPage from './components/PaymentPage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [user, setUser] = useState(null); // Store the logged-in user
  const [showAuth, setShowAuth] = useState(false); // Control showing auth forms

  const handleBooking = (bike, duration) => {
    setBookingDetails({ bike, duration });
  };

  const handlePaymentSuccess = () => {
    alert('Thank you for your payment! Your booking is confirmed.');
    setBookingDetails(null); // Reset booking after payment
  };

  const handleSignupSuccess = () => {
    setUser({ email: 'user@example.com' }); // Simulate user login
    setShowAuth(false); // Hide auth forms after signup
    alert('Signup successful!');
  };

  const handleLoginSuccess = () => {
    setUser({ email: 'user@example.com' }); // Simulate user login
    setShowAuth(false); // Hide auth forms after login
    alert('Login successful!');
  };

  const handleLogout = () => {
    setUser(null); // Simulate user logout
    setShowAuth(false); // Hide auth forms on logout
    alert('Logged out');
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            showAuth && !user ? (
              <div className="auth-container">
                <div className="auth-wrapper">
                  <button className="back-btn" onClick={() => setShowAuth(false)}>
                    ← Back to Home
                  </button>
                  <SignupForm onSignupSuccess={handleSignupSuccess} />
                  <LoginForm onLoginSuccess={handleLoginSuccess} />
                </div>
              </div>
            ) : (
              <>
                <HeroSection />
                <WhyChooseUs />
                <ClientReviews />
              </>
            )
          } />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
