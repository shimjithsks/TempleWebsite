/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import PageBanner from '../../components/PageBanner';
import PoojaSidebar from '../../components/PoojaSidebar';
import { 
  Container, Typography, Box, Paper, Grid, Card, CardContent, 
  Avatar, Chip, TextField, InputAdornment, Button 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpaIcon from '@mui/icons-material/Spa';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CakeIcon from '@mui/icons-material/Cake';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link as RouterLink } from 'react-router-dom';

const GOLD = '#d4af37';

export default function VazhipadList() {
  const [searchTerm, setSearchTerm] = useState('');

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
     { name: 'രക്ഷസിനുപൂജ', price: '₹200' },
     { name: 'രക്ഷസിനു പാൽപായസം', price: '₹150' },
     { name: 'രക്ഷസിനു വിളക്ക്', price: '₹30' },
  ];

  const filteredVazhipads = vazhipads.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageBanner title="Vazhipad List" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: 4,
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
                justifyContent: 'space-between',
                gap: 2, 
                mb: 4,
                mt: 2,
                flexWrap: 'wrap',
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ 
                    width: 56, 
                    height: 56, 
                    bgcolor: GOLD,
                    boxShadow: `0 8px 24px rgba(212,175,55,0.4)`,
                  }}>
                    <LocalOfferIcon sx={{ fontSize: 32, color: '#fff' }} />
                  </Avatar>
                  <Box>
                    <Typography variant="h4" sx={{ 
                      fontWeight: 900,
                      background: 'linear-gradient(135deg, #d4af37 0%, #e5c158 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      Vazhipad Offerings
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', fontWeight: 600, mt: 0.5 }}>
                      Traditional devotional offerings to the deity
                    </Typography>
                  </Box>
                </Box>

                <TextField
                  size="small"
                  placeholder="Search offerings..."
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
                    minWidth: 250,
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
              </Box>

              <Grid container spacing={3} sx={{ mb: 4 }}>
                {/* Render all non-Brahmarakshas vazhipads first */}
                {filteredVazhipads
                  .filter(item => item.name !== 'രക്ഷസിനുപൂജ' && item.name !== 'രക്ഷസിനു പാൽപായസം' && item.name !== 'രക്ഷസിനു വിളക്ക്')
                  .map((item, index) => (
                    <Grid item xs={12} sm={6} key={item.name}>
                      <Card elevation={0} sx={{ 
                        border: `3px solid ${GOLD}`,
                        borderRadius: 4,
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        height: '100%',
                        background: 'linear-gradient(135deg, #fff 0%, #fffef8 100%)',
                        '&:hover': { 
                          transform: 'translateY(-8px)',
                          boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                          borderColor: '#e5c158',
                        } 
                      }}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ 
                                fontWeight: 700, 
                                color: GOLD,
                                fontSize: '1.1rem',
                                mb: 0.5,
                              }}>
                                {item.name}
                              </Typography>
                              <Chip
                                label={item.price}
                                size="small"
                                sx={{
                                  bgcolor: GOLD,
                                  color: '#000',
                                  fontWeight: 800,
                                  fontSize: '0.85rem',
                                  height: 24,
                                  borderRadius: 2,
                                }}
                              />
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}

                {/* Brahmarakshas section title */}
                {filteredVazhipads.some(item => item.name === 'രക്ഷസിനുപൂജ') && (
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontWeight: 900, color: GOLD, mb: 2, mt: 2, fontSize: '1.15rem', letterSpacing: 1 }}>
                      ബ്രഹ്മരക്ഷസിനുള്ള വഴിപാടുകൾ
                    </Typography>
                  </Grid>
                )}

                {/* Render Brahmarakshas vazhipads */}
                {filteredVazhipads
                  .filter(item => item.name === 'രക്ഷസിനുപൂജ' || item.name === 'രക്ഷസിനു പാൽപായസം' || item.name === 'രക്ഷസിനു വിളക്ക്')
                  .map((item, index) => (
                    <Grid item xs={12} sm={6} key={item.name}>
                      <Card elevation={0} sx={{ 
                        border: `3px solid ${GOLD}`,
                        borderRadius: 4,
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        height: '100%',
                        background: 'linear-gradient(135deg, #fff 0%, #fffef8 100%)',
                        '&:hover': { 
                          transform: 'translateY(-8px)',
                          boxShadow: '0 16px 48px rgba(212,175,55,0.35)',
                          borderColor: '#e5c158',
                        } 
                      }}>
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Box sx={{ flex: 1 }}>
                              <Typography variant="h6" sx={{ 
                                fontWeight: 700, 
                                color: GOLD,
                                fontSize: '1.1rem',
                                mb: 0.5,
                              }}>
                                {item.name}
                              </Typography>
                              <Chip
                                label={item.price}
                                size="small"
                                sx={{
                                  bgcolor: GOLD,
                                  color: '#000',
                                  fontWeight: 800,
                                  fontSize: '0.85rem',
                                  height: 24,
                                  borderRadius: 2,
                                }}
                              />
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
              </Grid>

              {filteredVazhipads.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 8 }}>
                  <SearchIcon sx={{ fontSize: 64, color: '#ccc', mb: 2 }} />
                  <Typography variant="h6" sx={{ color: '#999' }}>
                    No offerings found matching "{searchTerm}"
                  </Typography>
                </Box>
              )}

              <Box sx={{ 
                mt: 4, 
                p: 4, 
                bgcolor: 'rgba(212,175,55,0.08)',
                border: `2px solid rgba(212,175,55,0.3)`,
                borderRadius: 4,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${GOLD} 0%, #e5c158 100%)`,
                }
              }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  mb: 3,
                  color: GOLD,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}>
                  <CheckCircleIcon sx={{ fontSize: 28 }} />
                  How to Book Vazhipad
                </Typography>
                <Grid container spacing={3}>
                  {[
                    { step: '1', text: 'Visit the temple counter directly for instant booking' },
                    { step: '2', text: 'Book online through our website portal' },
                    { step: '3', text: 'Call temple office for advance booking' },
                    { step: '4', text: 'Prasadam will be provided after the offering' },
                  ].map((item, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                        <Avatar sx={{
                          width: 36,
                          height: 36,
                          bgcolor: GOLD,
                          fontSize: '1rem',
                          fontWeight: 900,
                          flexShrink: 0,
                        }}>
                          {item.step}
                        </Avatar>
                        <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.7, fontWeight: 600, pt: 0.5 }}>
                          {item.text}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Button
                    component={RouterLink}
                    to="/poojas/booking"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: GOLD,
                      color: '#000',
                      fontWeight: 800,
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      fontSize: '1rem',
                      boxShadow: `0 8px 24px ${GOLD}50`,
                      '&:hover': {
                        bgcolor: '#e5c158',
                        transform: 'translateY(-2px)',
                        boxShadow: `0 12px 32px ${GOLD}60`,
                      },
                      transition: 'all 300ms ease',
                    }}
                  >
                    Book Vazhipad Online
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <PoojaSidebar activePath="/poojas/vazhipad" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
