import React, { useState, useMemo } from 'react';
import {
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Paper,
  Box,
  Badge,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

import PageBanner from '../../components/PageBanner';
import PoojaCard from '../../components/PoojaCard';
import PoojaBookingModal from '../../components/PoojaBookingModal';
import { poojas as allPoojas, Pooja } from '../../data/pooja-data';
import { useCart } from '../../context/CartContext';
import { colors } from '../../theme/colors';

const deities = ['All', 'Devi', 'Ganapathy', 'Vishnu', 'Shiva', 'Ayyappa', 'Murugan', 'Others'];

export default function Booking() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeity, setSelectedDeity] = useState('All');
  const { cart } = useCart();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPooja, setSelectedPooja] = useState<Pooja | null>(null);
  const [selectedPoojaIds, setSelectedPoojaIds] = useState<number[]>([]);

  const handlePoojaSelect = (poojaId: number) => {
    setSelectedPoojaIds(prev =>
      prev.includes(poojaId)
        ? prev.filter(id => id !== poojaId)
        : [...prev, poojaId]
    );
  };

  const handleOpenModal = () => {
    const firstSelectedId = selectedPoojaIds[0];
    if (firstSelectedId) {
      const pooja = allPoojas.find(p => p.id === firstSelectedId);
      if (pooja) {
        setSelectedPooja(pooja);
        setModalOpen(true);
      }
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPooja(null);
    setSelectedPoojaIds([]); // Hide Book Selected button after adding to cart
  };

  const filteredPoojas = useMemo(() => {
    return allPoojas.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDeity = selectedDeity === 'All' || p.deity === selectedDeity;
      return matchesSearch && matchesDeity;
    });
  }, [searchTerm, selectedDeity]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <PageBanner title="Book a Pooja / Vazhipad" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
          {/* CONTROLS: SEARCH AND FILTER */}
          <Grid container spacing={2} sx={{ mb: 4 }} alignItems="center">
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search for a pooja by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Filter by Deity</InputLabel>
                <Select
                  value={selectedDeity}
                  onChange={(e) => setSelectedDeity(e.target.value)}
                  label="Filter by Deity"
                >
                  {deities.map(deity => (
                    <MenuItem key={deity} value={deity}>{deity}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* POOJA GRID */}
          <Grid container spacing={3}>
            {filteredPoojas.length > 0 ? (
              filteredPoojas.map(pooja => (
                <Grid item xs={12} sm={6} md={4} key={pooja.id}>
                  <PoojaCard
                    pooja={pooja}
                    onSelect={handlePoojaSelect}
                    isSelected={selectedPoojaIds.includes(pooja.id)}
                  />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography align="center" sx={{ py: 5, color: 'text.secondary' }}>
                  No poojas found matching your criteria.
                </Typography>
              </Grid>
            )}
          </Grid>
        </Paper>

        {/* FLOATING ACTION BUTTONS */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            animation: 'fadeIn .3s ease-in-out'
          }}
        >
          {selectedPoojaIds.length > 0 && (
            <Button
              variant="contained"
              size="large"
              onClick={handleOpenModal}
              sx={{
                borderRadius: '50px',
                py: 1.5,
                px: 3,
                bgcolor: colors.primary,
                color: colors.white,
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                '&:hover': {
                  bgcolor: colors.primaryDark,
                  transform: 'scale(1.05)'
                },
                transition: 'all .2s'
              }}
            >
              Book Selected ({selectedPoojaIds.length})
            </Button>
          )}
          {totalItems > 0 && (
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/cart')}
              sx={{
                borderRadius: '50px',
                py: 1.5,
                px: 3,
                bgcolor: colors.navy,
                color: colors.white,
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                '&:hover': {
                  bgcolor: colors.navyLight,
                  transform: 'scale(1.05)'
                },
                transition: 'all .2s'
              }}
              startIcon={
                <Badge badgeContent={totalItems} color="error">
                  <ShoppingCartIcon />
                </Badge>
              }
            >
              View Cart
            </Button>
          )}
        </Box>
      </Container>

      <PoojaBookingModal
        open={modalOpen}
        handleClose={handleCloseModal}
        pooja={selectedPooja}
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

