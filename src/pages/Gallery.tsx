import React from 'react';
import { Box, Tabs, Tab, Grid, Typography, Container, Paper, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';

export default function Gallery() {
  const [tab, setTab] = React.useState(0);
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentImages, setCurrentImages] = React.useState<string[]>([]);

  const photos = [
    `${process.env.PUBLIC_URL}/assets/header_god_image.png`,
    `${process.env.PUBLIC_URL}/assets/slider_1.jpg`,
    `${process.env.PUBLIC_URL}/assets/slider_2.jpg`,
    `${process.env.PUBLIC_URL}/assets/slide_3.png`,
  ];

  const events = [
    { name: 'Vishu Celebration', img: `${process.env.PUBLIC_URL}/assets/slider_1.jpg` },
    { name: 'Annual Festival', img: `${process.env.PUBLIC_URL}/assets/slider_2.jpg` },
    { name: 'Onam Festivities', img: `${process.env.PUBLIC_URL}/assets/slider_6.jpg` },
  ];

  const premises = [
    { name: 'Main Temple', img: `${process.env.PUBLIC_URL}/assets/slide_3.png` },
    { name: 'Mandapam Hall', img: `${process.env.PUBLIC_URL}/assets/slider_1.jpg` },
    { name: 'Temple Entrance', img: `${process.env.PUBLIC_URL}/assets/slider_6.jpg` },
  ];

  const handleImageClick = (img: string, images: string[], index: number) => {
    setCurrentImage(img);
    setCurrentImages(images);
    setCurrentIndex(index);
    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setPreviewOpen(false);
  };

  const handlePrevImage = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : currentImages.length - 1;
    setCurrentIndex(newIndex);
    setCurrentImage(currentImages[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = currentIndex < currentImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setCurrentImage(currentImages[newIndex]);
  };

  return (
    <>
      <PageBanner title="Temple Gallery" />
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
              <Typography variant="h4" sx={{ 
                fontWeight: 900, 
                background: 'linear-gradient(135deg, #d4af37 0%, #e5c158 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                mt: 2,
              }}>Explore Highlights</Typography>
              <Typography variant="body1" sx={{ mb: 4, color: '#555', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Switch between curated photo highlights and video snippets directly from this overview or use the navigation on the right for full galleries.
              </Typography>
              <Tabs 
                value={tab} 
                onChange={(_, v) => setTab(v)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  borderBottom: '2px solid rgba(212,175,55,0.2)',
                  mb: 3,
                  '& .MuiTab-root': {
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    '&.Mui-selected': {
                      color: '#d4af37',
                    }
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#d4af37',
                    height: 4,
                    borderRadius: '4px 4px 0 0',
                  }
                }}
              >
                <Tab label="Photos" />
                <Tab label="Videos" />
                <Tab label="Events" />
                <Tab label="Premises" />
              </Tabs>

              {tab === 0 && (
                <Grid container spacing={3} sx={{ mt: 1 }}>
                  {photos.map((photo, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      <Box
                        onClick={() => handleImageClick(photo, photos, i)}
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
                            boxShadow: '0 16px 48px rgba(212,175,55,0.4)',
                          }
                        }}
                      >
                        <Box
                          component="img"
                          src={photo}
                          alt={`Gallery ${i + 1}`}
                          sx={{
                            width: '100%',
                            height: 220,
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                        <Box sx={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          px: 1.5,
                          py: 0.6,
                          borderRadius: 3,
                          bgcolor: 'rgba(212,175,55,0.95)',
                          color: '#000',
                          fontSize: 13,
                          fontWeight: 800,
                          letterSpacing: 0.5,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        }}>
                          Photo {i + 1}
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}

              {tab === 1 && (
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          borderRadius: 4,
                          overflow: 'hidden',
                          border: '3px solid #d4af37',
                          boxShadow: '0 12px 40px rgba(212,175,55,0.3)',
                        }}
                      >
                        <Box
                          component="iframe"
                          src="https://www.youtube.com/embed/bFHz3KocQc0"
                          title="Temple Video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          sx={{
                            width: '100%',
                            height: 420,
                            border: 'none',
                            display: 'block',
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          borderRadius: 4,
                          overflow: 'hidden',
                          border: '3px solid #d4af37',
                          boxShadow: '0 12px 40px rgba(212,175,55,0.3)',
                        }}
                      >
                        <Box
                          component="iframe"
                          src="https://www.youtube.com/embed/bFHz3KocQc0"
                          title="Temple Tour"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          sx={{
                            width: '100%',
                            height: 420,
                            border: 'none',
                            display: 'block',
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              )}

              {tab === 2 && (
                <Grid container spacing={3} sx={{ mt: 1 }}>
                  {events.map((event, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      <Box
                        onClick={() => handleImageClick(event.img, events.map(e => e.img), i)}
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
                            boxShadow: '0 16px 48px rgba(212,175,55,0.4)',
                          }
                        }}
                      >
                        <Box
                          component="img"
                          src={event.img}
                          alt={event.name}
                          sx={{
                            width: '100%',
                            height: 220,
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                        <Box sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          px: 2,
                          py: 1.5,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                        }}>
                          <Typography sx={{
                            color: '#d4af37',
                            fontWeight: 800,
                            fontSize: '1.05rem',
                            letterSpacing: 0.5,
                            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                          }}>
                            {event.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}

              {tab === 3 && (
                <Grid container spacing={3} sx={{ mt: 1 }}>
                  {premises.map((area, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      <Box
                        onClick={() => handleImageClick(area.img, premises.map(p => p.img), i)}
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
                            boxShadow: '0 16px 48px rgba(212,175,55,0.4)',
                          }
                        }}
                      >
                        <Box
                          component="img"
                          src={area.img}
                          alt={area.name}
                          sx={{
                            width: '100%',
                            height: 220,
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                        <Box sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          px: 2,
                          py: 1.5,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                        }}>
                          <Typography sx={{
                            color: '#d4af37',
                            fontWeight: 800,
                            fontSize: '1.05rem',
                            letterSpacing: 0.5,
                            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                          }}>
                            {area.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="gallery" activePath="/gallery" />
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
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClosePreview}
            sx={{
              position: 'absolute',
              top: -50,
              right: 0,
              color: '#fff',
              bgcolor: 'rgba(212, 175, 55, 0.9)',
              '&:hover': {
                bgcolor: '#d4af37',
                transform: 'scale(1.1)',
              },
              zIndex: 1,
              transition: 'all 0.2s ease',
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Previous Button */}
          {currentImages.length > 1 && (
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: 'absolute',
                left: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#fff',
                bgcolor: 'rgba(212, 175, 55, 0.9)',
                '&:hover': {
                  bgcolor: '#d4af37',
                  transform: 'translateY(-50%) scale(1.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <NavigateBeforeIcon sx={{ fontSize: 32 }} />
            </IconButton>
          )}

          {/* Image */}
          <Box
            component="img"
            src={currentImage}
            alt="Preview"
            sx={{
              maxWidth: '100%',
              maxHeight: '90vh',
              borderRadius: 2,
              border: '4px solid #d4af37',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
              display: 'block',
            }}
          />

          {/* Next Button */}
          {currentImages.length > 1 && (
            <IconButton
              onClick={handleNextImage}
              sx={{
                position: 'absolute',
                right: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#fff',
                bgcolor: 'rgba(212, 175, 55, 0.9)',
                '&:hover': {
                  bgcolor: '#d4af37',
                  transform: 'translateY(-50%) scale(1.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <NavigateNextIcon sx={{ fontSize: 32 }} />
            </IconButton>
          )}

          {/* Image Counter */}
          {currentImages.length > 1 && (
            <Box
              sx={{
                position: 'absolute',
                bottom: -40,
                left: '50%',
                transform: 'translateX(-50%)',
                bgcolor: 'rgba(212, 175, 55, 0.95)',
                color: '#000',
                px: 3,
                py: 1,
                borderRadius: 20,
                fontWeight: 700,
                fontSize: '0.95rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            >
              {currentIndex + 1} / {currentImages.length}
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
}
