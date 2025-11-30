import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Chip, Avatar, Divider } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

export default function UpcomingEvents() {
  const GOLD = '#d4af37';

  const events = [
    {
      name: 'Navaratri Festival',
      date: 'December 5-13, 2025',
      time: '5:00 AM - 9:00 PM',
      description: 'Nine days of divine celebrations with special poojas to Goddess Durga',
      highlights: ['Daily Cultural Programs', 'Kumari Pooja', 'Traditional Dance', 'Special Prasadam'],
      color: '#9c27b0'
    },
    {
      name: 'Deepavali Celebration',
      date: 'December 20, 2025',
      time: '5:00 AM - 10:00 PM',
      description: 'Festival of lights with special lighting arrangements and poojas',
      highlights: ['1000+ Oil Lamps', 'Fireworks Display', 'Special Abhishekam', 'Sweet Distribution'],
      color: '#ff9800'
    },
    {
      name: 'Sanskrit Workshop',
      date: 'January 10-12, 2026',
      time: '9:00 AM - 5:00 PM',
      description: 'Three-day workshop on Sanskrit language and Vedic chanting',
      highlights: ['Expert Teachers', 'Free Course Material', 'Certificate', 'Limited Seats'],
      color: '#2196f3'
    },
    {
      name: 'Temple Anniversary',
      date: 'January 20, 2026',
      time: '4:00 AM - 10:00 PM',
      description: 'Celebrating 151 years of divine service to the community',
      highlights: ['Grand Procession', 'Cultural Programs', 'Special Feast', 'VIP Guests'],
      color: '#4caf50'
    },
  ];

  return (
    <>
      <PageBanner title="Upcoming Events" />
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
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 2 }}>
                <Avatar sx={{ 
                  width: 70, 
                  height: 70, 
                  bgcolor: '#4caf50',
                  background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                  mr: 2,
                  boxShadow: '0 4px 20px rgba(76,175,80,0.4)'
                }}>
                  <CalendarMonthIcon sx={{ fontSize: 40, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: GOLD }}>
                    Upcoming Events & Festivals
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                    Mark your calendars for these divine celebrations
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: 'rgba(212,175,55,0.3)' }} />

              <Grid container spacing={3}>
                {events.map((event, index) => (
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
                        background: event.color,
                      }
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Avatar sx={{ 
                            width: 65, 
                            height: 65,
                            bgcolor: event.color,
                            boxShadow: `0 4px 12px ${event.color}40`
                          }}>
                            <EventIcon sx={{ fontSize: 36, color: '#fff' }} />
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', mb: 2 }}>
                              {event.name}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1.5, mb: 2, flexWrap: 'wrap' }}>
                              <Chip
                                icon={<CalendarMonthIcon sx={{ fontSize: 18 }} />}
                                label={event.date}
                                sx={{
                                  bgcolor: `${event.color}20`,
                                  color: event.color,
                                  fontWeight: 700,
                                  border: `2px solid ${event.color}`,
                                  '& .MuiChip-icon': { color: event.color }
                                }}
                              />
                              <Chip
                                icon={<AccessTimeIcon sx={{ fontSize: 18 }} />}
                                label={event.time}
                                sx={{
                                  bgcolor: 'rgba(212,175,55,0.15)',
                                  color: GOLD,
                                  fontWeight: 600,
                                  border: `2px solid ${GOLD}`,
                                  '& .MuiChip-icon': { color: GOLD }
                                }}
                              />
                            </Box>
                            <Typography variant="body1" sx={{ color: '#555', mb: 2.5, lineHeight: 1.7 }}>
                              {event.description}
                            </Typography>
                            <Divider sx={{ mb: 2, borderColor: 'rgba(212,175,55,0.2)' }} />
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                              <StarIcon sx={{ color: GOLD, fontSize: 20 }} />
                              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: GOLD }}>
                                Event Highlights:
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {event.highlights.map((highlight, idx) => (
                                <Chip 
                                  key={idx} 
                                  label={highlight} 
                                  size="small" 
                                  sx={{ 
                                    bgcolor: '#fff',
                                    border: `2px solid ${event.color}30`,
                                    fontWeight: 600,
                                    color: '#333',
                                    '&:hover': {
                                      bgcolor: `${event.color}10`,
                                      borderColor: event.color
                                    }
                                  }} 
                                />
                              ))}
                            </Box>
                          </Box>
                        </Box>
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
                <Typography variant="h6" sx={{ fontWeight: 700, color: GOLD, mb: 2 }}>
                  📝 Event Registration
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7 }}>
                  Some events require prior registration. Please contact the temple office or register online through our booking portal.
                  Limited seats available for workshops and special programs.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news/upcoming" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
