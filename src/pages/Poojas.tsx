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
} from '@mui/material';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';
import PoojaDisplayCard from '../components/PoojaDisplayCard';
import { poojas as allPoojas, Pooja } from '../data/pooja-data';
import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../theme/colors';

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
            <Paper elevation={3} sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: colors.primary, mb: 1 }}>
                Poojas & Vazhipads
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: colors.textSecondary }}>
                Find scheduled poojas, homams, and offering packages. Use the offerings list below to choose a ritual and book a convenient slot.
              </Typography>

              <Paper sx={{ p: 3, mb: 3 }} id="about-poojas">
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>About Poojas</Typography>
                <Typography variant="body2" sx={{ color: colors.textSubtle, mb: 1 }}>
                  A pooja is a ritual offering performed to honour the deity and seek blessings. Offerings vary from simple archana and abhishekam to elaborate homams (fire rituals) and seva packages. Each pooja has a recommended time, suggested materials, and a customary fee that supports temple upkeep and priests.
                </Typography>
                <Typography variant="body2" sx={{ color: colors.textSubtle, mb: 1 }}>
                  How to use this page: choose any offering and click "Book Now" to add devotee details and preferred date. For larger events or special priest requests, contact the office directly using the Contact page.
                </Typography>
                <Typography variant="body2" sx={{ color: colors.textSubtle }}>
                  Benefits: Poojas are performed for well-being, prosperity, health, and specific vows. Read the short descriptions for each offering to understand its focus.
                </Typography>
              </Paper>

              {/* Featured offerings removed as requested */}

              {/* Offerings grid removed per request. Use the booking desk to see available poojas and slots. */}
              <Paper sx={{ p: 3, mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>Booking Desk</Typography>
                <Typography variant="body2" sx={{ color: colors.textSubtle, mb: 2 }}>
                  The full list of poojas and available slots is managed by the Booking Desk. Click below to open the booking flow where you can select a pooja, provide devotee details, and choose a date.
                </Typography>
                <Button component={RouterLink} to="/poojas/booking" variant="contained" sx={{ bgcolor: colors.primary }}>
                  Open Booking Desk
                </Button>
              </Paper>

              {/* Pagination intentionally removed for simplified overview */}

              <Box sx={{ mt: 4 }}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Visitor FAQ</Typography>
                  <List>
                    <ListItem>
                      <ListItemText primary="How do I book a pooja?" secondary="Click 'Book Now' on any offering and follow the booking flow to provide devotee details and preferred date." />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Can I choose a specific priest?" secondary="Priest requests can be added in the booking notes; confirmation depends on availability." />
                    </ListItem>
                    <Divider />
                    <ListItem>
                      <ListItemText primary="Is payment required at booking?" secondary="Payment is collected securely during checkout; you may complete booking with provisional slots when allowed by the office." />
                    </ListItem>
                  </List>
                </Paper>
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
