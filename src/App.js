import React from 'react';
import './App.css'; // We'll style this later

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Bike Rental Service</h1>
        <p>Find the perfect bike for your ride!</p>
        <button onClick={() => alert('Go to bike rentals')}>Browse Bikes</button>
      </header>
    </div>
  );
}

export default App;
