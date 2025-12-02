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
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress
} from '@mui/material';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import SaveIcon from '@mui/icons-material/Save';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface GallerySection {
  subtitle: string;
  title: string;
  description: string;
  tiles: GalleryTile[];
}

interface GalleryTile {
  title: string;
  link: string;
  chip: string;
  type: 'photo' | 'video';
  imageUrl?: string;
  youtubeId?: string;
}

const GallerySectionManager = () => {
  const [content, setContent] = useState<GallerySection>({
    subtitle: 'GALLERY OVERVIEW',
    title: 'Explore Photos & Videos',
    description: 'A glimpse of temple moments — festivals, premises, events and serene views.',
    tiles: [
      {
        title: 'Photos',
        link: '/gallery/photos',
        chip: 'Curated',
        type: 'photo',
        imageUrl: '/assets/header_god_image.png',
      },
      {
        title: 'Videos',
        link: '/gallery/videos',
        chip: 'Highlights',
        type: 'video',
        youtubeId: 'bFHz3KocQc0',
      },
      {
        title: 'Events',
        link: '/gallery/events',
        chip: 'Recent',
        type: 'photo',
        imageUrl: '/assets/slide_3.png',
      },
      {
        title: 'Temple Tour',
        link: '/gallery/videos',
        chip: 'Tour',
        type: 'video',
        youtubeId: 'bFHz3KocQc0',
      },
    ],
  });
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ [key: number]: number }>({});
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const docRef = doc(db, 'homepage_content', 'gallery_section');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setContent(docSnap.data() as GallerySection);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      showSnackbar('Failed to load content', 'error');
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, 'homepage_content', 'gallery_section'), content);
      showSnackbar('Gallery section saved successfully', 'success');
    } catch (error) {
      console.error('Error saving content:', error);
      showSnackbar('Failed to save content', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleTileChange = (index: number, field: keyof GalleryTile, value: string) => {
    const updatedTiles = [...content.tiles];
    updatedTiles[index] = { ...updatedTiles[index], [field]: value };
    setContent({ ...content, tiles: updatedTiles });
  };

  const handleImageUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size (1MB = 1048576 bytes)
    if (file.size > 1048576) {
      showSnackbar('Image size must be less than 1MB', 'error');
      return;
    }

    const reader = new FileReader();
    
    reader.onloadstart = () => {
      setUploadProgress({ ...uploadProgress, [index]: 0 });
    };

    reader.onprogress = (e) => {
      if (e.lengthComputable) {
        const progress = Math.round((e.loaded / e.total) * 100);
        setUploadProgress({ ...uploadProgress, [index]: progress });
      }
    };

    reader.onload = () => {
      const base64String = reader.result as string;
      handleTileChange(index, 'imageUrl', base64String);
      setUploadProgress({ ...uploadProgress, [index]: 100 });
      showSnackbar('Image uploaded successfully', 'success');
      
      // Clear progress after 2 seconds
      setTimeout(() => {
        setUploadProgress((prev) => {
          const newProgress = { ...prev };
          delete newProgress[index];
          return newProgress;
        });
      }, 2000);
    };

    reader.onerror = () => {
      showSnackbar('Failed to upload image', 'error');
      setUploadProgress((prev) => {
        const newProgress = { ...prev };
        delete newProgress[index];
        return newProgress;
      });
    };

    reader.readAsDataURL(file);
  };

  const showSnackbar = (message: string, severity: 'success' | 'error') => {
    setSnackbar({ open: true, message, severity });
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
        Gallery Section Management
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
          placeholder="GALLERY OVERVIEW"
        />

        <TextField
          fullWidth
          label="Main Title"
          value={content.title}
          onChange={(e) => setContent({ ...content, title: e.target.value })}
          sx={{ mb: 2 }}
          placeholder="Explore Photos & Videos"
        />

        <TextField
          fullWidth
          label="Description"
          value={content.description}
          onChange={(e) => setContent({ ...content, description: e.target.value })}
          multiline
          rows={3}
          sx={{ mb: 2 }}
          placeholder="A glimpse of temple moments — festivals, premises, events..."
        />
      </Paper>

      {/* Gallery Tiles */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#d4af37' }}>
        Gallery Preview Tiles (4 Tiles)
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
                placeholder="Photos"
              />

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Type</InputLabel>
                <Select
                  value={tile.type}
                  label="Type"
                  onChange={(e) => handleTileChange(index, 'type', e.target.value as string)}
                >
                  <MenuItem value="photo">Photo</MenuItem>
                  <MenuItem value="video">Video (YouTube)</MenuItem>
                </Select>
              </FormControl>

              {tile.type === 'photo' ? (
                <Box sx={{ mb: 2 }}>
                  <TextField
                    fullWidth
                    label="Image URL or Path"
                    value={tile.imageUrl || ''}
                    onChange={(e) => handleTileChange(index, 'imageUrl', e.target.value)}
                    sx={{ mb: 2 }}
                    placeholder="/assets/header_god_image.png or base64"
                    helperText="Enter the path or upload an image (max 1MB)"
                  />
                  
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<CloudUploadIcon />}
                    fullWidth
                    sx={{ 
                      mb: 1,
                      borderColor: '#d4af37', 
                      color: '#d4af37',
                      '&:hover': { 
                        borderColor: '#e5c158',
                        bgcolor: 'rgba(212, 175, 55, 0.04)'
                      }
                    }}
                  >
                    Upload Image from Device
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) => handleImageUpload(index, e)}
                    />
                  </Button>

                  {uploadProgress[index] !== undefined && (
                    <Box sx={{ mt: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography variant="caption" sx={{ color: '#666' }}>
                          Uploading...
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#d4af37', fontWeight: 700 }}>
                          {uploadProgress[index]}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={uploadProgress[index]} 
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          bgcolor: 'rgba(212, 175, 55, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: '#d4af37',
                            borderRadius: 3,
                          }
                        }}
                      />
                    </Box>
                  )}

                  {tile.imageUrl && (
                    <Box sx={{ mt: 2, p: 2, border: '2px dashed #d4af37', borderRadius: 2, textAlign: 'center' }}>
                      <Typography variant="caption" sx={{ color: '#666', display: 'block', mb: 1 }}>
                        Image Preview
                      </Typography>
                      <img 
                        src={tile.imageUrl} 
                        alt="Preview" 
                        style={{ 
                          maxWidth: '100%', 
                          maxHeight: '200px', 
                          objectFit: 'contain',
                          borderRadius: '8px'
                        }} 
                      />
                    </Box>
                  )}
                </Box>
              ) : (
                <TextField
                  fullWidth
                  label="YouTube Video ID"
                  value={tile.youtubeId || ''}
                  onChange={(e) => handleTileChange(index, 'youtubeId', e.target.value)}
                  sx={{ mb: 2 }}
                  placeholder="bFHz3KocQc0"
                  helperText="Enter only the video ID from YouTube URL"
                />
              )}

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Chip Label"
                    value={tile.chip}
                    onChange={(e) => handleTileChange(index, 'chip', e.target.value)}
                    placeholder="Curated"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Link"
                    value={tile.link}
                    onChange={(e) => handleTileChange(index, 'link', e.target.value)}
                    placeholder="/gallery/photos"
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

export default GallerySectionManager;
