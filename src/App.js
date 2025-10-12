import React, { useState } from 'react';
import './App.css';
import BikeList from './components/BikeList';
import PaymentPage from './components/PaymentPage';

function App() {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBooking = (bike, duration) => {
    setBookingDetails({ bike, duration }); // Store booking details
  };

  const handlePaymentSuccess = () => {
    alert('Thank you for your payment! Your booking is confirmed.');
    setBookingDetails(null); // Reset booking after payment
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Bike Rental Service</h1>
        <p>Find the perfect bike for your ride!</p>
      </header>
      {!bookingDetails ? (
        <BikeList onBooking={handleBooking} />
      ) : (
        <PaymentPage
          bike={bookingDetails.bike}
          duration={bookingDetails.duration}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
}

export default App;
