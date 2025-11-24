import React from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';

const highlights = [
  {
    title: '150+ Years of Heritage',
    detail: 'Established in 1874 by the Kotta-Kovilakam family and preserved through generations of devotees.',
  },
  {
    title: 'Living Traditions',
    detail: 'Daily poojas, vibrant festivals, and community programs keep the temple spiritually active year-round.',
  },
  {
    title: 'Community Impact',
    detail: 'Annadanam, medical camps, and cultural education initiatives support devotees beyond worship.',
  },
];

export default function About() {
  return (
    <>
      <PageBanner title="About the Temple" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#E63946', mb: 2 }}>
                Muchukunnu Sri Kotta-Kovilakam Kshethram
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                A sacred destination for devotees across Kerala, the temple blends timeless rituals with thoughtful modernization. Explore the sections on the right to learn about our history, deities, festivals, administrative structure, and visitor guidelines.
              </Typography>

              <Grid container spacing={3}>
                {highlights.map((item) => (
                  <Grid item xs={12} md={4} key={item.title}>
                    <Box sx={{ p: 3, bgcolor: '#ffebee', borderRadius: 2, height: '100%' }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946', mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#444' }}>
                        {item.detail}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Visitor Snapshot
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mb: 0.5 }}>
                  • Daily pooja schedule from 5:00 AM to 8:00 PM
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mb: 0.5 }}>
                  • Annadanam served to 500+ devotees every day
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  • Guided tours available for groups with prior booking
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="about" activePath="/about" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
