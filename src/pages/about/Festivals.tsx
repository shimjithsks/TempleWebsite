import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';

export default function Festivals() {
  const majorFestivals = [
    {
      name: 'Shivaratri',
      month: 'February/March',
      duration: '1 Day',
      description: 'The most important festival celebrating Lord Shiva. Night-long vigil with abhishekam every hour, special rituals, and bhajan sessions.',
      specialRituals: ['Rudra Abhishekam', 'Pradosham', 'Midnight Aarti', 'All-night Bhajans']
    },
    {
      name: 'Vishu',
      month: 'April',
      duration: '1 Day',
      description: 'Malayalam New Year celebrated with Vishukkani (first sight), special offerings, and distribution of Vishu Kaineetam.',
      specialRituals: ['Vishukkani Arrangement', 'Special Sadhya', 'Fireworks', 'New Clothes Distribution']
    },
    {
      name: 'Thrissur Pooram',
      month: 'May',
      duration: '1 Day',
      description: 'Grand festival with elephant procession, traditional percussion ensemble, and cultural programs.',
      specialRituals: ['Elephant Procession', 'Panchavadyam', 'Cultural Programs', 'Grand Feast']
    },
    {
      name: 'Onam',
      month: 'August/September',
      duration: '10 Days',
      description: 'Harvest festival celebrated with flower arrangements, traditional feast, cultural programs, and boat races.',
      specialRituals: ['Pookalam', 'Onasadya', 'Traditional Dance', 'Games & Competitions']
    },
    {
      name: 'Navaratri',
      month: 'September/October',
      duration: '9 Days',
      description: 'Nine nights dedicated to Goddess Durga with special poojas, cultural programs, and Kumari Pooja on Mahanavami.',
      specialRituals: ['Daily Cultural Programs', 'Kumari Pooja', 'Saraswathi Pooja', 'Vijayadashami']
    },
    {
      name: 'Deepavali',
      month: 'October/November',
      duration: '1 Day',
      description: 'Festival of lights celebrated with lighting of 1000+ lamps, special poojas, and fireworks.',
      specialRituals: ['1000 Lamps', 'Lakshmi Pooja', 'Fireworks', 'Sweet Distribution']
    },
  ];

  return (
    <>
      <PageBanner title="Temple Festivals" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Our temple celebrates major Hindu festivals with great devotion and enthusiasm. Each festival brings unique rituals, cultural programs, and an opportunity for spiritual renewal.
              </Typography>

              <Grid container spacing={3}>
                {majorFestivals.map((festival, index) => (
                  <Grid item xs={12} key={index}>
                    <Card elevation={2} sx={{ '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={8}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#E63946', mb: 1 }}>
                              {festival.name}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 3, mb: 2 }}>
                              <Typography variant="subtitle1" sx={{ color: '#666', fontWeight: 600 }}>
                                📅 {festival.month}
                              </Typography>
                              <Typography variant="subtitle1" sx={{ color: '#666', fontWeight: 600 }}>
                                ⏱️ {festival.duration}
                              </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                              {festival.description}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Box sx={{ p: 2, bgcolor: '#ffebee', borderRadius: 2, height: '100%' }}>
                              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1rem' }}>
                                Special Rituals:
                              </Typography>
                              {festival.specialRituals.map((ritual, idx) => (
                                <Typography key={idx} variant="body2" sx={{ mb: 0.5 }}>
                                  • {ritual}
                                </Typography>
                              ))}
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Festival Information</Typography>
                <Typography>• Exact dates vary each year based on Malayalam calendar</Typography>
                <Typography>• Extended temple timings during festivals</Typography>
                <Typography>• Special parking and accommodation arrangements</Typography>
                <Typography>• Prasadam distribution after major rituals</Typography>
                <Typography>• Cultural programs in the evening</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="about" activePath="/about/festivals" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
