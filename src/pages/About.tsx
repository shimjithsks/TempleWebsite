import React from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';
import { colors } from '../theme/colors';

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
              <Typography variant="h5" sx={{ fontWeight: 600, color: colors.primary, mb: 2 }}>
                Muchukunnu Sri Kotta-Kovilakam Kshethram
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                A sacred destination for devotees across Kerala, the temple blends timeless rituals with thoughtful modernization. Explore the sections on the right to learn about our history, deities, festivals, administrative structure, and visitor guidelines.
              </Typography>

              <Grid container spacing={3}>
                {highlights.map((item) => (
                  <Grid item xs={12} md={4} key={item.title}>
                    <Box sx={{ p: 3, bgcolor: colors.lightPink, borderRadius: 2, height: '100%' }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: colors.primary, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textSubtle }}>
                        {item.detail}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, display: 'grid', gap: 2 }}>
                <Paper sx={{ p: 3, bgcolor: colors.lightBlue, borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Visitor Snapshot
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 0.5 }}>
                    • Daily pooja schedule from 5:00 AM to 8:00 PM
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 0.5 }}>
                    • Annadanam served to 500+ devotees every day
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.textSecondary }}>
                    • Guided tours available for groups with prior booking
                  </Typography>
                </Paper>

                <Paper sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Key Deities</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box sx={{ p: 2 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Bhagavathy</Typography>
                        <Typography variant="body2" sx={{ color: colors.textSubtle }}>Principal goddess worshipped in the temple with special weekly sevas.</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box sx={{ p: 2 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Lord Shiva</Typography>
                        <Typography variant="body2" sx={{ color: colors.textSubtle }}>Vazhipads and abhishekams are held daily for Lord Shiva.</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box sx={{ p: 2 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Ganapathy</Typography>
                        <Typography variant="body2" sx={{ color: colors.textSubtle }}>Remover of obstacles, invoked at the start of important rituals.</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>

                <Paper sx={{ p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Festivals & Calendar</Typography>
                  <Typography variant="body2" sx={{ color: colors.textSubtle, mb: 1 }}>
                    Major annual festivals include the Annual Utsavam, Navaratri celebrations, and Shivaratri observances.
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.textSubtle }}>
                    Check the <strong>Festivals</strong> page for detailed schedules and special darshan timings.
                  </Typography>
                </Paper>
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
