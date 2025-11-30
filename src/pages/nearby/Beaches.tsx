import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar, Chip, Divider } from '@mui/material';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WavesIcon from '@mui/icons-material/Waves';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const GOLD = '#d4af37';

export default function Beaches() {
  const beaches = [
    {
      name: 'Muzhappilangad Beach',
      distance: '8 km',
      specialty: 'Drive-in Beach',
      description: 'India\'s longest drive-in beach. Perfect for swimming, driving, and water sports. Clean and well-maintained.',
      activities: ['Swimming', 'Beach Drive', 'Parasailing', 'Water Sports'],
      color: '#2196f3',
    },
    {
      name: 'Payyambalam Beach',
      distance: '20 km',
      specialty: 'Family Beach',
      description: 'Beautiful beach with a well-maintained park. Ideal for families with children. Great sunset views.',
      activities: ['Swimming', 'Evening Walks', 'Park Visits', 'Photography'],
      color: '#00bcd4',
    },
    {
      name: 'Meenkunnu Beach',
      distance: '18 km',
      specialty: 'Scenic Beach',
      description: 'Serene and less crowded beach. Perfect for relaxation and enjoying nature. Beautiful coastal views.',
      activities: ['Beach Walks', 'Photography', 'Relaxation', 'Sunset Views'],
      color: '#4caf50',
    },
    {
      name: 'Kizhunna Beach',
      distance: '22 km',
      specialty: 'Rocky Beach',
      description: 'Unique beach with natural rock formations. Ideal for adventurous visitors and photographers.',
      activities: ['Rock Climbing', 'Photography', 'Trekking', 'Exploration'],
      color: '#ff9800',
    },
    {
      name: 'Thottada Beach',
      distance: '25 km',
      specialty: 'Quiet Retreat',
      description: 'Peaceful and pristine beach away from crowds. Perfect for meditation and quiet reflection.',
      activities: ['Meditation', 'Quiet Walks', 'Bird Watching', 'Reading'],
      color: '#9c27b0',
    },
  ];

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
                {beaches.map((beach, index) => (
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
                        background: beach.color,
                      }
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={8}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                              <Avatar
                                sx={{
                                  width: 56,
                                  height: 56,
                                  background: `linear-gradient(135deg, ${beach.color} 0%, ${beach.color}dd 100%)`,
                                  boxShadow: `0 6px 16px ${beach.color}66`,
                                }}
                              >
                                <WavesIcon sx={{ fontSize: 28, color: '#fff' }} />
                              </Avatar>
                              <Box>
                                <Typography variant="h5" sx={{ fontWeight: 800, color: GOLD, mb: 0.5 }}>
                                  {beach.name}
                                </Typography>
                                <Chip
                                  icon={<LocationOnIcon sx={{ fontSize: 16 }} />}
                                  label={`${beach.specialty} • ${beach.distance}`}
                                  size="small"
                                  sx={{
                                    bgcolor: `${beach.color}22`,
                                    color: beach.color,
                                    fontWeight: 700,
                                    border: `2px solid ${beach.color}`,
                                  }}
                                />
                              </Box>
                            </Box>
                            <Typography variant="body1" sx={{ mb: 2.5, lineHeight: 1.7, color: '#666' }}>
                              {beach.description}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {beach.activities.map((activity, idx) => (
                                <Chip
                                  key={idx}
                                  label={activity}
                                  size="small"
                                  sx={{
                                    bgcolor: `${beach.color}11`,
                                    color: beach.color,
                                    fontWeight: 600,
                                    border: `1px solid ${beach.color}44`,
                                  }}
                                />
                              ))}
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box
                              sx={{
                                width: '100%',
                                height: 150,
                                background: `linear-gradient(135deg, ${beach.color}33 0%, ${beach.color}11 100%)`,
                                borderRadius: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: `2px solid ${beach.color}44`,
                              }}
                            >
                              <Typography sx={{ fontSize: '4rem' }}>🏖️</Typography>
                            </Box>
                          </Grid>
                        </Grid>
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
