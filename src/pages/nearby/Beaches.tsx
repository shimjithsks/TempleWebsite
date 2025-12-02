import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar, Chip, Divider } from '@mui/material';
import { Button } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WavesIcon from '@mui/icons-material/Waves';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const GOLD = '#d4af37';

export default function Beaches() {
  // Muchukunnu Kottayil Sree Shiva Temple coordinates
  const templeLat = 11.4806;
  const templeLng = 75.5916;

  // New beach data
  // Assign a unique color for each beach title
  const beachColors = [
    '#2196f3', // Thikkoti Beach
    '#00bcd4', // Payyoli Beach
    '#4caf50', // Parappalli Beach
    '#ff9800', // Sand Banks Beach Vadakara
    '#9c27b0', // Thikkodi Drive-in Beach
    '#e91e63', // Kallakathth Beach
    '#795548', // Kappad Beach
    '#607d8b', // Kodikkal Beach
    '#f44336', // Varakkal Beach
    '#8bc34a', // Kappad Beach (duplicate)
  ];
  const beaches = [
    {
      name: 'Thikkoti Beach',
      rating: '4.5',
      reviews: 745,
      type: 'Beach',
      location: 'Thikkoti, Kerala',
      plusCode: '',
      lat: 11.5272, lng: 75.6012,
    },
    {
      name: 'Payyoli Beach',
      rating: '4.1',
      reviews: 152,
      type: 'Beach',
      location: 'Payyoli, Kerala',
      plusCode: '',
      lat: 11.5477, lng: 75.5916,
    },
    {
      name: 'Parappalli Beach',
      rating: '4.5',
      reviews: 793,
      type: 'Tourist attraction',
      location: 'FM2G+3QP',
      plusCode: 'FM2G+3QP',
      lat: 11.5355, lng: 75.5835,
    },
    {
      name: 'Sand Banks Beach Vadakara',
      rating: '4.1',
      reviews: 1400,
      type: 'Tourist attraction',
      location: 'HH9Q+W9V, Sand Banks Rd',
      plusCode: 'HH9Q+W9V',
      lat: 11.6082, lng: 75.5837,
      services: 'On-site services',
    },
    {
      name: 'Thikkodi Drive-in Beach',
      rating: '4.5',
      reviews: 2400,
      type: 'Tourist attraction',
      location: 'Thikkodi Panchayat Rd',
      plusCode: '',
      lat: 11.5272, lng: 75.6012,
      services: 'On-site services',
    },
    {
      name: 'Kallakathth Beach',
      rating: '4.3',
      reviews: 101,
      type: 'Public beach',
      location: 'FJV8+P6F, Thikkodi Panchayat Rd',
      plusCode: 'FJV8+P6F',
      lat: 11.5235, lng: 75.6015,
    },
    {
      name: 'Kappad Beach',
      rating: '4.4',
      reviews: 6500,
      type: 'Tourist attraction',
      location: '9PW7+248, Beach Rd',
      plusCode: '9PW7+248',
      lat: 11.4381, lng: 75.7652,
      services: 'On-site services',
    },
    {
      name: 'Kodikkal Beach',
      rating: '4.3',
      reviews: 193,
      type: 'Public beach',
      location: 'FJH8+6X4',
      plusCode: 'FJH8+6X4',
      lat: 11.4952, lng: 75.6018,
      status: 'Open now',
    },
    {
      name: 'Varakkal Beach',
      rating: '4.2',
      reviews: 4200,
      type: 'Tourist attraction',
      location: '7QQ5+R5R, Beach Rd',
      plusCode: '7QQ5+R5R',
      lat: 11.2852,
      lng: 75.7658,
      services: 'On-site services',
    },
    {
      name: 'Kappad Beach',
      rating: '4.4',
      reviews: 11000,
      type: 'Tourist attraction',
      location: 'Beach area with seating & a walkway',
      plusCode: '',
      lat: 11.4381,
      lng: 75.7652,
    },
  ];

  // Helper to calculate distance in km
  function getDistanceKm(lat1, lng1, lat2, lng2) {
    const toRad = (v) => (v * Math.PI) / 180;
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 10) / 10;
  }

  return (
    <>
      <PageBanner title="Beaches Near Temple" />
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
              {/* Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    background: 'linear-gradient(135deg, #2196f3 0%, #64b5f6 100%)',
                    mr: 3,
                    boxShadow: '0 8px 24px rgba(33,150,243,0.4)',
                  }}
                >
                  <BeachAccessIcon sx={{ fontSize: 40, color: '#fff' }} />
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
                    Beaches Near Temple
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', fontWeight: 600 }}>
                    Discover pristine shores and coastal beauty
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>
                Discover the beautiful beaches of North Kerala. From the famous drive-in beach to serene
                secluded shores, there's something for everyone.
              </Typography>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Grid container spacing={3}>
                {beaches.map((beach, index) => {
                  const distance = getDistanceKm(templeLat, templeLng, beach.lat, beach.lng);
                  const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${templeLat},${templeLng}&destination=${beach.lat},${beach.lng}`;
                  const titleColor = beachColors[index % beachColors.length];
                  return (
                    <Grid item xs={12} key={index}>
                      <Card elevation={0} sx={{
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
                          background: GOLD,
                        }
                      }}>
                        <CardContent sx={{ p: 3 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={8}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <Avatar sx={{ width: 56, height: 56, background: `linear-gradient(135deg, ${titleColor} 0%, ${titleColor}dd 100%)`, boxShadow: `0 6px 16px ${titleColor}66` }}>
                                  <WavesIcon sx={{ fontSize: 28, color: '#fff' }} />
                                </Avatar>
                                <Box>
                                  <Typography variant="h5" sx={{ fontWeight: 800, color: titleColor, mb: 0.5 }}>
                                    {beach.name}
                                  </Typography>
                                  <Chip icon={<LocationOnIcon sx={{ fontSize: 16 }} />} label={beach.location} size="small" sx={{ bgcolor: `${titleColor}22`, color: titleColor, fontWeight: 700, border: `2px solid ${titleColor}` }} />
                                  <Chip label={`${distance} km from temple`} size="small" sx={{ ml: 1, bgcolor: `${titleColor}11`, color: titleColor, fontWeight: 700, border: `1px solid ${titleColor}44` }} />
                                </Box>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <Chip label={`Rating: ${beach.rating} (${beach.reviews} reviews)`} size="small" sx={{ bgcolor: `${GOLD}22`, color: GOLD, fontWeight: 700, border: `1px solid ${GOLD}` }} />
                                <Chip label={beach.type} size="small" sx={{ bgcolor: `${GOLD}11`, color: GOLD, fontWeight: 600, border: `1px solid ${GOLD}44` }} />
                                {beach.services && <Chip label={beach.services} size="small" sx={{ bgcolor: `${GOLD}11`, color: GOLD, fontWeight: 600, border: `1px solid ${GOLD}44` }} />}
                                {beach.status && <Chip label={beach.status} size="small" sx={{ bgcolor: `${GOLD}11`, color: GOLD, fontWeight: 600, border: `1px solid ${GOLD}44` }} />}
                              </Box>
                              <Box sx={{ mt: 2 }}>
                                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                                  <Button variant="contained" sx={{ bgcolor: GOLD, color: '#fff', fontWeight: 700, boxShadow: `0 2px 8px ${GOLD}40`, '&:hover': { bgcolor: '#bfa22e' } }}>
                                    Get Directions
                                  </Button>
                                </a>
                              </Box>
                            </Grid>
                            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                              <Box sx={{ width: '100%', height: 150, background: `linear-gradient(135deg, ${GOLD}33 0%, ${GOLD}11 100%)`, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `2px solid ${GOLD}44` }}>
                                <Typography sx={{ fontSize: '4rem' }}>🏖️</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Box sx={{ 
                p: 3,
                borderRadius: 4,
                background: `linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 100%)`,
                border: `2px solid rgba(212,175,55,0.3)`,
                position: 'relative',
              }}>
                <Box sx={{
                  position: 'absolute',
                  top: -12,
                  left: 20,
                  bgcolor: '#fff',
                  px: 2,
                }}>
                  <Chip
                    icon={<TipsAndUpdatesIcon />}
                    label="Beach Safety Tips"
                    sx={{
                      bgcolor: GOLD,
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      '& .MuiChip-icon': { color: '#fff' },
                    }}
                  />
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: GOLD, mt: 1, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.7 }}>
                          Swim only in designated areas
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: GOLD, mt: 1, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.7 }}>
                          Follow lifeguard instructions
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: GOLD, mt: 1, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.7 }}>
                          Avoid swimming during high tide
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: GOLD, mt: 1, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.7 }}>
                          Don't leave valuables unattended
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: GOLD, mt: 1, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.7 }}>
                          Use sunscreen and stay hydrated
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: GOLD, mt: 1, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.7 }}>
                          Best time: Early morning or evening
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby/beaches" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
