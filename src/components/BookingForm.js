import React, { useState } from 'react';

function BookingForm({ bike, onBooking }) {
  const [duration, setDuration] = useState(1); // default duration is 1 hour

  const handleBooking = (e) => {
    e.preventDefault();
    onBooking(bike, duration); // pass bike and duration to the parent component
  };

  return (
    <div className="booking-form">
      <h3>Book {bike.name}</h3>
      <p>Price per hour: ${bike.price}</p>
      <form onSubmit={handleBooking}>
        <div>
          <label>Rental Duration (hours):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            min="1"
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
