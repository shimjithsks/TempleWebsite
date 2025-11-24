import React from 'react';
import PageBanner from '../../components/PageBanner';
import PoojaSidebar from '../../components/PoojaSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';

export default function SpecialPoojas() {
  const specialPoojas = [
    { name: 'Ganapathi Homam', description: 'For removing obstacles and seeking blessings', price: '₹500' },
    { name: 'Ayush Homam', description: 'For longevity and good health', price: '₹750' },
    { name: 'Saraswathi Pooja', description: 'For education and wisdom', price: '₹450' },
    { name: 'Lakshmi Pooja', description: 'For prosperity and wealth', price: '₹600' },
    { name: 'Navagraha Pooja', description: 'For planetary relief', price: '₹1000' },
    { name: 'Kalasam', description: 'Special ritual for all occasions', price: '₹2000' },
  ];

  return (
    <>
      <PageBanner title="Special Poojas" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Our temple offers a variety of special poojas for devotees. These poojas can be booked in advance 
                by contacting the temple office or through online booking.
              </Typography>

              <Grid container spacing={3}>
                {specialPoojas.map((pooja, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#E63946', mb: 1 }}>
                          {pooja.name}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>
                          {pooja.description}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#E63946', fontWeight: 700 }}>
                          {pooja.price}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Booking Information</Typography>
                <Typography>• Advance booking required (minimum 2 days)</Typography>
                <Typography>• Contact temple office: +91-XXXXXXXXXX</Typography>
                <Typography>• Email: poojas@muchukunnutemple.org</Typography>
                <Typography>• Online booking available through our portal</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <PoojaSidebar activePath="/poojas/special" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
