import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar, Chip, Divider } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PeopleIcon from '@mui/icons-material/People';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function PastEvents() {
  const GOLD = '#d4af37';

  const pastEvents = [
    {
      name: 'Onam Festival 2024',
      date: 'September 15-24, 2024',
      attendance: '5000+ devotees',
      description: 'Grand 10-day celebration with traditional poojas, Pookalam competition, and cultural programs',
      photos: 145,
      color: '#4caf50'
    },
    {
      name: 'Shivaratri Mahothsavam 2024',
      date: 'March 8, 2024',
      attendance: '3500+ devotees',
      description: 'Night-long vigil with special abhishekam every hour and continuous bhajan sessions',
      photos: 98,
      color: '#9c27b0'
    },
    {
      name: 'Temple 150th Anniversary',
      date: 'January 20, 2024',
      attendance: '8000+ devotees',
      description: 'Historical milestone celebration with grand procession and cultural extravaganza',
      photos: 220,
      color: '#ff9800'
    },
    {
      name: 'Vishu Celebration 2024',
      date: 'April 14, 2024',
      attendance: '2000+ devotees',
      description: 'Malayalam New Year with traditional Vishukkani and special offerings',
      photos: 76,
      color: '#2196f3'
    },
    {
      name: 'Yoga & Meditation Retreat',
      date: 'February 15-17, 2024',
      attendance: '150 participants',
      description: 'Three-day spiritual retreat with yoga sessions, meditation, and spiritual discourses',
      photos: 45,
      color: '#e91e63'
    },
  ];

  return (
    <>
      <PageBanner title="Past Events" />
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
                  bgcolor: '#9c27b0',
                  background: 'linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%)',
                  mr: 2,
                  boxShadow: '0 4px 20px rgba(156,39,176,0.4)'
                }}>
                  <HistoryIcon sx={{ fontSize: 40, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: GOLD }}>
                    Past Events Gallery
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                    Relive the beautiful moments from our celebrations
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: 'rgba(212,175,55,0.3)' }} />

              <Grid container spacing={3}>
                {pastEvents.map((event, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={0} sx={{ 
                      height: '100%',
                      border: `3px solid ${GOLD}`,
                      borderRadius: 4,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': { 
                        transform: 'translateY(-6px)',
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
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                          <Avatar sx={{ 
                            width: 50, 
                            height: 50,
                            bgcolor: event.color,
                            boxShadow: `0 4px 12px ${event.color}40`
                          }}>
                            <PhotoLibraryIcon sx={{ fontSize: 28, color: '#fff' }} />
                          </Avatar>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', flex: 1 }}>
                            {event.name}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                          <Chip
                            icon={<CalendarTodayIcon sx={{ fontSize: 16 }} />}
                            label={event.date}
                            size="small"
                            sx={{
                              bgcolor: `${event.color}20`,
                              color: event.color,
                              fontWeight: 600,
                              border: `2px solid ${event.color}`,
                              '& .MuiChip-icon': { color: event.color }
                            }}
                          />
                          <Chip
                            icon={<PeopleIcon sx={{ fontSize: 16 }} />}
                            label={event.attendance}
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
                        <Typography variant="body2" sx={{ color: '#555', mb: 2.5, lineHeight: 1.7 }}>
                          {event.description}
                        </Typography>
                        <Divider sx={{ mb: 2, borderColor: 'rgba(212,175,55,0.2)' }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Chip
                            icon={<PhotoLibraryIcon sx={{ fontSize: 18 }} />}
                            label={`${event.photos} photos`}
                            sx={{
                              bgcolor: event.color,
                              color: '#fff',
                              fontWeight: 700,
                              '& .MuiChip-icon': { color: '#fff' }
                            }}
                          />
                          <Typography
                            sx={{
                              color: event.color,
                              fontWeight: 700,
                              cursor: 'pointer',
                              transition: 'all 300ms',
                              '&:hover': { 
                                transform: 'translateX(4px)',
                                textDecoration: 'underline'
                              },
                            }}
                          >
                            View Gallery →
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news/past" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
