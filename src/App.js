import React from 'react';
import './App.css';
import BikeList from './components/BikeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Bike Rental Service</h1>
        <p>Find the perfect bike for your ride!</p>
        <button onClick={() => alert('Go to bike rentals')}>Browse Bikes</button>
      </header>
      <BikeList />
    </div>
  );
}

export default App;
