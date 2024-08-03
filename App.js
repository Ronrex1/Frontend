import React from 'react';
import './App.css';
import FlightStatus from './components/Flightstatus.js';
import Notification from './components/Notifications.js';

function App() {
  return (
    <div className="App">
      <h1>Flight Status and Notifications</h1>
      <FlightStatus />
      <Notification />
    </div>
  );
}

export default App;

