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
  Avatar,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { useNavigate } from 'react-router-dom';

import PageBanner from '../../components/PageBanner';
import PoojaCard from '../../components/PoojaCard';
import PoojaBookingModal from '../../components/PoojaBookingModal';
import { poojas as allPoojas, Pooja } from '../../data/pooja-data';
import { useCart } from '../../context/CartContext';
import { colors } from '../../theme/colors';

const GOLD = '#d4af37';
const deities = ['All', 'Devi', 'Ganapathy', 'Vishnu', 'Shiva', 'Ayyappa', 'Murugan', 'Others'];

export default function Booking() {
    // Malayalam Vazhipad List
    const vazhipads = [
      { name: 'മലർ നിവേദ്യം', price: '₹30' },
      { name: 'വെള്ളനിവേദ്യം', price: '₹30' },
      { name: 'അപ്പനിവേദ്യം', price: '₹600' },
      { name: 'ഒറ്റനിവേദ്യം', price: '₹250' },
      { name: 'വിളക്ക്', price: '₹25' },
      { name: 'നെയ്‌വിളക്ക്', price: '₹30' },
      { name: 'കെടാവിളക്ക്', price: '₹50' },
      { name: 'ചുറ്റുവിളക്ക്', price: '₹1000' },
      { name: 'നവരാത്രി വിളക്ക്', price: '₹19000' },
      { name: 'പായസം', price: '₹60' },
      { name: 'ഇരട്ടിപ്പായസം', price: '₹500' },
      { name: 'പാൽപ്പായസം', price: '₹100' },
      { name: 'തുളസിമാല', price: '₹25' },
      { name: 'തെച്ചിമാല', price: '₹125' },
      { name: 'ഉണ്ടമാല', price: '₹150' },
      { name: 'പൂക്കുലമാല', price: '₹100' },
      { name: 'മഞ്ഞ ചോറ്', price: '₹50' },
      { name: 'മഞ്ഞപ്പൊടി ആടൽ', price: '₹50' },
      { name: 'മാല പൂജ', price: '₹10' },
      { name: 'താക്കോൽ പൂജ', price: '₹25' },
      { name: 'ഒരു ദിവസപൂജ', price: '₹750' },
      { name: 'ത്രികാല പൂജ', price: '₹3500' },
      { name: 'വാഹന പൂജ', price: '₹30/40/60' },
      { name: 'നക്ഷത്രപൂജ', price: '₹250' },
      { name: 'ഗണപതിഹോമം', price: '₹100' },
      { name: 'അഷ്ടദ്രവ്യ ഗണപതിഹോമം', price: '₹400' },
      { name: 'സുദർശന ഹോമം', price: '₹1000' },
      { name: 'പുഷ്പാഞ്ജലി', price: '₹20' },
      { name: 'വലിയ പുഷ്പാഞ്ജലി', price: '₹3000' },
      { name: 'പുഷ്‌പാർച്ചന', price: '₹20' },
      { name: 'കളഭം ചാർത്തൽ', price: '₹400' },
      { name: 'ത്രിമധുരം', price: '₹10' },
      { name: 'ഭഗവതി സേവ', price: '₹250' },
      { name: 'അരിയിലെഴുത്ത്', price: '₹100' },
      { name: 'തോറ്റം', price: '₹750' },
      { name: 'ഇളനീർ അഭിഷേകം', price: '₹50' },
      { name: 'പാൽ അഭിഷേകം', price: '₹50' },
      { name: 'ശംഖ് അഭിഷേകം', price: '₹30' },
      { name: 'കെട്ടുനിറ', price: '₹20' },
      { name: 'ചോറൂണ്', price: '₹250' },
      { name: 'സ്വയംവരപുഷ്പാഞ്ജലി', price: '₹100' },
      { name: 'ഭാഗ്യസൂക്തപുഷ്പാഞ്ജലി', price: '₹50' },
      { name: 'സഹസ്രനാമപുഷ്പാഞ്ജലി', price: '₹50' },
      { name: 'ഐക്യമത്യസൂക്ത പുഷ്പാഞ്ജലി', price: '₹50' },
      { name: 'രക്തപുഷ്പാഞ്ജലി', price: '₹50' },
      { name: 'രക്ഷസിനുപൂജ', price: '200' },
      { name: 'രക്ഷസിനു പാൽപായസം', price: '150' },
      { name: 'രക്ഷസിനു വിളക്ക്', price: '30' },
    ];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeity, setSelectedDeity] = useState('All');
  const { cart } = useCart();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPooja, setSelectedPooja] = useState<Pooja[] | null>(null);
  const [selectedPoojaIds, setSelectedPoojaIds] = useState<number[]>([]);

  const handlePoojaSelect = (poojaId: number) => {
    setSelectedPoojaIds(prev =>
      prev.includes(poojaId)
        ? prev.filter(id => id !== poojaId)
        : [...prev, poojaId]
    );
  };

  const handleOpenModal = () => {
    if (selectedPoojaIds.length > 0) {
      // Get all selected poojas
      const selectedPoojasData = allPoojas.filter(p => selectedPoojaIds.includes(p.id));
      if (selectedPoojasData.length > 0) {
        setSelectedPooja(selectedPoojasData); // Store all selected poojas
        setModalOpen(true);
      }
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPooja(null);
    setSelectedPoojaIds([]); // Clear selections after adding to cart
  };

  const handleCancelModal = () => {
    setModalOpen(false);
    setSelectedPooja(null);
    setSelectedPoojaIds([]); // Clear selections when user cancels too
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
        <Paper elevation={0} sx={{ 
          p: { xs: 3, md: 4 },
          border: `3px solid ${GOLD}`,
          borderRadius: 5,
          boxShadow: '0 20px 60px rgba(212,175,55,0.25)',
          background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #d4af37 0%, #e5c158 25%, #d4af37 50%, #e5c158 75%, #d4af37 100%)',
            animation: 'shimmer 3s linear infinite',
            backgroundSize: '200% 100%',
            '@keyframes shimmer': {
              '0%': { backgroundPosition: '-200% 0' },
              '100%': { backgroundPosition: '200% 0' },
            },
          }
        }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2, 
            mb: 4,
            mt: 2,
          }}>
            <Avatar sx={{ 
              width: 56, 
              height: 56, 
              bgcolor: GOLD,
              boxShadow: `0 8px 24px rgba(212,175,55,0.4)`,
            }}>
              <BookOnlineIcon sx={{ fontSize: 32, color: '#fff' }} />
            </Avatar>
            <Box>
              <Typography variant="h4" sx={{ 
                fontWeight: 900,
                background: 'linear-gradient(135deg, #d4af37 0%, #e5c158 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Book Your Pooja
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', fontWeight: 600, mt: 0.5 }}>
                Select poojas, add booking details, and complete your reservation
              </Typography>
            </Box>
          </Box>

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
                      <SearchIcon sx={{ color: GOLD }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    bgcolor: '#fff',
                    '& fieldset': {
                      borderColor: GOLD,
                      borderWidth: 2,
                    },
                    '&:hover fieldset': {
                      borderColor: '#e5c158',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: GOLD,
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel sx={{ 
                  '&.Mui-focused': { color: GOLD },
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FilterListIcon sx={{ fontSize: 20 }} />
                    Filter by Deity
                  </Box>
                </InputLabel>
                <Select
                  value={selectedDeity}
                  onChange={(e) => setSelectedDeity(e.target.value)}
                  label="Filter by Deity"
                  sx={{
                    borderRadius: 3,
                    bgcolor: '#fff',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: GOLD,
                      borderWidth: 2,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#e5c158',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: GOLD,
                    },
                  }}
                >
                  {deities.map(deity => (
                    <MenuItem key={deity} value={deity}>{deity}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {selectedPoojaIds.length > 0 && (
            <Box sx={{ 
              mb: 3, 
              p: 2.5, 
              bgcolor: 'rgba(212,175,55,0.12)',
              border: `2px solid ${GOLD}`,
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 2,
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Chip
                  label={`${selectedPoojaIds.length} Selected`}
                  sx={{
                    bgcolor: GOLD,
                    color: '#000',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                  }}
                />
                <Typography variant="body2" sx={{ color: '#555', fontWeight: 600 }}>
                  Click "Book Selected" to add your booking details
                </Typography>
              </Box>
            </Box>
          )}

          {/* POOJA GRID */}
          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ px: { xs: 0, sm: 1 } }}>
            {filteredPoojas.length > 0 ? (
              filteredPoojas.map(pooja => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  md={4} 
                  lg={3} 
                  key={pooja.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Box sx={{ width: '100%', maxWidth: 340 }}>
                    <PoojaCard
                      pooja={pooja}
                      onSelect={handlePoojaSelect}
                      isSelected={selectedPoojaIds.includes(pooja.id)}
                    />
                  </Box>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Box sx={{ 
                  textAlign: 'center', 
                  py: 8,
                  px: 3,
                  bgcolor: 'rgba(212,175,55,0.05)',
                  borderRadius: 4,
                  border: `2px dashed ${GOLD}50`,
                }}>
                  <SearchIcon sx={{ fontSize: 64, color: '#ccc', mb: 2 }} />
                  <Typography variant="h6" sx={{ color: '#999', mb: 1 }}>
                    No poojas found
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#aaa' }}>
                    Try adjusting your search or filter criteria
                  </Typography>
                </Box>
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
                py: 1.8,
                px: 4,
                bgcolor: GOLD,
                color: '#000',
                fontWeight: 800,
                fontSize: '1rem',
                boxShadow: `0 8px 32px ${GOLD}60`,
                '&:hover': {
                  bgcolor: '#e5c158',
                  transform: 'scale(1.05) translateY(-2px)',
                  boxShadow: `0 12px 40px ${GOLD}70`,
                },
                transition: 'all .3s cubic-bezier(0.4, 0, 0.2, 1)'
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
                py: 1.8,
                px: 4,
                bgcolor: '#1976d2',
                color: '#fff',
                fontWeight: 800,
                fontSize: '1rem',
                boxShadow: '0 8px 32px rgba(25,118,210,0.4)',
                '&:hover': {
                  bgcolor: '#1565c0',
                  transform: 'scale(1.05) translateY(-2px)',
                  boxShadow: '0 12px 40px rgba(25,118,210,0.5)',
                },
                transition: 'all .3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              startIcon={
                <Badge badgeContent={totalItems} color="error" sx={{
                  '& .MuiBadge-badge': {
                    bgcolor: GOLD,
                    color: '#000',
                    fontWeight: 800,
                  }
                }}>
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
        handleCancel={handleCancelModal}
        pooja={null}
        selectedPoojas={selectedPooja || []}
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

