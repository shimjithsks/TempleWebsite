import React, { useState } from 'react';
import PageBanner from '../../components/PageBanner';
import PoojaSidebar from '../../components/PoojaSidebar';
import { Container, Typography, Box, Paper, TextField, Button, Grid, MenuItem } from '@mui/material';

export default function PoojaBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pooja: '',
    date: '',
    star: '',
    message: ''
  });

  const poojaTypes = [
    'Daily Pooja',
    'Ganapathi Homam',
    'Saraswathi Pooja',
    'Lakshmi Pooja',
    'Navagraha Pooja',
    'Ayush Homam',
    'Special Archana'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking request submitted! Our team will contact you shortly.');
  };

  return (
    <>
      <PageBanner title="Pooja Booking / Offerings" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', textAlign: 'center' }}>
                Book your pooja or make offerings online. Fill in the details below and our team will confirm your booking.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      select
                      label="Select Pooja"
                      value={formData.pooja}
                      onChange={(e) => setFormData({ ...formData, pooja: e.target.value })}
                      required
                    >
                      {poojaTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Preferred Date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      InputLabelProps={{ shrink: true }}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Birth Star (Nakshatra)"
                      value={formData.star}
                      onChange={(e) => setFormData({ ...formData, star: e.target.value })}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Additional Message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        bgcolor: '#E63946',
                        py: 1.5,
                        '&:hover': { bgcolor: '#d62839' },
                      }}
                    >
                      Submit Booking Request
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Important Notes</Typography>
                <Typography>• Advance booking recommended (minimum 2 days)</Typography>
                <Typography>• Confirmation will be sent via email/SMS</Typography>
                <Typography>• Payment can be made at temple or online</Typography>
                <Typography>• For urgent bookings, call: +91-XXXXXXXXXX</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <PoojaSidebar activePath="/poojas/booking" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
