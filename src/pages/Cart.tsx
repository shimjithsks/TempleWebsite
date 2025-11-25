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
  Alert
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import PageBanner from '../components/PageBanner';
import { useCart } from '../context/CartContext';
import useRazorpay from '../hooks/useRazorpay';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import CloseIcon from '@mui/icons-material/Close';

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
        <Paper elevation={6} sx={{ p: { xs: 2, md: 4 }, borderRadius: 2 }}>
          <Alert severity="info" sx={{ mb: 3 }}>
            Dear devotee if you are not received receipts of your offering then login to site then choose 'My Account' page.
          </Alert>

          {cart.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <ShoppingCartIcon sx={{ fontSize: 60, color: 'grey.400' }} />
              <Typography variant="h5" sx={{ mt: 2 }}>Your cart is empty</Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Looks like you haven't selected any poojas yet.
              </Typography>
              <Button 
                variant="contained" 
                sx={{ mt: 3, bgcolor: '#E63946', '&:hover': { bgcolor: '#d62839' } }}
                onClick={() => navigate('/poojas/booking')}
              >
                Browse Poojas
              </Button>
            </Box>
          ) : (
            <>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ bgcolor: 'grey.100' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>Sl.No</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Vazhipad</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Star</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }} align="right">Qty</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }} align="right">Amount</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }} align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.map((item, index) => (
                      <TableRow key={item.cartId}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell>{item.bookingName}</TableCell>
                        <TableCell>{item.bookingStar}</TableCell>
                        <TableCell>
                          {item.bookingDate ? format(item.bookingDate, 'dd-MM-yyyy') : 'N/A'}
                        </TableCell>
                        <TableCell align="right">{item.quantity}</TableCell>
                        <TableCell align="right">₹{item.price.toFixed(2)}</TableCell>
                        <TableCell align="center">
                          <IconButton aria-label="delete" onClick={() => removeFromCart(item.cartId)} color="error">
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={6} align="right" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                        Total
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                        ₹{totalAmount.toFixed(2)}
                      </TableCell>
                      <TableCell />
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Box>
                  <Typography variant="h6" component="div" sx={{ 
                    bgcolor: '#A82C2C', 
                    color: 'white', 
                    p: 1, 
                    borderRadius: 1,
                    display: 'inline-block'
                  }}>
                    Total: ₹{totalAmount.toFixed(2)}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button 
                    variant="contained" 
                    onClick={() => navigate('/poojas/booking')}
                    sx={{ bgcolor: '#F4A261', '&:hover': { bgcolor: '#E76F51' } }}
                  >
                    + Add More
                  </Button>
                  <Button 
                    variant="contained" 
                    size="large"
                    sx={{ bgcolor: '#2A9D8F', '&:hover': { bgcolor: '#264653' } }}
                    onClick={openBilling}
                  >
                    Proceed to Payment
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Paper>
      </Container>
      <Dialog open={billingOpen} onClose={closeBilling} maxWidth="sm" fullWidth>
        <DialogTitle>
          Billing Address
          <IconButton aria-label="close" onClick={closeBilling} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
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
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={closeBilling}>Cancel</Button>
          <Button variant="contained" onClick={handleMakePayment} sx={{ bgcolor: '#E63946', '&:hover': { bgcolor: '#d62839' } }}>Make Payment</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
