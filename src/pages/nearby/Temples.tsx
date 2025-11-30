import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Paper, Grid, Card, CardContent, Box, Avatar, Chip, Divider } from '@mui/material';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

const GOLD = '#d4af37';

export default function NearbyTemples() {
  const temples = [
    { name: 'Sri Shakthan Kulangara Temple', distance: '1.53 km', deity: 'Shakti/Goddess', location: 'Kollam Meppayyur Road', description: 'Nearest temple dedicated to the divine feminine energy, offering peaceful spiritual atmosphere.', color: '#ff9800' },
    { name: 'Sri Kollam Pisharikavu Temple', distance: '2.66 km', deity: 'Shakti/Goddess', location: 'Koyilandy Municipality', description: 'Ancient Goddess temple known for its powerful spiritual presence and traditional rituals.', color: '#e91e63' },
    { name: 'Urupunyakavu Temple', distance: '2.74 km', deity: 'Bhagavathi', location: 'Moodadi North', description: 'Sacred Bhagavathi temple revered by devotees for blessings and divine grace.', color: '#2196f3' },
    { name: 'Vazhayil Bhagavathi Temple', distance: 'Nearby', deity: 'Bhagavathi', location: 'Muchukunnu Area', description: 'Local attraction known for its serene atmosphere and spiritual significance.', color: '#9c27b0' },
    { name: 'Sree Kongannoor Bhagavathi Temple', distance: 'Nearby', deity: 'Bhagavathi', location: 'Purakkad, Muchukunnu Road', description: 'Prominent Goddess temple located on the main Muchukunnu Road.', color: '#4caf50' },
    { name: 'Sree Viyyur Vishnu Temple', distance: 'Nearby', deity: 'Vishnu', location: 'Muchukunnu Area', description: 'Beautiful Vishnu temple showcasing traditional Kerala temple architecture.', color: '#00bcd4' },
    { name: 'Maralur Shiva Temple', distance: 'Nearby', deity: 'Shiva', location: 'Maralur', description: 'Sacred Shiva temple offering peaceful prayers and traditional ceremonies.', color: '#673ab7' },
    { name: 'Elabilattu Paradhevadha', distance: 'Nearby', deity: 'Paradevatha', location: 'Keezhariyur', description: 'Ancient temple known for its unique deity and traditional worship practices.', color: '#f44336' },
    { name: 'Kovilakathum Padi Temple', distance: 'Nearby', deity: 'Bhagavathi', location: 'Muchukunnu Area', description: 'Local Goddess temple frequented by devotees seeking blessings.', color: '#ff5722' },
    { name: 'Nelliyadi Nagakali Temple', distance: 'Nearby', deity: 'Nagakali', location: 'Nelliyadi', description: 'Unique temple dedicated to Nagakali, the serpent goddess, known for special rituals.', color: '#795548' },
  ];

  return (
    <>
      <PageBanner title="Temples Nearby" />
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
                    background: 'linear-gradient(135deg, #ff9800 0%, #ffa726 100%)',
                    mr: 3,
                    boxShadow: '0 8px 24px rgba(255,152,0,0.4)',
                  }}
                >
                  <TempleHinduIcon sx={{ fontSize: 40, color: '#fff' }} />
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
                    Temples Nearby
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', fontWeight: 600 }}>
                    Sacred shrines & spiritual destinations
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>
                Explore the sacred temples near Muchukunnu Kottayil Sree Shiva Temple. Experience the divine spiritual heritage with temples dedicated to various deities within close proximity.
              </Typography>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Grid container spacing={3}>
                {temples.map((temple, index) => (
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
                        background: temple.color,
                      }
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Avatar
                            sx={{
                              width: 50,
                              height: 50,
                              background: `linear-gradient(135deg, ${temple.color} 0%, ${temple.color}dd 100%)`,
                              boxShadow: `0 6px 16px ${temple.color}66`,
                            }}
                          >
                            <StarIcon sx={{ fontSize: 26, color: '#fff' }} />
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD, mb: 0.5, lineHeight: 1.2 }}>
                              {temple.name}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#666', fontWeight: 600 }}>
                              {temple.location}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ mb: 2 }}>
                          <Chip
                            label={temple.deity}
                            size="small"
                            sx={{
                              bgcolor: `${temple.color}22`,
                              color: temple.color,
                              fontWeight: 700,
                              border: `2px solid ${temple.color}`,
                              mr: 1,
                              mb: 1,
                            }}
                          />
                          <Chip
                            icon={<LocationOnIcon sx={{ fontSize: 14 }} />}
                            label={temple.distance}
                            size="small"
                            sx={{
                              bgcolor: `${temple.color}22`,
                              color: temple.color,
                              fontWeight: 700,
                              border: `2px solid ${temple.color}`,
                            }}
                          />
                        </Box>
                        <Typography variant="body2" sx={{ lineHeight: 1.7, color: '#666' }}>
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
