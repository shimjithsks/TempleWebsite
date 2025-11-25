import React from 'react';
import { Box, Paper, Typography, Grid, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const categories = [
  { title: 'Temple Architecture' },
  { title: 'Daily Rituals' },
  { title: 'Festival Celebrations' },
  { title: 'Deity Decorations' },
];

export default function GalleryPreview() {
  return (
    <Paper sx={{ p: 3, borderRadius: 2, height: '100%' }} elevation={2}>
      <Typography variant="overline" sx={{ color: '#E63946', letterSpacing: 2 }}>
        GALLERY
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        Photo Preview
      </Typography>

      <Grid container spacing={1}>
        {categories.map((c, i) => (
          <Grid item xs={6} key={i}>
            <Box sx={{ height: 90, borderRadius: 1, bgcolor: `hsl(${i * 60}, 60%, 90%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ fontWeight: 600 }}>{c.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 2, textAlign: 'left' }}>
        <Button component={RouterLink} to="/gallery/photos" size="small" sx={{ color: '#E63946' }}>
          View Full Gallery →
        </Button>
      </Box>
    </Paper>
  );
}
