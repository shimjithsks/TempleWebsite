import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function TouristPlaces() {
  const places = [
    {
      name: 'Muzhappilangad Drive-in Beach',
      distance: '8 km',
      description: 'India\'s longest drive-in beach, perfect for a scenic drive along the coast. Popular for swimming and water sports.',
      timing: 'Open 24 hours',
      entry: 'Free'
    },
    {
      name: 'Thalassery Fort',
      distance: '12 km',
      description: 'Historic fort built by British East India Company in 1708. Great views of the Arabian Sea.',
      timing: '8:00 AM - 6:00 PM',
      entry: '₹25'
    },
    {
      name: 'Dharmadam Island',
      distance: '15 km',
      description: 'Small island covered with coconut palms and dense vegetation. Accessible during low tide.',
      timing: 'Best at low tide',
      entry: 'Free'
    },
    {
      name: 'Parassinikadavu Snake Park',
      distance: '18 km',
      description: 'Home to various species of snakes and other reptiles. Educational and conservation center.',
      timing: '9:00 AM - 5:00 PM',
      entry: '₹50'
    },
    {
      name: 'Payyambalam Beach',
      distance: '20 km',
      description: 'Beautiful beach in Kannur with a well-maintained park. Ideal for evening walks and sunset views.',
      timing: 'Open 24 hours',
      entry: 'Free'
    },
    {
      name: 'Arakkal Museum',
      distance: '22 km',
      description: 'Museum showcasing the history of Kerala\'s only Muslim royal family. Rich artifacts and historical documents.',
      timing: '10:00 AM - 5:00 PM (Closed Mon)',
      entry: '₹20'
    },
  ];

  return (
    <>
      <PageBanner title="Tourist Places Nearby" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Explore the beautiful tourist destinations near our temple. Plan a complete trip combining
                spiritual visit with sightseeing.
              </Typography>

              <Grid container spacing={3}>
                {places.map((place, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
                          <LocationOnIcon sx={{ color: '#E63946', fontSize: 30 }} />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946' }}>
                              {place.name}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ color: '#E63946', fontWeight: 600 }}>
                              📍 {place.distance} from temple
                            </Typography>
                          </Box>
                        </Box>

                        <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                          {place.description}
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2, pt: 2, borderTop: '1px solid #eee' }}>
                          <Box>
                            <Typography variant="caption" sx={{ color: '#666', fontWeight: 600 }}>
                              Timing:
                            </Typography>
                            <Typography variant="body2">{place.timing}</Typography>
                          </Box>
                          <Box>
                            <Typography variant="caption" sx={{ color: '#666', fontWeight: 600 }}>
                              Entry Fee:
                            </Typography>
                            <Typography variant="body2">{place.entry}</Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Travel Tips</Typography>
                <Typography>• Rent a vehicle for convenient travel between destinations</Typography>
                <Typography>• Best season: October to March (pleasant weather)</Typography>
                <Typography>• Carry water, snacks, and sunscreen</Typography>
                <Typography>• Check timings before visiting, especially on Mondays</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby/tourist-places" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
