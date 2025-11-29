import React, { useEffect, useState } from 'react';
import { Box, Button, Paper, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import { Link as RouterLink } from 'react-router-dom';

export default function QuickActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        right: { xs: 12, md: 24 },
        bottom: { xs: 12, md: 24 },
        zIndex: 1400,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 220ms ease, transform 220ms ease',
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 1,
          borderRadius: 999,
          bgcolor: 'rgba(16,16,18,0.72)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        <Stack direction="row" spacing={1}>
          <Button
            component={RouterLink}
            to="/donate/online"
            variant="contained"
            startIcon={<FavoriteIcon />}
            sx={{
              bgcolor: '#d4af37',
              color: '#121212',
              '&:hover': { bgcolor: '#e0c159' },
              textTransform: 'none',
              fontWeight: 800,
              borderRadius: 999,
              px: 2,
            }}
          >
            Donate
          </Button>
          <Button
            component={RouterLink}
            to="/poojas/booking"
            variant="outlined"
            startIcon={<TempleHinduIcon />}
            sx={{
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.5)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.08)', borderColor: '#fff' },
              textTransform: 'none',
              fontWeight: 800,
              borderRadius: 999,
              px: 2,
            }}
          >
            Book Pooja
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
