import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

export default function TempleHistory() {
  return (
    <>
      <PageBanner title="Temple History" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ mb: 3, color: '#E63946', fontWeight: 600 }}>
                A Legacy of 150 Years
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                The Muchukunnu Sri Kotta-Kovilakam Kshethram stands as a testament to centuries of devotion and spiritual heritage. Founded in 1874 by the royal Kotta-Kovilakam family, this sacred temple has been a beacon of faith for devotees across Kerala and beyond.
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                The temple's history is deeply intertwined with the cultural and social fabric of the region. It served not just as a place of worship, but also as a center for learning, cultural activities, and community gatherings. Over the decades, the temple has preserved traditional rituals while adapting to serve the evolving needs of devotees.
              </Typography>

              <Grid container spacing={3} sx={{ my: 4 }}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#E63946' }}>
                      1874 - Foundation
                    </Typography>
                    <Typography>
                      Temple established by the Kotta-Kovilakam royal family. Original structure built following traditional Kerala temple architecture.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#1976d2' }}>
                      1925 - First Renovation
                    </Typography>
                    <Typography>
                      Major renovation and expansion to accommodate growing number of devotees. New mandapam constructed.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 3, bgcolor: '#f3e5f5', borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#7b1fa2' }}>
                      1975 - Centenary Celebration
                    </Typography>
                    <Typography>
                      Grand centenary celebrations with cultural programs. Temple pond renovated and annadanam facility established.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 3, bgcolor: '#e8f5e9', borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#388e3c' }}>
                      2024 - Modern Era
                    </Typography>
                    <Typography>
                      150th anniversary celebrated. Online services launched. Ongoing renovation to preserve heritage while modernizing facilities.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Today, the temple continues its legacy of serving devotees with the same devotion that inspired its founders. Modern amenities have been added without compromising the traditional sanctity and architectural beauty that make this temple unique.
              </Typography>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Preservation Efforts</Typography>
                <Typography>
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
