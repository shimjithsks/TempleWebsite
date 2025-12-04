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
  Divider,
} from '@mui/material';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

interface DailyPooja {
  id: string;
  name: string;
  time: string;
  description: string;
  offerings: string;
  duration: string;
}

interface DailyPoojaData {
  title: string;
  subtitle: string;
  description: string;
  poojas: DailyPooja[];
}

export default function DailyPoojaManager() {
  const [data, setData] = useState<DailyPoojaData>({
    title: 'Daily Poojas',
    subtitle: 'Nithya Sevas',
    description: 'All nithya sevas performed every day at the temple.',
    poojas: [
      {
        id: '1',
        name: 'Morning Pooja',
        time: '6:00 AM - 7:00 AM',
        description: 'Daily morning rituals and offerings',
        offerings: 'Archana, Abhishekam, Nivedyam',
        duration: '1 hour',
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
      const docRef = doc(db, 'pooja_pages', 'daily_poojas');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data() as DailyPoojaData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, 'pooja_pages', 'daily_poojas'), data);
      setSnackbar({ open: true, message: 'Daily poojas saved successfully!', severity: 'success' });
    } catch (error) {
      console.error('Error saving data:', error);
      setSnackbar({ open: true, message: 'Failed to save data', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleHeaderChange = (field: keyof Omit<DailyPoojaData, 'poojas'>, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handlePoojaChange = (index: number, field: keyof DailyPooja, value: string) => {
    const updatedPoojas = [...data.poojas];
    updatedPoojas[index] = { ...updatedPoojas[index], [field]: value };
    setData(prev => ({ ...prev, poojas: updatedPoojas }));
  };

  const addPooja = () => {
    const newPooja: DailyPooja = {
      id: Date.now().toString(),
      name: '',
      time: '',
      description: '',
      offerings: '',
      duration: '',
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
          Daily Poojas Management
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
          Pooja Schedule
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={addPooja}
          sx={{ bgcolor: '#d4af37', color: '#000', '&:hover': { bgcolor: '#e5c158' } }}
        >
          Add Pooja
        </Button>
      </Box>

      {data.poojas.map((pooja, index) => (
        <Card key={pooja.id} sx={{ mb: 2, border: '2px solid #d4af37' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Pooja #{index + 1}
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
                  label="Time Slot"
                  value={pooja.time}
                  onChange={(e) => handlePoojaChange(index, 'time', e.target.value)}
                  placeholder="e.g., 6:00 AM - 7:00 AM"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Duration"
                  value={pooja.duration}
                  onChange={(e) => handlePoojaChange(index, 'duration', e.target.value)}
                  placeholder="e.g., 1 hour"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Offerings"
                  value={pooja.offerings}
                  onChange={(e) => handlePoojaChange(index, 'offerings', e.target.value)}
                  placeholder="e.g., Archana, Abhishekam"
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
