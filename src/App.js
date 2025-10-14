import React, { useState } from 'react';
import './App.css';
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
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Bike Rental Service</h1>
        <p>Find the perfect bike for your ride!</p>
        <div style={{ marginBottom: '20px' }}>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={() => setShowAuth(!showAuth)}>
              {showAuth ? 'Back to Home' : 'Login / Signup'}
            </button>
          )}
        </div>
        {showAuth && !user ? (
          <div>
            <SignupForm onSignupSuccess={handleSignupSuccess} />
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        ) : (
          <div>
            <BikeList onBooking={handleBooking} />
            {bookingDetails && (
              <PaymentPage
                bike={bookingDetails.bike}
                duration={bookingDetails.duration}
                onPaymentSuccess={handlePaymentSuccess}
              />
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
