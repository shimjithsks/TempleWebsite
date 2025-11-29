import React from 'react';
import PageBanner from '../../components/PageBanner';
import PoojaSidebar from '../../components/PoojaSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar, Chip, Button } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpaIcon from '@mui/icons-material/Spa';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PublicIcon from '@mui/icons-material/Public';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { Link as RouterLink } from 'react-router-dom';

const GOLD = '#d4af37';

export default function SpecialPoojas() {
  const specialPoojas = [
    { 
      name: 'Ganapathi Homam', 
      description: 'For removing obstacles and seeking blessings for new beginnings', 
      price: '₹500',
      icon: <SpaIcon sx={{ fontSize: 32 }} />,
      color: '#F4511E',
    },
    { 
      name: 'Ayush Homam', 
      description: 'For longevity, good health, and protection from diseases', 
      price: '₹750',
      icon: <SpaIcon sx={{ fontSize: 32 }} />,
      color: '#43A047',
    },
    { 
      name: 'Saraswathi Pooja', 
      description: 'For education, wisdom, and success in studies', 
      price: '₹450',
      icon: <MenuBookIcon sx={{ fontSize: 32 }} />,
      color: '#1E88E5',
    },
    { 
      name: 'Lakshmi Pooja', 
      description: 'For prosperity, wealth, and business success', 
      price: '₹600',
      icon: <AccountBalanceWalletIcon sx={{ fontSize: 32 }} />,
      color: '#FB8C00',
    },
    { 
      name: 'Navagraha Pooja', 
      description: 'For planetary relief and astrological remedies', 
      price: '₹1000',
      icon: <PublicIcon sx={{ fontSize: 32 }} />,
      color: '#8E24AA',
    },
    { 
      name: 'Kalasam', 
      description: 'Special ritual for all occasions and life milestones', 
      price: '₹2000',
      icon: <TempleHinduIcon sx={{ fontSize: 32 }} />,
      color: '#D32F2F',
    },
  ];

  return (
    <>
      <PageBanner title="Special Poojas" />
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
                background: 'linear-gradient(90deg, #d4af37 0%, #e5c158 25%, #d4af37 50%, #e5c158 75%, #d4af37 100%)',
                animation: 'shimmer 3s linear infinite',
                backgroundSize: '200% 100%',
                '@keyframes shimmer': {
                  '0%': { backgroundPosition: '-200% 0' },
                  '100%': { backgroundPosition: '200% 0' },
                },
              }
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2, 
                mb: 4,
                mt: 2,
              }}>
                <Avatar sx={{ 
                  width: 56, 
                  height: 56, 
                  bgcolor: GOLD,
                  boxShadow: `0 8px 24px rgba(212,175,55,0.4)`,
                }}>
                  <AutoAwesomeIcon sx={{ fontSize: 32, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #d4af37 0%, #e5c158 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Special Poojas
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontWeight: 600, mt: 0.5 }}>
                    Sacred rituals for specific blessings and occasions
                  </Typography>
                </Box>
              </Box>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                {specialPoojas.map((pooja, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={0} sx={{ 
                      border: `3px solid ${GOLD}`,
                      borderRadius: 4,
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      height: '100%',
                      background: 'linear-gradient(135deg, #fff 0%, #fffef8 100%)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': { 
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                        borderColor: '#e5c158',
                      } 
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'start', gap: 2, mb: 2 }}>
                          <Avatar sx={{ 
                            width: 56, 
                            height: 56, 
                            bgcolor: pooja.color,
                            boxShadow: `0 8px 20px ${pooja.color}50`,
                          }}>
                            {pooja.icon}
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ 
                              fontWeight: 700, 
                              color: GOLD,
                              fontSize: '1.15rem',
                              mb: 0.5,
                            }}>
                              {pooja.name}
                            </Typography>
                            <Chip
                              label={pooja.price}
                              size="small"
                              sx={{
                                bgcolor: GOLD,
                                color: '#000',
                                fontWeight: 800,
                                fontSize: '0.9rem',
                                height: 26,
                                borderRadius: 2,
                              }}
                            />
                          </Box>
                        </Box>
                        <Typography variant="body2" sx={{ 
                          color: '#666',
                          lineHeight: 1.7,
                          fontWeight: 500,
                        }}>
                          {pooja.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ 
                mt: 4, 
                p: 4, 
                bgcolor: 'rgba(212,175,55,0.08)',
                border: `2px solid rgba(212,175,55,0.3)`,
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${GOLD} 0%, #e5c158 100%)`,
                }
              }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  mb: 3,
                  color: GOLD,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}>
                  <BookOnlineIcon sx={{ fontSize: 28 }} />
                  Booking Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2.5, 
                      bgcolor: '#fff',
                      borderRadius: 3,
                      border: `2px solid ${GOLD}40`,
                      textAlign: 'center',
                      transition: 'all 300ms ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(212,175,55,0.2)',
                      }
                    }}>
                      <PhoneIcon sx={{ fontSize: 36, color: GOLD, mb: 1 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: '#333', mb: 0.5 }}>
                        Phone Booking
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#666' }}>
                        +91-XXXXXXXXXX
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2.5, 
                      bgcolor: '#fff',
                      borderRadius: 3,
                      border: `2px solid ${GOLD}40`,
                      textAlign: 'center',
                      transition: 'all 300ms ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(212,175,55,0.2)',
                      }
                    }}>
                      <EmailIcon sx={{ fontSize: 36, color: GOLD, mb: 1 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: '#333', mb: 0.5 }}>
                        Email Us
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#666', wordBreak: 'break-all' }}>
                        poojas@muchukunnu.org
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      p: 2.5, 
                      bgcolor: '#fff',
                      borderRadius: 3,
                      border: `2px solid ${GOLD}40`,
                      textAlign: 'center',
                      transition: 'all 300ms ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(212,175,55,0.2)',
                      }
                    }}>
                      <BookOnlineIcon sx={{ fontSize: 36, color: GOLD, mb: 1 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, color: '#333', mb: 1 }}>
                        Online Booking
                      </Typography>
                      <Button
                        component={RouterLink}
                        to="/poojas/booking"
                        size="small"
                        sx={{
                          bgcolor: GOLD,
                          color: '#000',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          px: 2,
                          py: 0.5,
                          '&:hover': {
                            bgcolor: '#e5c158',
                          }
                        }}
                      >
                        BOOK NOW
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 3, pt: 3, borderTop: `1px solid ${GOLD}30` }}>
                  <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, mb: 1 }}>
                    Important Notes:
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.8 }}>
                    • Advance booking required (minimum 2 days)<br />
                    • Prices may vary based on requirements<br />
                    • Prasadam will be provided after the pooja
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <PoojaSidebar activePath="/poojas/special" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
