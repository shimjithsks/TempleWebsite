import React from 'react';
import PageBanner from '../../components/PageBanner';
import PoojaSidebar from '../../components/PoojaSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar, Chip } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EventIcon from '@mui/icons-material/Event';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import StarsIcon from '@mui/icons-material/Stars';

const GOLD = '#d4af37';

export default function FestivalPoojas() {
  const festivals = [
    { 
      name: 'Vishu', 
      month: 'April', 
      description: 'Malayalam New Year celebrations with special poojas and Vishukkani darshan',
      icon: <LocalFloristIcon sx={{ fontSize: 32 }} />,
      color: '#FFB300',
    },
    { 
      name: 'Thrissur Pooram', 
      month: 'May', 
      description: 'Grand temple festival with elephant procession and cultural programs',
      icon: <CelebrationIcon sx={{ fontSize: 32 }} />,
      color: '#F4511E',
    },
    { 
      name: 'Onam', 
      month: 'August-September', 
      description: 'Harvest festival with 10 days of celebrations, pookkalam, and special offerings',
      icon: <LocalFloristIcon sx={{ fontSize: 32 }} />,
      color: '#43A047',
    },
    { 
      name: 'Navaratri', 
      month: 'September-October', 
      description: 'Nine nights dedicated to Goddess Durga with daily special rituals',
      icon: <StarsIcon sx={{ fontSize: 32 }} />,
      color: '#8E24AA',
    },
    { 
      name: 'Deepavali', 
      month: 'October-November', 
      description: 'Festival of lights with special aarti and lamp lighting ceremonies',
      icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} />,
      color: '#FB8C00',
    },
    { 
      name: 'Shivaratri', 
      month: 'February-March', 
      description: 'Night-long vigil with special abhishekam and sacred chanting',
      icon: <CelebrationIcon sx={{ fontSize: 32 }} />,
      color: '#3949AB',
    },
  ];

  return (
    <>
      <PageBanner title="Festival Poojas" />
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
                  <CelebrationIcon sx={{ fontSize: 32, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #d4af37 0%, #e5c158 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Festival Celebrations
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontWeight: 600, mt: 0.5 }}>
                    Experience the divine energy during our major festivals
                  </Typography>
                </Box>
              </Box>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                {festivals.map((festival, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={0} sx={{ 
                      border: `3px solid ${GOLD}`,
                      borderRadius: 4,
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      height: '100%',
                      background: 'linear-gradient(135deg, #fff 0%, #fffef8 100%)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 5,
                        height: '100%',
                        background: `linear-gradient(180deg, ${festival.color} 0%, ${festival.color}CC 100%)`,
                      },
                      '&:hover': { 
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                        borderColor: '#e5c158',
                      } 
                    }}>
                      <CardContent sx={{ p: 3, pl: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Avatar sx={{ 
                            width: 48, 
                            height: 48, 
                            bgcolor: festival.color,
                            boxShadow: `0 4px 16px ${festival.color}50`,
                          }}>
                            {festival.icon}
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ 
                              fontWeight: 700, 
                              color: GOLD,
                              fontSize: '1.2rem',
                            }}>
                              {festival.name}
                            </Typography>
                            <Chip
                              icon={<EventIcon sx={{ fontSize: 16 }} />}
                              label={festival.month}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(212,175,55,0.15)',
                                color: GOLD,
                                fontWeight: 700,
                                fontSize: '0.75rem',
                                height: 24,
                                '& .MuiChip-icon': {
                                  color: GOLD,
                                },
                              }}
                            />
                          </Box>
                        </Box>
                        <Typography variant="body2" sx={{ 
                          color: '#666',
                          lineHeight: 1.7,
                          fontWeight: 500,
                          pl: 7,
                        }}>
                          {festival.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ 
                mt: 4, 
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
                  mb: 3,
                  color: GOLD,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}>
                  <AutoAwesomeIcon sx={{ fontSize: 28 }} />
                  Festival Special Notes
                </Typography>
                <Grid container spacing={2}>
                  {[
                    'Temple timings are extended during festivals',
                    'Special darshan arrangements for devotees',
                    'Prasadam distribution after major rituals',
                    'Parking and accommodation facilities available',
                  ].map((note, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: GOLD,
                          boxShadow: `0 0 8px ${GOLD}`,
                          flexShrink: 0,
                        }} />
                        <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.7, fontWeight: 600 }}>
                          {note}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <PoojaSidebar activePath="/poojas/festival" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
