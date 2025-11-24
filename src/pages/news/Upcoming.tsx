import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Chip } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';

export default function UpcomingEvents() {
  const events = [
    {
      name: 'Navaratri Festival',
      date: 'December 5-13, 2025',
      time: '5:00 AM - 9:00 PM',
      description: 'Nine days of divine celebrations with special poojas to Goddess Durga',
      highlights: ['Daily Cultural Programs', 'Kumari Pooja', 'Traditional Dance', 'Special Prasadam']
    },
    {
      name: 'Deepavali Celebration',
      date: 'December 20, 2025',
      time: '5:00 AM - 10:00 PM',
      description: 'Festival of lights with special lighting arrangements and poojas',
      highlights: ['1000+ Oil Lamps', 'Fireworks Display', 'Special Abhishekam', 'Sweet Distribution']
    },
    {
      name: 'Sanskrit Workshop',
      date: 'January 10-12, 2026',
      time: '9:00 AM - 5:00 PM',
      description: 'Three-day workshop on Sanskrit language and Vedic chanting',
      highlights: ['Expert Teachers', 'Free Course Material', 'Certificate', 'Limited Seats']
    },
    {
      name: 'Temple Anniversary',
      date: 'January 20, 2026',
      time: '4:00 AM - 10:00 PM',
      description: 'Celebrating 151 years of divine service to the community',
      highlights: ['Grand Procession', 'Cultural Programs', 'Special Feast', 'VIP Guests']
    },
  ];

  return (
    <>
      <PageBanner title="Upcoming Events" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Mark your calendars for these upcoming events and celebrations at our temple.
              </Typography>

              <Grid container spacing={3}>
                {events.map((event, index) => (
                  <Grid item xs={12} key={index}>
                    <Card elevation={2} sx={{ '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                          <EventIcon sx={{ color: '#E63946', fontSize: 40 }} />
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h5" sx={{ fontWeight: 600, color: '#E63946', mb: 1 }}>
                              {event.name}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: '#E63946', fontWeight: 600, mb: 0.5 }}>
                              📅 {event.date}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ color: '#666', mb: 2 }}>
                              🕐 {event.time}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                              {event.description}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {event.highlights.map((highlight, idx) => (
                                <Chip key={idx} label={highlight} size="small" sx={{ bgcolor: '#ffebee', fontWeight: 600 }} />
                              ))}
                            </Box>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Event Registration</Typography>
                <Typography>
                  Some events require prior registration. Please contact the temple office or register online through our booking portal.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news/upcoming" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
