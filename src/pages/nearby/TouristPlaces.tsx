import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar, Chip, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExploreIcon from '@mui/icons-material/Explore';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NatureIcon from '@mui/icons-material/Nature';
import PetsIcon from '@mui/icons-material/Pets';
import MuseumIcon from '@mui/icons-material/Museum';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const GOLD = '#d4af37';

export default function TouristPlaces() {
  const places = [
    {
      name: 'Muzhappilangad Drive-in Beach',
      distance: '8 km',
      description: 'India\'s longest drive-in beach, perfect for a scenic drive along the coast. Popular for swimming and water sports.',
      timing: '8:00 AM - 6:00 PM',
      entry: 'Free',
      icon: BeachAccessIcon,
      color: '#2196f3',
    },
    {
      name: 'Thalassery Fort',
      distance: '12 km',
      description: 'Historic fort built by British East India Company in 1708. Great views of the Arabian Sea.',
      timing: '8:00 AM - 6:00 PM',
      entry: '₹25',
      icon: AccountBalanceIcon,
      color: '#ff9800',
    },
    {
      name: 'Dharmadam Island',
      distance: '15 km',
      description: 'Small island covered with coconut palms and dense vegetation. Accessible during low tide.',
      timing: 'Best at low tide',
      entry: 'Free',
      icon: NatureIcon,
      color: '#4caf50',
    },
    {
      name: 'Parassinikadavu Snake Park',
      distance: '18 km',
      description: 'Home to various species of snakes and other reptiles. Educational and conservation center.',
      timing: '9:00 AM - 5:00 PM',
      entry: '₹50',
      icon: PetsIcon,
      color: '#9c27b0',
    },
    {
      name: 'Payyambalam Beach',
      distance: '20 km',
      description: 'Beautiful beach in Kannur with a well-maintained park. Ideal for evening walks and sunset views.',
      timing: 'Open 24 hours',
      entry: 'Free',
      icon: BeachAccessIcon,
      color: '#00bcd4',
    },
    {
      name: 'Arakkal Museum',
      distance: '22 km',
      description: 'Museum showcasing the history of Kerala\'s only Muslim royal family. Rich artifacts and historical documents.',
      timing: '10:00 AM - 5:00 PM (Closed Mon)',
      entry: '₹20',
      icon: MuseumIcon,
      color: '#e91e63',
    },
  ];

  return (
    <>
      <PageBanner title="Tourist Places Nearby" />
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
              {/* Header Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    background: 'linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%)',
                    mr: 3,
                    boxShadow: '0 8px 24px rgba(156,39,176,0.4)',
                  }}
                >
                  <ExploreIcon sx={{ fontSize: 40, color: '#fff' }} />
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
                    Tourist Places Nearby
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', fontWeight: 600 }}>
                    Discover amazing destinations around the temple
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>
                Explore the beautiful tourist destinations near our temple. Plan a complete trip combining
                spiritual visit with sightseeing.
              </Typography>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              {/* Places Grid */}
              <Grid container spacing={3}>
                {places.map((place, index) => {
                  const IconComponent = place.icon;
                  return (
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
                          transform: 'translateY(-8px) scale(1.02)',
                          boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: 6,
                          height: '100%',
                          background: place.color,
                        }
                      }}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                            <Avatar
                              sx={{
                                width: 56,
                                height: 56,
                                background: `linear-gradient(135deg, ${place.color} 0%, ${place.color}dd 100%)`,
                                boxShadow: `0 6px 16px ${place.color}66`,
                              }}
                            >
                              <IconComponent sx={{ fontSize: 28, color: '#fff' }} />
                            </Avatar>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD, mb: 0.5 }}>
                                {place.name}
                              </Typography>
                              <Chip
                                icon={<LocationOnIcon sx={{ fontSize: 16 }} />}
                                label={place.distance}
                                size="small"
                                sx={{
                                  bgcolor: `${place.color}22`,
                                  color: place.color,
                                  fontWeight: 700,
                                  border: `2px solid ${place.color}`,
                                }}
                              />
                            </Box>
                          </Box>

                          <Typography variant="body2" sx={{ mb: 2.5, lineHeight: 1.7, color: '#666' }}>
                            {place.description}
                          </Typography>

                          <Divider sx={{ my: 2, borderColor: `rgba(212,175,55,0.2)` }} />

                          <Box sx={{ display: 'flex', gap: 3 }}>
                            <Box sx={{ flex: 1 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                                <AccessTimeIcon sx={{ fontSize: 16, color: GOLD }} />
                                <Typography variant="caption" sx={{ color: '#666', fontWeight: 700 }}>
                                  Timing
                                </Typography>
                              </Box>
                              <Typography variant="body2" sx={{ fontWeight: 600, color: '#333' }}>
                                {place.timing}
                              </Typography>
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                                <AttachMoneyIcon sx={{ fontSize: 16, color: GOLD }} />
                                <Typography variant="caption" sx={{ color: '#666', fontWeight: 700 }}>
                                  Entry Fee
                                </Typography>
                              </Box>
                              <Typography variant="body2" sx={{ fontWeight: 600, color: '#333' }}>
                                {place.entry}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              {/* Travel Tips */}
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
                    label="Travel Tips"
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
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: GOLD,
                          mt: 1,
                          flexShrink: 0,
                        }} />
                        <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.7 }}>
                          Rent a vehicle for convenient travel between destinations
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: GOLD,
                          mt: 1,
                          flexShrink: 0,
                        }} />
                        <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.7 }}>
                          Best season: October to March (pleasant weather)
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: GOLD,
                          mt: 1,
                          flexShrink: 0,
                        }} />
                        <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.7 }}>
                          Carry water, snacks, and sunscreen
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <Box sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          bgcolor: GOLD,
                          mt: 1,
                          flexShrink: 0,
                        }} />
                        <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.7 }}>
                          Check timings before visiting, especially on Mondays
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby/tourist-places" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
