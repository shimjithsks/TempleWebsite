import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

export default function GalleryPremises() {
  const areas = [
    'Main Sanctum (Garbhagriha)',
    'Mandapam (Assembly Hall)',
    'Nalambalam (Outer Compound)',
    'Temple Pond',
    'Garden and Grounds',
    'Annadanam Hall',
    'Office Complex',
    'Parking Area'
  ];

  return (
    <>
      <PageBanner title="Temple Premises" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Explore different areas of our temple complex through photographs.
              </Typography>

              <Grid container spacing={3}>
                {areas.map((area, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box
                      sx={{
                        height: 200,
                        bgcolor: `hsl(${index * 45}, 35%, 55%)`,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          transition: 'transform 0.3s',
                          boxShadow: 6,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          bgcolor: 'rgba(0,0,0,0.4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          p: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ color: '#fff', fontWeight: 700, textAlign: 'center' }}
                        >
                          {area}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e8f5e9', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Virtual Tour Coming Soon</Typography>
                <Typography>
                  We are working on a 360° virtual tour of the temple premises. This will allow devotees worldwide to experience our temple from home.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="gallery" activePath="/gallery/premises" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
