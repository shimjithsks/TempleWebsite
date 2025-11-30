import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Card, CardContent, Grid, Avatar, Chip, Divider } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function Notices() {
  const GOLD = '#d4af37';

  const notices = [
    {
      title: 'Temple Closure Notice',
      date: 'November 22, 2025',
      content: 'The temple will remain closed on December 1st, 2025 for annual maintenance and cleaning. Normal operations will resume from December 2nd.'
    },
    {
      title: 'New Dress Code Guidelines',
      date: 'November 18, 2025',
      content: 'Traditional dress is encouraged. Men: Dhoti/Mundu with upper cloth. Women: Saree/Churidar/Traditional attire. Shorts and sleeveless tops not permitted inside sanctum.'
    },
    {
      title: 'Photography Policy Update',
      date: 'November 15, 2025',
      content: 'Photography is allowed in temple premises except inside the main sanctum. Flash photography is strictly prohibited. Video recording requires prior permission.'
    },
    {
      title: 'Committee Election Notice',
      date: 'November 10, 2025',
      content: 'Annual temple committee elections will be held on January 15, 2026. Nominations open from December 1st. All registered members are eligible to vote.'
    },
    {
      title: 'Festival Calendar Release',
      date: 'November 5, 2025',
      content: 'The 2026 festival calendar is now available at the temple office and on our website. Plan your visits for major festivals and special poojas.'
    },
  ];

  return (
    <>
      <PageBanner title="Notices & Circulars" />
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
                  bgcolor: '#2196f3',
                  background: 'linear-gradient(135deg, #2196f3 0%, #64b5f6 100%)',
                  mr: 2,
                  boxShadow: '0 4px 20px rgba(33,150,243,0.4)'
                }}>
                  <AssignmentIcon sx={{ fontSize: 40, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: GOLD }}>
                    Notices & Circulars
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                    Official notices from temple administration
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: 'rgba(212,175,55,0.3)' }} />

              {notices.map((notice, index) => (
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
                      background: '#2196f3',
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Avatar sx={{ 
                        width: 60, 
                        height: 60,
                        bgcolor: '#2196f3',
                        boxShadow: '0 4px 12px rgba(33,150,243,0.4)'
                      }}>
                        <DescriptionIcon sx={{ fontSize: 32, color: '#fff' }} />
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', mb: 1.5 }}>
                          {notice.title}
                        </Typography>
                        <Chip
                          icon={<DateRangeIcon sx={{ fontSize: 16 }} />}
                          label={`Issued: ${notice.date}`}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(212,175,55,0.15)',
                            color: GOLD,
                            fontWeight: 600,
                            border: `2px solid ${GOLD}`,
                            mb: 2,
                            '& .MuiChip-icon': { color: GOLD }
                          }}
                        />
                        <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7 }}>
                          {notice.content}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}

              <Box sx={{ 
                mt: 4, 
                p: 4, 
                background: `linear-gradient(135deg, rgba(212,175,55,0.15), rgba(229,193,88,0.15))`,
                borderRadius: 4,
                border: `3px solid ${GOLD}`,
                boxShadow: '0 8px 24px rgba(212,175,55,0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: GOLD, mb: 2 }}>
                  📋 Notice Board
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.7 }}>
                  Physical notice board is available at the temple entrance. Important circulars are also announced during daily poojas and posted on our social media channels.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news/notices" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
