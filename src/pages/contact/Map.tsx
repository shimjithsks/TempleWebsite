import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

export default function ContactMap() {
  return (
    <>
      <PageBanner title="Map & Directions" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Find us easily using the map below or follow the directions from major landmarks.
              </Typography>

              <Box
                sx={{
                  height: 450,
                  bgcolor: '#e0e0e0',
                  borderRadius: 2,
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h6" sx={{ color: '#666' }}>
                  [Google Maps Embed Would Go Here]
                </Typography>
              </Box>

              <Box sx={{ p: 3, bgcolor: '#ffebee', borderRadius: 2, mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>From Kannur International Airport</Typography>
                <Typography>1. Head south on Airport Road toward NH66</Typography>
                <Typography>2. Turn right onto NH66</Typography>
                <Typography>3. Continue for approximately 28 km</Typography>
                <Typography>4. Turn left at Muchukunnu Junction</Typography>
                <Typography>5. Temple is 500m on the right</Typography>
                <Typography sx={{ mt: 2, fontWeight: 600 }}>Distance: 35 km | Time: 45 minutes</Typography>
              </Box>

              <Box sx={{ p: 3, bgcolor: '#e3f2fd', borderRadius: 2, mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>From Thalassery Railway Station</Typography>
                <Typography>1. Exit station and head toward Thalassery town</Typography>
                <Typography>2. Take Thalassery-Kannur Road (NH66)</Typography>
                <Typography>3. Continue for 6 km</Typography>
                <Typography>4. Turn right at Muchukunnu Junction</Typography>
                <Typography>5. Temple is 500m ahead</Typography>
                <Typography sx={{ mt: 2, fontWeight: 600 }}>Distance: 8 km | Time: 20 minutes</Typography>
              </Box>

              <Box sx={{ p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Landmarks</Typography>
                <Typography>• Near Muchukunnu Junction (Main landmark)</Typography>
                <Typography>• 2 km from Muzhappilangad Beach</Typography>
                <Typography>• Opposite Government School</Typography>
                <Typography>• Next to Muchukunnu Post Office</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="contact" activePath="/contact/map" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
