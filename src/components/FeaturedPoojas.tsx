import React from 'react';
import { Box, Grid, Paper, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PoojaDisplayCard from './PoojaDisplayCard';
import { poojas } from '../data/pooja-data';

// Use the existing header god image asset used across the site.
// The file `header_god_image.png` is expected to be in `public/assets/`.
const fallbackImage = '/assets/header_god_image.png';

export default function FeaturedPoojas() {
  const featured = poojas.slice(0, 6);

  return (
    <Box
      sx={{
        mt: 4,
        mb: 4,
        p: { xs: 2, md: 3 },
        borderRadius: 3,
        bgcolor: '#fff',
        border: '1px solid rgba(230,57,70,0.08)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
      }}
    >
      <Typography variant="overline" sx={{ color: '#E63946', letterSpacing: 2 }}>
        FEATURED OFFERINGS
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
        Popular Poojas & Vazhipads
      </Typography>

      <Grid container spacing={2}>
        {featured.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Box sx={{ position: 'relative', height: '100%', '&:hover .fp-overlay': { opacity: 1 } }}>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 2,
                  height: '100%',
                  borderTop: '4px solid #E63946',
                  overflow: 'hidden',
                }}
              >
                <PoojaDisplayCard
                  name={p.name}
                  price={p.price}
                  description={p.description}
                  // Use the provided deity icon for featured cards (fallback if `p.image` is empty)
                  image={fallbackImage}
                  showPrice={false}
                />
              </Paper>

              <Box
                component={RouterLink}
                to="/poojas/booking"
                className="fp-overlay"
                tabIndex={0}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'rgba(0,0,0,0.48)',
                  color: '#fff',
                  opacity: 0,
                  transition: 'opacity 180ms ease-in-out',
                  textDecoration: 'none',
                  outline: 'none',
                  '&:focus': { opacity: 1 },
                }}
              >
                <Button aria-label={`Book ${p.name}`} variant="contained" sx={{ bgcolor: '#E63946', px: 3, py: 1.2 }}>Book</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Button component={RouterLink} to="/poojas/booking" variant="contained" sx={{ bgcolor: '#E63946' }}>
          View All Poojas
        </Button>
      </Box>
    </Box>
  );
}
