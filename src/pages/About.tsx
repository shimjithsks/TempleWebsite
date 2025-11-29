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
            <Paper elevation={0} sx={{ 
              p: { xs: 3, md: 4 },
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
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#d4af37', mb: 2 }}>
                Muchukunnu Sri Kotta-Kovilakam Kshethram
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                A sacred destination for devotees across Kerala, the temple blends timeless rituals with thoughtful modernization. Explore the sections on the right to learn about our history, deities, festivals, administrative structure, and visitor guidelines.
              </Typography>

              <Grid container spacing={3}>
                {highlights.map((item) => (
                  <Grid item xs={12} md={4} key={item.title}>
                    <Box sx={{ 
                      p: 3, 
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.15))', 
                      borderRadius: 3,
                      height: '100%',
                      border: '2px solid rgba(212,175,55,0.3)',
                      boxShadow: '0 6px 16px rgba(212,175,55,0.12)',
                      transition: 'all 280ms ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 32px rgba(212,175,55,0.25)',
                        borderColor: '#d4af37',
                      },
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(90deg, #d4af37, #e5c158)',
                      }
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: '#d4af37', mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.7 }}>
                        {item.detail}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, display: 'grid', gap: 3 }}>
                <Paper elevation={0} sx={{ 
                  p: 3, 
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.06), rgba(212,175,55,0.12))', 
                  borderRadius: 3,
                  border: '2px solid rgba(212,175,55,0.25)',
                  boxShadow: '0 6px 16px rgba(212,175,55,0.1)',
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
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#d4af37', mb: 1 }}>
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

                <Paper elevation={0} sx={{ 
                  p: 3, 
                  borderRadius: 3,
                  border: '2px solid rgba(212,175,55,0.3)',
                  boxShadow: '0 6px 16px rgba(212,175,55,0.12)',
                  background: 'linear-gradient(135deg, #fff, #fafaf8)',
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
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#d4af37', mb: 1 }}>Key Deities</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Box sx={{ 
                        p: 2.5,
                        borderRadius: 2,
                        background: 'rgba(212,175,55,0.05)',
                        border: '1.5px solid rgba(212,175,55,0.2)',
                        transition: 'all 250ms ease',
                        '&:hover': {
                          background: 'rgba(212,175,55,0.1)',
                          borderColor: '#d4af37',
                          transform: 'translateY(-2px)',
                        }
                      }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#d4af37' }}>Bhagavathy</Typography>
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

                <Paper elevation={0} sx={{ 
                  p: 3, 
                  borderRadius: 3,
                  border: '2px solid rgba(212,175,55,0.3)',
                  boxShadow: '0 6px 16px rgba(212,175,55,0.12)',
                  background: 'linear-gradient(135deg, #fff, #fafaf8)',
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
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#d4af37', mb: 1 }}>Festivals & Calendar</Typography>
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
