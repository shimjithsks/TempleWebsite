import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Avatar,
  Chip,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ExploreIcon from '@mui/icons-material/Explore';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import HikingIcon from '@mui/icons-material/Hiking';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import InfoIcon from '@mui/icons-material/Info';
import RouteIcon from '@mui/icons-material/Route';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const GOLD = '#d4af37';

const nearbyCategories = [
  { 
    title: 'Tourist Places', 
    icon: ExploreIcon,
    color: '#9c27b0',
    description: 'Handpicked sightseeing spots and cultural points of interest within easy reach of the temple.',
    link: '/nearby/tourist-places'
  },
  { 
    title: 'Beaches & Coast', 
    icon: BeachAccessIcon,
    color: '#2196f3',
    description: 'Family-friendly beaches and safe bathing spots with nearby facilities and timings.',
    link: '/nearby/beaches'
  },
  { 
    title: 'Boating & Backwaters', 
    icon: DirectionsBoatIcon,
    color: '#00bcd4',
    description: 'Guided boat services, timings, and contact details for scenic backwater experiences.',
    link: '/nearby/boating'
  },
  { 
    title: 'Temples Nearby', 
    icon: TempleHinduIcon,
    color: '#ff9800',
    description: 'Practical directory of nearby shrines with distance estimates and timings.',
    link: '/nearby/temples'
  },
  { 
    title: 'Viewpoints & Heritage', 
    icon: LandscapeIcon,
    color: '#4caf50',
    description: 'Short treks and heritage walking loops with panoramic views.',
    link: '/nearby/viewpoints'
  },
  { 
    title: 'Activities & Services', 
    icon: LocalActivityIcon,
    color: '#e91e63',
    description: 'Guided heritage walks, transport providers, homestays, and local guides.',
    link: '/nearby/activities'
  }
];

const boatServices = [
  { name: 'Muchukunnu Boat Service', route: 'Temple Pier - Backwaters', timing: '8 AM - 5 PM', phone: '+91-XXXXXXXXXX' }
];

