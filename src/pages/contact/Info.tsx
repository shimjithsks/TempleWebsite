import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import FlightIcon from '@mui/icons-material/Flight';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

const GOLD = '#d4af37';

export default function ContactInfo() {
  return (
    <>
      <PageBanner title="Contact Information" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: 4,
              border: `3px solid ${GOLD}`,
              borderRadius: 4,
              boxShadow: '0 8px 24px rgba(212,175,55,0.2)',
              background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -3,
                left: 0,
                right: 0,
                height: 6,
                background: `linear-gradient(90deg, ${GOLD}, #e5c158, ${GOLD})`,
                borderRadius: '4px 4px 0 0',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s linear infinite',
              },
              '@keyframes shimmer': {
                '0%': { backgroundPosition: '-200% 0' },
                '100%': { backgroundPosition: '200% 0' },
              },
            }}>
              {/* Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    background: `linear-gradient(135deg, #2196f3 0%, #00bcd4 100%)`,
                    boxShadow: '0 4px 12px rgba(33,150,243,0.3)',
                  }}
                >
                  <ContactPhoneIcon sx={{ fontSize: 36, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 900, color: GOLD, mb: 0.5 }}>
                    Contact Information
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    All contact details for the temple office and departments
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Card elevation={0} sx={{ 
                    height: '100%',
                    border: `3px solid ${GOLD}`,
                    borderLeft: `6px solid #2196f3`,
                    boxShadow: '0 4px 12px rgba(212,175,55,0.2)',
                    transition: 'all 300ms ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(212,175,55,0.3)',
                    }
                  }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Avatar sx={{ 
                          bgcolor: '#2196f3',
                          width: 56,
                          height: 56,
                          boxShadow: '0 4px 12px rgba(33,150,243,0.3)'
                        }}>
                          <PhoneIcon sx={{ fontSize: 28 }} />
                        </Avatar>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#2196f3' }}>
                          Phone Numbers
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'grid', gap: 1.5 }}>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#666', mb: 0.3 }}>
                            Temple Office:
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#2196f3' }}>
                            +91-XXXXXXXXXX
                          </Typography>
                        </Box>
                        <Divider sx={{ borderColor: 'rgba(212,175,55,0.2)' }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#666', mb: 0.3 }}>
                            Pooja Booking:
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#2196f3' }}>
                            +91-XXXXXXXXXX
                          </Typography>
                        </Box>
                        <Divider sx={{ borderColor: 'rgba(212,175,55,0.2)' }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#666', mb: 0.3 }}>
                            President:
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#2196f3' }}>
                            +91-XXXXXXXXXX
                          </Typography>
                        </Box>
                        <Divider sx={{ borderColor: 'rgba(212,175,55,0.2)' }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#666', mb: 0.3 }}>
                            Emergency:
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#2196f3' }}>
                            +91-XXXXXXXXXX
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card elevation={0} sx={{ 
                    height: '100%',
                    border: `3px solid ${GOLD}`,
                    borderLeft: `6px solid #4caf50`,
                    boxShadow: '0 4px 12px rgba(212,175,55,0.2)',
                    transition: 'all 300ms ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(212,175,55,0.3)',
                    }
                  }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Avatar sx={{ 
                          bgcolor: '#4caf50',
                          width: 56,
                          height: 56,
                          boxShadow: '0 4px 12px rgba(76,175,80,0.3)'
                        }}>
                          <EmailIcon sx={{ fontSize: 28 }} />
                        </Avatar>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#4caf50' }}>
                          Email Addresses
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'grid', gap: 1.5 }}>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#666', mb: 0.3 }}>
                            General Queries:
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: '#4caf50' }}>
                            info@muchukunnutemple.org
                          </Typography>
                        </Box>
                        <Divider sx={{ borderColor: 'rgba(212,175,55,0.2)' }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#666', mb: 0.3 }}>
                            Pooja Booking:
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: '#4caf50' }}>
                            poojas@muchukunnutemple.org
                          </Typography>
                        </Box>
                        <Divider sx={{ borderColor: 'rgba(212,175,55,0.2)' }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#666', mb: 0.3 }}>
                            Donations:
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: '#4caf50' }}>
                            donations@muchukunnutemple.org
                          </Typography>
                        </Box>
                        <Divider sx={{ borderColor: 'rgba(212,175,55,0.2)' }} />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#666', mb: 0.3 }}>
                            Feedback:
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: '#4caf50' }}>
                            feedback@muchukunnutemple.org
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card elevation={0} sx={{ 
                    height: '100%',
                    border: `3px solid ${GOLD}`,
                    borderLeft: `6px solid #ff9800`,
                    boxShadow: '0 4px 12px rgba(212,175,55,0.2)',
                    transition: 'all 300ms ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(212,175,55,0.3)',
                    }
                  }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Avatar sx={{ 
                          bgcolor: '#ff9800',
                          width: 56,
                          height: 56,
                          boxShadow: '0 4px 12px rgba(255,152,0,0.3)'
                        }}>
                          <LocationOnIcon sx={{ fontSize: 28 }} />
                        </Avatar>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#ff9800' }}>
                          Address
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ lineHeight: 2, color: '#444' }}>
                        Muchukunnu Sri Kotta-Kovilakam Kshethram
                        <br />
                        Near Muchukunnu Junction
                        <br />
                        Thalassery, Kannur District
                        <br />
                        Kerala - 670308
                        <br />
                        India
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card elevation={0} sx={{ 
                    height: '100%',
                    border: `3px solid ${GOLD}`,
                    borderLeft: `6px solid #9c27b0`,
                    boxShadow: '0 4px 12px rgba(212,175,55,0.2)',
                    transition: 'all 300ms ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(212,175,55,0.3)',
                    }
                  }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Avatar sx={{ 
                          bgcolor: '#9c27b0',
                          width: 56,
                          height: 56,
                          boxShadow: '0 4px 12px rgba(156,39,176,0.3)'
                        }}>
                          <AccessTimeIcon sx={{ fontSize: 28 }} />
                        </Avatar>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#9c27b0' }}>
                          Office Hours
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body1" sx={{ mb: 2, fontWeight: 600 }}>
                          Monday - Sunday:
                          <Typography component="span" sx={{ fontWeight: 700, color: '#9c27b0', ml: 1 }}>
                            9:00 AM - 6:00 PM
                          </Typography>
                        </Typography>
                        <Divider sx={{ my: 2, borderColor: 'rgba(212,175,55,0.3)' }} />
                        <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                          Temple Timings:
                        </Typography>
                        <Typography variant="body2" sx={{ pl: 2, color: '#666', lineHeight: 2 }}>
                          Morning: 5:00 AM - 12:00 PM
                          <br />
                          Evening: 5:00 PM - 8:00 PM
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Box sx={{ 
                mt: 4, 
                p: 3, 
                background: `linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(229,193,88,0.05) 100%)`,
                borderRadius: 2,
                border: `2px solid rgba(212,175,55,0.3)`,
              }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD, mb: 3 }}>How to Reach</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                      <Avatar sx={{ bgcolor: '#2196f3', width: 40, height: 40 }}>
                        <FlightIcon sx={{ fontSize: 22 }} />
                      </Avatar>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>By Air:</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ pl: 7, color: '#666' }}>Calicut International Airport (45 km)</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                      <Avatar sx={{ bgcolor: '#4caf50', width: 40, height: 40 }}>
                        <TrainIcon sx={{ fontSize: 22 }} />
                      </Avatar>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>By Train:</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ pl: 7, color: '#666' }}>Koyilandy Railway Station (12 km)</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                      <Avatar sx={{ bgcolor: '#ff9800', width: 40, height: 40 }}>
                        <DirectionsBusIcon sx={{ fontSize: 22 }} />
                      </Avatar>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>By Road:</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ pl: 7, color: '#666' }}>Well connected by State & Private buses</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="contact" activePath="/contact/info" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
