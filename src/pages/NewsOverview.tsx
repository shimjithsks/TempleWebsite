import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
  Card,
  Avatar,
} from '@mui/material';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';
import { Link as RouterLink } from 'react-router-dom';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';
import CampaignIcon from '@mui/icons-material/Campaign';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const highlights = [
  {
    title: 'Temple News & Updates',
    detail: 'Daily activities, priest schedules, and general news from the temple administration.',
    to: '/news/news',
    icon: NewspaperIcon,
    color: '#2196f3'
  },
  {
    title: 'Upcoming Events',
    detail: 'Festival calendars, special poojas, and community programs with dates and essential details.',
    to: '/news/upcoming',
    icon: EventIcon,
    color: '#4caf50'
  },
  {
    title: 'Announcements & Notices',
    detail: 'Official communications, circulars, and day-to-day notices for devotees and staff.',
    to: '/news/announcements',
    icon: CampaignIcon,
    color: '#ff9800'
  },
];

const recent = [
  { title: 'Annual Utsavam dates announced', date: '2025-12-20' },
  { title: 'New online booking system launched', date: '2025-11-05' },
  { title: 'Charity annadanam drive completed', date: '2025-10-12' },
];

export default function NewsOverview() {
  const GOLD = '#d4af37';
  const [email, setEmail] = useState('');

  return (
    <>
      <PageBanner title="News & Events" />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: { xs: 3, md: 4 },
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
                  width: 80, 
                  height: 80, 
                  bgcolor: GOLD,
                  background: `linear-gradient(135deg, ${GOLD} 0%, #e5c158 100%)`,
                  boxShadow: '0 4px 20px rgba(212,175,55,0.4)'
                }}>
                  <NotificationsActiveIcon sx={{ fontSize: 45, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: GOLD, mb: 0.5 }}>
                    News & Events Center
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    Your gateway to temple updates, announcements, and celebrations
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 3, borderColor: 'rgba(212,175,55,0.3)' }} />

              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: '#555', fontSize: '1.05rem' }}>
                Welcome to the temple's information hub. Here you'll find the latest news, official announcements,
                upcoming festivals and events, photo galleries from past celebrations, and important notices for devotees.
                Use the links below to jump to details, subscribe for updates, or browse past event galleries.
              </Typography>

              <Grid container spacing={3}>
                {highlights.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Grid item xs={12} md={4} key={item.title}>
                      <Card elevation={0} sx={{ 
                        p: 3, 
                        borderRadius: 4, 
                        height: '100%',
                        border: `3px solid ${GOLD}`,
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
                          background: item.color,
                        }
                      }}>
                        <Avatar sx={{ 
                          width: 56, 
                          height: 56, 
                          bgcolor: item.color,
                          mb: 2,
                          boxShadow: `0 4px 16px ${item.color}40`
                        }}>
                          <IconComponent sx={{ fontSize: 32, color: '#fff' }} />
                        </Avatar>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#333', mb: 1.5 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', mb: 2.5, lineHeight: 1.6 }}>
                          {item.detail}
                        </Typography>
                        <Button 
                          component={RouterLink} 
                          to={item.to} 
                          variant="contained"
                          sx={{ 
                            bgcolor: item.color,
                            color: '#fff',
                            fontWeight: 700,
                            borderRadius: 2,
                            px: 3,
                            '&:hover': {
                              bgcolor: item.color,
                              transform: 'scale(1.05)',
                              boxShadow: `0 6px 20px ${item.color}60`
                            }
                          }}
                        >
                          View Details →
                        </Button>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>

              <Box sx={{ mt: 4, display: 'flex', gap: 3, alignItems: 'stretch', flexWrap: 'wrap' }}>
                <Paper elevation={0} sx={{ 
                  p: 3, 
                  background: `linear-gradient(135deg, rgba(212,175,55,0.1), rgba(229,193,88,0.15))`,
                  borderRadius: 4, 
                  flex: 1,
                  minWidth: 300,
                  border: `2px solid ${GOLD}`,
                  boxShadow: '0 8px 24px rgba(212,175,55,0.2)'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: GOLD }}>
                    📌 Recent Highlights
                  </Typography>
                  <List>
                    {recent.map((r) => (
                      <React.Fragment key={r.title}>
                        <ListItem disableGutters sx={{ py: 1.5 }}>
                          <ListItemText 
                            primary={r.title} 
                            secondary={r.date}
                            primaryTypographyProps={{ fontWeight: 600, color: '#333' }}
                            secondaryTypographyProps={{ color: '#888', fontSize: '0.875rem' }}
                          />
                        </ListItem>
                        <Divider sx={{ borderColor: 'rgba(212,175,55,0.2)' }} />
                      </React.Fragment>
                    ))}
                  </List>
                </Paper>

                <Paper elevation={0} sx={{ 
                  p: 3, 
                  borderRadius: 4, 
                  minWidth: 320,
                  border: `3px solid ${GOLD}`,
                  background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
                  boxShadow: '0 8px 24px rgba(212,175,55,0.2)'
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: GOLD }}>
                    ✉️ Subscribe for Updates
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mb: 2.5, lineHeight: 1.6 }}>
                    Enter your email to receive important announcements and event reminders from the temple.
                  </Typography>
                  <Stack spacing={2}>
                    <TextField 
                      size="small" 
                      placeholder="your@email.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': { borderColor: GOLD, borderWidth: 2 },
                          '&:hover fieldset': { borderColor: '#e5c158' },
                          '&.Mui-focused fieldset': { borderColor: GOLD },
                        }
                      }}
                    />
                    <Button 
                      variant="contained" 
                      fullWidth
                      sx={{ 
                        bgcolor: GOLD,
                        color: '#fff',
                        fontWeight: 700,
                        height: 44,
                        borderRadius: 2,
                        '&:hover': { 
                          bgcolor: '#e5c158',
                          transform: 'scale(1.02)',
                          boxShadow: '0 6px 20px rgba(212,175,55,0.4)'
                        }
                      }} 
                      onClick={() => alert('Subscribed!')}
                    >
                      Subscribe Now
                    </Button>
                  </Stack>
                </Paper>
              </Box>

              <Divider sx={{ my: 4, borderColor: 'rgba(212,175,55,0.3)' }} />

              <Box sx={{ 
                p: 3, 
                borderRadius: 4,
                background: `linear-gradient(135deg, rgba(212,175,55,0.08), rgba(229,193,88,0.12))`,
                border: `2px solid rgba(212,175,55,0.3)`
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: GOLD }}>
                  📖 How to Use This Section
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 3, '& li': { mb: 1, color: '#555', lineHeight: 1.7 } }}>
                  <li>Check <strong>'Announcements'</strong> for official communication from temple management</li>
                  <li>Use <strong>'Upcoming Events'</strong> to plan visits and register for special programs</li>
                  <li>Browse <strong>'Past Events'</strong> and the gallery for photo highlights and reports</li>
                  <li>Subscribe to our newsletter to never miss an important update or festival</li>
                </Box>
              </Box>

              <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button 
                  component={RouterLink} 
                  to="/news/announcements" 
                  variant="outlined"
                  sx={{
                    borderColor: GOLD,
                    borderWidth: 2,
                    color: GOLD,
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: '#e5c158',
                      bgcolor: 'rgba(212,175,55,0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(212,175,55,0.3)'
                    }
                  }}
                >
                  📢 Announcements
                </Button>
                <Button 
                  component={RouterLink} 
                  to="/news/upcoming" 
                  variant="contained"
                  sx={{ 
                    bgcolor: GOLD,
                    color: '#fff',
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    boxShadow: '0 4px 16px rgba(212,175,55,0.3)',
                    '&:hover': {
                      bgcolor: '#e5c158',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(212,175,55,0.4)'
                    }
                  }}
                >
                  📅 Upcoming Events
                </Button>
                <Button 
                  component={RouterLink} 
                  to="/news/news" 
                  variant="outlined"
                  sx={{
                    borderColor: '#2196f3',
                    borderWidth: 2,
                    color: '#2196f3',
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    '&:hover': {
                      borderWidth: 2,
                      bgcolor: 'rgba(33,150,243,0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(33,150,243,0.3)'
                    }
                  }}
                >
                  📰 Temple News
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
