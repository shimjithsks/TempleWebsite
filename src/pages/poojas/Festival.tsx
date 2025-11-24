import React from 'react';
import PageBanner from '../../components/PageBanner';
import PoojaSidebar from '../../components/PoojaSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';

export default function FestivalPoojas() {
  const festivals = [
    { name: 'Vishu', month: 'April', description: 'Malayalam New Year celebrations with special poojas' },
    { name: 'Thrissur Pooram', month: 'May', description: 'Grand temple festival with elephant procession' },
    { name: 'Onam', month: 'August-September', description: 'Harvest festival with 10 days of celebrations' },
    { name: 'Navaratri', month: 'September-October', description: 'Nine nights dedicated to Goddess Durga' },
    { name: 'Deepavali', month: 'October-November', description: 'Festival of lights with special aarti' },
    { name: 'Shivaratri', month: 'February-March', description: 'Night-long vigil with special abhishekam' },
  ];

  return (
    <>
      <PageBanner title="Festival Poojas" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Experience the divine energy during our major festivals. Each festival brings unique rituals and celebrations.
              </Typography>

              <Grid container spacing={3}>
                {festivals.map((festival, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={2} sx={{ height: '100%', borderLeft: '4px solid #E63946' }}>
                      <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: '#E63946', mb: 1 }}>
                          {festival.name}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#E63946', fontWeight: 600, mb: 2 }}>
                          {festival.month}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666' }}>
                          {festival.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#c62828' }}>
                  Festival Special Notes
                </Typography>
                <Typography>• Temple timings are extended during festivals</Typography>
                <Typography>• Special darshan arrangements for devotees</Typography>
                <Typography>• Prasadam distribution after major rituals</Typography>
                <Typography>• Parking and accommodation facilities available</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <PoojaSidebar activePath="/poojas/festival" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
