/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, LinearProgress, Card, Avatar, Chip } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { colors } from '../../theme/colors';

const GOLD = '#d4af37';

export default function TempleRenovation() {
  const goalAmount = 50000000;
  const raisedAmount = 32000000;
  const progress = (raisedAmount / goalAmount) * 100;

  return (
    <>
      <PageBanner title="Temple Renovation Fund" />
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
                  <AccountBalanceIcon sx={{ fontSize: 48, color: '#000' }} />
                </Avatar>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#2c3e50' }}>
                  Temple Renovation Fund
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#546e7a', maxWidth: 700, margin: '0 auto' }}>
                  Our temple is undergoing major renovation to preserve its heritage and improve facilities for devotees. Your support will help us complete this sacred project.
                </Typography>
              </Box>

              <Card sx={{ 
                mb: 5, 
                p: 4, 
                background: `linear-gradient(135deg, ${GOLD} 0%, #e5c158 100%)`,
                borderRadius: 3,
                boxShadow: `0 12px 32px rgba(212, 175, 55, 0.4)`,
                border: 'none'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  <EmojiEventsIcon sx={{ fontSize: 40, color: '#000', mr: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#000' }}>
                    Fundraising Progress
                  </Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 28,
                    borderRadius: 20,
                    mb: 3,
                    bgcolor: 'rgba(0, 0, 0, 0.2)',
                    border: '2px solid rgba(0, 0, 0, 0.15)',
                    '& .MuiLinearProgress-bar': { 
                      bgcolor: '#43a047',
                      borderRadius: 20,
                      backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)',
                      backgroundSize: '40px 40px',
                      animation: 'progress-bar-stripes 1s linear infinite'
                    },
                    '@keyframes progress-bar-stripes': {
                      '0%': { backgroundPosition: '40px 0' },
                      '100%': { backgroundPosition: '0 0' }
                    }
                  }}
                />

                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'rgba(255, 255, 255, 0.3)', borderRadius: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'rgba(0, 0, 0, 0.7)', mb: 1 }}>
                        Raised
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 900, color: '#000' }}>
                        ₹{(raisedAmount / 10000000).toFixed(1)} Cr
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'rgba(255, 255, 255, 0.3)', borderRadius: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'rgba(0, 0, 0, 0.7)', mb: 1 }}>
                        Goal
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 900, color: '#000' }}>
                        ₹{goalAmount / 10000000} Cr
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'rgba(255, 255, 255, 0.3)', borderRadius: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'rgba(0, 0, 0, 0.7)', mb: 1 }}>
                        Progress
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 900, color: '#000' }}>
                        {progress.toFixed(1)}%
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Chip 
                  label="{Math.floor((goalAmount - raisedAmount) / 10000000)} Cr remaining to goal"
                  sx={{
                    bgcolor: 'rgba(0, 0, 0, 0.15)',
                    color: '#000',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    height: 36,
                    width: '100%',
                    borderRadius: 2
                  }}
                />
              </Card>

              <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#2c3e50', mb: 1 }}>
                  Renovation Projects
                </Typography>
                <Box sx={{ width: 80, height: 4, bgcolor: GOLD, margin: '0 auto', borderRadius: 2 }} />
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ 
                    p: 3.5,
                    height: '100%',
                    border: `2px solid ${GOLD}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 32px rgba(212, 175, 55, 0.3)`
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                      <Avatar sx={{ bgcolor: GOLD, width: 56, height: 56, mr: 2 }}>
                        <AccountBalanceIcon sx={{ fontSize: 32, color: '#000' }} />
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#2c3e50' }}>
                        Main Sanctum Restoration
                      </Typography>
                    </Box>
                    <Box sx={{ pl: 2, mb: 2.5 }}>
                      <Typography sx={{ mb: 1, color: '#546e7a', display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: GOLD, borderRadius: '50%', mr: 1.5 }} />
                        Gold plating of the main deity
                      </Typography>
                      <Typography sx={{ mb: 1, color: '#546e7a', display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: GOLD, borderRadius: '50%', mr: 1.5 }} />
                        Structural reinforcement
                      </Typography>
                      <Typography sx={{ color: '#546e7a', display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: GOLD, borderRadius: '50%', mr: 1.5 }} />
                        Traditional art restoration
                      </Typography>
                    </Box>
                    <Chip 
                      label="Cost: ₹2 Crores" 
                      sx={{ 
                        bgcolor: GOLD, 
                        color: '#000', 
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        width: '100%',
                        height: 36
                      }} 
                    />
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card sx={{ 
                    p: 3.5,
                    height: '100%',
                    border: `2px solid ${GOLD}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 32px rgba(212, 175, 55, 0.3)`
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                      <Avatar sx={{ bgcolor: GOLD, width: 56, height: 56, mr: 2 }}>
                        <HomeWorkIcon sx={{ fontSize: 32, color: '#000' }} />
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#2c3e50' }}>
                        Infrastructure Development
                      </Typography>
                    </Box>
                    <Box sx={{ pl: 2, mb: 2.5 }}>
                      <Typography sx={{ mb: 1, color: '#546e7a', display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: GOLD, borderRadius: '50%', mr: 1.5 }} />
                        New visitor facilities
                      </Typography>
                      <Typography sx={{ mb: 1, color: '#546e7a', display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: GOLD, borderRadius: '50%', mr: 1.5 }} />
                        Improved parking area
                      </Typography>
                      <Typography sx={{ color: '#546e7a', display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: GOLD, borderRadius: '50%', mr: 1.5 }} />
                        Wheelchair accessibility
                      </Typography>
                    </Box>
                    <Chip 
                      label="Cost: ₹1.5 Crores" 
                      sx={{ 
                        bgcolor: GOLD, 
                        color: '#000', 
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        width: '100%',
                        height: 36
                      }} 
                    />
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card sx={{ 
                    p: 3.5,
                    height: '100%',
                    border: `2px solid ${GOLD}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 32px rgba(212, 175, 55, 0.3)`
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                      <Avatar sx={{ bgcolor: GOLD, width: 56, height: 56, mr: 2 }}>
                        <LocalLibraryIcon sx={{ fontSize: 32, color: '#000' }} />
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#2c3e50' }}>
                        Cultural Center
                      </Typography>
                    </Box>
                    <Box sx={{ pl: 2, mb: 2.5 }}>
                      <Typography sx={{ mb: 1, color: '#546e7a', display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: GOLD, borderRadius: '50%', mr: 1.5 }} />
                        Auditorium for events
                      </Typography>
                      <Typography sx={{ mb: 1, color: '#546e7a', display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: GOLD, borderRadius: '50%', mr: 1.5 }} />
                        Library and study room
                      </Typography>
                      <Typography sx={{ color: '#546e7a', display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: GOLD, borderRadius: '50%', mr: 1.5 }} />
                        Traditional arts training
                      </Typography>
                    </Box>
                    <Chip 
                      label="Cost: ₹80 Lakhs" 
                      sx={{ 
                        bgcolor: GOLD, 
                        color: '#000', 
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        width: '100%',
                        height: 36
                      }} 
                    />
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card sx={{ 
                    p: 3.5,
                    height: '100%',
                    border: `2px solid ${GOLD}`,
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 32px rgba(212, 175, 55, 0.3)`
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
                      <Avatar sx={{ bgcolor: GOLD, width: 56, height: 56, mr: 2 }}>
                        <RestaurantIcon sx={{ fontSize: 32, color: '#000' }} />
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#2c3e50' }}>
                        Annadanam Hall Expansion
                      </Typography>
                    </Box>
                    <Box sx={{ pl: 2, mb: 2.5 }}>
                      <Typography sx={{ mb: 1, color: '#546e7a', display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: GOLD, borderRadius: '50%', mr: 1.5 }} />
                        Larger dining space
                      </Typography>
                      <Typography sx={{ mb: 1, color: '#546e7a', display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: GOLD, borderRadius: '50%', mr: 1.5 }} />
                        Modern kitchen facilities
                      </Typography>
                      <Typography sx={{ color: '#546e7a', display: 'flex', alignItems: 'center' }}>
                        <Box component="span" sx={{ width: 6, height: 6, bgcolor: GOLD, borderRadius: '50%', mr: 1.5 }} />
                        Storage and cooling systems
                      </Typography>
                    </Box>
                    <Chip 
                      label="Cost: ₹70 Lakhs" 
                      sx={{ 
                        bgcolor: GOLD, 
                        color: '#000', 
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        width: '100%',
                        height: 36
                      }} 
                    />
                  </Card>
                </Grid>
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
                    <VolunteerActivismIcon sx={{ fontSize: 32, color: '#000' }} />
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#2c3e50' }}>
                    Donor Recognition
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box component="span" sx={{ width: 8, height: 8, bgcolor: GOLD, borderRadius: '50%', mr: 2 }} />
                      <Typography sx={{ color: '#546e7a', fontSize: '1rem' }}>
                        Names inscribed on the temple wall of honor
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box component="span" sx={{ width: 8, height: 8, bgcolor: GOLD, borderRadius: '50%', mr: 2 }} />
                      <Typography sx={{ color: '#546e7a', fontSize: '1rem' }}>
                        Special blessings and certificates
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box component="span" sx={{ width: 8, height: 8, bgcolor: GOLD, borderRadius: '50%', mr: 2 }} />
                      <Typography sx={{ color: '#546e7a', fontSize: '1rem' }}>
                        80G tax exemption available
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box component="span" sx={{ width: 8, height: 8, bgcolor: GOLD, borderRadius: '50%', mr: 2 }} />
                      <Typography sx={{ color: '#546e7a', fontSize: '1rem' }}>
                        Major donors: Permanent recognition plaque
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="donate" activePath="/donate/renovation" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
