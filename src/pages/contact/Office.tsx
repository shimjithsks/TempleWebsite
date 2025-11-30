import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar, Divider, Chip } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const GOLD = '#d4af37';

export default function OfficeNumbers() {
  const departments = [
    {
      department: 'Main Office',
      numbers: ['+91-XXXXXXXXXX', '+91-XXXXXXXXXX'],
      timing: '9:00 AM - 6:00 PM',
      email: 'office@muchukunnutemple.org',
    },
    {
      department: 'Pooja Booking Counter',
      numbers: ['+91-XXXXXXXXXX'],
      timing: '5:00 AM - 8:00 PM',
      email: 'poojas@muchukunnutemple.org',
    },
    {
      department: 'Donation Department',
      numbers: ['+91-XXXXXXXXXX'],
      timing: '9:00 AM - 6:00 PM',
      email: 'donations@muchukunnutemple.org',
    },
    {
      department: 'Temple President',
      numbers: ['+91-XXXXXXXXXX'],
      timing: '10:00 AM - 5:00 PM',
      email: 'president@muchukunnutemple.org',
    },
    {
      department: 'Temple Secretary',
      numbers: ['+91-XXXXXXXXXX'],
      timing: '9:00 AM - 6:00 PM',
      email: 'secretary@muchukunnutemple.org',
    },
    {
      department: 'Annadanam Coordination',
      numbers: ['+91-XXXXXXXXXX'],
      timing: '8:00 AM - 7:00 PM',
      email: 'annadanam@muchukunnutemple.org',
    },
  ];

  return (
    <>
      <PageBanner title="Temple Office Numbers" />
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
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    background: `linear-gradient(135deg, #ff9800 0%, #ffa726 100%)`,
                    boxShadow: '0 4px 12px rgba(255,152,0,0.3)',
                  }}
                >
                  <BusinessIcon sx={{ fontSize: 36, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 900, color: GOLD, mb: 0.5 }}>
                    Temple Office Numbers
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    Direct contact numbers for different departments and services
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Grid container spacing={3}>
                {departments.map((dept, index) => {
                  const colors = ['#2196f3', '#4caf50', '#ff9800', '#e91e63', '#9c27b0', '#00bcd4'];
                  const color = colors[index % colors.length];
                  
                  return (
                    <Grid item xs={12} md={6} key={index}>
                      <Card elevation={0} sx={{ 
                        height: '100%',
                        border: `3px solid ${GOLD}`,
                        borderLeft: `6px solid ${color}`,
                        boxShadow: '0 4px 12px rgba(212,175,55,0.2)',
                        transition: 'all 300ms ease',
                        '&:hover': { 
                          transform: 'translateY(-4px)', 
                          boxShadow: '0 8px 24px rgba(212,175,55,0.3)',
                        }
                      }}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Avatar sx={{ 
                              bgcolor: color,
                              width: 50,
                              height: 50,
                              boxShadow: `0 4px 12px ${color}40`,
                            }}>
                              <PhoneIcon sx={{ fontSize: 26 }} />
                            </Avatar>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ fontWeight: 800, color, mb: 2 }}>
                                {dept.department}
                              </Typography>
                              {dept.numbers.map((number, idx) => (
                                <Typography key={idx} variant="h6" sx={{ color, mb: 1, fontWeight: 700 }}>
                                  {number}
                                </Typography>
                              ))}
                              <Divider sx={{ my: 1.5, borderColor: 'rgba(212,175,55,0.2)' }} />
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                                <AccessTimeIcon sx={{ fontSize: 18, color: '#666' }} />
                                <Typography variant="body2" sx={{ color: '#666', fontWeight: 600 }}>
                                  {dept.timing}
                                </Typography>
                              </Box>
                              <Typography variant="body2" sx={{ color: '#666', wordBreak: 'break-all' }}>
                                {dept.email}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>

              <Box sx={{ 
                mt: 4, 
                p: 3, 
                background: `linear-gradient(135deg, rgba(244,67,54,0.1) 0%, rgba(244,67,54,0.05) 100%)`,
                borderRadius: 2,
                border: `2px solid rgba(244,67,54,0.3)`,
                borderLeft: `6px solid #f44336`,
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <Avatar sx={{ bgcolor: '#f44336', width: 50, height: 50 }}>
                    <SecurityIcon sx={{ fontSize: 26 }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#f44336' }}>Emergency Contacts</Typography>
                </Box>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <SecurityIcon sx={{ color: '#f44336', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>Temple Security:</Typography>
                      </Box>
                      <Typography variant="h6" sx={{ color: '#f44336', fontWeight: 800, pl: 4 }}>
                        +91-XXXXXXXXXX
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <LocalHospitalIcon sx={{ color: '#f44336', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>Medical Emergency:</Typography>
                      </Box>
                      <Typography variant="h6" sx={{ color: '#f44336', fontWeight: 800, pl: 4 }}>
                        +91-XXXXXXXXXX
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <AccessTimeIcon sx={{ color: '#f44336', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>After Hours:</Typography>
                      </Box>
                      <Typography variant="h6" sx={{ color: '#f44336', fontWeight: 800, pl: 4 }}>
                        +91-XXXXXXXXXX
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ 
                mt: 3, 
                p: 3, 
                background: `linear-gradient(135deg, rgba(37,211,102,0.1) 0%, rgba(37,211,102,0.05) 100%)`,
                borderRadius: 2,
                border: `2px solid rgba(37,211,102,0.3)`,
                borderLeft: `6px solid #25d366`,
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <Avatar sx={{ bgcolor: '#25d366', width: 50, height: 50 }}>
                    <WhatsAppIcon sx={{ fontSize: 26 }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#25d366' }}>WhatsApp Services</Typography>
                </Box>
                <Box sx={{ display: 'grid', gap: 1.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Chip 
                      label="Pooja Booking" 
                      sx={{ 
                        bgcolor: 'rgba(37,211,102,0.2)', 
                        fontWeight: 600,
                        minWidth: 140,
                      }} 
                    />
                    <Typography variant="body1" sx={{ fontWeight: 700, color: '#25d366' }}>
                      +91-XXXXXXXXXX
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Chip 
                      label="General Queries" 
                      sx={{ 
                        bgcolor: 'rgba(37,211,102,0.2)', 
                        fontWeight: 600,
                        minWidth: 140,
                      }} 
                    />
                    <Typography variant="body1" sx={{ fontWeight: 700, color: '#25d366' }}>
                      +91-XXXXXXXXXX
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Chip 
                      label="Photo Sharing" 
                      sx={{ 
                        bgcolor: 'rgba(37,211,102,0.2)', 
                        fontWeight: 600,
                        minWidth: 140,
                      }} 
                    />
                    <Typography variant="body1" sx={{ fontWeight: 700, color: '#25d366' }}>
                      +91-XXXXXXXXXX
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 2, borderColor: 'rgba(37,211,102,0.3)' }} />
                <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#666' }}>
                  Note: WhatsApp service available 8:00 AM - 8:00 PM
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="contact" activePath="/contact/office" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
