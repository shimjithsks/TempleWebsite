/* eslint-disable @typescript-eslint/no-unused-vars */
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
  handleCancel?: () => void;
  pooja: Pooja | null;
  selectedPoojas?: Pooja[]; // Support multiple poojas
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

export default function PoojaBookingModal({ open, handleClose, handleCancel, pooja, selectedPoojas = [] }: PoojaBookingModalProps) {
  const { addToCart } = useCart();
  const [name, setName] = useState('');
  const [star, setStar] = useState('ASWATHY');
  const [date, setDate] = useState<Date | null>(new Date());
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  // Use selectedPoojas if available, otherwise fall back to single pooja
  const poojasToBook = selectedPoojas.length > 0 ? selectedPoojas : (pooja ? [pooja] : []);

  const handleAddToCart = () => {
    if (!name.trim()) {
      setError('Please enter a name.');
      return;
    }
    if (poojasToBook.length === 0) return;

    // Add all selected poojas to cart with the same details
    poojasToBook.forEach(p => {
      addToCart({
        id: p.id,
        name: p.name,
        price: p.price,
        quantity,
        bookingName: name,
        bookingStar: star,
        bookingDate: date,
      });
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
    // Reset state on cancel (don't clear selections)
    setName('');
    setStar('ASWATHY');
    setDate(new Date());
    setQuantity(1);
    setError('');
    if (handleCancel) {
      handleCancel();
    } else {
      handleClose();
    }
  }

  if (poojasToBook.length === 0) return null;

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
        width: { xs: '90%', sm: 480 },
        maxWidth: 480,
        background: 'linear-gradient(135deg, #7b1fa2 0%, #9c27b0 50%, #ba68c8 100%)',
        border: 'none',
        borderRadius: 4,
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
        p: 0,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s infinite',
        },
        '@keyframes shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }}>
        <Box sx={{ pt: 4, px: 4, pb: 3 }}>
          {poojasToBook.length > 1 && (
            <Typography variant="h6" sx={{ mb: 2.5, textAlign: 'center', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0.5px' }}>
              Booking {poojasToBook.length} Poojas
            </Typography>
          )}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Box sx={{
              height: 90,
              width: 90,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
              border: '4px solid #d4af37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4), 0 0 0 8px rgba(255, 255, 255, 0.2)',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05) rotate(5deg)',
                boxShadow: '0 12px 32px rgba(212, 175, 55, 0.6), 0 0 0 8px rgba(255, 255, 255, 0.3)'
              }
            }}>
              <img src={`${process.env.PUBLIC_URL}/assets/header_god_image.png`} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: 4, pb: 3 }}>
          <Grid container spacing={2.5}>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ minWidth: 90, fontWeight: 600, fontSize: '1rem' }}>Name</Typography>
              <TextField
                fullWidth
                variant="filled"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
                error={!!error}
                helperText={error}
                sx={{ 
                  bgcolor: 'white', 
                  borderRadius: 2,
                  '& .MuiFilledInput-root': {
                    borderRadius: 2,
                    bgcolor: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.95)'
                    },
                    '&.Mui-focused': {
                      bgcolor: 'white'
                    },
                    '&:before, &:after': {
                      display: 'none'
                    }
                  }
                }}
              />
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ minWidth: 90, fontWeight: 600, fontSize: '1rem' }}>Star</Typography>
              <FormControl fullWidth variant="filled" sx={{ 
                bgcolor: 'white', 
                borderRadius: 2,
                '& .MuiFilledInput-root': {
                  borderRadius: 2,
                  bgcolor: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.95)'
                  },
                  '&.Mui-focused': {
                    bgcolor: 'white'
                  },
                  '&:before, &:after': {
                    display: 'none'
                  }
                }
              }}>
                <Select
                  value={star}
                  onChange={(e) => setStar(e.target.value)}
                >
                  {stars.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ minWidth: 90, fontWeight: 600, fontSize: '1rem' }}>Date</Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={date}
                  onChange={setDate}
                  minDate={new Date()}
                  slots={{ textField: TextField }}
                  slotProps={{ 
                    textField: { 
                      fullWidth: true, 
                      variant: 'filled', 
                      sx: { 
                        bgcolor: 'white', 
                        borderRadius: 2,
                        '& .MuiFilledInput-root': {
                          borderRadius: 2,
                          bgcolor: 'white',
                          '&:hover': {
                            bgcolor: 'rgba(255, 255, 255, 0.95)'
                          },
                          '&.Mui-focused': {
                            bgcolor: 'white'
                          },
                          '&:before, &:after': {
                            display: 'none'
                          }
                        }
                      } 
                    } 
                  }}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ minWidth: 90, fontWeight: 600, fontSize: '1rem' }}>Quantity</Typography>
              <TextField
                fullWidth
                type="number"
                variant="filled"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                InputProps={{ inputProps: { min: 1 } }}
                sx={{ 
                  bgcolor: 'white', 
                  borderRadius: 2,
                  '& .MuiFilledInput-root': {
                    borderRadius: 2,
                    bgcolor: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.95)'
                    },
                    '&.Mui-focused': {
                      bgcolor: 'white'
                    },
                    '&:before, &:after': {
                      display: 'none'
                    }
                  }
                }}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ 
          px: 4, 
          pb: 4, 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 2,
          flexWrap: 'wrap'
        }}>
          <Button 
            variant="contained" 
            onClick={handleAddToCart} 
            sx={{ 
              bgcolor: '#43a047', 
              color: 'white', 
              fontWeight: 700, 
              borderRadius: 3, 
              px: 4,
              py: 1.2,
              fontSize: '0.95rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 16px rgba(67, 160, 71, 0.4)',
              '&:hover': { 
                bgcolor: '#388e3c',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(67, 160, 71, 0.5)'
              },
              transition: 'all 0.25s ease'
            }}
          >
            ADD TO CART
          </Button>
          <Button 
            variant="contained" 
            onClick={onModalClose} 
            sx={{ 
              bgcolor: '#e53935', 
              color: 'white', 
              fontWeight: 700, 
              borderRadius: 3, 
              px: 4,
              py: 1.2,
              fontSize: '0.95rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 16px rgba(229, 57, 53, 0.4)',
              '&:hover': { 
                bgcolor: '#c62828',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(229, 57, 53, 0.5)'
              },
              transition: 'all 0.25s ease'
            }}
          >
            CANCEL
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
