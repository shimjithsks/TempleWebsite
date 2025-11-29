import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

export default function GalleryPremises() {
  const areas = [
    { name: 'Main Sanctum', img: `${process.env.PUBLIC_URL}/assets/header_god_image.png` },
    { name: 'Mandapam Hall', img: `${process.env.PUBLIC_URL}/assets/slider_1.jpg` },
    { name: 'Outer Compound', img: `${process.env.PUBLIC_URL}/assets/slider_2.jpg` },
    { name: 'Temple Pond', img: `${process.env.PUBLIC_URL}/assets/slide_3.png` },
    { name: 'Garden Grounds', img: `${process.env.PUBLIC_URL}/assets/slide_4.png` },
    { name: 'Annadanam Hall', img: `${process.env.PUBLIC_URL}/assets/slide_5.png` },
    { name: 'Temple Entrance', img: `${process.env.PUBLIC_URL}/assets/slider_6.jpg` },
    { name: 'Sacred Spaces', img: `${process.env.PUBLIC_URL}/assets/slider_2.jpg` },
  ];

  return (
    <>
      <PageBanner title="Temple Premises" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: 4,
              border: `3px solid #d4af37`,
              borderRadius: 5,
              boxShadow: '0 20px 60px rgba(212,175,55,0.25)',
              background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 6,
                background: 'linear-gradient(90deg, #d4af37 0%, #e5c158 25%, #d4af37 50%, #e5c158 75%, #d4af37 100%)',
                animation: 'shimmer 3s linear infinite',
                backgroundSize: '200% 100%',
                '@keyframes shimmer': {
                  '0%': { backgroundPosition: '-200% 0' },
                  '100%': { backgroundPosition: '200% 0' },
                },
              }
            }}>
              <Typography variant="body1" sx={{ mb: 4, mt: 2, fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>
                Explore different areas of our temple complex through photographs.
              </Typography>

              <Grid container spacing={3}>
                {areas.map((area, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        position: 'relative',
                        borderRadius: 4,
                        overflow: 'hidden',
                        border: '3px solid #d4af37',
                        boxShadow: '0 8px 24px rgba(212,175,55,0.3)',
                        cursor: 'pointer',
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.02)',
                          boxShadow: '0 16px 48px rgba(212,175,55,0.4)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={area.img}
                        alt={area.name}
                        sx={{
                          width: '100%',
                          height: 220,
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                          p: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ color: '#fff', fontWeight: 700, textAlign: 'center' }}
                        >
                          {area.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ 
                mt: 4, 
                p: 3, 
                background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(229,193,88,0.15))', 
                borderRadius: 4,
                border: '2px solid rgba(212,175,55,0.3)',
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#d4af37', mb: 1 }}>Virtual Tour Coming Soon</Typography>
                <Typography sx={{ color: '#555' }}>
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
