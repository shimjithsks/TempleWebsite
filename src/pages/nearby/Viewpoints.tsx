import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Paper, Grid, Card, CardContent, Box, Avatar, Chip, Divider } from '@mui/material';
import LandscapeIcon from '@mui/icons-material/Landscape';
import TerrainIcon from '@mui/icons-material/Terrain';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeightIcon from '@mui/icons-material/Height';

const GOLD = '#d4af37';

export default function Viewpoints() {
  const viewpoints = [
    { name: 'Ezhimala Hill', distance: '35 km', height: '286m', description: 'Panoramic views of Arabian Sea and surrounding landscape. Historic naval academy location.', color: '#4caf50' },
    { name: 'Dharmadam Island View', distance: '15 km', height: 'Sea level', description: 'Unique viewpoint to see the island and coastal beauty. Best during low tide.', color: '#2196f3' },
    { name: 'Thalassery Fort Top', distance: '12 km', height: '50m', description: 'Historic viewpoint overlooking the sea. Sunset views are spectacular.', color: '#ff9800' },
    { name: 'Pazhassi Dam', distance: '42 km', height: '145m', description: 'Serene dam surrounded by hills. Perfect for nature photography and relaxation.', color: '#9c27b0' },
  ];

  return (
    <>
      <PageBanner title="Scenic Viewpoints" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: 4,
              border: `3px solid ${GOLD}`,
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
                background: `linear-gradient(90deg, ${GOLD} 0%, #e5c158 25%, ${GOLD} 50%, #e5c158 75%, ${GOLD} 100%)`,
                animation: 'shimmer 3s linear infinite',
                backgroundSize: '200% 100%',
                '@keyframes shimmer': {
                  '0%': { backgroundPosition: '-200% 0' },
                  '100%': { backgroundPosition: '200% 0' },
                },
              }
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                    mr: 3,
                    boxShadow: '0 8px 24px rgba(76,175,80,0.4)',
                  }}
                >
                  <LandscapeIcon sx={{ fontSize: 40, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 900,
                    background: `linear-gradient(135deg, ${GOLD} 0%, #e5c158 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 0.5,
                  }}>
                    Scenic Viewpoints
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', fontWeight: 600 }}>
                    Breathtaking panoramic views & hilltop vistas
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>
                Discover spectacular viewpoints offering panoramic vistas of the Arabian Sea, lush landscapes, and historic sites.
              </Typography>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Grid container spacing={3}>
                {viewpoints.map((point, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={0} sx={{ 
                      height: '100%',
                      border: `3px solid ${GOLD}`,
                      borderRadius: 4,
                      boxShadow: '0 8px 24px rgba(212,175,55,0.2)',
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 6,
                        height: '100%',
                        background: point.color,
                      }
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Avatar
                            sx={{
                              width: 50,
                              height: 50,
                              background: `linear-gradient(135deg, ${point.color} 0%, ${point.color}dd 100%)`,
                              boxShadow: `0 6px 16px ${point.color}66`,
                            }}
                          >
                            <TerrainIcon sx={{ fontSize: 26, color: '#fff' }} />
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD, mb: 0.5 }}>
                              {point.name}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                          <Chip
                            icon={<LocationOnIcon sx={{ fontSize: 14 }} />}
                            label={point.distance}
                            size="small"
                            sx={{
                              bgcolor: `${point.color}22`,
                              color: point.color,
                              fontWeight: 700,
                              border: `2px solid ${point.color}`,
                            }}
                          />
                          <Chip
                            icon={<HeightIcon sx={{ fontSize: 14 }} />}
                            label={point.height}
                            size="small"
                            sx={{
                              bgcolor: `${point.color}22`,
                              color: point.color,
                              fontWeight: 700,
                              border: `2px solid ${point.color}`,
                            }}
                          />
                        </Box>
                        <Typography variant="body2" sx={{ lineHeight: 1.7, color: '#666' }}>
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
