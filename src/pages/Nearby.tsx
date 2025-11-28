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
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../theme/colors';

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
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                Explore Nearby — Overview
              </Typography>

              <Typography variant="body1" sx={{ color: colors.textSecondary, mb: 2 }}>
                Muchukunnu and its surroundings offer a varied experience for devotees and visitors: sacred temples, serene
                backwaters, scenic viewpoints, heritage trails, and coastal beaches. Use the sections below to quickly jump to
                curated lists, practical travel information, and suggested itineraries to make the most of your visit.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>Tourist Places</Typography>
                      <Typography variant="body2" sx={{ color: colors.textSubtle, mb: 1 }}>
                        Handpicked sightseeing spots and cultural points of interest within easy reach of the temple.
                      </Typography>
                      <Button component={RouterLink} to="/nearby/tourist-places" size="small" sx={{ color: colors.primary, fontWeight: 700 }}>
                        View List →
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>Beaches & Coast</Typography>
                      <Typography variant="body2" sx={{ color: colors.textSubtle, mb: 1 }}>
                        Family-friendly beaches and safe bathing spots with nearby facilities and timings.
                      </Typography>
                      <Button component={RouterLink} to="/nearby/beaches" size="small" sx={{ color: colors.primary, fontWeight: 700 }}>
                        Learn More →
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>Boating & Backwaters</Typography>
                      <Typography variant="body2" sx={{ color: colors.textSubtle, mb: 1 }}>
                        Guided boat services, timings, and contact details for scenic backwater experiences.
                      </Typography>
                      <Button component={RouterLink} to="/nearby/boating" size="small" sx={{ color: colors.primary, fontWeight: 700 }}>
                        Boat Options →
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Quick Conclusions from Nearby Sections</Typography>
              <Typography variant="body2" sx={{ color: colors.textSubtle, mb: 2 }}>
                Below are short summaries of each Explore Nearby page — useful to plan your devotional day and side trips.
              </Typography>

              <List>
                <ListItem>
                  <ListItemText
                    primary="Nearby Overview"
                    secondary="A high-level guide to what to expect: transport options, accessibility, and recommended visit lengths for the area."
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Tourist Places"
                    secondary="Curated list of temples, viewpoints, and cultural spots with short descriptions and best visiting times. Ideal for half-day to full-day plans."
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Beaches"
                    secondary="Details on the safest bathing spots, lifeguard hours, parking, and nearby refreshments; recommended for evening visits and sunset viewing."
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Boating"
                    secondary="Backwater and river cruises, local boat operator contacts, and sample routes — perfect for reflective, scenic experiences after darshan."
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Viewpoints & Heritage Trails"
                    secondary="Short treks and heritage walking loops that explain local history and offer panoramic views; suitable for morning outings."
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Temples Nearby"
                    secondary="A practical directory of nearby shrines, with distance estimates from Muchukunnu Temple and timings for daily rituals and festivals."
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Activities & Services"
                    secondary="Guided heritage walks, transport providers, homestays, and local guides to help you extend your pilgrimage into a cultural visit."
                  />
                </ListItem>
              </List>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Suggested Itineraries</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Half-day Pilgrim</Typography>
                    <Typography variant="body2" sx={{ color: colors.textSubtle }}>
                      Morning darshan at Muchukunnu Temple → Short heritage walk → Lunch at local annadanam center. Best for quick visits.
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Full-day Cultural</Typography>
                    <Typography variant="body2" sx={{ color: colors.textSubtle }}>
                      Darshan and ritual in the morning → Boat ride through backwaters → Visit nearby temples and viewpoint for sunset → Dinner.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Practical Tips & Contacts</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Transport" secondary="Local taxi and auto-rickshaw services operate from the temple; pre-book vehicles for festival days." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Accommodation" secondary="Several homestays and lodging options exist nearby — check the 'Activities' and 'Tourist Places' pages for recommendations." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Safety" secondary="Follow local guidance on weather/sea conditions for beaches and boating. Carry water and sun protection." />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Emergency" secondary="Temple office: +91-XXXXXXXXXX. For medical emergencies dial local emergency services." />
                </ListItem>
              </List>

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button component={RouterLink} to="/nearby/tourist-places" variant="contained" sx={{ bgcolor: colors.primary, mr: 1 }}>
                  Start Exploring
                </Button>
                <Button component={RouterLink} to="/contact" variant="outlined">
                  Contact Temple Office
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
