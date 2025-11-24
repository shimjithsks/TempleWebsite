import React from 'react';
import PageBanner from '../../components/PageBanner';
import PoojaSidebar from '../../components/PoojaSidebar';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

export default function DailyPoojas() {
  return (
    <>
      <PageBanner title="Daily Poojas" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ mb: 3, color: '#E63946', fontWeight: 600 }}>
                Daily Pooja Schedule
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Morning Rituals</Typography>
                    <Typography>• Nirmalya Darshanam - 5:00 AM</Typography>
                    <Typography>• Usha Pooja - 5:30 AM</Typography>
                    <Typography>• Ettumanoor Seeveli - 6:00 AM</Typography>
                    <Typography>• Pantheeradi Puja - 7:30 AM</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Evening Rituals</Typography>
                    <Typography>• Uccha Pooja - 12:00 PM</Typography>
                    <Typography>• Deeparadhana - 6:30 PM</Typography>
                    <Typography>• Athazha Pooja - 7:00 PM</Typography>
                    <Typography>• Temple Closure - 8:00 PM</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="body1" sx={{ mt: 3, color: '#666' }}>
                All devotees are welcome to attend these daily rituals. Special darshan timings may vary on festival days.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <PoojaSidebar activePath="/poojas/daily" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
