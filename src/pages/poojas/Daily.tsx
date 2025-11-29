import React from 'react';
import PageBanner from '../../components/PageBanner';
import PoojaSidebar from '../../components/PoojaSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Chip, Avatar } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const GOLD = '#d4af37';

export default function DailyPoojas() {
  const morningPoojas = [
    { name: 'Nirmalya Darshanam', time: '5:00 AM', description: 'First darshan of the day' },
    { name: 'Usha Pooja', time: '5:30 AM', description: 'Dawn worship ceremony' },
    { name: 'Ettumanoor Seeveli', time: '6:00 AM', description: 'Sacred elephant procession' },
    { name: 'Pantheeradi Puja', time: '7:30 AM', description: 'Twelve-vessel offering ritual' },
  ];

  const eveningPoojas = [
    { name: 'Uccha Pooja', time: '12:00 PM', description: 'Noon worship with grand offerings' },
    { name: 'Deeparadhana', time: '6:30 PM', description: 'Lamp lighting ceremony' },
    { name: 'Athazha Pooja', time: '7:00 PM', description: 'Evening worship and aarti' },
    { name: 'Temple Closure', time: '8:00 PM', description: 'Final blessings of the day' },
  ];

  return (
    <>
      <PageBanner title="Daily Poojas" />
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
                background: 'linear-gradient(90deg, #d4af37 0%, #e5c158 25%, #d4af37 50%, #e5c158 75%, #d4af37 100%)',
                animation: 'shimmer 3s linear infinite',
                backgroundSize: '200% 100%',
                '@keyframes shimmer': {
                  '0%': { backgroundPosition: '-200% 0' },
                  '100%': { backgroundPosition: '200% 0' },
                },
              }
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2, 
                mb: 4,
                mt: 2,
              }}>
                <Avatar sx={{ 
                  width: 56, 
                  height: 56, 
                  bgcolor: GOLD,
                  boxShadow: `0 8px 24px rgba(212,175,55,0.4)`,
                }}>
                  <AutoAwesomeIcon sx={{ fontSize: 32, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #d4af37 0%, #e5c158 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Daily Pooja Schedule
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontWeight: 600, mt: 0.5 }}>
                    Sacred rituals performed throughout the day
                  </Typography>
                </Box>
              </Box>

              {/* Morning Rituals */}
              <Box sx={{ mb: 5 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2, 
                  mb: 3,
                  pb: 2,
                  borderBottom: `2px solid rgba(212,175,55,0.3)`,
                }}>
                  <Avatar sx={{ 
                    width: 48, 
                    height: 48, 
                    bgcolor: 'linear-gradient(135deg, #FFA726 0%, #FB8C00 100%)',
                    boxShadow: '0 8px 20px rgba(255,152,0,0.3)',
                  }}>
                    <WbSunnyIcon sx={{ fontSize: 28, color: '#fff' }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 800,
                    color: '#FFA726',
                  }}>
                    Morning Rituals
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  {morningPoojas.map((pooja, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card elevation={0} sx={{ 
                        border: `3px solid ${GOLD}`,
                        borderRadius: 4,
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        height: '100%',
                        background: 'linear-gradient(135deg, #fff 0%, #fffef8 100%)',
                        '&:hover': { 
                          transform: 'translateY(-8px)',
                          boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                          borderColor: '#e5c158',
                        } 
                      }}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'start', gap: 2, mb: 2 }}>
                            <Chip
                              icon={<AccessTimeIcon sx={{ fontSize: 18 }} />}
                              label={pooja.time}
                              sx={{
                                bgcolor: GOLD,
                                color: '#000',
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                px: 0.5,
                                '& .MuiChip-icon': {
                                  color: '#000',
                                },
                              }}
                            />
                          </Box>
                          <Typography variant="h6" sx={{ 
                            fontWeight: 700, 
                            color: GOLD,
                            mb: 1,
                            fontSize: '1.15rem',
                          }}>
                            {pooja.name}
                          </Typography>
                          <Typography variant="body2" sx={{ 
                            color: '#666',
                            lineHeight: 1.6,
                            fontWeight: 500,
                          }}>
                            {pooja.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Evening Rituals */}
              <Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2, 
                  mb: 3,
                  pb: 2,
                  borderBottom: `2px solid rgba(212,175,55,0.3)`,
                }}>
                  <Avatar sx={{ 
                    width: 48, 
                    height: 48, 
                    bgcolor: 'linear-gradient(135deg, #5C6BC0 0%, #3949AB 100%)',
                    boxShadow: '0 8px 20px rgba(63,81,181,0.3)',
                  }}>
                    <Brightness3Icon sx={{ fontSize: 28, color: '#fff' }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 800,
                    color: '#5C6BC0',
                  }}>
                    Evening Rituals
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  {eveningPoojas.map((pooja, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card elevation={0} sx={{ 
                        border: `3px solid ${GOLD}`,
                        borderRadius: 4,
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        height: '100%',
                        background: 'linear-gradient(135deg, #fff 0%, #fffef8 100%)',
                        '&:hover': { 
                          transform: 'translateY(-8px)',
                          boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                          borderColor: '#e5c158',
                        } 
                      }}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'start', gap: 2, mb: 2 }}>
                            <Chip
                              icon={<AccessTimeIcon sx={{ fontSize: 18 }} />}
                              label={pooja.time}
                              sx={{
                                bgcolor: GOLD,
                                color: '#000',
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                px: 0.5,
                                '& .MuiChip-icon': {
                                  color: '#000',
                                },
                              }}
                            />
                          </Box>
                          <Typography variant="h6" sx={{ 
                            fontWeight: 700, 
                            color: GOLD,
                            mb: 1,
                            fontSize: '1.15rem',
                          }}>
                            {pooja.name}
                          </Typography>
                          <Typography variant="body2" sx={{ 
                            color: '#666',
                            lineHeight: 1.6,
                            fontWeight: 500,
                          }}>
                            {pooja.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Box sx={{ 
                mt: 5, 
                p: 4, 
                bgcolor: 'rgba(212,175,55,0.08)',
                border: `2px solid rgba(212,175,55,0.3)`,
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${GOLD} 0%, #e5c158 100%)`,
                }
              }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  mb: 2,
                  color: GOLD,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}>
                  <AutoAwesomeIcon sx={{ fontSize: 28 }} />
                  Important Information
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, fontWeight: 500 }}>
                  All devotees are welcome to attend these daily rituals. Special darshan timings may vary on festival days. 
                  Please arrive 15 minutes before the scheduled time to ensure you don't miss the sacred ceremonies.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <PoojaSidebar activePath="/poojas/daily" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
