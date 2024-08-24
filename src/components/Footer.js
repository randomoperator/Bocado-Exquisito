// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import CSS if needed

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Catering Business. All rights reserved.</p>
    </footer>
  );
}

export default Footer;