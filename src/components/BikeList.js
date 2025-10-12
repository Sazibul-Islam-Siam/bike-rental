import React from 'react';

function BikeList() {
  const bikes = [
    { id: 1, name: "Mountain Bike", price: 20 },
    { id: 2, name: "Road Bike", price: 15 },
    { id: 3, name: "Electric Bike", price: 30 },
  ];

  return (
    <div>
      <h2>Available Bikes</h2>
      <ul>
        {bikes.map((bike) => (
          <li key={bike.id}>
            <h3>{bike.name}</h3>
            <p>Price per hour: ${bike.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BikeList;
