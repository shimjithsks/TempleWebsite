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

interface DonationSection {
  subtitle: string;
  title: string;
  description: string;
  tiles: DonationTile[];
}

interface DonationTile {
  title: string;
  description: string;
  link: string;
  tag: string;
}

const DonationSectionManager = () => {
  const [content, setContent] = useState<DonationSection>({
    subtitle: 'DONATION OVERVIEW',
    title: 'Support Temple Causes',
    description: 'Your contributions help maintain our sacred traditions and serve the community',
    tiles: [
      {
        title: 'Online Donation',
        description: 'Quick, secure contributions with instant receipt.',
        link: '/donate/online',
        tag: 'Popular',
      },
      {
        title: 'Annadanam',
        description: 'Join daily food offering and community welfare.',
        link: '/donate/annadanam',
        tag: 'Daily',
      },
      {
        title: 'Renovation',
        description: 'Help preserve and improve temple infrastructure.',
        link: '/donate/renovation',
        tag: 'Urgent',
      },
      {
        title: 'Festival Support',
        description: 'Sponsor arrangements for seasonal utsavams.',
        link: '/donate/festival',
        tag: 'Seasonal',
      },
    ],
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const docRef = doc(db, 'homepage_content', 'donation_section');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setContent(docSnap.data() as DonationSection);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      showSnackbar('Failed to load content', 'error');
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, 'homepage_content', 'donation_section'), content);
      showSnackbar('Donation section saved successfully', 'success');
    } catch (error) {
      console.error('Error saving content:', error);
      showSnackbar('Failed to save content', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleTileChange = (index: number, field: keyof DonationTile, value: string) => {
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
        Donation Section Management
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
          placeholder="DONATION OVERVIEW"
        />

        <TextField
          fullWidth
          label="Main Title"
          value={content.title}
          onChange={(e) => setContent({ ...content, title: e.target.value })}
          sx={{ mb: 2 }}
          placeholder="Support Temple Causes"
        />

        <TextField
          fullWidth
          label="Description"
          value={content.description}
          onChange={(e) => setContent({ ...content, description: e.target.value })}
          multiline
          rows={3}
          sx={{ mb: 2 }}
          placeholder="Your contributions help maintain our sacred traditions..."
        />
      </Paper>

      {/* Donation Tiles */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#d4af37' }}>
        Donation Category Tiles (4 Tiles)
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
                placeholder="Online Donation"
              />

              <TextField
                fullWidth
                label="Description"
                value={tile.description}
                onChange={(e) => handleTileChange(index, 'description', e.target.value)}
                multiline
                rows={2}
                sx={{ mb: 2 }}
                placeholder="Quick, secure contributions with instant receipt."
              />

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Tag Label"
                    value={tile.tag}
                    onChange={(e) => handleTileChange(index, 'tag', e.target.value)}
                    placeholder="Popular"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Link"
                    value={tile.link}
                    onChange={(e) => handleTileChange(index, 'link', e.target.value)}
                    placeholder="/donate/online"
                  />
                </Grid>
              </Grid>
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

export default DonationSectionManager;
