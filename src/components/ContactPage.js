// src/components/ContactPage.js
import React, { useState } from 'react';
import './ContactPage.css'; // Import CSS if needed

function ContactPage() {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact message:', message);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Your Message:
          <textarea value={message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;