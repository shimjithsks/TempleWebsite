import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Button } from '@mui/material';

export default function Annadanam() {
  return (
    <>
      <PageBanner title="Annadanam (Food Donation)" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: 4, 
              mb: 4,
              border: `2px solid #d4af37`,
              borderRadius: 4,
              boxShadow: '0 10px 30px rgba(212,175,55,0.15)',
              background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
              position: 'relative',
              overflow: 'visible',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -2,
                left: 20,
                right: 20,
                height: 4,
                background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
                borderRadius: '2px 2px 0 0',
              }
            }}>
              <Typography variant="h4" sx={{ mb: 3, color: '#d4af37', fontWeight: 800 }}>
                "Annadanam Maha Danam" - The Greatest of All Donations
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
                Annadanam is the ancient practice of providing free meals to devotees visiting the temple. It is considered one of the most noble acts of charity in Hindu tradition.
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={4}>
                  <Card elevation={0} sx={{ 
                    height: '100%', 
                    textAlign: 'center', 
                    p: 2,
                    border: '2px solid rgba(212,175,55,0.3)',
                    borderRadius: 3,
                    boxShadow: '0 6px 16px rgba(212,175,55,0.12)',
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.05), rgba(212,175,55,0.12))',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: 'linear-gradient(90deg, #d4af37, #e5c158)',
                    }
                  }}>
                    <CardContent>
                      <Typography variant="h4" sx={{ color: '#d4af37', fontWeight: 800, mb: 2 }}>
                        500+
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>Devotees Fed Daily</Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card elevation={2} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                    <CardContent>
                      <Typography variant="h4" sx={{ color: '#E63946', fontWeight: 700, mb: 2 }}>
                        ₹50
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>Cost Per Meal</Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card elevation={2} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                    <CardContent>
                      <Typography variant="h4" sx={{ color: '#E63946', fontWeight: 700, mb: 2 }}>
                        365 Days
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>Year-Round Service</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Donation Options</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      p: 3, 
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.15))', 
                      borderRadius: 3, 
                      border: '2px solid #d4af37',
                      boxShadow: '0 6px 16px rgba(212,175,55,0.15)',
                      transition: 'all 280ms ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 32px rgba(212,175,55,0.3)',
                      }
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: '#d4af37' }}>One Day Annadanam</Typography>
                      <Typography sx={{ mb: 2, color: '#555' }}>Sponsor meals for all devotees for one day</Typography>
                      <Typography variant="h5" sx={{ color: '#d4af37', fontWeight: 800 }}>₹25,000</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box sx={{ p: 3, bgcolor: '#e3f2fd', borderRadius: 2, border: '2px solid #2196f3' }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Monthly Sponsorship</Typography>
                      <Typography sx={{ mb: 2 }}>Contribute towards monthly food expenses</Typography>
                      <Typography variant="h5" sx={{ color: '#1976d2', fontWeight: 700 }}>₹5,000/month</Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box sx={{ p: 3, bgcolor: '#ffebee', borderRadius: 2, border: '2px solid #f44336' }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Custom Contribution</Typography>
                      <Typography>Any amount towards feeding devotees is gratefully accepted</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#E63946',
                    px: 6,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': { bgcolor: '#d62839' },
                  }}
                >
                  Donate for Annadanam
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="donate" activePath="/donate/annadanam" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
