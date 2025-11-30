import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Paper, Grid, Card, CardContent, Box, Avatar, Chip, Divider } from '@mui/material';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import SportsIcon from '@mui/icons-material/Sports';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const GOLD = '#d4af37';

export default function Activities() {
  const activities = [
    { name: 'Theyyam Performance', season: 'Nov-May', location: null, description: 'Traditional ritual art form unique to North Kerala. Spectacular costumes and performances.', color: '#9c27b0' },
    { name: 'Parasailing', season: null, location: 'Muzhappilangad Beach', description: 'Thrilling water sport activity. Professional instructors and safety equipment provided.', color: '#ff9800' },
    { name: 'Trekking', season: null, location: 'Ezhimala Hills', description: 'Scenic trekking trails with beautiful views. Suitable for beginners and experienced trekkers.', color: '#4caf50' },
    { name: 'Photography Tours', season: null, location: 'Various', description: 'Guided photography tours covering beaches, backwaters, heritage sites, and culture.', color: '#2196f3' },
    { name: 'Ayurvedic Massage', season: null, location: 'Multiple centers', description: 'Traditional Kerala Ayurvedic treatments and wellness packages available.', color: '#00bcd4' },
    { name: 'Fishing', season: null, location: 'Backwaters', description: 'Traditional fishing experience in backwaters. Learn local fishing techniques.', color: '#e91e63' },
  ];

  return (
    <>
      <PageBanner title="Activities & Experiences" />
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
                    background: 'linear-gradient(135deg, #e91e63 0%, #f06292 100%)',
                    mr: 3,
                    boxShadow: '0 8px 24px rgba(233,30,99,0.4)',
                  }}
                >
                  <LocalActivityIcon sx={{ fontSize: 40, color: '#fff' }} />
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
                    Activities & Experiences
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', fontWeight: 600 }}>
                    Adventure, culture & wellness activities
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>
                Experience the vibrant culture and adventure activities that North Kerala has to offer, from traditional art forms to thrilling sports.
              </Typography>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Grid container spacing={3}>
                {activities.map((activity, index) => (
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
                        background: activity.color,
                      }
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Avatar
                            sx={{
                              width: 50,
                              height: 50,
                              background: `linear-gradient(135deg, ${activity.color} 0%, ${activity.color}dd 100%)`,
                              boxShadow: `0 6px 16px ${activity.color}66`,
                            }}
                          >
                            <SportsIcon sx={{ fontSize: 26, color: '#fff' }} />
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD, mb: 0.5 }}>
                              {activity.name}
                            </Typography>
                            <Chip
                              label={activity.season || activity.location}
                              size="small"
                              sx={{
                                bgcolor: `${activity.color}22`,
                                color: activity.color,
                                fontWeight: 700,
                                border: `2px solid ${activity.color}`,
                              }}
                            />
                          </Box>
                        </Box>
                        <Typography variant="body2" sx={{ lineHeight: 1.7, color: '#666' }}>
                          {activity.description}
                        </Typography>
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
                    label="Local Tour Operators"
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
                  <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.7 }}>
                    Contact temple office for recommendations on trusted tour operators and activity providers in the area.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby/activities" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
