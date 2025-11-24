import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function GalleryVideos() {
  const videos = [
    { title: 'Temple Virtual Tour', duration: '12:45', views: '15K' },
    { title: 'Morning Pooja Rituals', duration: '8:30', views: '8.5K' },
    { title: 'Onam Festival Celebrations 2024', duration: '18:22', views: '25K' },
    { title: 'Shivaratri Special Coverage', duration: '15:40', views: '22K' },
    { title: 'Annadanam Service', duration: '6:15', views: '5.2K' },
    { title: 'Temple History Documentary', duration: '25:30', views: '12K' },
  ];

  return (
    <>
      <PageBanner title="Video Gallery" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Watch videos of temple rituals, festivals, and special events. Experience the divine atmosphere from anywhere in the world.
              </Typography>

              <Grid container spacing={3}>
                {videos.map((video, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card
                      elevation={2}
                      sx={{
                        cursor: 'pointer',
                        '&:hover': { boxShadow: 6 },
                      }}
                    >
                      <Box
                        sx={{
                          height: 200,
                          bgcolor: '#333',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        }}
                      >
                        <PlayCircleOutlineIcon
                          sx={{
                            fontSize: 80,
                            color: '#fff',
                            opacity: 0.8,
                            '&:hover': { opacity: 1 },
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 10,
                            right: 10,
                            bgcolor: 'rgba(0,0,0,0.8)',
                            color: '#fff',
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: '0.9rem',
                          }}
                        >
                          {video.duration}
                        </Box>
                      </Box>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {video.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666' }}>
                          {video.views} views
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#ffebee', borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Subscribe to Our YouTube Channel
                </Typography>
                <Typography>Stay updated with live streams of daily poojas and festival celebrations</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="gallery" activePath="/gallery/videos" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
