import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Container, Typography, Box, MenuItem, Select, FormControl, InputLabel, FormControlLabel, Checkbox } from '@mui/material';

function BookingPageNav2024() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    fecha: '2024-12-24', // Fecha fija para la cena del 24 de diciembre
    unidades: 1,
    tipoCena: '',
    deseaReservar: false,
    alergias: 'No',
    direccion: '',
    whatsapp: '',
    costoReserva: 300000, // Costo de la reserva por una unidad
  });

  const [timeRemaining, setTimeRemaining] = useState(null);
  const promoEndDate = new Date('2024-12-10T23:59:59'); // Fecha límite para la promoción del 10% de descuento
  const noBookingDate = new Date('2024-12-20T23:59:59'); // Fecha límite para hacer reservas (después de esta fecha, no se permite reservar)
  const currentDate = new Date();

  // Actualiza la cuenta regresiva cada segundo
  useEffect(() => {
    if (currentDate < promoEndDate) {
      const interval = setInterval(() => {
        const now = new Date();
        const timeDiff = promoEndDate - now;
        if (timeDiff <= 0) {
          clearInterval(interval);
          setTimeRemaining(null);
        } else {
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
          setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.name === "unidades" ? parseInt(e.target.value) : e.target.value;
    setFormData((prevFormData) => {
      const newCost = e.target.name === "unidades" ? value * 300000 : prevFormData.costoReserva;
      return {
        ...prevFormData,
        [e.target.name]: value,
        costoReserva: currentDate < promoEndDate ? newCost * 0.9 : newCost, // Aplica el descuento si es antes del 10 de diciembre
      };
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.alergias !== 'No') {
      alert('No podemos proceder debido a las alergias registradas. Por favor, revise la lista de ingredientes.');
      return;
    }
    if (!formData.deseaReservar) {
      alert('Debe confirmar su deseo de reservar para poder proceder.');
      return;
    }

    // Verificamos si la fecha actual es posterior al 20 de diciembre para evitar el envío
    if (currentDate > noBookingDate) {
      alert('La fecha para hacer reservas ha pasado, no se pueden realizar más reservas.');
      return;
    }

    // Si es antes del 10 de diciembre, aplicamos el descuento
    const finalCost = currentDate < promoEndDate ? formData.costoReserva * 0.9 : formData.costoReserva;

    // Aquí deberías poner la URL del formulario de envío
    fetch('https://formspree.io/f/xqazwbnj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        costoReserva: finalCost, // Enviamos el costo actualizado con descuento, si aplica
      })
    })
    .then(response => {
      if (response.ok) {
        alert('¡Reserva realizada con éxito!');
        setFormData({
          nombre: '',
          correo: '',
          fecha: '2024-12-24',
          unidades: 1,
          tipoCena: '',
          deseaReservar: false,
          alergias: 'No',
          direccion: '',
          whatsapp: '',
          costoReserva: 300000,
        });
      } else {
        alert('Hubo un error al realizar la reserva.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error al realizar la reserva.');
    });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5, mb: 1 }}>
        <Typography variant="h4" gutterBottom align="center">
          Reserva para la Cena de Navidad 2024
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          El costo de la reserva es de $300,000 por unidad, con el saldo de $300,000 a pagar el día del evento. 
          Recuerde que para confirmar la reserva, debe realizar el pago del 50% y enviarnos la captura de pantalla del pago al WhatsApp 3245365007.
        </Typography>
        <Typography variant="body2" align="center" paragraph>
          Nuestro menú alcanza para de 8 a 10 personas. Si su grupo es mayor a eso, le recomendamos adquirir más de una unidad.
        </Typography>

        {currentDate < promoEndDate && (
          <Typography variant="h6" align="center" color="error" paragraph>
            ¡Aproveche el 10% de descuento! Quedan {timeRemaining} para hacer su reserva antes del 10 de diciembre.
          </Typography>
        )}

        {currentDate > promoEndDate && currentDate <= noBookingDate && (
          <Typography variant="h6" align="center" color="warning" paragraph>
            ¡La promoción del 10% ha terminado! No hay descuento, pero aún puede realizar su reserva antes del 20 de diciembre.
          </Typography>
        )}

        {currentDate > noBookingDate && (
          <Typography variant="h6" align="center" color="error" paragraph>
            Las reservas ya no están disponibles después del 20 de diciembre.
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre Completo"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Correo Electrónico"
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Fecha de la Cena"
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
                disabled // La fecha está fija
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Dirección de Recogida o Entrega"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="tipo-cena-label">Tipo de Cena</InputLabel>
                <Select
                  labelId="tipo-cena-label"
                  name="tipoCena"
                  value={formData.tipoCena}
                  onChange={handleChange}
                  label="Tipo de Cena"
                >
                  <MenuItem value="Salmón Glaseado con Puré de Papas">"Euforia Dorada (Salmón Glaseado con Puré de Papas y ensalada)"</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="unidades-label">Número de Unidades</InputLabel>
                <Select
                  labelId="unidades-label"
                  name="unidades"
                  value={formData.unidades}
                  onChange={handleChange}
                  label="Número de Unidades"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="alergias-label">¿Es alérgico a nueces o alguno de los ingredientes?</InputLabel>
                <Select
                  labelId="alergias-label"
                  name="alergias"
                  value={formData.alergias}
                  onChange={handleChange}
                  label="Alergias"
                >
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Sí">Sí</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Número de WhatsApp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.deseaReservar}
                    onChange={handleCheckboxChange}
                    name="deseaReservar"
                  />
                }
                label="Confirmo que quiero realizar la reserva"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" align="center">
                Total a pagar: ${formData.costoReserva.toLocaleString()} COP
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={currentDate > noBookingDate} // Deshabilita el botón después del 20 de diciembre
              >
                Confirmar Reserva
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default BookingPageNav2024;
