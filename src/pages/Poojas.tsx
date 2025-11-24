import React from 'react';
import { Grid, Typography, Container, Paper } from '@mui/material';
import PageBanner from '../components/PageBanner';
import PoojaSidebar from '../components/PoojaSidebar';
import PoojaCard from '../components/PoojaCard';

const samplePoojas = [
  { name: 'Abhishekam', price: 500, duration: '30 min', desc: 'Special abhishekam for blessings.' },
  { name: 'Usha Pooja', price: 200, duration: '15 min', desc: 'Morning pooja for general welfare.' },
  { name: 'Annadanam', price: 2000, duration: 'Varies', desc: 'Support temple food offering.' }
];

export default function Poojas() {
  return (
    <>
      <PageBanner title="Poojas & Vazhipads" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#E63946', mb: 2 }}>
                Popular Offerings
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>
                Browse a few highlighted poojas below or use the quick links on the right to jump into detailed schedules, vazhipad lists, and booking support.
              </Typography>
              <Grid container spacing={2}>
                {samplePoojas.map((p) => (
                  <Grid item xs={12} sm={6} md={4} key={p.name}>
                    <PoojaCard {...p} />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <PoojaSidebar activePath="/poojas" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
