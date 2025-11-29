import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';

export default function GalleryEvents() {
  const events = [
    { 
      name: 'Onam Festival 2024', 
      date: 'September 15-24, 2024',
      description: 'Grand 10-day celebration with cultural programs and traditional poojas',
      img: `${process.env.PUBLIC_URL}/assets/slide_3.png`,
    },
    { 
      name: 'Shivaratri Mahothsavam', 
      date: 'March 8, 2024',
      description: 'Night-long vigil with special abhishekam and bhajans',
      img: `${process.env.PUBLIC_URL}/assets/slide_4.png`,
    },
    { 
      name: 'Temple Anniversary', 
      date: 'January 20, 2024',
      description: 'Celebrating 150 years of divine service',
      img: `${process.env.PUBLIC_URL}/assets/slide_5.png`,
    },
    { 
      name: 'Vishu Celebration', 
      date: 'April 14, 2024',
      description: 'Malayalam New Year with Vishukkani and special offerings',
      img: `${process.env.PUBLIC_URL}/assets/slider_1.jpg`,
    },
  ];

  return (
    <>
      <PageBanner title="Event Gallery" />
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
                Browse through our special events and celebrations captured in beautiful moments.
              </Typography>

              <Grid container spacing={3}>
                {events.map((event, index) => (
                  <Grid item xs={12} key={index}>
                    <Card elevation={0} sx={{ 
                      border: '3px solid #d4af37',
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(212,175,55,0.3)',
                      transition: 'all 300ms ease',
                      '&:hover': { 
                        boxShadow: '0 12px 40px rgba(212,175,55,0.4)',
                        transform: 'translateY(-4px)',
                      }
                    }}>
                      <Grid container>
                        <Grid item xs={12} md={5}>
                          <Box
                            component="img"
                            src={event.img}
                            alt={event.name}
                            sx={{
                              width: '100%',
                              height: { xs: 220, md: '100%' },
                              objectFit: 'cover',
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <CardContent sx={{ p: 3 }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#d4af37', mb: 1 }}>
                              {event.name}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: '#666', mb: 2, fontWeight: 600 }}>
                              📅 {event.date}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7 }}>
                              {event.description}
                            </Typography>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="gallery" activePath="/gallery/events" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
