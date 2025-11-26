import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../theme/colors';

export default function HeroVideo() {
  return (
    <Box sx={{ position: 'relative', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <Box sx={{ position: 'relative', height: 680, overflow: 'hidden', width: '100%' }}>
        <Box
          component="video"
          src="https://cdn.jsdelivr.net/gh/shimjithsks/TempleWebsite@media/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(130deg, ${colors.overlayDark45}, ${colors.overlayDark35})`,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.white,
            textAlign: 'center',
            px: 3,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Welcome to Muchukunnu Sri Kotta-Kovilakam Kshethram
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, fontWeight: 300 }}>
            Preserving tradition. Serving devotion.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              component={RouterLink}
              to="/donate/online"
              sx={{ bgcolor: colors.white, color: colors.primary, fontWeight: 700, '&:hover': { bgcolor: colors.gray100 } }}
            >
              Donate Now
            </Button>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/poojas/booking"
              sx={{ color: colors.white, borderColor: colors.white, fontWeight: 700, '&:hover': { bgcolor: colors.white10 } }}
            >
              Book a Pooja
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
