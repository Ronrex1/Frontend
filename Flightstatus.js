import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Flightstatus.css';

const FlightStatus = () => {
  const [flights, setFlights] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFlight, setFilteredFlight] = useState(null);

  useEffect(() => {
    const fetchFlightStatus = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/flights');
        setFlights(response.data);
      } catch (error) {
        setFlights([{ flight_id: 'Error', status: 'Error fetching flight status', gate_change: '' }]);
      }
    };

    fetchFlightStatus();
  }, []);

  const handleSearch = () => {
    const flight = flights.find(flight => flight.flight_id === searchTerm.toUpperCase());
    setFilteredFlight(flight);
  };

  return (
    <div className="flight-status-container">
      <h2>Flight Status</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter flight number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {filteredFlight ? (
        <div className="flight-card">
          <p><strong>Flight ID:</strong> {filteredFlight.flight_id}</p>
          <p><strong>Departure Airport:</strong> {filteredFlight.departure_airport}</p>
          <p><strong>Arrival Airport:</strong> {filteredFlight.arrival_airport}</p>
          <p><strong>Departure Time:</strong> {new Date(filteredFlight.departure_time).toLocaleString()}</p>
          <p><strong>Arrival Time:</strong> {new Date(filteredFlight.arrival_time).toLocaleString()}</p>
          <p><strong>Status:</strong> {filteredFlight.status}</p>
          <p><strong>Gate Change:</strong> {filteredFlight.gate_change}</p>
        </div>
      ) : (
        <div>
          {flights.map((flight, index) => (
            <div key={index} className="flight-card">
              <p><strong>Flight ID:</strong> {flight.flight_id}</p>
              <p><strong>Departure Airport:</strong> {flight.departure_airport}</p>
              <p><strong>Arrival Airport:</strong> {flight.arrival_airport}</p>
              <p><strong>Departure Time:</strong> {new Date(flight.departure_time).toLocaleString()}</p>
              <p><strong>Arrival Time:</strong> {new Date(flight.arrival_time).toLocaleString()}</p>
              <p><strong>Status:</strong> {flight.status}</p>
              <p><strong>Gate Change:</strong> {flight.gate_change}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlightStatus;
