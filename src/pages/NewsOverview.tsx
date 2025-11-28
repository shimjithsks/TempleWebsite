import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
} from '@mui/material';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';
import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../theme/colors';

const highlights = [
  {
    title: 'Temple News & Updates',
    detail: 'Daily activities, priest schedules, and general news from the temple administration.',
    to: '/news/news',
  },
  {
    title: 'Upcoming Events',
    detail: 'Festival calendars, special poojas, and community programs with dates and essential details.',
    to: '/news/upcoming',
  },
  {
    title: 'Announcements & Notices',
    detail: 'Official communications, circulars, and day-to-day notices for devotees and staff.',
    to: '/news/announcements',
  },
];

const recent = [
  { title: 'Annual Utsavam dates announced', date: '2025-12-20' },
  { title: 'New online booking system launched', date: '2025-11-05' },
  { title: 'Charity annadanam drive completed', date: '2025-10-12' },
];

export default function NewsOverview() {
  const [email, setEmail] = useState('');

  return (
    <>
      <PageBanner title="News & Events" />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: colors.primary, mb: 2 }}>
                Temple News & Events Center
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                Welcome to the temple's information hub. Here you'll find the latest news, official announcements,
                upcoming festivals and events, photo galleries from past celebrations, and important notices for devotees.
                Use the links below to jump to details, subscribe for updates, or browse past event galleries.
              </Typography>

              <Grid container spacing={3}>
                {highlights.map((item) => (
                  <Grid item xs={12} md={4} key={item.title}>
                    <Paper sx={{ p: 3, borderRadius: 2, height: '100%' }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: colors.primary, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: colors.textSubtle, mb: 2 }}>
                        {item.detail}
                      </Typography>
                      <Button component={RouterLink} to={item.to} size="small" sx={{ color: colors.primary, fontWeight: 700 }}>
                        Open →
                      </Button>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <Paper sx={{ p: 3, bgcolor: colors.lightGreen, borderRadius: 2, flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Recent Highlights</Typography>
                  <List>
                    {recent.map((r) => (
                      <ListItem key={r.title} disableGutters>
                        <ListItemText primary={r.title} secondary={r.date} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>

                <Paper sx={{ p: 3, borderRadius: 2, width: 320 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Subscribe for Updates</Typography>
                  <Typography variant="body2" sx={{ color: colors.textSubtle, mb: 2 }}>
                    Enter your email to receive important announcements and event reminders from the temple.
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <TextField size="small" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ flex: 1 }} />
                    <Button variant="contained" sx={{ bgcolor: colors.primary }} onClick={() => alert('Subscribed!')}>Subscribe</Button>
                  </Stack>
                </Paper>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>How to Use This Section</Typography>
              <Typography variant="body2" sx={{ color: colors.textSubtle, mb: 2 }}>
                • Check 'Announcements' for official communication from temple management.
                • Use 'Upcoming Events' to plan visits and register for special programs.
                • Browse 'Past Events' and the gallery for photo highlights and reports.
              </Typography>

              <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                <Button component={RouterLink} to="/news/announcements" variant="outlined">Announcements</Button>
                <Button component={RouterLink} to="/news/upcoming" variant="contained" sx={{ bgcolor: colors.primary }}>Upcoming Events</Button>
                <Button component={RouterLink} to="/news/news" variant="text">Temple News</Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
