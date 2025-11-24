import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Button } from '@mui/material';

export default function FestivalContribution() {
  const festivals = [
    { name: 'Vishu Celebration', cost: '₹2,00,000', date: 'April 2025' },
    { name: 'Thrissur Pooram', cost: '₹5,00,000', date: 'May 2025' },
    { name: 'Onam Festival', cost: '₹3,50,000', date: 'August 2025' },
    { name: 'Navaratri', cost: '₹2,50,000', date: 'October 2025' },
    { name: 'Deepavali', cost: '₹1,50,000', date: 'November 2025' },
    { name: 'Shivaratri', cost: '₹3,00,000', date: 'March 2026' },
  ];

  return (
    <>
      <PageBanner title="Festival Contribution" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Support our temple festivals and celebrations. Your contributions help organize grand pujas, decorations, special offerings, and cultural programs during festivals.
              </Typography>

              <Grid container spacing={3}>
                {festivals.map((festival, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={2} sx={{ height: '100%' }}>
                      <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: '#E63946', mb: 1 }}>
                          {festival.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                          {festival.date}
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#E63946', fontWeight: 700, mb: 2 }}>
                          Total Budget: {festival.cost}
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{
                            bgcolor: '#E63946',
                            '&:hover': { bgcolor: '#d62839' },
                          }}
                        >
                          Contribute Now
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>What Your Contribution Supports</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography>• Traditional decorations and flowers</Typography>
                    <Typography>• Special poojas and homams</Typography>
                    <Typography>• Prasadam distribution</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>• Cultural programs and music</Typography>
                    <Typography>• Lighting and sound systems</Typography>
                    <Typography>• Community feast arrangements</Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Sponsorship Levels</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946' }}>Silver - ₹5,000</Typography>
                    <Typography variant="body2">Basic festival sponsorship</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946' }}>Gold - ₹25,000</Typography>
                    <Typography variant="body2">Major event sponsorship</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946' }}>Platinum - ₹1,00,000</Typography>
                    <Typography variant="body2">Full festival sponsorship</Typography>
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
