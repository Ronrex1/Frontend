import React, { useState } from 'react';

const Notification = () => {
  const [message, setMessage] = useState('No new notifications');

  const receiveNotification = () => {
    setMessage('New flight update available!');
  };

  return (
    <div>
      <h2>Notifications</h2>
      <p>{message}</p>
      <button onClick={receiveNotification}>Simulate Notification</button>
    </div>
  );
};

export default Notification;

