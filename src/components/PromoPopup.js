import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Box, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BookingPage from './BookingPage'; // Importar el componente de la página de reservas

const PromoPopup = ({ open, onClose }) => {
  // Definimos la fecha límite de la promoción (10 de diciembre)
  const promoEndDate = new Date('2024-12-10T23:59:59');
  const currentDate = new Date();

  // Verificamos si la fecha actual es antes del 10 de diciembre para aplicar el descuento
  const isDiscountAvailable = currentDate < promoEndDate;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{ '& .MuiDialog-paper': { borderRadius: 4 } }}
    >
      <DialogTitle>
        <Typography variant="h6">¡Promoción Especial!</Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Container>
          <Typography variant="body1" paragraph>
            ¡Nos complace ofrecerte una promoción especial en nuestros servicios de catering! Realiza tu reserva ahora y disfruta de un descuento exclusivo.
          </Typography>
          {isDiscountAvailable && (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" color="primary">
                ¡Reserva antes del 10 de diciembre y recibe un 10% de descuento en tu pedido!
              </Typography>
            </Box>
          )}
          <Box>
            <Typography variant="h6" gutterBottom>
              Realiza tu reserva:
            </Typography>
            <BookingPage /> {/* Incluir el componente de la página de reservas */}
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default PromoPopup;