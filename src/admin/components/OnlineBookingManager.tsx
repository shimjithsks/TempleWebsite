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
  Switch,
  FormControlLabel,
  Divider,
  IconButton,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { poojas as defaultPoojas, Pooja } from '../../data/pooja-data';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

interface BookingSettings {
  enabled: boolean;
  title: string;
  subtitle: string;
  description: string;
  instructions: string;
  contactEmail: string;
  contactPhone: string;
  minAdvanceDays: number;
  maxAdvanceDays: number;
  termsAndConditions: string;
}

export default function OnlineBookingManager() {
  const [settings, setSettings] = useState<BookingSettings>({
    enabled: true,
    title: 'Online Pooja Booking',
    subtitle: 'Book Your Pooja',
    description: 'Schedule your pooja offerings conveniently through our online booking system.',
    instructions: 'Select your desired pooja, choose date and time, fill in devotee details, and proceed with payment.',
    contactEmail: 'info@muchukunnutemple.org',
    contactPhone: '+91 1234567890',
    minAdvanceDays: 2,
    maxAdvanceDays: 90,
    termsAndConditions: 'Please arrive 15 minutes before scheduled time. Cancellations must be made 24 hours in advance.',
  });
  const [poojaList, setPoojaList] = useState<Pooja[]>(defaultPoojas);
  const [editingPoojaPrices, setEditingPoojaPrices] = useState<{ [key: number]: number }>({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });
  
  // New Pooja Form State
  const [newPoojaForm, setNewPoojaForm] = useState({
    name: '',
    description: '',
    price: 0,
    deity: 'GENERAL' as 'BHAGAVATHY' | 'SIVA' | 'VISHNU' | 'GANAPATHY' | 'AYYAPPA' | 'GENERAL',
    image: '/assets/pooja-default.jpg'
  });

  useEffect(() => {
    fetchSettings();
    loadPoojas();
  }, []);

  const loadPoojas = async () => {
    try {
      const docRef = doc(db, 'pooja_data', 'main');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        const poojas = data.poojas || [];
        
        if (poojas.length > 0) {
          console.log('✅ Dashboard: Loaded poojas from Firebase:', poojas.length, 'items');
          setPoojaList(poojas);
        } else {
          console.log('⚠️ Dashboard: Empty poojas array, initializing with defaults');
          setPoojaList(defaultPoojas);
          await setDoc(docRef, { poojas: defaultPoojas });
        }
      } else {
        console.log('⚠️ Dashboard: No pooja document, creating with defaults');
        setPoojaList(defaultPoojas);
        await setDoc(docRef, { poojas: defaultPoojas });
      }
    } catch (error) {
      console.error('❌ Dashboard: Error loading poojas:', error);
      setPoojaList(defaultPoojas);
    }
  };

  const updatePoojaPrice = (poojaId: number, newPrice: number) => {
    setEditingPoojaPrices(prev => ({ ...prev, [poojaId]: newPrice }));
  };

  const savePoojaPrice = async (poojaId: number) => {
    const newPrice = editingPoojaPrices[poojaId];
    if (!newPrice && newPrice !== 0) return;

    try {
      const updatedPoojas = poojaList.map(pooja =>
        pooja.id === poojaId ? { ...pooja, price: newPrice } : pooja
      );

      const poojaBeingUpdated = poojaList.find(p => p.id === poojaId);
      console.log('💾 Saving price update:', { 
        poojaId, 
        poojaName: poojaBeingUpdated?.name,
        oldPrice: poojaBeingUpdated?.price,
        newPrice, 
        totalPoojas: updatedPoojas.length 
      });
      
      const docRef = doc(db, 'pooja_data', 'main');
      await setDoc(docRef, { poojas: updatedPoojas });
      console.log('✅ Successfully saved to Firebase pooja_data/main');
      
      setPoojaList(updatedPoojas);
      setEditingPoojaPrices(prev => {
        const newState = { ...prev };
        delete newState[poojaId];
        return newState;
      });
      
      setSnackbar({ open: true, message: `Price updated: ${poojaBeingUpdated?.name} - ₹${newPrice}`, severity: 'success' });
    } catch (error) {
      console.error('❌ Error updating pooja price:', error);
      setSnackbar({ open: true, message: 'Failed to update price', severity: 'error' });
    }
  };

  const deletePooja = async (poojaId: number) => {
    if (!window.confirm('Are you sure you want to delete this pooja?')) {
      return;
    }

    try {
      const updatedPoojas = poojaList.filter(pooja => pooja.id !== poojaId);
      const docRef = doc(db, 'pooja_data', 'main');
      await setDoc(docRef, { poojas: updatedPoojas });
      setPoojaList(updatedPoojas);
      setSnackbar({ open: true, message: 'Pooja deleted successfully!', severity: 'success' });
    } catch (error) {
      console.error('Error deleting pooja:', error);
      setSnackbar({ open: true, message: 'Failed to delete pooja', severity: 'error' });
    }
  };

  const addNewPooja = async () => {
    if (!newPoojaForm.name.trim()) {
      setSnackbar({ open: true, message: 'Please enter pooja name', severity: 'error' });
      return;
    }

    try {
      const newId = poojaList.length > 0 ? Math.max(...poojaList.map(p => p.id)) + 1 : 1;
      const newPooja: Pooja = {
        id: newId,
        name: newPoojaForm.name,
        description: newPoojaForm.description,
        price: newPoojaForm.price,
        deity: newPoojaForm.deity,
        image: newPoojaForm.image
      };

      const updatedPoojas = [...poojaList, newPooja];
      const docRef = doc(db, 'pooja_data', 'main');
      await setDoc(docRef, { poojas: updatedPoojas });
      setPoojaList(updatedPoojas);
      
      // Reset form
      setNewPoojaForm({
        name: '',
        description: '',
        price: 0,
        deity: 'GENERAL',
        image: '/assets/pooja-default.jpg'
      });
      
      setSnackbar({ open: true, message: 'New pooja added successfully!', severity: 'success' });
    } catch (error) {
      console.error('Error adding new pooja:', error);
      setSnackbar({ open: true, message: 'Failed to add new pooja', severity: 'error' });
    }
  };

  const fetchSettings = async () => {
    try {
      const docRef = doc(db, 'pooja_booking_settings', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data() as BookingSettings;
        setSettings({
          ...data,
        });
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, 'pooja_booking_settings', 'main'), settings);
      setSnackbar({ open: true, message: 'Settings saved successfully!', severity: 'success' });
    } catch (error) {
      console.error('Error saving settings:', error);
      setSnackbar({ open: true, message: 'Failed to save settings', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof BookingSettings, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: '#d4af37' }}>
          Online Booking Settings
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.enabled}
                  onChange={(e) => handleChange('enabled', e.target.checked)}
                  color="primary"
                />
              }
              label="Enable Online Booking"
            />
          </Grid>

          {/* POOJA LIST SECTION */}
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Pooja List & Pricing
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Poojas: {poojaList.length}
                </Typography>
              </Box>
            </Box>

            <TableContainer component={Paper} sx={{ border: '2px solid #d4af37', mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: '#d4af37' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, color: '#000', width: '50px' }}>#</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#000', minWidth: '300px' }}>Pooja Name</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#000', width: '120px' }}>Deity</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#000', width: '120px' }}>Current Price</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#000', width: '150px' }}>Edit Price</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#000', width: '100px' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {poojaList.map((pooja, index) => (
                    <TableRow key={pooja.id} sx={{ '&:hover': { bgcolor: '#f5f5f5' } }}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <Typography sx={{ fontWeight: 600, color: '#333' }}>
                          {pooja.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip 
                          label={pooja.deity} 
                          size="small" 
                          sx={{ bgcolor: '#e5c158', color: '#000', fontWeight: 600 }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ fontWeight: 700, color: '#d4af37', fontSize: '1.1rem' }}>
                          ₹{pooja.price}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <TextField
                          size="small"
                          type="number"
                          placeholder="Enter price"
                          value={editingPoojaPrices[pooja.id] !== undefined ? editingPoojaPrices[pooja.id] : ''}
                          onChange={(e) => updatePoojaPrice(pooja.id, parseFloat(e.target.value))}
                          sx={{ width: '120px' }}
                          label="New Price"
                        />
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<SaveIcon />}
                            onClick={() => savePoojaPrice(pooja.id)}
                            disabled={editingPoojaPrices[pooja.id] === undefined}
                            sx={{
                              bgcolor: '#4caf50',
                              '&:hover': { bgcolor: '#45a049' },
                              '&:disabled': { bgcolor: '#ccc' },
                            }}
                          >
                            Save
                          </Button>
                          <Button
                            variant="contained"
                            size="small"
                            startIcon={<DeleteIcon />}
                            onClick={() => deletePooja(pooja.id)}
                            sx={{
                              bgcolor: '#f44336',
                              '&:hover': { bgcolor: '#d32f2f' },
                            }}
                          >
                            Delete
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* ADD NEW POOJA SECTION */}
          <Grid item xs={12}>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#d4af37', mb: 3 }}>
              Add New Pooja
            </Typography>
            <Paper sx={{ p: 3, border: '2px solid #d4af37', borderRadius: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Pooja Name *"
                    value={newPoojaForm.name}
                    onChange={(e) => setNewPoojaForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter pooja name (Malayalam & English)"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                      },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#d4af37' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Price (₹) *"
                    type="number"
                    value={newPoojaForm.price === 0 ? '' : newPoojaForm.price}
                    onChange={(e) => setNewPoojaForm(prev => ({ ...prev, price: Number(e.target.value) || 0 }))}
                    placeholder="Enter price"
                    inputProps={{ min: 0, step: 1 }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                      },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#d4af37' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel sx={{ '&.Mui-focused': { color: '#d4af37' } }}>Deity</InputLabel>
                    <Select
                      value={newPoojaForm.deity}
                      onChange={(e) => setNewPoojaForm(prev => ({ ...prev, deity: e.target.value as any }))}
                      label="Deity"
                      sx={{
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#d4af37' },
                      }}
                    >
                      <MenuItem value="BHAGAVATHY">BHAGAVATHY</MenuItem>
                      <MenuItem value="SIVA">SIVA</MenuItem>
                      <MenuItem value="VISHNU">VISHNU</MenuItem>
                      <MenuItem value="GANAPATHY">GANAPATHY</MenuItem>
                      <MenuItem value="AYYAPPA">AYYAPPA</MenuItem>
                      <MenuItem value="GENERAL">GENERAL</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Image Path"
                    value={newPoojaForm.image}
                    onChange={(e) => setNewPoojaForm(prev => ({ ...prev, image: e.target.value }))}
                    placeholder="/assets/pooja-default.jpg"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                      },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#d4af37' },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Description"
                    value={newPoojaForm.description}
                    onChange={(e) => setNewPoojaForm(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Enter pooja description"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                      },
                      '& .MuiInputLabel-root.Mui-focused': { color: '#d4af37' },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={addNewPooja}
                    sx={{
                      bgcolor: '#4caf50',
                      color: '#fff',
                      fontWeight: 700,
                      px: 4,
                      py: 1.5,
                      '&:hover': { bgcolor: '#45a049' },
                    }}
                  >
                    Add Pooja to List
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSave}
              disabled={loading}
              sx={{
                bgcolor: '#d4af37',
                color: '#000',
                fontWeight: 700,
                '&:hover': { bgcolor: '#e5c158' },
              }}
            >
              {loading ? 'Saving...' : 'Save Settings'}
            </Button>
          </Grid>
        </Grid>
      </Paper>

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
