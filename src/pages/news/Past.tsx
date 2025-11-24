import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';

export default function PastEvents() {
  const pastEvents = [
    {
      name: 'Onam Festival 2024',
      date: 'September 15-24, 2024',
      attendance: '5000+ devotees',
      description: 'Grand 10-day celebration with traditional poojas, Pookalam competition, and cultural programs',
      photos: 145
    },
    {
      name: 'Shivaratri Mahothsavam 2024',
      date: 'March 8, 2024',
      attendance: '3500+ devotees',
      description: 'Night-long vigil with special abhishekam every hour and continuous bhajan sessions',
      photos: 98
    },
    {
      name: 'Temple 150th Anniversary',
      date: 'January 20, 2024',
      attendance: '8000+ devotees',
      description: 'Historical milestone celebration with grand procession and cultural extravaganza',
      photos: 220
    },
    {
      name: 'Vishu Celebration 2024',
      date: 'April 14, 2024',
      attendance: '2000+ devotees',
      description: 'Malayalam New Year with traditional Vishukkani and special offerings',
      photos: 76
    },
    {
      name: 'Yoga & Meditation Retreat',
      date: 'February 15-17, 2024',
      attendance: '150 participants',
      description: 'Three-day spiritual retreat with yoga sessions, meditation, and spiritual discourses',
      photos: 45
    },
  ];

  return (
    <>
      <PageBanner title="Past Events" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Relive the beautiful moments from our past events and celebrations.
              </Typography>

              <Grid container spacing={3}>
                {pastEvents.map((event, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: '#E63946', mb: 1 }}>
                          {event.name}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#E63946', fontWeight: 600, mb: 1 }}>
                          {event.date}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', mb: 2, fontWeight: 600 }}>
                          👥 {event.attendance}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                          {event.description}
                        </Typography>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mt: 2,
                            pt: 2,
                            borderTop: '1px solid #eee',
                          }}
                        >
                          <Typography variant="body2" sx={{ color: '#666' }}>
                            📸 {event.photos} photos available
                          </Typography>
                          <Typography
                            sx={{
                              color: '#E63946',
                              fontWeight: 600,
                              cursor: 'pointer',
                              '&:hover': { textDecoration: 'underline' },
                            }}
                          >
                            View Gallery →
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news/past" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
