import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';

export default function Boating() {
  const boatingSpots = [
    {
      name: 'Valapattanam River',
      distance: '10 km',
      type: 'River Boating',
      description: 'Scenic backwater boating through peaceful waterways. Traditional country boats and modern speedboats available.',
      duration: '1-3 hours',
      cost: '₹500-2000'
    },
    {
      name: 'Kavvayi Backwaters',
      distance: '30 km',
      type: 'Backwater Cruise',
      description: 'Third largest backwater in Kerala. Island hopping tours, houseboat cruises, and traditional Kerala boat experiences.',
      duration: '2-6 hours',
      cost: '₹1000-5000'
    },
    {
      name: 'Meenkunnu Beach Boating',
      distance: '18 km',
      type: 'Sea Boating',
      description: 'Exciting sea boating and speed boat rides. Dolphin watching tours during season.',
      duration: '30 min - 1 hour',
      cost: '₹300-800'
    },
  ];

  return (
    <>
      <PageBanner title="Boating & Water Activities" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Experience the serene backwaters and coastal waters of North Kerala through boating activities.
              </Typography>

              <Grid container spacing={3}>
                {boatingSpots.map((spot, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                      <Box
                        sx={{
                          height: 150,
                          bgcolor: `hsl(${index * 90}, 45%, 55%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography sx={{ fontSize: '4rem' }}>⛵</Typography>
                      </Box>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946', mb: 0.5 }}>
                          {spot.name}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: '#E63946', fontWeight: 600, mb: 2 }}>
                          {spot.type} • {spot.distance}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                          {spot.description}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2, borderTop: '1px solid #eee' }}>
                          <Box>
                            <Typography variant="caption" sx={{ color: '#666' }}>Duration</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>{spot.duration}</Typography>
                          </Box>
                          <Box>
                            <Typography variant="caption" sx={{ color: '#666' }}>Cost</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>{spot.cost}</Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Booking & Safety</Typography>
                <Typography>• Advance booking recommended during peak season</Typography>
                <Typography>• Life jackets provided for all passengers</Typography>
                <Typography>• Experienced boat operators and guides</Typography>
                <Typography>• Best season: October to March</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby/boating" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
