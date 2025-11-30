import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Avatar, Divider } from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

export default function TempleHistory() {
  const GOLD = '#d4af37';

  return (
    <>
      <PageBanner title="Temple History" />
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
                background: `linear-gradient(90deg, ${GOLD} 0%, #e5c158 25%, ${GOLD} 50%, #e5c158 75%, ${GOLD} 100%)`,
                animation: 'shimmer 3s linear infinite',
                backgroundSize: '200% 100%',
                '@keyframes shimmer': {
                  '0%': { backgroundPosition: '-200% 0' },
                  '100%': { backgroundPosition: '200% 0' },
                },
              }
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, mt: 2 }}>
                <Avatar sx={{ 
                  width: 70, 
                  height: 70, 
                  bgcolor: '#9c27b0',
                  background: 'linear-gradient(135deg, #9c27b0 0%, #ba68c8 100%)',
                  boxShadow: '0 4px 20px rgba(156,39,176,0.4)'
                }}>
                  <HistoryEduIcon sx={{ fontSize: 40, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: GOLD }}>
                    A Legacy of 150 Years
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                    Preserving spiritual heritage through generations
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: 'rgba(212,175,55,0.3)' }} />

              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                The Muchukunnu Sri Kotta-Kovilakam Kshethram stands as a testament to centuries of devotion and spiritual heritage. Founded in 1874 by the royal Kotta-Kovilakam family, this sacred temple has been a beacon of faith for devotees across Kerala and beyond.
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                The temple's history is deeply intertwined with the cultural and social fabric of the region. It served not just as a place of worship, but also as a center for learning, cultural activities, and community gatherings. Over the decades, the temple has preserved traditional rituals while adapting to serve the evolving needs of devotees.
              </Typography>

              <Grid container spacing={3} sx={{ my: 4 }}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ 
                    p: 3, 
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.15))', 
                    borderRadius: 4,
                    border: `3px solid ${GOLD}`,
                    boxShadow: '0 8px 20px rgba(212,175,55,0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: 6,
                      background: GOLD,
                    }
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: GOLD }}>
                      1874 - Foundation
                    </Typography>
                    <Typography sx={{ color: '#555', lineHeight: 1.7 }}>
                      Temple established by the Kotta-Kovilakam royal family. Original structure built following traditional Kerala temple architecture.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ 
                    p: 3, 
                    borderRadius: 4,
                    border: '3px solid #2196f3',
                    background: 'rgba(33,150,243,0.05)',
                    boxShadow: '0 8px 20px rgba(33,150,243,0.15)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: 6,
                      background: '#2196f3',
                    }
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1976d2' }}>
                      1925 - First Renovation
                    </Typography>
                    <Typography sx={{ color: '#555', lineHeight: 1.7 }}>
                      Major renovation and expansion to accommodate growing number of devotees. New mandapam constructed.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ 
                    p: 3, 
                    borderRadius: 4,
                    border: '3px solid #9c27b0',
                    background: 'rgba(156,39,176,0.05)',
                    boxShadow: '0 8px 20px rgba(156,39,176,0.15)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: 6,
                      background: '#9c27b0',
                    }
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#7b1fa2' }}>
                      1975 - Centenary Celebration
                    </Typography>
                    <Typography sx={{ color: '#555', lineHeight: 1.7 }}>
                      Grand centenary celebrations with cultural programs. Temple pond renovated and annadanam facility established.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ 
                    p: 3, 
                    borderRadius: 4,
                    border: '3px solid #4caf50',
                    background: 'rgba(76,175,80,0.05)',
                    boxShadow: '0 8px 20px rgba(76,175,80,0.15)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: 6,
                      background: '#4caf50',
                    }
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#388e3c' }}>
                      2024 - Modern Era
                    </Typography>
                    <Typography sx={{ color: '#555', lineHeight: 1.7 }}>
                      150th anniversary celebrated. Online services launched. Ongoing renovation to preserve heritage while modernizing facilities.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Today, the temple continues its legacy of serving devotees with the same devotion that inspired its founders. Modern amenities have been added without compromising the traditional sanctity and architectural beauty that make this temple unique.
              </Typography>

              <Box sx={{ 
                mt: 4, 
                p: 4, 
                background: `linear-gradient(135deg, rgba(212,175,55,0.15), rgba(229,193,88,0.15))`,
                borderRadius: 4,
                border: `3px solid ${GOLD}`,
                boxShadow: '0 8px 24px rgba(212,175,55,0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: GOLD }}>🏛️ Preservation Efforts</Typography>
                <Typography sx={{ color: '#555', lineHeight: 1.7 }}>
                  The temple management is committed to preserving the architectural heritage and traditional practices. Regular maintenance, documentation of rituals, and training of new priests ensure that this spiritual legacy continues for future generations.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="about" activePath="/about/history" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
