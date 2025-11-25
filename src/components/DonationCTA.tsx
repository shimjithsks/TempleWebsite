import React from 'react';
import { Paper, Typography, Box, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const tiles = [
  {
    title: 'Festival Bulletins',
    description: 'Plan your trip around upcoming utsavams and pooja mahotsavs.',
    to: '/news/upcoming',
    bg: 'linear-gradient(180deg,#FFE8D5,#FFD9B8)'
  },
  {
    title: 'Temple Gallery',
    description: 'Swirl through photos, events, and the sacred premises.',
    to: '/gallery/photos',
    bg: 'linear-gradient(180deg,#EAF3FF,#E4EEFF)'
  },
  {
    title: 'Nearby Planner',
    description: 'Heritage walks, beaches, and pilgrim circuits to extend your visit.',
    to: '/nearby/tourist-places',
    bg: 'linear-gradient(180deg,#E8FFF0,#CFF7E6)'
  },
  {
    title: 'Temple Office',
    description: 'Office contacts, map, and assistance for devotees.',
    to: '/contact/office',
    bg: 'linear-gradient(180deg,#FFF6D8,#FFECC0)'
  },
];

export default function DonationCTA() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12} md={7}>
          <Paper
            elevation={3}
            sx={{
              position: 'relative',
              height: { xs: 300, md: 360 },
              borderRadius: 3,
              overflow: 'hidden',
              p: { xs: 3, md: 6 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              color: '#fff',
              bgcolor: 'transparent',
              backgroundImage: 'linear-gradient(180deg, rgba(230,57,70,0.95), rgba(230,57,70,0.9))',
            }}
          >
            <Box sx={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'url(/assets/header_god_image.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

            <Box sx={{ position: 'relative', zIndex: 2, maxWidth: { xs: '100%', md: '70%' } }}>
              <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.9)', letterSpacing: 2 }}>
                PLAN YOUR DEVOTIONAL DAY
              </Typography>

              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 2, lineHeight: 1.05 }}>
                Book poojas, support temple causes, and stay informed.
              </Typography>

              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3 }}>
                Use the buttons below for the most requested actions from devotees around the world.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button component={RouterLink} to="/poojas/booking" variant="contained" sx={{ bgcolor: '#d93a44', '&:hover': { bgcolor: '#c4343f' }, px: 3, py: 1.5 }}>
                  BOOK A POOJA
                </Button>
                <Button component={RouterLink} to="/donate/online" variant="outlined" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.45)', px: 3, py: 1.5 }}>
                  DONATE ONLINE
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Grid container spacing={2}>
            {tiles.map((t) => (
              <Grid item xs={12} sm={6} key={t.title}>
                <Paper sx={{ p: 3, borderRadius: 2, height: '100%', background: t.bg }} elevation={1}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{t.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#333' }}>{t.description}</Typography>
                  <Button component={RouterLink} to={t.to} size="small" sx={{ mt: 2, color: '#e63946', fontWeight: 700 }}>
                    VISIT PAGE →
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
