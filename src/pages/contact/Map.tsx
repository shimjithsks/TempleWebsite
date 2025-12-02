/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Avatar, Chip, Divider } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import DirectionsIcon from '@mui/icons-material/Directions';
import FlightIcon from '@mui/icons-material/Flight';
import TrainIcon from '@mui/icons-material/Train';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DistanceIcon from '@mui/icons-material/SocialDistance';

const GOLD = '#d4af37';

export default function ContactMap() {
  return (
    <>
      <PageBanner title="Map & Directions" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: 4,
              border: `3px solid ${GOLD}`,
              borderRadius: 4,
              boxShadow: '0 8px 24px rgba(212,175,55,0.2)',
              background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -3,
                left: 0,
                right: 0,
                height: 6,
                background: `linear-gradient(90deg, ${GOLD}, #e5c158, ${GOLD})`,
                borderRadius: '4px 4px 0 0',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s linear infinite',
              },
              '@keyframes shimmer': {
                '0%': { backgroundPosition: '-200% 0' },
                '100%': { backgroundPosition: '200% 0' },
              },
            }}>
              {/* Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    background: `linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)`,
                    boxShadow: '0 4px 12px rgba(76,175,80,0.3)',
                  }}
                >
                  <MapIcon sx={{ fontSize: 36, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 900, color: GOLD, mb: 0.5 }}>
                    Map & Directions
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    Find us easily with detailed directions from major landmarks
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Box sx={{ 
                border: `3px solid ${GOLD}`,
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(212,175,55,0.2)',
                mb: 4,
              }}>
                <iframe
                  title="Muchukunnu Temple Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.8!2d75.51488!3d11.79765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba688f70ba4cc09%3A0xa1db14313acaad96!2sMuchukunnu%20Kottayil%20Sree%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>

              {/* From Airport */}
              <Box sx={{ 
                p: 3, 
                background: `linear-gradient(135deg, rgba(33,150,243,0.1) 0%, rgba(33,150,243,0.05) 100%)`,
                borderRadius: 2, 
                mb: 3,
                border: `2px solid rgba(33,150,243,0.3)`,
                borderLeft: `6px solid #2196f3`,
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#2196f3', width: 50, height: 50 }}>
                    <FlightIcon sx={{ fontSize: 26 }} />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#2196f3' }}>From Calicut International Airport</Typography>
                    <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                      <Chip 
                        label="45 km" 
                        size="small"
                        icon={<DistanceIcon sx={{ fontSize: 16 }} />}
                        sx={{ bgcolor: 'rgba(33,150,243,0.2)', fontWeight: 600 }} 
                      />
                      <Chip 
                        label="1 hour" 
                        size="small"
                        icon={<AccessTimeIcon sx={{ fontSize: 16 }} />}
                        sx={{ bgcolor: 'rgba(33,150,243,0.2)', fontWeight: 600 }} 
                      />
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ pl: 8 }}>
                  <Typography sx={{ mb: 0.5 }}>1. Head north on Airport Road</Typography>
                  <Typography sx={{ mb: 0.5 }}>2. Merge onto NH66 toward Kozhikode</Typography>
                  <Typography sx={{ mb: 0.5 }}>3. Continue on NH66 for approximately 40 km</Typography>
                  <Typography sx={{ mb: 0.5 }}>4. Take exit toward Muchukunnu/Koyilandy</Typography>
                  <Typography sx={{ mb: 0.5 }}>5. Turn right at Muchukunnu Junction</Typography>
                  <Typography>6. Muchukunnu Kottayil Sree Shiva Temple is 500m on the left</Typography>
                </Box>
              </Box>

              {/* From Railway Station */}
              <Box sx={{ 
                p: 3, 
                background: `linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0.05) 100%)`,
                borderRadius: 2, 
                mb: 3,
                border: `2px solid rgba(76,175,80,0.3)`,
                borderLeft: `6px solid #4caf50`,
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#4caf50', width: 50, height: 50 }}>
                    <TrainIcon sx={{ fontSize: 26 }} />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#4caf50' }}>From Koyilandy Railway Station</Typography>
                    <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                      <Chip 
                        label="12 km" 
                        size="small"
                        icon={<DistanceIcon sx={{ fontSize: 16 }} />}
                        sx={{ bgcolor: 'rgba(76,175,80,0.2)', fontWeight: 600 }} 
                      />
                      <Chip 
                        label="25 minutes" 
                        size="small"
                        icon={<AccessTimeIcon sx={{ fontSize: 16 }} />}
                        sx={{ bgcolor: 'rgba(76,175,80,0.2)', fontWeight: 600 }} 
                      />
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ pl: 8 }}>
                  <Typography sx={{ mb: 0.5 }}>1. Exit station and head toward Koyilandy town</Typography>
                  <Typography sx={{ mb: 0.5 }}>2. Take Koyilandy-Vatakara Road</Typography>
                  <Typography sx={{ mb: 0.5 }}>3. Continue for approximately 10 km</Typography>
                  <Typography sx={{ mb: 0.5 }}>4. Turn left at Muchukunnu Junction</Typography>
                  <Typography>5. Muchukunnu Kottayil Sree Shiva Temple is 500m on the left</Typography>
                </Box>
              </Box>

              {/* Landmarks */}
              <Box sx={{ 
                p: 3, 
                background: `linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(229,193,88,0.05) 100%)`,
                borderRadius: 2,
                border: `2px solid rgba(212,175,55,0.3)`,
                borderLeft: `6px solid ${GOLD}`,
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ bgcolor: GOLD, width: 50, height: 50 }}>
                    <LocationOnIcon sx={{ fontSize: 26, color: '#000' }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD }}>Landmarks Near Muchukunnu Kottayil Temple</Typography>
                </Box>
                <Box sx={{ pl: 8, display: 'grid', gap: 1 }}>
                  <Typography>• Near Muchukunnu Junction (Main landmark)</Typography>
                  <Typography>• Kelappaji Nagar, Muchukunnu</Typography>
                  <Typography>• Close to Moodadi area</Typography>
                  <Typography>• Accessible via Koyilandy-Vatakara Road</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="contact" activePath="/contact/map" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
