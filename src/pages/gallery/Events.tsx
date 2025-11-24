import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';

export default function GalleryEvents() {
  const events = [
    { 
      name: 'Onam Festival 2024', 
      date: 'September 15-24, 2024',
      description: 'Grand 10-day celebration with cultural programs and traditional poojas',
      photos: 145
    },
    { 
      name: 'Shivaratri Mahothsavam', 
      date: 'March 8, 2024',
      description: 'Night-long vigil with special abhishekam and bhajans',
      photos: 98
    },
    { 
      name: 'Temple Anniversary', 
      date: 'January 20, 2024',
      description: 'Celebrating 150 years of divine service',
      photos: 120
    },
    { 
      name: 'Vishu Celebration', 
      date: 'April 14, 2024',
      description: 'Malayalam New Year with Vishukkani and special offerings',
      photos: 76
    },
  ];

  return (
    <>
      <PageBanner title="Event Gallery" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Browse through our special events and celebrations captured in beautiful moments.
              </Typography>

              <Grid container spacing={3}>
                {events.map((event, index) => (
                  <Grid item xs={12} key={index}>
                    <Card elevation={2} sx={{ '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={8}>
                            <Typography variant="h5" sx={{ fontWeight: 600, color: '#E63946', mb: 1 }}>
                              {event.name}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: '#666', mb: 2 }}>
                              {event.date}
                            </Typography>
                            <Typography variant="body1">{event.description}</Typography>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            md={4}
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          >
                            <Box sx={{ textAlign: 'center' }}>
                              <Typography variant="h3" sx={{ color: '#E63946', fontWeight: 700 }}>
                                {event.photos}
                              </Typography>
                              <Typography variant="body2" sx={{ color: '#666' }}>
                                Photos Available
                              </Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="gallery" activePath="/gallery/events" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
