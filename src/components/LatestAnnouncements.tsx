import React from 'react';
import { Box, Paper, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const announcements = [
  { title: 'Temple Timings During Festival Season', date: 'Nov 22, 2025' },
  { title: 'Online Booking System Update', date: 'Nov 18, 2025' },
  { title: 'Parking Arrangements', date: 'Nov 15, 2025' },
];

export default function LatestAnnouncements() {
  return (
    <Paper sx={{ p: 3, borderRadius: 2, height: '100%' }} elevation={2}>
      <Typography variant="overline" sx={{ color: '#E63946', letterSpacing: 2 }}>
        LATEST
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        Announcements
      </Typography>

      <List dense>
        {announcements.map((a, i) => (
          <ListItem key={i} sx={{ py: 1 }} disableGutters>
            <ListItemText primary={a.title} secondary={a.date} />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 2, textAlign: 'left' }}>
        <Button component={RouterLink} to="/news/announcements" size="small" sx={{ color: '#E63946' }}>
          See All Announcements →
        </Button>
      </Box>
    </Paper>
  );
}
