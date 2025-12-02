/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Button, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Alert,
  Card,
  Chip,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import PageBanner from '../components/PageBanner';
import { useCart } from '../context/CartContext';
import useRazorpay from '../hooks/useRazorpay';

const GOLD = '#d4af37';

export default function CartPage() {
  const { cart, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();
  const displayRazorpay = useRazorpay();

  const [billingOpen, setBillingOpen] = React.useState(false);
  const [billing, setBilling] = React.useState({
    name: '',
    email: '',
    contact: '',
    title: '',
    place: '',
    state: 'Kerala',
    pin: '',
  });

  const openBilling = () => setBillingOpen(true);
  const closeBilling = () => setBillingOpen(false);

  const handleBillingChange = (field: string, value: string) => {
    setBilling(prev => ({ ...prev, [field]: value }));
  };

  const handleMakePayment = () => {
    // basic validation
    if (!billing.name || !billing.email || !billing.contact) {
      alert('Please fill Name, Email and Mobile Number.');
      return;
    }

    // compose address
    const address = `${billing.title}, ${billing.place}, ${billing.state} - ${billing.pin}`;
    displayRazorpay({ name: billing.name, email: billing.email, contact: billing.contact, address });
    closeBilling();
  };

  const handlePayment = () => {
    displayRazorpay();
  };

  const totalAmount = getCartTotal();

  return (
    <>
      <PageBanner title="View Cart" />
      <Container maxWidth="lg" sx={{ mt: -8, position: 'relative', zIndex: 2, pb: 8 }}>
        <Paper elevation={0} sx={{ 
          p: { xs: 3, md: 5 }, 
          borderRadius: 4,
          border: `3px solid ${GOLD}`,
          boxShadow: '0 20px 60px rgba(212, 175, 55, 0.25)',
          background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: `linear-gradient(90deg, ${GOLD} 0%, #f4d03f 50%, ${GOLD} 100%)`,
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s infinite',
          },
          '@keyframes shimmer': {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' }
          }
        }}>
          <Alert 
            severity="info" 
            sx={{ 
              mb: 4,
              borderRadius: 2,
              border: `2px solid ${GOLD}`,
              bgcolor: 'rgba(212, 175, 55, 0.08)',
              '& .MuiAlert-icon': {
                color: GOLD
              }
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Dear devotee, if you have not received receipts of your offering, please login to the site and check 'My Account' page.
            </Typography>
          </Alert>

          {cart.length === 0 ? (
            <Box sx={{ 
              textAlign: 'center', 
              py: 10,
              px: 3,
              borderRadius: 3,
              border: `2px dashed ${GOLD}`,
              bgcolor: 'rgba(212, 175, 55, 0.05)'
            }}>
              <RemoveShoppingCartIcon sx={{ fontSize: 80, color: GOLD, opacity: 0.6, mb: 2 }} />
              <Typography variant="h4" sx={{ fontWeight: 700, color: '#2c3e50', mb: 1.5 }}>
                Your Cart is Empty
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: '1.1rem', mb: 4 }}>
                Looks like you haven't selected any poojas yet.
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: GOLD, 
                  color: '#000',
                  fontWeight: 700,
                  px: 5,
                  py: 1.5,
                  borderRadius: 3,
                  fontSize: '1rem',
                  boxShadow: `0 4px 16px rgba(212, 175, 55, 0.4)`,
                  '&:hover': { 
                    bgcolor: '#c19b2f',
                    transform: 'translateY(-2px)',
                    boxShadow: `0 6px 20px rgba(212, 175, 55, 0.5)`
                  },
                  transition: 'all 0.25s ease'
                }}
                onClick={() => navigate('/poojas/booking')}
              >
                Browse Poojas
              </Button>
            </Box>
          ) : (
            <>
              <TableContainer sx={{ 
                borderRadius: 2, 
                border: `2px solid ${GOLD}`,
                overflow: 'hidden',
                mb: 3
              }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ 
                    background: `linear-gradient(135deg, ${GOLD} 0%, #e5c158 100%)`,
                  }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 800, color: '#000', fontSize: '0.95rem' }}>Sl.No</TableCell>
                      <TableCell sx={{ fontWeight: 800, color: '#000', fontSize: '0.95rem' }}>Vazhipad</TableCell>
                      <TableCell sx={{ fontWeight: 800, color: '#000', fontSize: '0.95rem' }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: 800, color: '#000', fontSize: '0.95rem' }}>Star</TableCell>
                      <TableCell sx={{ fontWeight: 800, color: '#000', fontSize: '0.95rem' }}>Date</TableCell>
                      <TableCell sx={{ fontWeight: 800, color: '#000', fontSize: '0.95rem' }} align="right">Qty</TableCell>
                      <TableCell sx={{ fontWeight: 800, color: '#000', fontSize: '0.95rem' }} align="right">Amount</TableCell>
                      <TableCell sx={{ fontWeight: 800, color: '#000', fontSize: '0.95rem' }} align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.map((item, index) => (
                      <TableRow 
                        key={item.cartId}
                        sx={{
                          '&:nth-of-type(odd)': {
                            bgcolor: 'rgba(212, 175, 55, 0.03)'
                          },
                          '&:hover': {
                            bgcolor: 'rgba(212, 175, 55, 0.08)',
                            transition: 'all 0.2s ease'
                          },
                          borderBottom: `1px solid rgba(212, 175, 55, 0.2)`
                        }}
                      >
                        <TableCell sx={{ fontWeight: 600, color: '#2c3e50' }}>{index + 1}</TableCell>
                        <TableCell component="th" scope="row" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                          {item.name}
                        </TableCell>
                        <TableCell sx={{ color: '#546e7a' }}>{item.bookingName}</TableCell>
                        <TableCell>
                          <Chip 
                            label={item.bookingStar} 
                            size="small" 
                            sx={{ 
                              bgcolor: 'rgba(212, 175, 55, 0.15)',
                              color: '#2c3e50',
                              fontWeight: 600,
                              fontSize: '0.8rem'
                            }} 
                          />
                        </TableCell>
                        <TableCell sx={{ color: '#546e7a' }}>
                          {item.bookingDate ? format(item.bookingDate, 'dd-MM-yyyy') : 'N/A'}
                        </TableCell>
                        <TableCell align="right">
                          <Chip 
                            label={item.quantity} 
                            size="small" 
                            sx={{ 
                              bgcolor: GOLD,
                              color: '#000',
                              fontWeight: 700,
                              minWidth: 36
                            }} 
                          />
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: 700, fontSize: '1rem', color: GOLD }}>₹{item.price.toFixed(2)}</TableCell>
                        <TableCell align="center">
                          <IconButton 
                            aria-label="delete" 
                            onClick={() => removeFromCart(item.cartId)}
                            sx={{
                              color: '#e53935',
                              '&:hover': {
                                bgcolor: 'rgba(229, 57, 53, 0.1)',
                                transform: 'scale(1.1)'
                              },
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow sx={{ 
                      background: `linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%)`,
                      borderTop: `2px solid ${GOLD}`
                    }}>
                      <TableCell colSpan={6} align="right" sx={{ fontWeight: 800, fontSize: '1.2rem', color: '#2c3e50', py: 2.5 }}>
                        Grand Total
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 900, fontSize: '1.3rem', color: GOLD, py: 2.5 }}>
                        ₹{totalAmount.toFixed(2)}
                      </TableCell>
                      <TableCell />
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
                <Card sx={{ 
                  background: `linear-gradient(135deg, ${GOLD} 0%, #e5c158 100%)`,
                  boxShadow: `0 4px 16px rgba(212, 175, 55, 0.4)`,
                  border: 'none',
                  borderRadius: 3
                }}>
                  <Box sx={{ px: 4, py: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'rgba(0,0,0,0.7)', mb: 0.5 }}>
                      Total Amount
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: '#000' }}>
                      ₹{totalAmount.toFixed(2)}
                    </Typography>
                  </Box>
                </Card>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button 
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/poojas/booking')}
                    sx={{ 
                      borderColor: GOLD,
                      borderWidth: 2,
                      color: GOLD,
                      fontWeight: 700,
                      px: 4,
                      py: 1.2,
                      borderRadius: 3,
                      '&:hover': { 
                        borderColor: GOLD,
                        borderWidth: 2,
                        bgcolor: 'rgba(212, 175, 55, 0.08)',
                        transform: 'translateY(-2px)'
                      },
                      transition: 'all 0.25s ease'
                    }}
                  >
                    + Add More Poojas
                  </Button>
                  <Button 
                    variant="contained" 
                    size="large"
                    sx={{ 
                      bgcolor: '#43a047',
                      color: 'white',
                      fontWeight: 700,
                      px: 5,
                      py: 1.2,
                      borderRadius: 3,
                      fontSize: '1rem',
                      boxShadow: '0 4px 16px rgba(67, 160, 71, 0.4)',
                      '&:hover': { 
                        bgcolor: '#388e3c',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(67, 160, 71, 0.5)'
                      },
                      transition: 'all 0.25s ease'
                    }}
                    onClick={openBilling}
                  >
                    Proceed to Payment →
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Paper>
      </Container>
      <Dialog 
        open={billingOpen} 
        onClose={closeBilling} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            border: `3px solid ${GOLD}`,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }
        }}
      >
        <DialogTitle sx={{ 
          background: `linear-gradient(135deg, ${GOLD} 0%, #e5c158 100%)`,
          color: '#000',
          fontWeight: 800,
          fontSize: '1.3rem',
          py: 2.5
        }}>
          Billing Address
          <IconButton 
            aria-label="close" 
            onClick={closeBilling} 
            sx={{ 
              position: 'absolute', 
              right: 12, 
              top: 12,
              color: '#000',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.1)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ pt: 3, pb: 3 }}>
          <Box component="form" sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <TextField label="Name" value={billing.name} onChange={(e) => handleBillingChange('name', e.target.value)} fullWidth />
            <TextField label="E-Mail" value={billing.email} onChange={(e) => handleBillingChange('email', e.target.value)} fullWidth />
            <TextField label="Mobile Number" value={billing.contact} onChange={(e) => handleBillingChange('contact', e.target.value)} fullWidth />
            <TextField label="Address" value={billing.title} onChange={(e) => handleBillingChange('title', e.target.value)} fullWidth />
            <TextField label="Place" value={billing.place} onChange={(e) => handleBillingChange('place', e.target.value)} fullWidth />
            <FormControl fullWidth>
              <InputLabel id="state-label">State</InputLabel>
              <Select labelId="state-label" value={billing.state} label="State" onChange={(e) => handleBillingChange('state', e.target.value)}>
                <MenuItem value="Kerala">Kerala</MenuItem>
                <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                <MenuItem value="Karnataka">Karnataka</MenuItem>
              </Select>
            </FormControl>
            <TextField label="PIN" value={billing.pin} onChange={(e) => handleBillingChange('pin', e.target.value)} fullWidth />
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 3, bgcolor: 'rgba(212, 175, 55, 0.05)' }}>
          <Button 
            onClick={closeBilling}
            sx={{ 
              color: '#546e7a',
              fontWeight: 600,
              px: 3,
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.05)'
              }
            }}
          >
            Cancel
          </Button>
          <Button 
            variant="contained" 
            onClick={handleMakePayment} 
            sx={{ 
              bgcolor: '#43a047',
              color: 'white',
              fontWeight: 700,
              px: 4,
              py: 1,
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(67, 160, 71, 0.4)',
              '&:hover': { 
                bgcolor: '#388e3c',
                boxShadow: '0 6px 16px rgba(67, 160, 71, 0.5)'
              }
            }}
          >
            Make Payment
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
