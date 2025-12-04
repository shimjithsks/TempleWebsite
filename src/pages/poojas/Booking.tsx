/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo, useEffect } from 'react';
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
  Alert,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, getDocFromServer } from 'firebase/firestore';
import { db } from '../../firebase';

import PageBanner from '../../components/PageBanner';
import PoojaCard from '../../components/PoojaCard';
import PoojaBookingModal from '../../components/PoojaBookingModal';
import { poojas as defaultPoojas, Pooja } from '../../data/pooja-data';
import { useCart } from '../../context/CartContext';
import { colors } from '../../theme/colors';

const GOLD = '#d4af37';
const deities = ['All', 'Devi', 'Ganapathy', 'Vishnu', 'Shiva', 'Ayyappa', 'Murugan', 'Others'];

interface VazhipadPrice {
  id: string;
  name: string;
  price: string;
  description: string;
}

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
  vazhipadPrices: VazhipadPrice[];
}

export default function Booking() {
  const [settings, setSettings] = useState<BookingSettings>({
    enabled: true,
    title: 'Online Pooja Booking',
    subtitle: 'Book Your Pooja',
    description: 'Select poojas, add booking details, and complete your reservation',
    instructions: '',
    contactEmail: '',
    contactPhone: '',
    minAdvanceDays: 2,
    maxAdvanceDays: 90,
    termsAndConditions: '',
    vazhipadPrices: [],
  });
  const [allPoojas, setAllPoojas] = useState<Pooja[]>(defaultPoojas);
  const [loadingPoojas, setLoadingPoojas] = useState(false);
  const [lastRefreshTime, setLastRefreshTime] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDeity, setSelectedDeity] = useState('All');
  const { cart } = useCart();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPooja, setSelectedPooja] = useState<Pooja[] | null>(null);
  const [selectedPoojaIds, setSelectedPoojaIds] = useState<number[]>([]);

  useEffect(() => {
    fetchBookingSettings();
    loadPoojas();
  }, []);

  const loadPoojas = async () => {
    setLoadingPoojas(true);
    console.clear(); // Clear console for easier debugging
    console.log('🔄 STARTING FRESH DATA LOAD FROM FIREBASE...');
    console.log('⏰ Current time:', new Date().toLocaleString());
    
    try {
      const docRef = doc(db, 'pooja_data', 'main');
      
      // Force fetch from server, bypass all caches
      console.log('📡 Fetching from Firebase server (bypassing cache)...');
      const docSnap = await getDocFromServer(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.poojas && Array.isArray(data.poojas) && data.poojas.length > 0) {
          const timestamp = new Date().toLocaleString();
          console.log('✅ SUCCESS! Loaded', data.poojas.length, 'poojas from Firebase Server');
          console.log('📊 ALL POOJA PRICES:', data.poojas.map((p: Pooja) => ({ 
            id: p.id, 
            name: p.name.substring(0, 30), 
            price: p.price 
          })));
          console.log('🕒 Data loaded at:', timestamp);
          
          setAllPoojas(data.poojas);
          setLastRefreshTime(timestamp);
          console.log('✅ STATE UPDATED - Poojas now displaying with fresh prices!');
        } else {
          console.warn('⚠️ No poojas array in Firebase, using defaults');
          setAllPoojas(defaultPoojas);
        }
      } else {
        console.warn('⚠️ No pooja_data document in Firebase, using defaults');
        setAllPoojas(defaultPoojas);
      }
    } catch (error) {
      console.error('❌ Error loading poojas:', error);
      setAllPoojas(defaultPoojas);
    } finally {
      setLoadingPoojas(false);
      console.log('✅ LOAD COMPLETE - Check pooja cards on page for updated prices');
    }
  };

  const fetchBookingSettings = async () => {
    try {
      const docRef = doc(db, 'pooja_booking_settings', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data() as BookingSettings;
        setSettings({
          enabled: data.enabled !== false,
          title: data.title || 'Online Pooja Booking',
          subtitle: data.subtitle || 'Book Your Pooja',
          description: data.description || 'Select poojas, add booking details, and complete your reservation',
          instructions: data.instructions || '',
          contactEmail: data.contactEmail || '',
          contactPhone: data.contactPhone || '',
          minAdvanceDays: data.minAdvanceDays || 2,
          maxAdvanceDays: data.maxAdvanceDays || 90,
          termsAndConditions: data.termsAndConditions || '',
          vazhipadPrices: data.vazhipadPrices || [],
        });
      }
    } catch (error) {
      console.error('Error fetching booking settings:', error);
    }
  };

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
  }, [searchTerm, selectedDeity, allPoojas]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <PageBanner title={settings.title} />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {!settings.enabled && (
          <Alert severity="warning" sx={{ mb: 3, borderRadius: 3, fontWeight: 600 }}>
            Online pooja booking is currently disabled. Please contact the temple office directly for bookings.
          </Alert>
        )}
        
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
                {settings.subtitle}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', fontWeight: 600, mt: 0.5 }}>
                {settings.description}
              </Typography>
            </Box>
          </Box>

          {/* BOOKING INFORMATION SECTION */}
          {(settings.instructions || settings.contactEmail || settings.contactPhone || settings.termsAndConditions) && (
            <Box sx={{ mb: 4, p: 3, bgcolor: 'rgba(212,175,55,0.08)', borderRadius: 3, border: `1px solid ${GOLD}30` }}>
              {settings.instructions && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: GOLD, mb: 1 }}>
                    Booking Instructions
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.8 }}>
                    {settings.instructions}
                  </Typography>
                </Box>
              )}
              
              {(settings.contactEmail || settings.contactPhone) && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: GOLD, mb: 1 }}>
                    Contact Information
                  </Typography>
                  <Grid container spacing={2}>
                    {settings.contactEmail && (
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" sx={{ color: '#555' }}>
                          <strong>Email:</strong> {settings.contactEmail}
                        </Typography>
                      </Grid>
                    )}
                    {settings.contactPhone && (
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" sx={{ color: '#555' }}>
                          <strong>Phone:</strong> {settings.contactPhone}
                        </Typography>
                      </Grid>
                    )}
                  </Grid>
                </Box>
              )}

              {settings.minAdvanceDays > 0 && settings.maxAdvanceDays > 0 && (
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: GOLD, mb: 1 }}>
                    Booking Window
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>
                    Book between {settings.minAdvanceDays} to {settings.maxAdvanceDays} days in advance
                  </Typography>
                </Box>
              )}

              {settings.termsAndConditions && (
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: GOLD, mb: 1 }}>
                    Terms & Conditions
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.8 }}>
                    {settings.termsAndConditions}
                  </Typography>
                </Box>
              )}
            </Box>
          )}

          {/* VAZHIPAD PRICES */}
          {settings.vazhipadPrices.length > 0 && (
            <Box sx={{ mb: 4, p: 3, bgcolor: 'rgba(212,175,55,0.08)', borderRadius: 3, border: `1px solid ${GOLD}30` }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: GOLD, mb: 2 }}>
                Vazhipad Prices
              </Typography>
              <Grid container spacing={2}>
                {settings.vazhipadPrices.map((vazhipad) => (
                  <Grid item xs={12} sm={6} md={4} key={vazhipad.id}>
                    <Paper sx={{ 
                      p: 2, 
                      bgcolor: '#fff', 
                      border: `2px solid ${GOLD}40`,
                      borderRadius: 2,
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderColor: GOLD,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 4px 12px ${GOLD}30`,
                      }
                    }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#333', mb: 0.5 }}>
                        {vazhipad.name}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD, mb: 1 }}>
                        {vazhipad.price}
                      </Typography>
                      {vazhipad.description && (
                        <Typography variant="body2" sx={{ color: '#666', fontSize: '0.85rem' }}>
                          {vazhipad.description}
                        </Typography>
                      )}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* CONTROLS: SEARCH AND FILTER */}
          <Grid container spacing={2} sx={{ mb: 4 }} alignItems="center">
            <Grid item xs={12} md={7}>
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
            <Grid item xs={12} md={2}>
              <Box>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={loadPoojas}
                  disabled={loadingPoojas}
                  startIcon={<RefreshIcon />}
                  sx={{
                    height: 56,
                    borderRadius: 3,
                    borderColor: GOLD,
                    borderWidth: 2,
                    color: GOLD,
                    fontWeight: 700,
                    '&:hover': {
                      borderColor: '#e5c158',
                      borderWidth: 2,
                      bgcolor: 'rgba(212,175,55,0.05)',
                    },
                  }}
                >
                  {loadingPoojas ? 'Loading...' : 'Refresh'}
                </Button>
                {lastRefreshTime && (
                  <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: '#666', mt: 0.5, fontSize: '0.7rem' }}>
                    Last: {lastRefreshTime}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
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
          {settings.enabled && selectedPoojaIds.length > 0 && (
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

