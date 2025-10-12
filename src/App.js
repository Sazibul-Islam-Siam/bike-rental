import React, { useState } from 'react';
import './App.css';
import BikeList from './components/BikeList';
import PaymentPage from './components/PaymentPage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [user, setUser] = useState(null); // Store the logged-in user

  const handleBooking = (bike, duration) => {
    setBookingDetails({ bike, duration });
  };

  const handlePaymentSuccess = () => {
    alert('Thank you for your payment! Your booking is confirmed.');
    setBookingDetails(null); // Reset booking after payment
  };

  const handleSignupSuccess = () => {
    setUser({ email: 'user@example.com' }); // Simulate user login
    alert('Signup successful!');
  };

  const handleLoginSuccess = () => {
    setUser({ email: 'user@example.com' }); // Simulate user login
    alert('Login successful!');
  };

  const handleLogout = () => {
    setUser(null); // Simulate user logout
    alert('Logged out');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Bike Rental Service</h1>
        <p>Find the perfect bike for your ride!</p>
        {user ? (
          <div>
            <button onClick={handleLogout}>Logout</button>
            <BikeList onBooking={handleBooking} />
            {bookingDetails && (
              <PaymentPage
                bike={bookingDetails.bike}
                duration={bookingDetails.duration}
                onPaymentSuccess={handlePaymentSuccess}
              />
            )}
          </div>
        ) : (
          <div>
            <SignupForm onSignupSuccess={handleSignupSuccess} />
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
