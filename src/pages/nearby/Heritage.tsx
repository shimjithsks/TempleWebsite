import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Paper, Grid, Card, CardContent, Box, Avatar, Chip, Divider } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HistoryIcon from '@mui/icons-material/History';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const GOLD = '#d4af37';

export default function Heritage() {
  const sites = [
    { name: 'Thalassery Fort', year: '1708', description: 'Built by British East India Company. Well-preserved fort with underground tunnels and sea views.', color: '#ff9800' },
    { name: 'Arakkal Museum', year: '1503', description: 'Museum of Kerala\'s only Muslim royal family. Rich collection of artifacts and historical documents.', color: '#e91e63' },
    { name: 'St. Angelo Fort', year: '1505', description: 'Portuguese fort in Kannur. Important historical monument with triangular structure.', color: '#2196f3' },
    { name: 'Gundert Bungalow', year: '1839', description: 'Home of Hermann Gundert who compiled first Malayalam-English dictionary.', color: '#4caf50' },
  ];

  return (
    <>
      <PageBanner title="Heritage Sites" />
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
                    background: 'linear-gradient(135deg, #ff9800 0%, #ffa726 100%)',
                    mr: 3,
                    boxShadow: '0 8px 24px rgba(255,152,0,0.4)',
                  }}
                >
                  <AccountBalanceIcon sx={{ fontSize: 40, color: '#fff' }} />
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
                    Heritage Sites
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', fontWeight: 600 }}>
                    Historic monuments & cultural landmarks
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>
                Explore centuries-old forts, museums, and historic structures that tell the rich story of North Kerala's heritage.
              </Typography>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Grid container spacing={3}>
                {sites.map((site, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={0} sx={{ 
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
                        background: site.color,
                      }
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Avatar
                            sx={{
                              width: 50,
                              height: 50,
                              background: `linear-gradient(135deg, ${site.color} 0%, ${site.color}dd 100%)`,
                              boxShadow: `0 6px 16px ${site.color}66`,
                            }}
                          >
                            <HistoryIcon sx={{ fontSize: 26, color: '#fff' }} />
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD, mb: 0.5 }}>
                              {site.name}
                            </Typography>
                            <Chip
                              icon={<CalendarTodayIcon sx={{ fontSize: 14 }} />}
                              label={`Est. ${site.year}`}
                              size="small"
                              sx={{
                                bgcolor: `${site.color}22`,
                                color: site.color,
                                fontWeight: 700,
                                border: `2px solid ${site.color}`,
                              }}
                            />
                          </Box>
                        </Box>
                        <Typography variant="body2" sx={{ lineHeight: 1.7, color: '#666' }}>
                          {site.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby/heritage" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
