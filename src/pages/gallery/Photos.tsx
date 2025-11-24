import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card } from '@mui/material';

export default function GalleryPhotos() {
  const photoCategories = [
    { title: 'Temple Architecture', count: 45 },
    { title: 'Daily Rituals', count: 78 },
    { title: 'Festival Celebrations', count: 120 },
    { title: 'Deity Decorations', count: 65 },
    { title: 'Cultural Events', count: 52 },
    { title: 'Devotee Moments', count: 89 },
  ];

  return (
    <>
      <PageBanner title="Photo Gallery" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Explore our temple through beautiful photographs capturing the divine atmosphere, festivals, and daily rituals.
              </Typography>

              <Grid container spacing={3}>
                {photoCategories.map((category, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                      elevation={2}
                      sx={{
                        height: 250,
                        cursor: 'pointer',
                        position: 'relative',
                        '&:hover': {
                          boxShadow: 6,
                          '& .overlay': { opacity: 0.9 },
                        },
                      }}
                    >
                      <Box
                        sx={{
                          height: '100%',
                          bgcolor: `hsl(${index * 60}, 40%, 60%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Box
                          className="overlay"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bgcolor: 'rgba(0,0,0,0.5)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0.7,
                            transition: 'opacity 0.3s',
                          }}
                        >
                          <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
                            {category.title}
                          </Typography>
                          <Typography variant="body1" sx={{ color: '#fff' }}>
                            {category.count} Photos
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  High-resolution photos coming soon. Please check back later!
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="gallery" activePath="/gallery/photos" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
