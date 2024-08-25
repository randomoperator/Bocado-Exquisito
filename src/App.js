import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import MenuPage from './components/MenuPage';
import BookingPage from './components/BookingPage';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuItemDetailPage from './components/MenuItemDetailPage';
import FloatingContactButton from './components/FloatingContactButton'; 
import PromoPopup from './components/PromoPopup'; 

function App() {
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopupOpen(true);
    }, 15000); // Show popup after 15 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceTitle" element={<ServiceDetailPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/menu/:itemName" element={<MenuItemDetailPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
          <Footer />
          <FloatingContactButton />
          <PromoPopup open={popupOpen} onClose={() => setPopupOpen(false)} /> {/* Add the popup here */}
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;