export default function Nearby() {
  return (
    <>
      <PageBanner title="Explore Nearby" />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: 4, 
              mb: 4,
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
                background: `linear-gradient(90deg, ${GOLD} 0%, #e5c158 25%, ${GOLD} 50%, #e5c158 75%, ${GOLD} 100%)`,
                animation: 'shimmer 3s linear infinite',
                backgroundSize: '200% 100%',
                '@keyframes shimmer': {
                  '0%': { backgroundPosition: '-200% 0' },
                  '100%': { backgroundPosition: '200% 0' },
                },
              }
            }}>
              {/* Header Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                    mr: 3,
                    boxShadow: '0 8px 24px rgba(76,175,80,0.4)',
                  }}
                >
                  <ExploreIcon sx={{ fontSize: 45, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ 
                    fontWeight: 900,
                    background: `linear-gradient(135deg, ${GOLD} 0%, #e5c158 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 0.5,
                  }}>
                    Explore Nearby
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', fontWeight: 600 }}>
                    Discover sacred temples, scenic spots & cultural experiences
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ color: '#555', mb: 4, fontSize: '1.05rem', lineHeight: 1.7 }}>
                Muchukunnu and its surroundings offer a varied experience for devotees and visitors: sacred temples, serene
                backwaters, scenic viewpoints, heritage trails, and coastal beaches. Use the sections below to quickly jump to
                curated lists, practical travel information, and suggested itineraries to make the most of your visit.
              </Typography>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              {/* Category Cards */}
              <Typography variant="h5" sx={{ 
                fontWeight: 800, 
                mb: 3,
                color: GOLD,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}>
                <RouteIcon /> Explore By Category
              </Typography>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                {nearbyCategories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card elevation={0} sx={{ 
                        height: '100%',
                        border: `3px solid ${GOLD}`,
                        borderRadius: 4,
                        boxShadow: '0 8px 24px rgba(212,175,55,0.2)',
                        background: 'linear-gradient(135deg, #fff, #fafaf8)',
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.02)',
                          boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                        },
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: 6,
                          height: '100%',
                          background: category.color,
                        }
                      }}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar
                              sx={{
                                width: 60,
                                height: 60,
                                background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`,
                                mr: 2,
                                boxShadow: `0 6px 16px ${category.color}66`,
                              }}
                            >
                              <IconComponent sx={{ fontSize: 32, color: '#fff' }} />
                            </Avatar>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD }}>
                              {category.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" sx={{ color: '#666', mb: 2, lineHeight: 1.6 }}>
                            {category.description}
                          </Typography>
                          <Button 
                            component={RouterLink} 
                            to={category.link} 
                            fullWidth
                            variant="outlined"
                            sx={{ 
                              borderColor: GOLD,
                              color: GOLD, 
                              fontWeight: 700,
                              borderWidth: 2,
                              '&:hover': {
                                borderWidth: 2,
                                borderColor: GOLD,
                                bgcolor: 'rgba(212,175,55,0.1)',
                              }
                            }}
                          >
                            Explore →
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              {/* Quick Conclusions */}
              <Typography variant="h5" sx={{ 
                fontWeight: 800, 
                mb: 3,
                color: GOLD,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}>
                <InfoIcon /> Quick Guide to Nearby Sections
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', mb: 3, fontSize: '1rem' }}>
                Below are short summaries of each Explore Nearby page — useful to plan your devotional day and side trips.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{ 
                    p: 2.5, 
                    border: `2px solid ${GOLD}`,
                    borderRadius: 3,
                    background: '#fff',
                    height: '100%',
                  }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: GOLD, mb: 1 }}>
                      Tourist Places
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                      Curated list of temples, viewpoints, and cultural spots with short descriptions and best visiting times. Ideal for half-day to full-day plans.
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{ 
                    p: 2.5, 
                    border: `2px solid ${GOLD}`,
                    borderRadius: 3,
                    background: '#fff',
                    height: '100%',
                  }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: GOLD, mb: 1 }}>
                      Beaches
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                      Details on the safest bathing spots, lifeguard hours, parking, and nearby refreshments; recommended for evening visits and sunset viewing.
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{ 
                    p: 2.5, 
                    border: `2px solid ${GOLD}`,
                    borderRadius: 3,
                    background: '#fff',
                    height: '100%',
                  }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: GOLD, mb: 1 }}>
                      Boating
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                      Backwater and river cruises, local boat operator contacts, and sample routes — perfect for reflective, scenic experiences after darshan.
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{ 
                    p: 2.5, 
                    border: `2px solid ${GOLD}`,
                    borderRadius: 3,
                    background: '#fff',
                    height: '100%',
                  }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: GOLD, mb: 1 }}>
                      Viewpoints & Heritage Trails
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                      Short treks and heritage walking loops that explain local history and offer panoramic views; suitable for morning outings.
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{ 
                    p: 2.5, 
                    border: `2px solid ${GOLD}`,
                    borderRadius: 3,
                    background: '#fff',
                    height: '100%',
                  }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: GOLD, mb: 1 }}>
                      Temples Nearby
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                      A practical directory of nearby shrines, with distance estimates from Muchukunnu Temple and timings for daily rituals and festivals.
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{ 
                    p: 2.5, 
                    border: `2px solid ${GOLD}`,
                    borderRadius: 3,
                    background: '#fff',
                    height: '100%',
                  }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: GOLD, mb: 1 }}>
                      Activities & Services
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                      Guided heritage walks, transport providers, homestays, and local guides to help you extend your pilgrimage into a cultural visit.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              {/* Suggested Itineraries */}
              <Typography variant="h5" sx={{ 
                fontWeight: 800, 
                mb: 3,
                color: GOLD,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}>
                <HikingIcon /> Suggested Itineraries
              </Typography>
              <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{ 
                    p: 3,
                    border: `3px solid ${GOLD}`,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #fff 0%, #fffef8 100%)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 5,
                      height: '100%',
                      background: '#4caf50',
                    }
                  }}>
                    <Chip 
                      label="HALF DAY" 
                      size="small" 
                      sx={{ 
                        bgcolor: '#4caf50', 
                        color: '#fff', 
                        fontWeight: 700,
                        mb: 2,
                      }} 
                    />
                    <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD, mb: 1.5 }}>
                      Half-day Pilgrim
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                      Morning darshan at Muchukunnu Temple → Short heritage walk → Lunch at local annadanam center. Best for quick visits.
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{ 
                    p: 3,
                    border: `3px solid ${GOLD}`,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #fff 0%, #fffef8 100%)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 5,
                      height: '100%',
                      background: '#2196f3',
                    }
                  }}>
                    <Chip 
                      label="FULL DAY" 
                      size="small" 
                      sx={{ 
                        bgcolor: '#2196f3', 
                        color: '#fff', 
                        fontWeight: 700,
                        mb: 2,
                      }} 
                    />
                    <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD, mb: 1.5 }}>
                      Full-day Cultural
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                      Darshan and ritual in the morning → Boat ride through backwaters → Visit nearby temples and viewpoint for sunset → Dinner.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              {/* Practical Tips */}
              <Typography variant="h5" sx={{ 
                fontWeight: 800, 
                mb: 3,
                color: GOLD,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}>
                <ContactPhoneIcon /> Practical Tips & Contacts
              </Typography>
              
              <Box sx={{ 
                p: 3,
                borderRadius: 4,
                background: `linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 100%)`,
                border: `2px solid rgba(212,175,55,0.3)`,
                mb: 4,
              }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Box sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        bgcolor: GOLD,
                        mt: 1,
                        flexShrink: 0,
                      }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: GOLD, mb: 0.5 }}>
                          Transport
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                          Local taxi and auto-rickshaw services operate from the temple; pre-book vehicles for festival days.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Box sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        bgcolor: GOLD,
                        mt: 1,
                        flexShrink: 0,
                      }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: GOLD, mb: 0.5 }}>
                          Accommodation
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                          Several homestays and lodging options exist nearby — check the 'Activities' and 'Tourist Places' pages for recommendations.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Box sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        bgcolor: GOLD,
                        mt: 1,
                        flexShrink: 0,
                      }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: GOLD, mb: 0.5 }}>
                          Safety
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                          Follow local guidance on weather/sea conditions for beaches and boating. Carry water and sun protection.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Box sx={{ 
                        width: 8, 
                        height: 8, 
                        borderRadius: '50%', 
                        bgcolor: GOLD,
                        mt: 1,
                        flexShrink: 0,
                      }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: GOLD, mb: 0.5 }}>
                          Emergency
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                          Temple office: +91-XXXXXXXXXX. For medical emergencies dial local emergency services.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              {/* Action Buttons */}
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button 
                  component={RouterLink} 
                  to="/nearby/tourist-places" 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    bgcolor: GOLD,
                    color: '#fff',
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    mr: 2,
                    borderRadius: 3,
                    boxShadow: '0 8px 24px rgba(212,175,55,0.35)',
                    '&:hover': {
                      bgcolor: '#c9a332',
                      boxShadow: '0 12px 32px rgba(212,175,55,0.45)',
                    }
                  }}
                >
                  🗺️ Start Exploring
                </Button>
                <Button 
                  component={RouterLink} 
                  to="/contact" 
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: GOLD,
                    color: GOLD,
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    borderWidth: 2,
                    borderRadius: 3,
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: GOLD,
                      bgcolor: 'rgba(212,175,55,0.1)',
                    }
                  }}
                >
                  📞 Contact Temple Office
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby" />
            <Paper sx={{ mt: 3, p: 2 }} elevation={1}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Boat Services</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
