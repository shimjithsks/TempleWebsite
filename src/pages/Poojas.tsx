/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Grid,
  Typography,
  Container,
  Paper,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';
import PoojaDisplayCard from '../components/PoojaDisplayCard';
import { poojas as allPoojas, Pooja } from '../data/pooja-data';
import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../theme/colors';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const GOLD = '#d4af37';
const DEITIES = ['ALL', 'BHAGAVATHY', 'SIVA', 'VISHNU', 'GANAPATHY', 'AYYAPPA', 'GENERAL'];

export default function Poojas() {
  // Simplified overview: show all poojas in a uniform grid with featured area above.
  const visible: Pooja[] = allPoojas.slice();

  return (
    <>
      <PageBanner title="Poojas & Vazhipads" />

      <Container maxWidth="lg" sx={{ mt: 0, pt: 0, pb: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: 4,
              border: `3px solid ${GOLD}`,
              borderRadius: 5,
              boxShadow: '0 20px 60px rgba(212,175,55,0.25)',
              background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 6,
                background: 'linear-gradient(90deg, #d4af37 0%, #e5c158 25%, #d4af37 50%, #e5c158 75%, #d4af37 100%)',
                animation: 'shimmer 3s linear infinite',
                backgroundSize: '200% 100%',
                '@keyframes shimmer': {
                  '0%': { backgroundPosition: '-200% 0' },
                  '100%': { backgroundPosition: '200% 0' },
                },
              }
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2, 
                mb: 4,
                mt: 2,
              }}>
                <Avatar sx={{ 
                  width: 56, 
                  height: 56, 
                  bgcolor: GOLD,
                  boxShadow: `0 8px 24px rgba(212,175,55,0.4)`,
                }}>
                  <AutoAwesomeIcon sx={{ fontSize: 32, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #d4af37 0%, #e5c158 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Poojas & Vazhipads
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontWeight: 600, mt: 0.5 }}>
                    Find scheduled poojas, homams, and offering packages
                  </Typography>
                </Box>
              </Box>

              <Card elevation={0} sx={{ 
                mb: 4,
                border: `3px solid ${GOLD}`,
                borderRadius: 4,
                background: 'linear-gradient(135deg, rgba(212,175,55,0.06), rgba(212,175,55,0.12))',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${GOLD} 0%, #e5c158 100%)`,
                }
              }} id="about-poojas">
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Avatar sx={{ 
                      width: 40, 
                      height: 40, 
                      bgcolor: GOLD,
                      boxShadow: `0 4px 12px rgba(212,175,55,0.4)`,
                    }}>
                      <InfoIcon sx={{ fontSize: 24, color: '#fff' }} />
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD }}>
                      About Poojas
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#555', mb: 2, lineHeight: 1.8, fontWeight: 500 }}>
                    A pooja is a ritual offering performed to honour the deity and seek blessings. Offerings vary from simple archana and abhishekam to elaborate homams (fire rituals) and seva packages. Each pooja has a recommended time, suggested materials, and a customary fee that supports temple upkeep and priests.
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', mb: 2, lineHeight: 1.8, fontWeight: 500 }}>
                    How to use this page: choose any offering and click "Book Now" to add devotee details and preferred date. For larger events or special priest requests, contact the office directly using the Contact page.
                  </Typography>
                  <Box sx={{ 
                    mt: 2, 
                    pt: 2, 
                    borderTop: `2px solid ${GOLD}40`,
                  }}>
                    <Typography variant="body2" sx={{ color: GOLD, fontWeight: 700, mb: 1 }}>
                      ✨ Benefits:
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.8, fontWeight: 500 }}>
                      Poojas are performed for well-being, prosperity, health, and specific vows. Read the short descriptions for each offering to understand its focus.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              {/* Featured offerings removed as requested */}

              {/* Offerings grid removed per request. Use the booking desk to see available poojas and slots. */}
              <Card elevation={0} sx={{ 
                mb: 4,
                border: `3px solid ${GOLD}`,
                borderRadius: 4,
                background: 'linear-gradient(135deg, #fff, #fafaf8)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${GOLD} 0%, #e5c158 100%)`,
                }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ 
                      width: 48, 
                      height: 48, 
                      bgcolor: GOLD,
                      boxShadow: `0 6px 18px rgba(212,175,55,0.4)`,
                    }}>
                      <BookOnlineIcon sx={{ fontSize: 28, color: '#fff' }} />
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: GOLD }}>
                      Booking Desk
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#555', mb: 3, lineHeight: 1.8, fontWeight: 500 }}>
                    The full list of poojas and available slots is managed by the Booking Desk. Click below to open the booking flow where you can select a pooja, provide devotee details, and choose a date.
                  </Typography>
                  <Button 
                    component={RouterLink} 
                    to="/poojas/booking" 
                    variant="contained" 
                    size="large"
                    sx={{ 
                      bgcolor: GOLD,
                      color: '#000',
                      fontWeight: 800,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontSize: '1rem',
                      boxShadow: `0 8px 24px ${GOLD}50`,
                      '&:hover': {
                        bgcolor: '#e5c158',
                        transform: 'translateY(-2px)',
                        boxShadow: `0 12px 32px ${GOLD}60`,
                      },
                      transition: 'all 300ms ease',
                    }}
                  >
                    Open Booking Desk →
                  </Button>
                </CardContent>
              </Card>

              {/* Pagination intentionally removed for simplified overview */}

              <Box sx={{ mt: 4 }}>
                <Card elevation={0} sx={{ 
                  border: `3px solid ${GOLD}`,
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #fff, #fafaf8)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(90deg, ${GOLD} 0%, #e5c158 100%)`,
                  }
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                      <Avatar sx={{ 
                        width: 40, 
                        height: 40, 
                        bgcolor: GOLD,
                        boxShadow: `0 4px 12px rgba(212,175,55,0.4)`,
                      }}>
                        <HelpOutlineIcon sx={{ fontSize: 24, color: '#fff' }} />
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD }}>
                        Visitor FAQ
                      </Typography>
                    </Box>
                    <List>
                      <ListItem sx={{ 
                        px: 0,
                        '&:hover': { 
                          bgcolor: 'rgba(212,175,55,0.05)',
                          borderRadius: 2,
                        }
                      }}>
                        <ListItemText 
                          primary={
                            <Typography sx={{ fontWeight: 700, color: '#333', mb: 0.5 }}>
                              How do I book a pooja?
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                              Click 'Open Booking Desk' and follow the booking flow to select poojas, provide devotee details and preferred date.
                            </Typography>
                          }
                        />
                      </ListItem>
                      <Divider sx={{ my: 1.5, borderColor: `${GOLD}30` }} />
                      <ListItem sx={{ 
                        px: 0,
                        '&:hover': { 
                          bgcolor: 'rgba(212,175,55,0.05)',
                          borderRadius: 2,
                        }
                      }}>
                        <ListItemText 
                          primary={
                            <Typography sx={{ fontWeight: 700, color: '#333', mb: 0.5 }}>
                              Can I choose a specific priest?
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                              Priest requests can be added in the booking notes; confirmation depends on availability.
                            </Typography>
                          }
                        />
                      </ListItem>
                      <Divider sx={{ my: 1.5, borderColor: `${GOLD}30` }} />
                      <ListItem sx={{ 
                        px: 0,
                        '&:hover': { 
                          bgcolor: 'rgba(212,175,55,0.05)',
                          borderRadius: 2,
                        }
                      }}>
                        <ListItemText 
                          primary={
                            <Typography sx={{ fontWeight: 700, color: '#333', mb: 0.5 }}>
                              Is payment required at booking?
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                              Payment is collected securely during checkout; you may complete booking with provisional slots when allowed by the office.
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Box>
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
