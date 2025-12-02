import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Alert,
  Snackbar,
  CircularProgress,
  Grid,
  LinearProgress
} from '@mui/material';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import SaveIcon from '@mui/icons-material/Save';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface AboutContent {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const AboutSectionManager = () => {
  const [content, setContent] = useState<AboutContent>({
    title: '',
    subtitle: '',
    description: '',
    imageUrl: ''
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  useEffect(() => {
    fetchContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchContent = async () => {
    try {
      const docRef = doc(db, 'homepage_content', 'about_section');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setContent(docSnap.data() as AboutContent);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      showSnackbar('Failed to load content', 'error');
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, 'homepage_content', 'about_section'), content);
      showSnackbar('Content saved successfully', 'success');
    } catch (error) {
      console.error('Error saving content:', error);
      showSnackbar('Failed to save content', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
      } else {
        showSnackbar('Please select an image file', 'error');
      }
    }
  };

  const handleUploadImage = async () => {
    if (!selectedFile) {
      showSnackbar('Please select an image first', 'error');
      return;
    }

    // Check file size (limit to 1MB for base64 storage)
    if (selectedFile.size > 1024 * 1024) {
      showSnackbar('Image size must be less than 1MB. Please use a smaller image or compress it.', 'error');
      return;
    }

    setUploading(true);
    setUploadProgress(0);
    
    try {
      // Convert image to base64
      const reader = new FileReader();
      
      reader.onloadstart = () => {
        setUploadProgress(10);
      };
      
      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 90; // Reserve last 10% for saving
          setUploadProgress(progress);
        }
      };
      
      reader.onload = async (e) => {
        try {
          setUploadProgress(90);
          const base64String = e.target?.result as string;
          
          // Update the content with the base64 image
          setContent({ ...content, imageUrl: base64String });
          setUploadProgress(100);
          
          setTimeout(() => {
            setSelectedFile(null);
            setUploadProgress(0);
            setUploading(false);
            showSnackbar('Image uploaded successfully. Don\'t forget to click "Save Changes"!', 'success');
          }, 500);
        } catch (error) {
          console.error('Error processing image:', error);
          showSnackbar('Failed to process image', 'error');
          setUploading(false);
          setUploadProgress(0);
        }
      };
      
      reader.onerror = () => {
        console.error('Error reading file');
        showSnackbar('Failed to read image file', 'error');
        setUploading(false);
        setUploadProgress(0);
      };
      
      // Read the file as base64
      reader.readAsDataURL(selectedFile);
      
    } catch (error: any) {
      console.error('Error uploading image:', error);
      showSnackbar('Failed to upload image: ' + (error.message || 'Unknown error'), 'error');
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const showSnackbar = (message: string, severity: 'success' | 'error') => {
    setSnackbar({ open: true, message, severity });
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
        About Section Management
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <TextField
          fullWidth
          label="Title"
          value={content.title}
          onChange={(e) => setContent({ ...content, title: e.target.value })}
          sx={{ mb: 3 }}
          placeholder="e.g., Welcome to Muchukunnu Temple"
        />

        <TextField
          fullWidth
          label="Subtitle"
          value={content.subtitle}
          onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
          sx={{ mb: 3 }}
          placeholder="e.g., About Temple"
        />

        <TextField
          fullWidth
          label="Description"
          value={content.description}
          onChange={(e) => setContent({ ...content, description: e.target.value })}
          multiline
          rows={6}
          sx={{ mb: 3 }}
          placeholder="Enter the temple description..."
        />

        <TextField
          fullWidth
          label="Image URL"
          value={content.imageUrl}
          onChange={(e) => setContent({ ...content, imageUrl: e.target.value })}
          sx={{ mb: 3 }}
          placeholder="/assets/header_god_image.png or https://..."
          helperText="Enter the path to the temple image or upload from your device below"
        />

        <Paper sx={{ p: 3, mb: 3, bgcolor: '#f5f5f5', border: '2px dashed #d4af37' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Upload Image from Device
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ 
                  py: 2,
                  borderColor: '#d4af37',
                  color: '#d4af37',
                  '&:hover': { borderColor: '#e5c158', bgcolor: 'rgba(212,175,55,0.1)' }
                }}
              >
                {selectedFile ? selectedFile.name : 'Choose Image'}
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                variant="contained"
                startIcon={uploading ? <CircularProgress size={20} color="inherit" /> : <CloudUploadIcon />}
                onClick={handleUploadImage}
                disabled={!selectedFile || uploading}
                fullWidth
                sx={{ 
                  py: 2,
                  bgcolor: '#d4af37', 
                  color: '#000',
                  '&:hover': { bgcolor: '#e5c158' },
                  '&:disabled': { bgcolor: '#ccc' }
                }}
              >
                {uploading ? `Uploading ${Math.round(uploadProgress)}%` : 'Upload Image'}
              </Button>
            </Grid>
          </Grid>
          
          {uploading && (
            <Box sx={{ mt: 2 }}>
              <LinearProgress 
                variant="determinate" 
                value={uploadProgress} 
                sx={{
                  height: 8,
                  borderRadius: 4,
                  bgcolor: 'rgba(212,175,55,0.2)',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: '#d4af37',
                    borderRadius: 4
                  }
                }}
              />
              <Typography variant="caption" sx={{ display: 'block', mt: 1, textAlign: 'center', fontWeight: 600 }}>
                {Math.round(uploadProgress)}% uploaded
              </Typography>
            </Box>
          )}
          
          <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'text.secondary' }}>
            Supported formats: JPG, PNG, GIF, WebP. Max size: 1MB (compress larger images)
          </Typography>
        </Paper>

        {content.imageUrl && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="caption" sx={{ mb: 1, display: 'block' }}>
              Preview:
            </Typography>
            <Box
              component="img"
              src={
                content.imageUrl.startsWith('data:') 
                  ? content.imageUrl 
                  : content.imageUrl.startsWith('http') 
                    ? content.imageUrl 
                    : `${process.env.PUBLIC_URL}${content.imageUrl}`
              }
              alt="Preview"
              sx={{ width: '100%', maxHeight: 300, objectFit: 'cover', borderRadius: 2 }}
              onError={(e: any) => {
                e.target.style.display = 'none';
              }}
            />
          </Box>
        )}

        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleSave}
          disabled={loading}
          sx={{ bgcolor: '#d4af37', color: '#000', '&:hover': { bgcolor: '#e5c158' } }}
        >
          Save Changes
        </Button>
      </Paper>

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

export default AboutSectionManager;