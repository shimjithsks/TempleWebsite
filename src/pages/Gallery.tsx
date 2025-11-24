import React from 'react';
import { Box, Tabs, Tab, Grid, Typography, Container, Paper } from '@mui/material';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';

export default function Gallery() {
  const [tab, setTab] = React.useState(0);

  return (
    <>
      <PageBanner title="Temple Gallery" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>Explore Highlights</Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>
                Switch between curated photo highlights and video snippets directly from this overview or use the navigation on the right for full galleries.
              </Typography>
              <Tabs value={tab} onChange={(_, v) => setTab(v)}>
                <Tab label="Photos" />
                <Tab label="Videos" />
              </Tabs>

              {tab === 0 && (
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Grid item xs={6} sm={4} md={3} key={i}>
                      <Box
                        sx={{
                          width: '100%',
                          height: 200,
                          bgcolor: '#e0e0e0',
                          borderRadius: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.875rem',
                        }}
                      >
                        Gallery Image {i}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}

              {tab === 1 && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    Videos will appear here. Embed YouTube videos as needed.
                  </Typography>
                  <Box
                    sx={{
                      width: '100%',
                      height: 360,
                      bgcolor: '#e0e0e0',
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Video Player
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="gallery" activePath="/gallery" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
