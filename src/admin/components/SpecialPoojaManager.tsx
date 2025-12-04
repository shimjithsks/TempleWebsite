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

interface SpecialPooja {
  id: string;
  name: string;
  category: string;
  occasion: string;
  description: string;
  duration: string;
  dakshina: string;
  requirements: string;
}

interface SpecialPoojaData {
  title: string;
  subtitle: string;
  description: string;
  poojas: SpecialPooja[];
}

export default function SpecialPoojaManager() {
  const [data, setData] = useState<SpecialPoojaData>({
    title: 'Special Poojas',
    subtitle: 'Vishesh Sevas',
    description: 'Unique sevas for specific occasions and personal offerings.',
    poojas: [
      {
        id: '1',
        name: 'Sahasranama Archana',
        category: 'Personal',
        occasion: 'Birthday, Anniversary',
        description: 'Recitation of 1000 names with archana',
        duration: '1.5 hours',
        dakshina: '₹501',
        requirements: 'Name, Nakshatra, Date of Birth',
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
      const docRef = doc(db, 'pooja_pages', 'special_poojas');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data() as SpecialPoojaData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, 'pooja_pages', 'special_poojas'), data);
      setSnackbar({ open: true, message: 'Special poojas saved successfully!', severity: 'success' });
    } catch (error) {
      console.error('Error saving data:', error);
      setSnackbar({ open: true, message: 'Failed to save data', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleHeaderChange = (field: keyof Omit<SpecialPoojaData, 'poojas'>, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handlePoojaChange = (index: number, field: keyof SpecialPooja, value: string) => {
    const updatedPoojas = [...data.poojas];
    updatedPoojas[index] = { ...updatedPoojas[index], [field]: value };
    setData(prev => ({ ...prev, poojas: updatedPoojas }));
  };

  const addPooja = () => {
    const newPooja: SpecialPooja = {
      id: Date.now().toString(),
      name: '',
      category: '',
      occasion: '',
      description: '',
      duration: '',
      dakshina: '',
      requirements: '',
    };
    setData(prev => ({ ...prev, poojas: [...prev.poojas, newPooja] }));
  };

  const deletePooja = (index: number) => {
    setData(prev => ({
      ...prev,
      poojas: prev.poojas.filter((_, i) => i !== index),
    }));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#d4af37' }}>
          Special Poojas Management
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
          Special Pooja List
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={addPooja}
          sx={{ bgcolor: '#d4af37', color: '#000', '&:hover': { bgcolor: '#e5c158' } }}
        >
          Add Special Pooja
        </Button>
      </Box>

      {data.poojas.map((pooja, index) => (
        <Card key={pooja.id} sx={{ mb: 2, border: '2px solid #d4af37' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Special Pooja #{index + 1}
              </Typography>
              <IconButton onClick={() => deletePooja(index)} color="error">
                <DeleteIcon />
              </IconButton>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Pooja Name"
                  value={pooja.name}
                  onChange={(e) => handlePoojaChange(index, 'name', e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Category"
                  value={pooja.category}
                  onChange={(e) => handlePoojaChange(index, 'category', e.target.value)}
                  placeholder="e.g., Personal, Family, Community"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Suitable Occasion"
                  value={pooja.occasion}
                  onChange={(e) => handlePoojaChange(index, 'occasion', e.target.value)}
                  placeholder="e.g., Birthday, Wedding Anniversary"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Duration"
                  value={pooja.duration}
                  onChange={(e) => handlePoojaChange(index, 'duration', e.target.value)}
                  placeholder="e.g., 1.5 hours"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Dakshina/Price"
                  value={pooja.dakshina}
                  onChange={(e) => handlePoojaChange(index, 'dakshina', e.target.value)}
                  placeholder="e.g., ₹501"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Requirements"
                  value={pooja.requirements}
                  onChange={(e) => handlePoojaChange(index, 'requirements', e.target.value)}
                  placeholder="e.g., Name, Nakshatra, Date"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Description"
                  value={pooja.description}
                  onChange={(e) => handlePoojaChange(index, 'description', e.target.value)}
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
