import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

export default function NearbyTemples() {
  const temples = [
    { name: 'Parassinikadavu Muthappan Temple', distance: '18 km', deity: 'Muthappan', description: 'Famous for daily Theyyam ritual. Unique temple where non-vegetarian offerings are made.' },
    { name: 'Madayikkavu Bhagavathy Temple', distance: '25 km', deity: 'Goddess Bhagavathy', description: 'Ancient temple known for Kaliyattam festival. Beautiful architecture.' },
    { name: 'Trichambaram Temple', distance: '22 km', deity: 'Lord Krishna', description: 'Important Krishna temple with special poojas. Annual festival is grand.' },
    { name: 'Sree Rajarajeshwara Temple', distance: '28 km', deity: 'Lord Shiva', description: 'Historic Shiva temple with traditional Kerala architecture.' },
  ];

  return (
    <>
      <PageBanner title="Temples Nearby" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Grid container spacing={3}>
                {temples.map((temple, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946', mb: 1 }}>
                          {temple.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#E63946', fontWeight: 600, mb: 0.5 }}>
                          {temple.deity}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#666', mb: 2, display: 'block' }}>
                          📍 {temple.distance}
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                          {temple.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby/temples" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
