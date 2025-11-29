import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar } from '@mui/material';

export default function Administration() {
  const committeeAdministrators = [
    { name: 'Srinivasan Nair Kizhakkedath', position: 'President' },
    { name: 'Karunan Kandiyil', position: 'Vice President' },
    { name: 'KP Rajan', position: 'Secretary' },
    { name: 'MM Ranjith', position: 'Joint Secretary' },
    { name: 'Puthan Purayil Suresh Babu', position: 'Treasurer' },
  ];

  const traditionalTrustees = [
    { name: 'Pottakkattu Damodaran', position: 'Traditional Trustee Member' },
    { name: 'TC Radhakrishnan', position: 'Traditional Trustee Member' },
    { name: 'Prakasan Nellimadathil', position: 'Traditional Trustee Member' },
    { name: 'Raghunath Othayoth', position: 'Traditional Trustee Member' },
    { name: 'VK Manoj Kumar', position: 'Traditional Trustee Member' },
    { name: 'Rajeesh Edavalath', position: 'Traditional Trustee Member' },
    { name: 'Bijesh Ramanilayam', position: 'Traditional Trustee Member' },
  ];

  const hereditaryTrustees = [
    { name: 'Mangoottil Unni Nair', position: 'Hereditary Trustee' },
    { name: 'Asokan Mangoottil', position: 'Hereditary Trustee' },
    { name: 'Venugopalan', position: 'Hereditary Trustee' },
    { name: 'Mangoottil Ramachandran', position: 'Hereditary Trustee' },
    { name: 'Sasi Elavana', position: 'Hereditary Trustee' },
    { name: 'Madhu Mangoottil', position: 'Hereditary Trustee' },
    { name: 'Sanjaykumar Marakkatt', position: 'Hereditary Trustee' },
  ];

  const devaswomManager = [
    { name: 'Somaseskharan', position: 'Devaswom Manager' },
  ];

  return (
    <>
      <PageBanner title="Temple Administration" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: 4, 
              mb: 4,
              border: '3px solid #d4af37',
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
              <Typography variant="body1" sx={{ mb: 4, mt: 2, fontSize: '1.1rem', color: '#555', lineHeight: 1.7 }}>
                The temple is managed by an elected committee of dedicated volunteers and experienced trustees who ensure smooth operations and upkeep of traditions.
              </Typography>

              {/* Temple Committee Administrators */}
              <Typography variant="h4" sx={{ 
                mb: 3, 
                fontWeight: 900,
                background: 'linear-gradient(135deg, #d4af37 0%, #e5c158 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Temple Committee Administrators
              </Typography>

              <Grid container spacing={3} sx={{ mb: 5 }}>
                {committeeAdministrators.map((member, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card elevation={0} sx={{ 
                      border: '3px solid #d4af37',
                      borderRadius: 4,
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': { 
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                      } 
                    }}>
                      <CardContent sx={{ textAlign: 'center', p: 3 }}>
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'center',
                          mb: 2,
                        }}>
                          <Avatar
                            sx={{
                              width: 80,
                              height: 80,
                              bgcolor: '#d4af37',
                              fontSize: '2rem',
                              fontWeight: 800,
                              border: '3px solid #e5c158',
                              boxShadow: '0 8px 24px rgba(212,175,55,0.4)',
                            }}
                          >
                            {member.name.charAt(0)}
                          </Avatar>
                        </Box>
                        <Typography variant="h6" sx={{ 
                          fontWeight: 700, 
                          color: '#d4af37',
                          mb: 0.5,
                          fontSize: '1.1rem',
                        }}>
                          {member.name}
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: '#666', 
                          fontWeight: 600,
                          fontSize: '0.95rem',
                        }}>
                          {member.position}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Traditional Trustee Members */}
              <Typography variant="h4" sx={{ 
                mb: 3, 
                mt: 4,
                fontWeight: 900,
                background: 'linear-gradient(135deg, #d4af37 0%, #e5c158 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Traditional Trustee Members
              </Typography>

              <Grid container spacing={3} sx={{ mb: 5 }}>
                {traditionalTrustees.map((member, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card elevation={0} sx={{ 
                      border: '3px solid #d4af37',
                      borderRadius: 4,
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': { 
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                      } 
                    }}>
                      <CardContent sx={{ textAlign: 'center', p: 3 }}>
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'center',
                          mb: 2,
                        }}>
                          <Avatar
                            sx={{
                              width: 80,
                              height: 80,
                              bgcolor: '#d4af37',
                              fontSize: '2rem',
                              fontWeight: 800,
                              border: '3px solid #e5c158',
                              boxShadow: '0 8px 24px rgba(212,175,55,0.4)',
                            }}
                          >
                            {member.name.charAt(0)}
                          </Avatar>
                        </Box>
                        <Typography variant="h6" sx={{ 
                          fontWeight: 700, 
                          color: '#d4af37',
                          mb: 0.5,
                          fontSize: '1.1rem',
                        }}>
                          {member.name}
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: '#666', 
                          fontWeight: 600,
                          fontSize: '0.9rem',
                        }}>
                          {member.position}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Hereditary Trustees */}
              <Typography variant="h4" sx={{ 
                mb: 3, 
                mt: 4,
                fontWeight: 900,
                background: 'linear-gradient(135deg, #d4af37 0%, #e5c158 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Hereditary Trustees
              </Typography>

              <Grid container spacing={3} sx={{ mb: 5 }}>
                {hereditaryTrustees.map((member, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card elevation={0} sx={{ 
                      border: '3px solid #d4af37',
                      borderRadius: 4,
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': { 
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                      } 
                    }}>
                      <CardContent sx={{ textAlign: 'center', p: 3 }}>
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'center',
                          mb: 2,
                        }}>
                          <Avatar
                            sx={{
                              width: 80,
                              height: 80,
                              bgcolor: '#d4af37',
                              fontSize: '2rem',
                              fontWeight: 800,
                              border: '3px solid #e5c158',
                              boxShadow: '0 8px 24px rgba(212,175,55,0.4)',
                            }}
                          >
                            {member.name.charAt(0)}
                          </Avatar>
                        </Box>
                        <Typography variant="h6" sx={{ 
                          fontWeight: 700, 
                          color: '#d4af37',
                          mb: 0.5,
                          fontSize: '1.1rem',
                        }}>
                          {member.name}
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: '#666', 
                          fontWeight: 600,
                          fontSize: '0.9rem',
                        }}>
                          {member.position}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Devaswom Manager */}
              <Typography variant="h4" sx={{ 
                mb: 3, 
                mt: 4,
                fontWeight: 900,
                background: 'linear-gradient(135deg, #d4af37 0%, #e5c158 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Devaswom Manager
              </Typography>

              <Grid container spacing={3}>
                {devaswomManager.map((member, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card elevation={0} sx={{ 
                      border: '3px solid #d4af37',
                      borderRadius: 4,
                      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': { 
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                      } 
                    }}>
                      <CardContent sx={{ textAlign: 'center', p: 3 }}>
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'center',
                          mb: 2,
                        }}>
                          <Avatar
                            sx={{
                              width: 80,
                              height: 80,
                              bgcolor: '#d4af37',
                              fontSize: '2rem',
                              fontWeight: 800,
                              border: '3px solid #e5c158',
                              boxShadow: '0 8px 24px rgba(212,175,55,0.4)',
                            }}
                          >
                            {member.name.charAt(0)}
                          </Avatar>
                        </Box>
                        <Typography variant="h6" sx={{ 
                          fontWeight: 700, 
                          color: '#d4af37',
                          mb: 0.5,
                          fontSize: '1.1rem',
                        }}>
                          {member.name}
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: '#666', 
                          fontWeight: 600,
                          fontSize: '0.95rem',
                        }}>
                          {member.position}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="about" activePath="/about/administration" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
