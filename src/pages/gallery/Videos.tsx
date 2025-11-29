import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function GalleryVideos() {
  const videos = [
    { title: 'Temple Virtual Tour', youtubeId: 'bFHz3KocQc0' },
    { title: 'Morning Pooja Rituals', youtubeId: 'bFHz3KocQc0' },
    { title: 'Festival Celebrations', youtubeId: 'bFHz3KocQc0' },
    { title: 'Temple Documentary', youtubeId: 'bFHz3KocQc0' },
  ];

  return (
    <>
      <PageBanner title="Video Gallery" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: 4,
              border: `3px solid #d4af37`,
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
              <Typography variant="body1" sx={{ mb: 4, mt: 2, fontSize: '1.05rem', color: '#555', lineHeight: 1.7 }}>
                Watch videos of temple rituals, festivals, and special events. Experience the divine atmosphere from anywhere in the world.
              </Typography>

              <Grid container spacing={3}>
                {videos.map((video, index) => (
                  <Grid item xs={12} key={index}>
                    <Box
                      sx={{
                        borderRadius: 4,
                        overflow: 'hidden',
                        border: '3px solid #d4af37',
                        boxShadow: '0 12px 40px rgba(212,175,55,0.3)',
                        transition: 'all 300ms ease',
                        '&:hover': {
                          boxShadow: '0 16px 56px rgba(212,175,55,0.4)',
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <Box
                        component="iframe"
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        sx={{
                          width: '100%',
                          height: 400,
                          border: 'none',
                          display: 'block',
                        }}
                      />
                      <Box sx={{ 
                        p: 2, 
                        background: 'linear-gradient(135deg, rgba(212,175,55,0.1), rgba(229,193,88,0.1))',
                        borderTop: '2px solid #d4af37',
                      }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#d4af37' }}>
                          {video.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ 
                mt: 4, 
                p: 3, 
                background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(229,193,88,0.15))', 
                borderRadius: 4, 
                textAlign: 'center',
                border: '2px solid rgba(212,175,55,0.3)',
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#d4af37', mb: 1 }}>
                  Subscribe to Our YouTube Channel
                </Typography>
                <Typography sx={{ color: '#555' }}>Stay updated with live streams of daily poojas and festival celebrations</Typography>
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
