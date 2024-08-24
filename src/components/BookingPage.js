// src/components/BookingPage.js
import React, { useState } from 'react';
import './BookingPage.css'; // Import CSS if needed

function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '',
    eventType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking data:', formData);
  };

  return (
    <div>
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Number of Guests:
          <input type="number" name="guests" value={formData.guests} onChange={handleChange} required />
        </label>
        <label>
          Event Type:
          <input type="text" name="eventType" value={formData.eventType} onChange={handleChange} required />
        </label>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

export default BookingPage;