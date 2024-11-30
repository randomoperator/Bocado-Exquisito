import React, { useState, useEffect, useMemo } from 'react';
import { TextField, Button, Grid, Container, Typography, Box, MenuItem, Select, FormControl, InputLabel, FormControlLabel, Checkbox } from '@mui/material';

function BookingPageNav2024() {
  const promoEndDate = useMemo(() => new Date('2024-12-10T23:59:59'), []);
  const noBookingDate = useMemo(() => new Date('2024-12-20T23:59:59'), []);
  const currentDate = useMemo(() => new Date(), []);

  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    fecha: '2024-12-24',
    unidades: 1,
    tipoCena: '',
    deseaReservar: false,
    alergias: 'No', // Cambiado para ser un valor de "Sí" o "No"
    direccion: '',
    whatsapp: '',
    costoReserva: 3250000,
  });

  const [timeRemaining, setTimeRemaining] = useState(null);

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
  }, [currentDate, promoEndDate]);

  const handleChange = (e) => {
    const value = e.target.name === "unidades" ? parseInt(e.target.value) : e.target.value;
    setFormData((prevFormData) => {
      const newCost = e.target.name === "unidades" ? value * 350000 : prevFormData.costoReserva;
      return {
        ...prevFormData,
        [e.target.name]: value,
        costoReserva: currentDate < promoEndDate ? newCost * 0.9 : newCost,
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
    if (formData.alergias === 'Sí') {
      alert('No podemos proceder debido a las alergias registradas. Por favor, revise la lista de ingredientes.');
      return;
    }
    if (!formData.deseaReservar) {
      alert('Debe confirmar su deseo de reservar para poder proceder.');
      return;
    }
  
    if (currentDate > noBookingDate) {
      alert('La fecha para hacer reservas ha pasado, no se pueden realizar más reservas.');
      return;
    }
  
    const finalCost = currentDate < promoEndDate ? formData.costoReserva * 0.9 : formData.costoReserva;
  
    fetch('https://formspree.io/f/xqazwbnj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        costoReserva: finalCost,
      }),
    })
      .then((response) => {
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
            costoReserva: 350000,
          });
          // Redirigir a WhatsApp
          window.location.href = 'https://wa.me/+573245365007?text=Hola Bocado-Exquisito, acabo de realizar una reserva y quisiera confirmarla';
        } else {
          alert('Hubo un error al realizar la reserva.');
        }
      })
      .catch((error) => {
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
          El costo de la cena es de $650.000 por unidad (Suficiente para 8 - 10 personas), para realizar la reserva, debe realizar un adelanto del 50% del valor total de la orden al nequi 3245936835 o a la cta de ahorros bancolombia 78841049852 y enviar soporte de la transferencia al whatsapp 3245365007, el 50% restante debe ser cancelado el dia de la entrega del pedido.  
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
                disabled
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
                  {[1, 2, 3, 4, 5].map((value) => (
                    <MenuItem key={value} value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="alergias-label">¿Tiene Alergias?</InputLabel>
                <Select
                  labelId="alergias-label"
                  name="alergias"
                  value={formData.alergias}
                  onChange={handleChange}
                  label="¿Tiene Alergias?"
                >
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Sí">Sí</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox checked={formData.deseaReservar} onChange={handleCheckboxChange} name="deseaReservar" />}
                label="Confirmo que quiero realizar la reserva"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
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