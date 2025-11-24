import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';

export default function Beaches() {
  const beaches = [
    {
      name: 'Muzhappilangad Beach',
      distance: '8 km',
      specialty: 'Drive-in Beach',
      description: 'India\'s longest drive-in beach. Perfect for swimming, driving, and water sports. Clean and well-maintained.',
      activities: ['Swimming', 'Beach Drive', 'Parasailing', 'Water Sports']
    },
    {
      name: 'Payyambalam Beach',
      distance: '20 km',
      specialty: 'Family Beach',
      description: 'Beautiful beach with a well-maintained park. Ideal for families with children. Great sunset views.',
      activities: ['Swimming', 'Evening Walks', 'Park Visits', 'Photography']
    },
    {
      name: 'Meenkunnu Beach',
      distance: '18 km',
      specialty: 'Scenic Beach',
      description: 'Serene and less crowded beach. Perfect for relaxation and enjoying nature. Beautiful coastal views.',
      activities: ['Beach Walks', 'Photography', 'Relaxation', 'Sunset Views']
    },
    {
      name: 'Kizhunna Beach',
      distance: '22 km',
      specialty: 'Rocky Beach',
      description: 'Unique beach with natural rock formations. Ideal for adventurous visitors and photographers.',
      activities: ['Rock Climbing', 'Photography', 'Trekking', 'Exploration']
    },
    {
      name: 'Thottada Beach',
      distance: '25 km',
      specialty: 'Quiet Retreat',
      description: 'Peaceful and pristine beach away from crowds. Perfect for meditation and quiet reflection.',
      activities: ['Meditation', 'Quiet Walks', 'Bird Watching', 'Reading']
    },
  ];

  return (
    <>
      <PageBanner title="Beaches Near Temple" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Discover the beautiful beaches of North Kerala. From the famous drive-in beach to serene
                secluded shores, there's something for everyone.
              </Typography>

              <Grid container spacing={3}>
                {beaches.map((beach, index) => (
                  <Grid item xs={12} key={index}>
                    <Card elevation={2} sx={{ '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={8}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#E63946', mb: 0.5 }}>
                              {beach.name}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: '#E63946', fontWeight: 600, mb: 1 }}>
                              {beach.specialty} • {beach.distance}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                              {beach.description}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {beach.activities.map((activity, idx) => (
                                <Box
                                  key={idx}
                                  sx={{
                                    px: 2,
                                    py: 0.5,
                                    bgcolor: '#e3f2fd',
                                    borderRadius: 3,
                                    fontSize: '0.85rem',
                                  }}
                                >
                                  {activity}
                                </Box>
                              ))}
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                              sx={{
                                width: '100%',
                                height: 150,
                                bgcolor: `hsl(${index * 60}, 40%, 60%)`,
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Typography sx={{ color: '#fff', fontSize: '3rem' }}>🏖️</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Beach Safety Tips</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography>• Swim only in designated areas</Typography>
                    <Typography>• Follow lifeguard instructions</Typography>
                    <Typography>• Avoid swimming during high tide</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>• Don't leave valuables unattended</Typography>
                    <Typography>• Use sunscreen and stay hydrated</Typography>
                    <Typography>• Best time: Early morning or evening</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby/beaches" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
