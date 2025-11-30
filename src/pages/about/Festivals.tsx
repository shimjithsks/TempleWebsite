import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar, Chip, Divider } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Festivals() {
  const GOLD = '#d4af37';

  const majorFestivals = [
    {
      name: 'Shivaratri',
      month: 'February/March',
      duration: '1 Day',
      description: 'The most important festival celebrating Lord Shiva. Night-long vigil with abhishekam every hour, special rituals, and bhajan sessions.',
      specialRituals: ['Rudra Abhishekam', 'Pradosham', 'Midnight Aarti', 'All-night Bhajans'],
      color: '#9c27b0'
    },
    {
      name: 'Vishu',
      month: 'April',
      duration: '1 Day',
      description: 'Malayalam New Year celebrated with Vishukkani (first sight), special offerings, and distribution of Vishu Kaineetam.',
      specialRituals: ['Vishukkani Arrangement', 'Special Sadhya', 'Fireworks', 'New Clothes Distribution'],
      color: '#ff9800'
    },
    {
      name: 'Thrissur Pooram',
      month: 'May',
      duration: '1 Day',
      description: 'Grand festival with elephant procession, traditional percussion ensemble, and cultural programs.',
      specialRituals: ['Elephant Procession', 'Panchavadyam', 'Cultural Programs', 'Grand Feast'],
      color: '#e91e63'
    },
    {
      name: 'Onam',
      month: 'August/September',
      duration: '10 Days',
      description: 'Harvest festival celebrated with flower arrangements, traditional feast, cultural programs, and boat races.',
      specialRituals: ['Pookalam', 'Onasadya', 'Traditional Dance', 'Games & Competitions'],
      color: '#4caf50'
    },
    {
      name: 'Navaratri',
      month: 'September/October',
      duration: '9 Days',
      description: 'Nine nights dedicated to Goddess Durga with special poojas, cultural programs, and Kumari Pooja on Mahanavami.',
      specialRituals: ['Daily Cultural Programs', 'Kumari Pooja', 'Saraswathi Pooja', 'Vijayadashami'],
      color: '#673ab7'
    },
    {
      name: 'Deepavali',
      month: 'October/November',
      duration: '1 Day',
      description: 'Festival of lights celebrated with lighting of 1000+ lamps, special poojas, and fireworks.',
      specialRituals: ['1000 Lamps', 'Lakshmi Pooja', 'Fireworks', 'Sweet Distribution'],
      color: '#ff5722'
    },
  ];

  return (
    <>
      <PageBanner title="Temple Festivals" />
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, mt: 2 }}>
                <Avatar sx={{ 
                  width: 70, 
                  height: 70, 
                  bgcolor: '#e91e63',
                  background: 'linear-gradient(135deg, #e91e63 0%, #f06292 100%)',
                  boxShadow: '0 4px 20px rgba(233,30,99,0.4)'
                }}>
                  <CelebrationIcon sx={{ fontSize: 40, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: GOLD }}>
                    Temple Festivals
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                    Celebrating divine traditions throughout the year
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: 'rgba(212,175,55,0.3)' }} />
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Our temple celebrates major Hindu festivals with great devotion and enthusiasm. Each festival brings unique rituals, cultural programs, and an opportunity for spiritual renewal.
              </Typography>

              <Grid container spacing={3}>
                {majorFestivals.map((festival, index) => (
                  <Grid item xs={12} key={index}>
                    <Card elevation={0} sx={{ 
                      border: `3px solid ${GOLD}`,
                      borderRadius: 4,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': { 
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 40px rgba(212,175,55,0.3)'
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 6,
                        background: festival.color,
                      }
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={8}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                              <Avatar sx={{ 
                                width: 50, 
                                height: 50,
                                bgcolor: festival.color,
                                boxShadow: `0 4px 12px ${festival.color}40`
                              }}>
                                <CelebrationIcon sx={{ fontSize: 28, color: '#fff' }} />
                              </Avatar>
                              <Typography variant="h6" sx={{ fontWeight: 700, color: '#333' }}>
                                {festival.name}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1.5, mb: 2, flexWrap: 'wrap' }}>
                              <Chip
                                icon={<CalendarMonthIcon sx={{ fontSize: 16 }} />}
                                label={festival.month}
                                size="small"
                                sx={{
                                  bgcolor: `${festival.color}20`,
                                  color: festival.color,
                                  fontWeight: 700,
                                  border: `2px solid ${festival.color}`,
                                  '& .MuiChip-icon': { color: festival.color }
                                }}
                              />
                              <Chip
                                icon={<AccessTimeIcon sx={{ fontSize: 16 }} />}
                                label={festival.duration}
                                size="small"
                                sx={{
                                  bgcolor: 'rgba(212,175,55,0.15)',
                                  color: GOLD,
                                  fontWeight: 600,
                                  border: `2px solid ${GOLD}`,
                                  '& .MuiChip-icon': { color: GOLD }
                                }}
                              />
                            </Box>
                            <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#555' }}>
                              {festival.description}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <Box sx={{ 
                              p: 2.5, 
                              background: `${festival.color}10`,
                              borderRadius: 3,
                              border: `2px solid ${festival.color}30`,
                              height: '100%' 
                            }}>
                              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: festival.color }}>
                                ✨ Special Rituals:
                              </Typography>
                              {festival.specialRituals.map((ritual, idx) => (
                                <Typography key={idx} variant="body2" sx={{ mb: 0.8, color: '#555' }}>
                                  • {ritual}
                                </Typography>
                              ))}
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ 
                mt: 4, 
                p: 4, 
                background: `linear-gradient(135deg, rgba(212,175,55,0.15), rgba(229,193,88,0.15))`,
                borderRadius: 4,
                border: `3px solid ${GOLD}`,
                boxShadow: '0 8px 24px rgba(212,175,55,0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: GOLD }}>ℹ️ Festival Information</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ color: '#555' }}>• Exact dates vary each year based on Malayalam calendar</Typography>
                  <Typography sx={{ color: '#555' }}>• Extended temple timings during festivals</Typography>
                  <Typography sx={{ color: '#555' }}>• Special parking and accommodation arrangements</Typography>
                  <Typography sx={{ color: '#555' }}>• Prasadam distribution after major rituals</Typography>
                  <Typography sx={{ color: '#555' }}>• Cultural programs in the evening</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="about" activePath="/about/festivals" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
