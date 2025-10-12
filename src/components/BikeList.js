import React, { useState } from 'react';
import BookingForm from './BookingForm';

function BikeList() {
  const [selectedBike, setSelectedBike] = useState(null);

  const bikes = [
    { id: 1, name: 'Mountain Bike', price: 20 },
    { id: 2, name: 'Road Bike', price: 15 },
    { id: 3, name: 'Electric Bike', price: 30 },
  ];

  const handleBooking = (bike, duration) => {
    alert(`You booked a ${bike.name} for ${duration} hour(s). Total cost: $${bike.price * duration}`);
    setSelectedBike(null); // reset selection after booking
  };

  return (
    <div>
      <h2>Available Bikes</h2>
      <ul>
        {bikes.map((bike) => (
          <li key={bike.id}>
            <h3>{bike.name}</h3>
            <p>Price per hour: ${bike.price}</p>
            <button onClick={() => setSelectedBike(bike)}>Book Now</button>
          </li>
        ))}
      </ul>

      {selectedBike && <BookingForm bike={selectedBike} onBooking={handleBooking} />}
    </div>
  );
}

export default BikeList;
