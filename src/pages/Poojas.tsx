import React from 'react';
import { Grid, Typography, Container, Paper } from '@mui/material';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';
import PoojaDisplayCard from '../components/PoojaDisplayCard';

const samplePoojas = [
  { id: 1, name: 'SHAKTHEYA POOJA', price: 400, description: '(TUESDAY,FRIDAY,SUNDAY)', image: '/assets/pooja_icons/diya.png' },
  { id: 2, name: 'BHAGAVATHY SEVA', price: 300, description: 'Evening ritual for prosperity', image: '/assets/pooja_icons/diya.png' },
  { id: 3, name: 'GANAPATHY HOMAM', price: 100, description: 'Removes obstacles', image: '/assets/pooja_icons/diya.png' }
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
              <Grid container spacing={3}>
                {samplePoojas.map((p) => (
                  <Grid item xs={12} sm={6} md={4} key={p.id}>
                    <PoojaDisplayCard {...p} />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="poojas" activePath="/poojas" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
