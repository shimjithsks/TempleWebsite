/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  Snackbar,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

interface VazhipadItem {
  id: string;
  name: string;
  category: string;
  description: string;
  dakshina: string;
  benefits: string;
  availability: string;
}

interface VazhipadData {
  title: string;
  subtitle: string;
  description: string;
  items: VazhipadItem[];
}

export default function VazhipadListManager() {
  const [data, setData] = useState<VazhipadData>({
    title: 'Vazhipad List',
    subtitle: 'Complete Vazhipad Catalogue',
    description: 'Complete vazhipad catalogue with descriptions and dakshina.',
    items: [
      {
        id: '1',
        name: 'Nivedyam',
        category: 'Daily Offering',
        description: 'Daily food offering to the deity',
        dakshina: '₹51',
        benefits: 'Prosperity and abundance',
        availability: 'Daily',
      },
    ],
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const docRef = doc(db, 'pooja_pages', 'vazhipad_list');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data() as VazhipadData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, 'pooja_pages', 'vazhipad_list'), data);
      setSnackbar({ open: true, message: 'Vazhipad list saved successfully!', severity: 'success' });
    } catch (error) {
      console.error('Error saving data:', error);
      setSnackbar({ open: true, message: 'Failed to save data', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleHeaderChange = (field: keyof Omit<VazhipadData, 'items'>, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleItemChange = (index: number, field: keyof VazhipadItem, value: string) => {
    const updatedItems = [...data.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setData(prev => ({ ...prev, items: updatedItems }));
  };

  const addItem = () => {
    const newItem: VazhipadItem = {
      id: Date.now().toString(),
      name: '',
      category: '',
      description: '',
      dakshina: '',
      benefits: '',
      availability: '',
    };
    setData(prev => ({ ...prev, items: [...prev.items, newItem] }));
  };

  const deleteItem = (index: number) => {
    setData(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#d4af37' }}>
          Vazhipad List Management
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Page Title"
              value={data.title}
              onChange={(e) => handleHeaderChange('title', e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Subtitle"
              value={data.subtitle}
              onChange={(e) => handleHeaderChange('subtitle', e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Description"
              value={data.description}
              onChange={(e) => handleHeaderChange('description', e.target.value)}
            />
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Vazhipad Items
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={addItem}
          sx={{ bgcolor: '#d4af37', color: '#000', '&:hover': { bgcolor: '#e5c158' } }}
        >
          Add Vazhipad
        </Button>
      </Box>

      {data.items.map((item, index) => (
        <Card key={item.id} sx={{ mb: 2, border: '2px solid #d4af37' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Vazhipad Item #{index + 1}
              </Typography>
              <IconButton onClick={() => deleteItem(index)} color="error">
                <DeleteIcon />
              </IconButton>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Vazhipad Name"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Category"
                  value={item.category}
                  onChange={(e) => handleItemChange(index, 'category', e.target.value)}
                  placeholder="e.g., Daily Offering, Special Seva"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Dakshina/Price"
                  value={item.dakshina}
                  onChange={(e) => handleItemChange(index, 'dakshina', e.target.value)}
                  placeholder="e.g., ₹51"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Availability"
                  value={item.availability}
                  onChange={(e) => handleItemChange(index, 'availability', e.target.value)}
                  placeholder="e.g., Daily, Fridays only, On request"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Description"
                  value={item.description}
                  onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Benefits"
                  value={item.benefits}
                  onChange={(e) => handleItemChange(index, 'benefits', e.target.value)}
                  placeholder="Spiritual benefits and significance"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}

      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleSave}
          disabled={loading}
          sx={{
            bgcolor: '#d4af37',
            color: '#000',
            fontWeight: 700,
            px: 4,
            '&:hover': { bgcolor: '#e5c158' },
          }}
        >
          {loading ? 'Saving...' : 'Save All Changes'}
        </Button>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
