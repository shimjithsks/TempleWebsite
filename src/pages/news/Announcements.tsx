import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Card, CardContent, Grid, Avatar, Chip, Divider } from '@mui/material';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import CampaignIcon from '@mui/icons-material/Campaign';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import InfoIcon from '@mui/icons-material/Info';

export default function Announcements() {
  const GOLD = '#d4af37';

  const announcements = [
    {
      title: 'Temple Timings During Festival Season',
      date: 'November 22, 2025',
      priority: 'high',
      content: 'During the upcoming festival season (Dec 1-15), temple will remain open from 4:00 AM to 10:00 PM. Extended darshan hours for devotees.'
    },
    {
      title: 'Online Booking System Update',
      date: 'November 18, 2025',
      priority: 'medium',
      content: 'We have upgraded our online booking system. Devotees can now book poojas up to 3 months in advance. Payment gateway updated for better security.'
    },
    {
      title: 'Parking Arrangements',
      date: 'November 15, 2025',
      priority: 'medium',
      content: 'Additional parking space has been arranged near the temple. Shuttle service available from main parking area. Please follow volunteer instructions.'
    },
    {
      title: 'COVID-19 Safety Guidelines',
      date: 'November 10, 2025',
      priority: 'high',
      content: 'Masks are recommended but not mandatory. Hand sanitizers available at all entry points. Maintain social distancing during crowded times.'
    },
  ];

  const getPriorityColor = (priority: string) => {
    return priority === 'high' ? '#ff5252' : '#ff9800';
  };

  return (
    <>
      <PageBanner title="Announcements" />
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
                  bgcolor: '#ff9800',
                  background: 'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)',
                  mr: 2,
                  boxShadow: '0 4px 20px rgba(255,152,0,0.4)'
                }}>
                  <CampaignIcon sx={{ fontSize: 40, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: GOLD }}>
                    Temple Announcements
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                    Important updates and notices for devotees - Please read carefully
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: 'rgba(212,175,55,0.3)' }} />

              {announcements.map((item, index) => {
                const priorityColor = getPriorityColor(item.priority);
                return (
                  <Card
                    key={index}
                    elevation={0}
                    sx={{
                      mb: 3,
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
                        background: priorityColor,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <Avatar sx={{ 
                          width: 60, 
                          height: 60,
                          bgcolor: priorityColor,
                          boxShadow: `0 4px 12px ${priorityColor}40`
                        }}>
                          {item.priority === 'high' ? (
                            <PriorityHighIcon sx={{ fontSize: 32, color: '#fff' }} />
                          ) : (
                            <InfoIcon sx={{ fontSize: 32, color: '#fff' }} />
                          )}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#333' }}>
                              {item.title}
                            </Typography>
                            <Chip
                              label={item.priority === 'high' ? 'HIGH PRIORITY' : 'MEDIUM PRIORITY'}
                              size="small"
                              sx={{
                                bgcolor: `${priorityColor}20`,
                                color: priorityColor,
                                fontWeight: 700,
                                border: `2px solid ${priorityColor}`,
                                fontSize: '0.75rem'
                              }}
                            />
                          </Box>
                          <Chip
                            label={item.date}
                            size="small"
                            icon={<AnnouncementIcon sx={{ fontSize: 16 }} />}
                            sx={{
                              bgcolor: 'rgba(212,175,55,0.15)',
                              color: GOLD,
                              fontWeight: 600,
                              border: `1px solid ${GOLD}`,
                              mb: 2
                            }}
                          />
                          <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7 }}>
                            {item.content}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                );
              })}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news/announcements" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
