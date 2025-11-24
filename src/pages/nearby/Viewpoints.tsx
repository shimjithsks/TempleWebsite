import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

export default function Viewpoints() {
  const viewpoints = [
    { name: 'Ezhimala Hill', distance: '35 km', height: '286m', description: 'Panoramic views of Arabian Sea and surrounding landscape. Historic naval academy location.' },
    { name: 'Dharmadam Island View', distance: '15 km', height: 'Sea level', description: 'Unique viewpoint to see the island and coastal beauty. Best during low tide.' },
    { name: 'Thalassery Fort Top', distance: '12 km', height: '50m', description: 'Historic viewpoint overlooking the sea. Sunset views are spectacular.' },
    { name: 'Pazhassi Dam', distance: '42 km', height: '145m', description: 'Serene dam surrounded by hills. Perfect for nature photography and relaxation.' },
  ];

  return (
    <>
      <PageBanner title="Scenic Viewpoints" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Grid container spacing={3}>
                {viewpoints.map((point, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946', mb: 1 }}>
                          {point.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#E63946', fontWeight: 600, mb: 2 }}>
                          {point.distance} • Elevation: {point.height}
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                          {point.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby/viewpoints" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
