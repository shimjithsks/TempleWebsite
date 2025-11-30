import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Card, CardContent, Chip, Grid, Avatar, Divider } from '@mui/material';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import BuildIcon from '@mui/icons-material/Build';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export default function TempleNews() {
  const GOLD = '#d4af37';

  const news = [
    {
      title: 'New Annadanam Hall Inauguration',
      date: 'November 20, 2025',
      category: 'Development',
      content: 'The temple inaugurated a new, modern Annadanam hall that can accommodate 500 devotees at a time. The facility features improved kitchen equipment and dining space.',
      icon: BuildIcon,
      color: '#2196f3'
    },
    {
      title: 'Temple Website Launch',
      date: 'November 15, 2025',
      category: 'Announcement',
      content: 'Our new website is now live! Devotees can now book poojas online, make donations, and stay updated with temple events and news.',
      icon: AnnouncementIcon,
      color: '#ff9800'
    },
    {
      title: 'Free Medical Camp Organized',
      date: 'November 10, 2025',
      category: 'Community Service',
      content: 'A free medical camp was organized at the temple premises serving over 300 people from the local community with health checkups and free medicines.',
      icon: VolunteerActivismIcon,
      color: '#4caf50'
    },
    {
      title: 'Temple Renovation Phase 1 Completed',
      date: 'November 5, 2025',
      category: 'Development',
      content: 'The first phase of temple renovation including the main sanctum restoration has been successfully completed. Phase 2 will begin next month.',
      icon: BuildIcon,
      color: '#9c27b0'
    },
  ];

  return (
    <>
      <PageBanner title="Temple News" />
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
                  bgcolor: GOLD,
                  background: `linear-gradient(135deg, ${GOLD} 0%, #e5c158 100%)`,
                  mr: 2,
                  boxShadow: '0 4px 20px rgba(212,175,55,0.4)'
                }}>
                  <NewspaperIcon sx={{ fontSize: 40, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: GOLD }}>
                    Latest Temple News
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                    Stay updated with the latest news and developments at our temple
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: 'rgba(212,175,55,0.3)' }} />

              {news.map((item, index) => {
                const IconComponent = item.icon;
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
                        background: item.color,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <Avatar sx={{ 
                          width: 60, 
                          height: 60,
                          bgcolor: item.color,
                          boxShadow: `0 4px 12px ${item.color}40`
                        }}>
                          <IconComponent sx={{ fontSize: 32, color: '#fff' }} />
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', flex: 1 }}>
                              {item.title}
                            </Typography>
                            <Chip
                              label={item.category}
                              sx={{
                                bgcolor: `${item.color}20`,
                                color: item.color,
                                fontWeight: 700,
                                border: `2px solid ${item.color}`,
                                fontSize: '0.85rem'
                              }}
                            />
                          </Box>
                          <Chip
                            label={item.date}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(212,175,55,0.15)',
                              color: GOLD,
                              fontWeight: 600,
                              border: `1px solid ${GOLD}`,
                            }}
                          />
                        </Box>
                      </Box>
                      <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7, pl: 9 }}>
                        {item.content}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}

              <Box sx={{ 
                mt: 4, 
                p: 4, 
                background: `linear-gradient(135deg, rgba(212,175,55,0.15), rgba(229,193,88,0.15))`,
                borderRadius: 4,
                border: `3px solid ${GOLD}`,
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(212,175,55,0.2)'
              }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: GOLD, mb: 1 }}>
                  📰 Stay Connected
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
                  Subscribe to our newsletter for regular updates on temple news, events, and announcements
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, maxWidth: 400, mx: 'auto' }}>
                  <Box sx={{ 
                    flex: 1, 
                    height: 48, 
                    border: `2px solid ${GOLD}`,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    bgcolor: '#fff'
                  }}>
                    <Typography sx={{ color: '#999' }}>your@email.com</Typography>
                  </Box>
                  <Box sx={{
                    px: 4,
                    height: 48,
                    bgcolor: GOLD,
                    color: '#fff',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 300ms',
                    '&:hover': {
                      bgcolor: '#e5c158',
                      transform: 'scale(1.05)',
                      boxShadow: '0 6px 20px rgba(212,175,55,0.4)'
                    }
                  }}>
                    Subscribe
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news/news" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
