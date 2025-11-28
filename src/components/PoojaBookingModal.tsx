import React, { useState } from 'react';
import {
  Modal, Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, Grid
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Pooja } from '../data/pooja-data';
import { stars } from '../data/stars';
import { useCart } from '../context/CartContext';

interface PoojaBookingModalProps {
  open: boolean;
  handleClose: () => void;
  pooja: Pooja | null;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#A52A2A',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'white',
};

export default function PoojaBookingModal({ open, handleClose, pooja }: PoojaBookingModalProps) {
  const { addToCart } = useCart();
  const [name, setName] = useState('');
  const [star, setStar] = useState('ASWATHY');
  const [date, setDate] = useState<Date | null>(new Date());
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  const handleAddToCart = () => {
    if (!name.trim()) {
      setError('Please enter a name.');
      return;
    }
    if (!pooja) return;

    addToCart({
      id: pooja.id,
      name: pooja.name,
      price: pooja.price,
      quantity,
      bookingName: name,
      bookingStar: star,
      bookingDate: date,
    });
    
    // Reset form and close modal
    setName('');
    setStar('ASWATHY');
    setDate(new Date());
    setQuantity(1);
    setError('');
    handleClose();
  };

  const onModalClose = () => {
    // Reset state on close
    setName('');
    setStar('ASWATHY');
    setDate(new Date());
    setQuantity(1);
    setError('');
    handleClose();
  }

  if (!pooja) return null;

  return (
    <Modal
      open={open}
      onClose={onModalClose}
      aria-labelledby="pooja-booking-modal-title"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#1976d2', // blue shade
        border: '3px solid #43a047', // green border
        borderRadius: 3,
        boxShadow: 24,
        p: 4,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Box sx={{
            height: 60,
            width: 60,
            borderRadius: '50%',
            bgcolor: 'white',
            border: '3px solid #d32f2f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 2,
            overflow: 'hidden',
          }}>
            <img src={`${process.env.PUBLIC_URL}/assets/header_god_image.png`} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Name</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              variant="filled"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              error={!!error}
              helperText={error}
              sx={{ bgcolor: 'white', borderRadius: 1 }}
            />
          </Grid>

          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Star</Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth variant="filled" sx={{ bgcolor: 'white', borderRadius: 1 }}>
              <Select
                value={star}
                onChange={(e) => setStar(e.target.value)}
              >
                {stars.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Date</Typography>
          </Grid>
          <Grid item xs={8}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={setDate}
                minDate={new Date()}
                slots={{ textField: TextField }}
                slotProps={{ textField: { fullWidth: true, variant: 'filled', sx: { bgcolor: 'white', borderRadius: 1 } } }}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Quantity</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              type="number"
              variant="filled"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              InputProps={{ inputProps: { min: 1 } }}
              sx={{ bgcolor: 'white', borderRadius: 1 }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
          <Button variant="contained" onClick={handleAddToCart} sx={{ bgcolor: '#43a047', color: 'white', fontWeight: 600, borderRadius: 1, px: 3, '&:hover': { bgcolor: '#388e3c' } }}>
            ADD TO CART
          </Button>
          <Button variant="contained" onClick={onModalClose} sx={{ bgcolor: '#e53935', color: 'white', fontWeight: 600, borderRadius: 1, px: 3, '&:hover': { bgcolor: '#b71c1c' } }}>
            CANCEL
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
