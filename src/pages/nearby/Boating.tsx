import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar, Chip, Divider } from '@mui/material';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const GOLD = '#d4af37';

export default function Boating() {
  const boatingSpots = [
    {
      name: 'Valapattanam River',
      distance: '10 km',
      type: 'River Boating',
      description: 'Scenic backwater boating through peaceful waterways. Traditional country boats and modern speedboats available.',
      duration: '1-3 hours',
      cost: '₹500-2000',
      color: '#2196f3',
    },
    {
      name: 'Kavvayi Backwaters',
      distance: '30 km',
      type: 'Backwater Cruise',
      description: 'Third largest backwater in Kerala. Island hopping tours, houseboat cruises, and traditional Kerala boat experiences.',
      duration: '2-6 hours',
      cost: '₹1000-5000',
      color: '#00bcd4',
    },
    {
      name: 'Meenkunnu Beach Boating',
      distance: '18 km',
      type: 'Sea Boating',
      description: 'Exciting sea boating and speed boat rides. Dolphin watching tours during season.',
      duration: '30 min - 1 hour',
      cost: '₹300-800',
      color: '#4caf50',
    },
  ];

  return (
    <>
      <PageBanner title="Boating & Water Activities" />
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
            }}>\n              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    background: 'linear-gradient(135deg, #00bcd4 0%, #26c6da 100%)',
                    mr: 3,
                    boxShadow: '0 8px 24px rgba(0,188,212,0.4)',
                  }}
                >
                  <DirectionsBoatIcon sx={{ fontSize: 40, color: '#fff' }} />
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
                    Boating & Water Activities
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', fontWeight: 600 }}>
                    Explore serene backwaters and coastal adventures
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>
                Experience the serene backwaters and coastal waters of North Kerala through boating activities.
              </Typography>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Grid container spacing={3}>
                {boatingSpots.map((spot, index) => (
                  <Grid item xs={12} md={4} key={index}>
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
                        background: spot.color,
                      }
                    }}>
                      <Box
                        sx={{
                          height: 150,
                          background: `linear-gradient(135deg, ${spot.color}33 0%, ${spot.color}11 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderBottom: `2px solid ${spot.color}44`,
                        }}
                      >
                        <Typography sx={{ fontSize: '4.5rem' }}>⛵</Typography>
                      </Box>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD, mb: 0.5 }}>
                          {spot.name}
                        </Typography>
                        <Chip
                          icon={<LocationOnIcon sx={{ fontSize: 16 }} />}
                          label={`${spot.type} • ${spot.distance}`}
                          size="small"
                          sx={{
                            bgcolor: `${spot.color}22`,
                            color: spot.color,
                            fontWeight: 700,
                            border: `2px solid ${spot.color}`,
                            mb: 2,
                          }}
                        />
                        <Typography variant="body2" sx={{ mb: 2.5, lineHeight: 1.7, color: '#666' }}>
                          {spot.description}
                        </Typography>
                        <Divider sx={{ my: 2, borderColor: `rgba(212,175,55,0.2)` }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                              <AccessTimeIcon sx={{ fontSize: 16, color: GOLD }} />
                              <Typography variant="caption" sx={{ color: '#666', fontWeight: 700 }}>Duration</Typography>
                            </Box>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#333' }}>{spot.duration}</Typography>
                          </Box>
                          <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                              <AttachMoneyIcon sx={{ fontSize: 16, color: GOLD }} />
                              <Typography variant="caption" sx={{ color: '#666', fontWeight: 700 }}>Cost</Typography>
                            </Box>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#333' }}>{spot.cost}</Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
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
                    label="Booking & Safety"
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
                  {['Advance booking recommended during peak season', 'Life jackets provided for all passengers', 'Experienced boat operators and guides', 'Best season: October to March'].map((tip, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: idx < 3 ? 1.5 : 0 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: GOLD, mt: 1, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.7 }}>
                        {tip}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby/boating" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
