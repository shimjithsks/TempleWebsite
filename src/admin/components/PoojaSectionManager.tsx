import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Grid,
  Alert,
  Snackbar,
  CircularProgress
} from '@mui/material';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import SaveIcon from '@mui/icons-material/Save';

interface PoojaSection {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondButtonText: string;
  secondButtonLink: string;
  tiles: PoojaTile[];
}

interface PoojaTile {
  title: string;
  description: string;
  link: string;
}

const PoojaSectionManager = () => {
  const [content, setContent] = useState<PoojaSection>({
    title: 'Plan Your Devotional Day',
    subtitle: 'POOJA CENTRE',
    description: 'Browse pooja categories and book your offerings online with instant confirmation.',
    buttonText: 'Book a Pooja',
    buttonLink: '/poojas/booking',
    secondButtonText: 'View Vazhipads',
    secondButtonLink: '/poojas/vazhipad',
    tiles: [
      {
        title: 'Daily Poojas',
        description: 'All nithya sevas performed every day at the temple.',
        link: '/poojas/daily',
      },
      {
        title: 'Special Poojas',
        description: 'Unique sevas for specific occasions and personal offerings.',
        link: '/poojas/special',
      },
      {
        title: 'Festival Poojas',
        description: 'Seasonal utsavams and festival-day pooja schedules.',
        link: '/poojas/festival',
      },
      {
        title: 'Vazhipad List',
        description: 'Complete vazhipad catalogue with descriptions and dakshina.',
        link: '/poojas/vazhipad',
      },
    ],
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  useEffect(() => {
    fetchContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchContent = async () => {
    try {
      const docRef = doc(db, 'homepage_content', 'pooja_section');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setContent(docSnap.data() as PoojaSection);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      showSnackbar('Failed to load content', 'error');
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, 'homepage_content', 'pooja_section'), content);
      showSnackbar('Pooja section saved successfully', 'success');
    } catch (error) {
      console.error('Error saving content:', error);
      showSnackbar('Failed to save content', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleTileChange = (index: number, field: keyof PoojaTile, value: string) => {
    const updatedTiles = [...content.tiles];
    updatedTiles[index] = { ...updatedTiles[index], [field]: value };
    setContent({ ...content, tiles: updatedTiles });
  };

  const showSnackbar = (message: string, severity: 'success' | 'error') => {
    setSnackbar({ open: true, message, severity });
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
        Pooja Section Management
      </Typography>

      {/* Main Section Content */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#d4af37' }}>
          Main Section Details
        </Typography>
        
        <TextField
          fullWidth
          label="Subtitle (Overline)"
          value={content.subtitle}
          onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
          sx={{ mb: 2 }}
          placeholder="POOJA CENTRE"
        />

        <TextField
          fullWidth
          label="Main Title"
          value={content.title}
          onChange={(e) => setContent({ ...content, title: e.target.value })}
          sx={{ mb: 2 }}
          placeholder="Plan Your Devotional Day"
        />

        <TextField
          fullWidth
          label="Description"
          value={content.description}
          onChange={(e) => setContent({ ...content, description: e.target.value })}
          multiline
          rows={3}
          sx={{ mb: 2 }}
          placeholder="Browse pooja categories and book your offerings online..."
        />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Primary Button Text"
              value={content.buttonText}
              onChange={(e) => setContent({ ...content, buttonText: e.target.value })}
              placeholder="Book a Pooja"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Primary Button Link"
              value={content.buttonLink}
              onChange={(e) => setContent({ ...content, buttonLink: e.target.value })}
              placeholder="/poojas/booking"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Secondary Button Text"
              value={content.secondButtonText}
              onChange={(e) => setContent({ ...content, secondButtonText: e.target.value })}
              placeholder="View Vazhipads"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Secondary Button Link"
              value={content.secondButtonLink}
              onChange={(e) => setContent({ ...content, secondButtonLink: e.target.value })}
              placeholder="/poojas/vazhipad"
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Pooja Tiles */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#d4af37' }}>
        Pooja Category Tiles (4 Tiles)
      </Typography>
      
      <Grid container spacing={3}>
        {content.tiles.map((tile, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper sx={{ p: 3, border: '2px solid #e0e0e0' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: '#666' }}>
                Tile {index + 1}
              </Typography>
              
              <TextField
                fullWidth
                label="Title"
                value={tile.title}
                onChange={(e) => handleTileChange(index, 'title', e.target.value)}
                sx={{ mb: 2 }}
                placeholder="Daily Poojas"
              />

              <TextField
                fullWidth
                label="Description"
                value={tile.description}
                onChange={(e) => handleTileChange(index, 'description', e.target.value)}
                multiline
                rows={2}
                sx={{ mb: 2 }}
                placeholder="All nithya sevas performed every day..."
              />

              <TextField
                fullWidth
                label="Link"
                value={tile.link}
                onChange={(e) => handleTileChange(index, 'link', e.target.value)}
                placeholder="/poojas/daily"
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
          onClick={handleSave}
          disabled={loading}
          sx={{ bgcolor: '#d4af37', color: '#000', '&:hover': { bgcolor: '#e5c158' } }}
        >
          {loading ? 'Saving...' : 'Save All Changes'}
        </Button>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PoojaSectionManager;
