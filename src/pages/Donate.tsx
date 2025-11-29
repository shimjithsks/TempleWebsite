import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Donate() {
  return (
    <>
      <PageBanner title="Donate & Support" />

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
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#d4af37' }} gutterBottom>
                Support the Temple — Overview
              </Typography>

              <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
                Your donations sustain daily rituals, annadanam (community meals), temple maintenance, and festival
                arrangements. We offer multiple ways to contribute — one-time gifts, recurring donations, project-specific
                funding, and in-kind support. Below you'll find suggested programs, impact examples, and practical steps to donate.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={0} sx={{ 
                    p: 2.5,
                    border: '2px solid rgba(212,175,55,0.3)',
                    borderRadius: 3,
                    boxShadow: '0 6px 16px rgba(212,175,55,0.12)',
                    background: 'linear-gradient(135deg, #fff, #fafaf8)',
                    transition: 'all 280ms ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(212,175,55,0.25)',
                      borderColor: '#d4af37',
                    },
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
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#d4af37' }}>Annadanam</Typography>
                    <Typography variant="body2" sx={{ color: '#555', mb: 1.5 }}>
                      Feed devotees and the community—support daily meals and festival prasadam distribution.
                    </Typography>
                    <Button 
                      component={RouterLink} 
                      to="/donate/annadanam" 
                      size="small" 
                      sx={{ 
                        color: '#d4af37', 
                        fontWeight: 800,
                        '&:hover': {
                          bgcolor: 'rgba(212,175,55,0.1)',
                        }
                      }}
                    >
                      Learn More →
                    </Button>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>Renovation Fund</Typography>
                    <Typography variant="body2" sx={{ color: '#444', mb: 1 }}>
                      Contribute toward structural repairs, sanctum upkeep, and conservation projects.
                    </Typography>
                    <Button component={RouterLink} to="/donate/renovation" size="small" sx={{ color: '#E63946', fontWeight: 700 }}>
                      Support Renovation →
                    </Button>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>Festival Support</Typography>
                    <Typography variant="body2" sx={{ color: '#444', mb: 1 }}>
                      Help fund utsavams, homams, and cultural programs during festival seasons.
                    </Typography>
                    <Button component={RouterLink} to="/donate/festival" size="small" sx={{ color: '#E63946', fontWeight: 700 }}>
                      Fund a Festival →
                    </Button>
                  </Paper>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Suggested Giving Levels</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Annadanam Pack" secondary="Rs 500 — Provides meals for a family of four." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Renovation Contribution" secondary="Rs 5,000 — Supports minor repairs and materials." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Festival Sponsor" secondary="Rs 20,000 — Helps underwrite festival costs and arrangements." />
                </ListItem>
              </List>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>How Donations Are Used</Typography>
              <Typography variant="body2" sx={{ color: '#444', mb: 2 }}>
                We maintain transparent accounting and allocate funds to ceremonies, community services, structural upkeep,
                priest support, and festival activities. Donors receive acknowledgements and project reports on request.
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{ 
                    p: 3,
                    border: '2px solid rgba(212,175,55,0.3)',
                    borderRadius: 3,
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
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#d4af37' }}>One-time Online Donation</Typography>
                    <Typography variant="body2" sx={{ color: '#555', mb: 2 }}>
                      Use our secure online gateway to make a single donation. Please include your name and purpose in the form.
                    </Typography>
                    <Button 
                      component={RouterLink} 
                      to="/donate/online" 
                      variant="contained" 
                      sx={{ 
                        bgcolor: '#d4af37',
                        color: '#000',
                        fontWeight: 800,
                        px: 3,
                        py: 1,
                        boxShadow: '0 4px 12px rgba(212,175,55,0.4)',
                        '&:hover': {
                          bgcolor: '#e5c158',
                          boxShadow: '0 6px 20px rgba(212,175,55,0.5)',
                        }
                      }}
                    >
                      Donate Online
                    </Button>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Bank Transfer & Collections</Typography>
                    <Typography variant="body2" sx={{ color: '#444', mb: 1 }}>
                      For larger gifts or recurring support, contact the temple office for bank details and receipts.
                    </Typography>
                    <Button component={RouterLink} to="/contact" variant="outlined">Contact Office</Button>
                  </Paper>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Impact Stories</Typography>
              <Typography variant="body2" sx={{ color: '#444', mb: 2 }}>
                Brief examples of how donor support has enabled free meals, repaired temple structures, and funded festival
                lighting and cultural programs. Donor-named plaques are placed for major contributions.
              </Typography>

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button component={RouterLink} to="/donate/online" variant="contained" sx={{ bgcolor: '#E63946', mr: 1 }}>
                  Donate Now
                </Button>
                <Button component={RouterLink} to="/donate" variant="outlined">See Donation Options</Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="donate" activePath="/donate" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
