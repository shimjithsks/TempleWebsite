import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const nearby = [
  { name: 'Beach Viewpoint', to: '/nearby/viewpoints' },
  { name: 'Heritage Trail', to: '/nearby/heritage' },
  { name: 'Nearby Temples', to: '/nearby/temples' },
];

export default function NearbyPreview() {
  return (
    <Paper sx={{ p: 3, borderRadius: 2, height: '100%' }} elevation={2}>
      <Typography variant="overline" sx={{ color: '#E63946', letterSpacing: 2 }}>
        NEARBY
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        Nearby Experiences
      </Typography>

      <List dense>
        {nearby.map((n, i) => (
          <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
            <ListItemText primary={n.name} />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 2 }}>
        <Button component={RouterLink} to="/nearby" size="small" sx={{ color: '#E63946' }}>
          Explore Nearby →
        </Button>
      </Box>
    </Paper>
  );
}
