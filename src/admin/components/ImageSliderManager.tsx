import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Grid,
  IconButton,
  Alert,
  Snackbar,
  CircularProgress,
  LinearProgress
} from '@mui/material';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface SliderImage {
  id: string;
  imageUrl: string;
  title?: string;
  description?: string;
  order: number;
}

const ImageSliderManager = () => {
  const [images, setImages] = useState<SliderImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'slider_images'));
      const fetchedImages: SliderImage[] = [];
      querySnapshot.forEach((doc) => {
        fetchedImages.push({ id: doc.id, ...doc.data() } as SliderImage);
      });
      
      const sortedImages = fetchedImages.sort((a, b) => a.order - b.order);
      
      // Ensure we always have 5 slots
      const imageSlots: SliderImage[] = [];
      for (let i = 0; i < 5; i++) {
        const existingImage = sortedImages.find(img => img.order === i);
        if (existingImage) {
          imageSlots.push(existingImage);
        } else {
          imageSlots.push({
            id: `slot_${i}`,
            imageUrl: '',
            title: '',
            description: '',
            order: i
          });
        }
      }
      
      setImages(imageSlots);
    } catch (error) {
      console.error('Error fetching images:', error);
      showSnackbar('Failed to load images', 'error');
      
      // Initialize with 5 empty slots on error
      const emptySlots: SliderImage[] = [];
      for (let i = 0; i < 5; i++) {
        emptySlots.push({
          id: `slot_${i}`,
          imageUrl: '',
          title: '',
          description: '',
          order: i
        });
      }
      setImages(emptySlots);
    }
  };

  // const handleAddImage = () => {
  //   const newImage: SliderImage = {
  //     id: `temp_${Date.now()}`,
  //     imageUrl: '',
  //     title: '',
  //     description: '',
  //     order: images.length
  //   };
  //   setImages([...images, newImage]);
  // };

  const handleUpdateImage = (id: string, field: keyof SliderImage, value: string | number) => {
    setImages(images.map(img => 
      img.id === id ? { ...img, [field]: value } : img
    ));
  };

  const handleSaveImage = async (image: SliderImage) => {
    if (!image.imageUrl) {
      showSnackbar('Please add an image first', 'error');
      return;
    }
    
    setLoading(true);
    try {
      const docId = image.id.startsWith('slot_') ? `slider_${image.order}_${Date.now()}` : image.id;
      await setDoc(doc(db, 'slider_images', docId), {
        imageUrl: image.imageUrl,
        title: image.title || '',
        description: image.description || '',
        order: image.order
      });
      showSnackbar(`Slide ${image.order + 1} saved successfully`, 'success');
      await fetchImages();
    } catch (error) {
      console.error('Error saving image:', error);
      showSnackbar('Failed to save image', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteImage = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;
    
    setLoading(true);
    try {
      await deleteDoc(doc(db, 'slider_images', id));
      showSnackbar('Image deleted successfully', 'success');
      await fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
      showSnackbar('Failed to delete image', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = async (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showSnackbar('Please select an image file', 'error');
      return;
    }

    if (file.size > 1024 * 1024) {
      showSnackbar('Image size must be less than 1MB. Please compress it.', 'error');
      return;
    }

    setUploading(id);
    setUploadProgress(0);

    try {
      const reader = new FileReader();

      reader.onloadstart = () => {
        setUploadProgress(10);
      };

      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 90;
          setUploadProgress(progress);
        }
      };

      reader.onload = async (e) => {
        try {
          setUploadProgress(90);
          const base64String = e.target?.result as string;
          
          handleUpdateImage(id, 'imageUrl', base64String);
          setUploadProgress(100);

          setTimeout(() => {
            setUploading(null);
            setUploadProgress(0);
            showSnackbar('Image uploaded successfully. Click "Save" to store it.', 'success');
          }, 500);
        } catch (error) {
          console.error('Error processing image:', error);
          showSnackbar('Failed to process image', 'error');
          setUploading(null);
          setUploadProgress(0);
        }
      };

      reader.onerror = () => {
        console.error('Error reading file');
        showSnackbar('Failed to read image file', 'error');
        setUploading(null);
        setUploadProgress(0);
      };

      reader.readAsDataURL(file);
    } catch (error: any) {
      console.error('Error uploading image:', error);
      showSnackbar('Failed to upload image: ' + (error.message || 'Unknown error'), 'error');
      setUploading(null);
      setUploadProgress(0);
    }
  };

  const showSnackbar = (message: string, severity: 'success' | 'error') => {
    setSnackbar({ open: true, message, severity });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Image Slider Management
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Upload exactly 5 images for the homepage slider (Slide 1 will be the main welcome screen)
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} key={image.id}>
            <Paper sx={{ p: 3, border: image.order === 0 ? '3px solid #d4af37' : '2px solid #ddd', position: 'relative' }}>
              <Box sx={{ position: 'absolute', top: 16, right: 16, bgcolor: image.order === 0 ? '#d4af37' : '#666', color: '#fff', px: 2, py: 0.5, borderRadius: 1, fontWeight: 700 }}>
                Slide {image.order + 1} {image.order === 0 && '(Main)'}
              </Box>
              
              <Grid container spacing={2} alignItems="flex-start">
                <Grid item xs={12} md={6}>
                  {/* Image Preview Section */}
                  <Paper sx={{ p: 2, bgcolor: '#f9f9f9', border: '2px dashed #ccc', minHeight: 250 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5, color: '#666' }}>
                      Image Preview
                    </Typography>
                    {image.imageUrl ? (
                      <Box
                        component="img"
                        src={
                          image.imageUrl.startsWith('data:') 
                            ? image.imageUrl 
                            : image.imageUrl.startsWith('http') 
                              ? image.imageUrl 
                              : `${process.env.PUBLIC_URL}${image.imageUrl}`
                        }
                        alt={`Slide ${image.order + 1}`}
                        sx={{ 
                          width: '100%', 
                          height: 200, 
                          objectFit: 'cover', 
                          borderRadius: 2,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                        onError={(e: any) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <Box sx={{ 
                        width: '100%', 
                        height: 200, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        bgcolor: '#e0e0e0',
                        borderRadius: 2,
                        color: '#999'
                      }}>
                        <Typography variant="body2">No image uploaded</Typography>
                      </Box>
                    )}
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  {/* Upload Section */}
                  <Paper sx={{ p: 2, bgcolor: '#f5f5f5', border: '2px dashed #d4af37', mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                      Upload Image
                    </Typography>
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={uploading === image.id ? <CircularProgress size={20} color="inherit" /> : <CloudUploadIcon />}
                      disabled={uploading === image.id}
                      fullWidth
                      sx={{ 
                        bgcolor: '#d4af37', 
                        color: '#000',
                        '&:hover': { bgcolor: '#e5c158' },
                        '&:disabled': { bgcolor: '#ccc' }
                      }}
                    >
                      {uploading === image.id ? `Uploading ${Math.round(uploadProgress)}%` : 'Choose & Upload Image'}
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => handleFileSelect(image.id, e)}
                        disabled={uploading === image.id}
                      />
                    </Button>
                    {uploading === image.id && (
                      <Box sx={{ mt: 2 }}>
                        <LinearProgress 
                          variant="determinate" 
                          value={uploadProgress} 
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            bgcolor: 'rgba(212,175,55,0.2)',
                            '& .MuiLinearProgress-bar': {
                              bgcolor: '#d4af37',
                              borderRadius: 3
                            }
                          }}
                        />
                        <Typography variant="caption" sx={{ display: 'block', mt: 0.5, textAlign: 'center', fontWeight: 600 }}>
                          {Math.round(uploadProgress)}% uploaded
                        </Typography>
                      </Box>
                    )}
                    <Typography variant="caption" sx={{ display: 'block', mt: 1.5, color: 'text.secondary' }}>
                      Max size: 1MB (JPG, PNG, GIF, WebP)
                    </Typography>
                  </Paper>
                  
                  {/* Title & Description */}
                  <TextField
                    fullWidth
                    label="Title"
                    value={image.title || ''}
                    onChange={(e) => handleUpdateImage(image.id, 'title', e.target.value)}
                    sx={{ mb: 2 }}
                    placeholder={image.order === 0 ? "Welcome to Temple" : "Slide title"}
                  />
                  <TextField
                    fullWidth
                    label={image.order === 0 ? "Subtitle" : "Description"}
                    value={image.description || ''}
                    onChange={(e) => handleUpdateImage(image.id, 'description', e.target.value)}
                    placeholder={image.order === 0 ? "Preserving tradition. Serving devotion." : "Optional description"}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                    <Button
                      variant="contained"
                      startIcon={<SaveIcon />}
                      onClick={() => handleSaveImage(image)}
                      disabled={loading || !image.imageUrl}
                      sx={{ bgcolor: '#66bb6a', '&:hover': { bgcolor: '#4caf50' } }}
                    >
                      Save Slide {image.order + 1}
                    </Button>
                    {!image.id.startsWith('slot_') && image.imageUrl && (
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteImage(image.id)}
                        disabled={loading}
                        sx={{ ml: 1 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

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

export default ImageSliderManager;