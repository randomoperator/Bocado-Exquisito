// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import MenuPage from './components/MenuPage';
import BookingPage from './components/BookingPage';
import ContactPage from './components/ContactPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import theme from './theme'; // Import your custom theme
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap with ThemeProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceTitle" element={<ServiceDetailPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
      </ThemeProvider>
      
  );
}

export default App;
