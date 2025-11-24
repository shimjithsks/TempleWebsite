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
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 3, color: '#E63946', fontWeight: 600 }}>
                "Annadanam Maha Danam" - The Greatest of All Donations
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
                Annadanam is the ancient practice of providing free meals to devotees visiting the temple. It is considered one of the most noble acts of charity in Hindu tradition.
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={4}>
                  <Card elevation={2} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                    <CardContent>
                      <Typography variant="h4" sx={{ color: '#E63946', fontWeight: 700, mb: 2 }}>
                        500+
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>Devotees Fed Daily</Typography>
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
                    <Box sx={{ p: 3, bgcolor: '#ffebee', borderRadius: 2, border: '2px solid #E63946' }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>One Day Annadanam</Typography>
                      <Typography sx={{ mb: 2 }}>Sponsor meals for all devotees for one day</Typography>
                      <Typography variant="h5" sx={{ color: '#E63946', fontWeight: 700 }}>₹25,000</Typography>
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
