import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function GalleryPhotos() {
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const photos = [
    { img: `${process.env.PUBLIC_URL}/assets/header_god_image.png`, title: 'Main Deity', category: 'Architecture' },
    { img: `${process.env.PUBLIC_URL}/assets/slider_1.jpg`, title: 'Temple View 1', category: 'Premises' },
    { img: `${process.env.PUBLIC_URL}/assets/slider_2.jpg`, title: 'Temple View 2', category: 'Premises' },
    { img: `${process.env.PUBLIC_URL}/assets/slide_3.png`, title: 'Festival Scene', category: 'Events' },
    { img: `${process.env.PUBLIC_URL}/assets/slide_4.png`, title: 'Sacred Space', category: 'Architecture' },
    { img: `${process.env.PUBLIC_URL}/assets/slide_5.png`, title: 'Temple Grounds', category: 'Premises' },
    { img: `${process.env.PUBLIC_URL}/assets/header_god_image.png`, title: 'Deity Close-up', category: 'Rituals' },
    { img: `${process.env.PUBLIC_URL}/assets/slider_6.jpg`, title: 'Evening View', category: 'Premises' },
    { img: `${process.env.PUBLIC_URL}/assets/slider_1.jpg`, title: 'Morning Rituals', category: 'Rituals' },
  ];

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setPreviewOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : photos.length - 1);
  };

  const handleNextImage = () => {
    setCurrentIndex(currentIndex < photos.length - 1 ? currentIndex + 1 : 0);
  };

  return (
    <>
      <PageBanner title="Photo Gallery" />
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
                Explore our temple through beautiful photographs capturing the divine atmosphere, festivals, and daily rituals.
              </Typography>

              <Grid container spacing={3}>
                {photos.map((photo, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      onClick={() => handleImageClick(index)}
                      sx={{
                        position: 'relative',
                        borderRadius: 4,
                        overflow: 'hidden',
                        border: '3px solid #d4af37',
                        boxShadow: '0 8px 24px rgba(212,175,55,0.3)',
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-8px) scale(1.02)',
                          boxShadow: '0 16px 48px rgba(212,175,55,0.5)',
                          '& .overlay': { opacity: 1 },
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={photo.img}
                        alt={photo.title}
                        sx={{
                          width: '100%',
                          height: 260,
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      <Box
                        className="overlay"
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                          p: 2,
                          opacity: 0,
                          transition: 'opacity 300ms ease',
                        }}
                      >
                        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, mb: 0.5 }}>
                          {photo.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#d4af37', fontWeight: 600, letterSpacing: 1 }}>
                          {photo.category}
                        </Typography>
                      </Box>
                      <Box sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        px: 1.5,
                        py: 0.6,
                        borderRadius: 3,
                        bgcolor: 'rgba(212,175,55,0.95)',
                        color: '#000',
                        fontSize: 12,
                        fontWeight: 800,
                        letterSpacing: 0.5,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      }}>
                        {photo.category}
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
                  Browse Temple Memories
                </Typography>
                <Typography sx={{ color: '#555' }}>
                  Capturing divine moments, festivals, and the serene beauty of our sacred space.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="gallery" activePath="/gallery/photos" />
          </Grid>
        </Grid>
      </Container>

      {/* Image Preview Modal */}
      <Modal
        open={previewOpen}
        onClose={handleClosePreview}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0,0,0,0.9)',
        }}
      >
        <Box sx={{ position: 'relative', outline: 'none' }}>
          {/* Close Button */}
          <IconButton
            onClick={handleClosePreview}
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              bgcolor: '#d4af37',
              color: 'white',
              '&:hover': { bgcolor: '#e5c158' },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Previous Button */}
          {photos.length > 1 && (
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: 'absolute',
                left: 20,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(212,175,55,0.8)',
                color: 'white',
                '&:hover': { bgcolor: '#d4af37' },
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
          )}

          {/* Next Button */}
          {photos.length > 1 && (
            <IconButton
              onClick={handleNextImage}
              sx={{
                position: 'absolute',
                right: 20,
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(212,175,55,0.8)',
                color: 'white',
                '&:hover': { bgcolor: '#d4af37' },
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          )}

          {/* Image */}
          <Box
            component="img"
            src={photos[currentIndex]?.img}
            alt={photos[currentIndex]?.title}
            sx={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              border: '4px solid #d4af37',
              borderRadius: 2,
            }}
          />

          {/* Image Counter */}
          {photos.length > 1 && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                bgcolor: 'rgba(212,175,55,0.9)',
                color: 'white',
                px: 3,
                py: 1,
                borderRadius: 3,
                fontWeight: 'bold',
              }}
            >
              {currentIndex + 1} / {photos.length}
            </Box>
          )}
        </Box>
      </Modal>
    </>

);
}
