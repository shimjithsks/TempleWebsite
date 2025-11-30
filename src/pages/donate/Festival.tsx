import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Button, Avatar, Chip, Divider } from '@mui/material';
import CelebrationIcon from '@mui/icons-material/Celebration';
import EventIcon from '@mui/icons-material/Event';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const GOLD = '#d4af37';

export default function FestivalContribution() {
  const festivals = [
    { name: 'Vishu Celebration', cost: '₹2,00,000', date: 'April 2025', color: '#ff9800', icon: 'celebration' },
    { name: 'Thrissur Pooram', cost: '₹5,00,000', date: 'May 2025', color: '#e91e63', icon: 'event' },
    { name: 'Onam Festival', cost: '₹3,50,000', date: 'August 2025', color: '#4caf50', icon: 'florist' },
    { name: 'Navaratri', cost: '₹2,50,000', date: 'October 2025', color: '#9c27b0', icon: 'awesome' },
    { name: 'Deepavali', cost: '₹1,50,000', date: 'November 2025', color: '#ff5722', icon: 'celebration' },
    { name: 'Shivaratri', cost: '₹3,00,000', date: 'March 2026', color: '#2196f3', icon: 'event' },
  ];

  const getIcon = (iconType: string) => {
    switch(iconType) {
      case 'celebration': return <CelebrationIcon sx={{ fontSize: 36, color: '#000' }} />;
      case 'event': return <EventIcon sx={{ fontSize: 36, color: '#000' }} />;
      case 'florist': return <LocalFloristIcon sx={{ fontSize: 36, color: '#000' }} />;
      case 'awesome': return <AutoAwesomeIcon sx={{ fontSize: 36, color: '#000' }} />;
      default: return <CelebrationIcon sx={{ fontSize: 36, color: '#000' }} />;
    }
  };

  return (
    <>
      <PageBanner title="Festival Contribution" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: { xs: 3, md: 5 }, 
              mb: 4,
              border: `3px solid ${GOLD}`,
              borderRadius: 4,
              boxShadow: '0 20px 60px rgba(212, 175, 55, 0.25)',
              background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: `linear-gradient(90deg, ${GOLD} 0%, #f4d03f 50%, ${GOLD} 100%)`,
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s infinite',
              },
              '@keyframes shimmer': {
                '0%': { backgroundPosition: '-200% 0' },
                '100%': { backgroundPosition: '200% 0' }
              }
            }}>
              <Box sx={{ mb: 5, textAlign: 'center' }}>
                <Avatar sx={{ 
                  width: 80, 
                  height: 80, 
                  bgcolor: GOLD, 
                  margin: '0 auto',
                  mb: 3,
                  boxShadow: `0 8px 24px rgba(212, 175, 55, 0.4)`
                }}>
                  <CelebrationIcon sx={{ fontSize: 48, color: '#000' }} />
                </Avatar>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#2c3e50' }}>
                  Festival Contribution
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#546e7a', maxWidth: 700, margin: '0 auto' }}>
                  Support our temple festivals and celebrations. Your contributions help organize grand pujas, decorations, special offerings, and cultural programs during festivals.
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {festivals.map((festival, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={0} sx={{ 
                      height: '100%',
                      border: `2px solid ${GOLD}`,
                      borderRadius: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 32px rgba(212, 175, 55, 0.3)`
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '6px',
                        height: '100%',
                        bgcolor: festival.color
                      }
                    }}>
                      <CardContent sx={{ p: 3.5, pl: 4.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                          <Avatar sx={{ 
                            bgcolor: festival.color, 
                            width: 60, 
                            height: 60, 
                            mr: 2,
                            boxShadow: `0 4px 12px ${festival.color}40`
                          }}>
                            {getIcon(festival.icon)}
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#2c3e50', mb: 0.5 }}>
                              {festival.name}
                            </Typography>
                            <Chip 
                              icon={<CalendarMonthIcon sx={{ fontSize: 16 }} />}
                              label={festival.date}
                              size="small"
                              sx={{ 
                                bgcolor: 'rgba(212, 175, 55, 0.1)',
                                color: '#546e7a',
                                fontWeight: 600
                              }}
                            />
                          </Box>
                        </Box>
                        
                        <Divider sx={{ my: 2, borderColor: 'rgba(212, 175, 55, 0.2)' }} />
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                          <Box>
                            <Typography variant="body2" sx={{ color: '#7f8c8d', mb: 0.5, fontWeight: 600 }}>
                              Total Budget
                            </Typography>
                            <Typography variant="h5" sx={{ color: GOLD, fontWeight: 800 }}>
                              {festival.cost}
                            </Typography>
                          </Box>
                          <AttachMoneyIcon sx={{ fontSize: 48, color: GOLD, opacity: 0.3 }} />
                        </Box>
                        
                        <Button
                          fullWidth
                          variant="contained"
                          sx={{
                            bgcolor: GOLD,
                            color: '#000',
                            fontWeight: 700,
                            py: 1.2,
                            borderRadius: 2,
                            boxShadow: `0 4px 12px rgba(212, 175, 55, 0.4)`,
                            '&:hover': { 
                              bgcolor: '#c19b2f',
                              transform: 'translateY(-2px)',
                              boxShadow: `0 6px 16px rgba(212, 175, 55, 0.5)`
                            },
                            transition: 'all 0.25s ease'
                          }}
                        >
                          Contribute Now
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Card sx={{ 
                mt: 5, 
                p: 4, 
                background: `linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)`,
                border: `2px solid ${GOLD}`,
                borderRadius: 3
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar sx={{ bgcolor: GOLD, width: 56, height: 56, mr: 2 }}>
                    <AutoAwesomeIcon sx={{ fontSize: 32, color: '#000' }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#2c3e50' }}>
                    What Your Contribution Supports
                  </Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography sx={{ display: 'flex', alignItems: 'center', color: '#546e7a', mb: 1.5, fontSize: '1rem' }}>
                        <Box component="span" sx={{ width: 8, height: 8, bgcolor: GOLD, borderRadius: '50%', mr: 2 }} />
                        Traditional decorations and flowers
                      </Typography>
                      <Typography sx={{ display: 'flex', alignItems: 'center', color: '#546e7a', mb: 1.5, fontSize: '1rem' }}>
                        <Box component="span" sx={{ width: 8, height: 8, bgcolor: GOLD, borderRadius: '50%', mr: 2 }} />
                        Special poojas and homams
                      </Typography>
                      <Typography sx={{ display: 'flex', alignItems: 'center', color: '#546e7a', fontSize: '1rem' }}>
                        <Box component="span" sx={{ width: 8, height: 8, bgcolor: GOLD, borderRadius: '50%', mr: 2 }} />
                        Prasadam distribution
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 2 }}>
                      <Typography sx={{ display: 'flex', alignItems: 'center', color: '#546e7a', mb: 1.5, fontSize: '1rem' }}>
                        <Box component="span" sx={{ width: 8, height: 8, bgcolor: GOLD, borderRadius: '50%', mr: 2 }} />
                        Cultural programs and music
                      </Typography>
                      <Typography sx={{ display: 'flex', alignItems: 'center', color: '#546e7a', mb: 1.5, fontSize: '1rem' }}>
                        <Box component="span" sx={{ width: 8, height: 8, bgcolor: GOLD, borderRadius: '50%', mr: 2 }} />
                        Lighting and sound systems
                      </Typography>
                      <Typography sx={{ display: 'flex', alignItems: 'center', color: '#546e7a', fontSize: '1rem' }}>
                        <Box component="span" sx={{ width: 8, height: 8, bgcolor: GOLD, borderRadius: '50%', mr: 2 }} />
                        Community feast arrangements
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>

              <Box sx={{ mt: 5 }}>
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#2c3e50', mb: 1 }}>
                    Sponsorship Levels
                  </Typography>
                  <Box sx={{ width: 80, height: 4, bgcolor: GOLD, margin: '0 auto', borderRadius: 2 }} />
                </Box>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Card sx={{ 
                      p: 3.5, 
                      textAlign: 'center',
                      border: '2px solid #c0c0c0',
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 32px rgba(192, 192, 192, 0.4)'
                      }
                    }}>
                      <Avatar sx={{ 
                        width: 70, 
                        height: 70, 
                        bgcolor: '#c0c0c0', 
                        margin: '0 auto',
                        mb: 2,
                        boxShadow: '0 4px 16px rgba(192, 192, 192, 0.4)'
                      }}>
                        <WorkspacePremiumIcon sx={{ fontSize: 40, color: '#000' }} />
                      </Avatar>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#2c3e50', mb: 1 }}>
                        Silver
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 900, color: '#757575', mb: 2 }}>
                        ₹5,000
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#546e7a', fontSize: '1rem' }}>
                        Basic festival sponsorship
                      </Typography>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Card sx={{ 
                      p: 3.5, 
                      textAlign: 'center',
                      border: `3px solid ${GOLD}`,
                      borderRadius: 3,
                      background: `linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, #ffffff 100%)`,
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 12px 32px rgba(212, 175, 55, 0.4)`
                      },
                      '&::before': {
                        content: '"POPULAR"',
                        position: 'absolute',
                        top: 12,
                        right: -28,
                        bgcolor: GOLD,
                        color: '#000',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        px: 4,
                        py: 0.5,
                        transform: 'rotate(45deg)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                      }
                    }}>
                      <Avatar sx={{ 
                        width: 70, 
                        height: 70, 
                        bgcolor: GOLD, 
                        margin: '0 auto',
                        mb: 2,
                        boxShadow: `0 4px 16px rgba(212, 175, 55, 0.4)`
                      }}>
                        <WorkspacePremiumIcon sx={{ fontSize: 40, color: '#000' }} />
                      </Avatar>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#2c3e50', mb: 1 }}>
                        Gold
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 900, color: GOLD, mb: 2 }}>
                        ₹25,000
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#546e7a', fontSize: '1rem' }}>
                        Major event sponsorship
                      </Typography>
                    </Card>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <Card sx={{ 
                      p: 3.5, 
                      textAlign: 'center',
                      border: '2px solid #78909c',
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #eceff1 0%, #ffffff 100%)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 32px rgba(120, 144, 156, 0.4)'
                      }
                    }}>
                      <Avatar sx={{ 
                        width: 70, 
                        height: 70, 
                        bgcolor: '#78909c', 
                        margin: '0 auto',
                        mb: 2,
                        boxShadow: '0 4px 16px rgba(120, 144, 156, 0.4)'
                      }}>
                        <WorkspacePremiumIcon sx={{ fontSize: 40, color: '#fff' }} />
                      </Avatar>
                      <Typography variant="h5" sx={{ fontWeight: 800, color: '#2c3e50', mb: 1 }}>
                        Platinum
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 900, color: '#546e7a', mb: 2 }}>
                        ₹1,00,000
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#546e7a', fontSize: '1rem' }}>
                        Full festival sponsorship
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="donate" activePath="/donate/festival" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
