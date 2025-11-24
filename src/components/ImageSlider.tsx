import React, { useState, useEffect } from 'react';
import { Box, IconButton, Button, Typography, Fade } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink } from 'react-router-dom';

const sliderImages = [
  {
    id: 1,
    title: 'Welcome to Muchukunnu Sri Kotta-Kovilakam Kshethram',
    subtitle: 'Preserving tradition. Serving devotion.',
    color: '#E63946',
    image: '/assets/slider_1.jpg',
    overlay: 'rgba(0,0,0,0.45)',
    isMain: true,
  },
  {
    id: 2,
    title: 'Temple Main Entrance',
    color: '#E63946',
    image: '/assets/slider_2.jpg',
    overlay: 'rgba(0,0,0,0.35)',
  },
  {
    id: 3,
    title: 'Temple Premises',
    color: '#E63946',
    image: '/assets/slide_3.png',
    overlay: 'rgba(0,0,0,0.35)',
  },
  {
    id: 4,
    title: 'Festive Moments',
    color: '#ffffff',
    image: '/assets/slide_4.png',
    overlay: 'rgba(0,0,0,0.35)',
  },
  {
    id: 5,
    title: 'Devotee Gatherings',
    color: '#556B2F',
    image: '/assets/slide_5.png',
    overlay: 'rgba(0,0,0,0.45)',
  },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlide, setVisibleSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setVisibleSlide(currentSlide), 180);
    return () => clearTimeout(fadeTimer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <Box sx={{ position: 'relative', width: '100vw', marginLeft: 'calc(-50vw + 50%)', bgcolor: '#000' }}>
      <Box sx={{ position: 'relative', height: 680, overflow: 'hidden', width: '100%' }}>
        {sliderImages.map((image, idx) => (
          <Fade in={idx === visibleSlide} timeout={700} mountOnEnter unmountOnExit key={image.id}>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: image.color,
                backgroundImage: image.image
                  ? `linear-gradient(${image.overlay || 'rgba(0,0,0,0.3)'}, ${image.overlay || 'rgba(0,0,0,0.3)'}), url(${image.image})`
                  : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
              }}
            >
              {image.isMain ? (
                <Box sx={{ textAlign: 'center', color: '#fff', px: 3 }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                    {image.title}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 4, fontWeight: 300 }}>
                    {image.subtitle}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      component={RouterLink}
                      to="/donate"
                      sx={{
                        bgcolor: '#ffffff',
                        color: '#E63946',
                        fontWeight: 700,
                        '&:hover': { bgcolor: '#f8f9fa' },
                      }}
                    >
                      Donate Now
                    </Button>
                    <Button
                      variant="outlined"
                      component={RouterLink}
                      to="/poojas"
                      sx={{
                        color: '#fff',
                        borderColor: '#fff',
                        fontWeight: 700,
                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                      }}
                    >
                      Book a Pooja
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ textAlign: 'center', color: '#fff' }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {image.title}
                  </Typography>
                </Box>
              )}
            </Box>
          </Fade>
        ))}

        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            bgcolor: 'rgba(255,255,255,0.25)',
            color: '#fff',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.5)' },
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: 40 }} />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            bgcolor: 'rgba(255,255,255,0.25)',
            color: '#fff',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.5)' },
          }}
        >
          <ChevronRightIcon sx={{ fontSize: 40 }} />
        </IconButton>

        <Box
          sx={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 10,
          }}
        >
          {sliderImages.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              sx={{
                width: idx === currentSlide ? 28 : 12,
                height: 8,
                borderRadius: 4,
                bgcolor: idx === currentSlide ? '#fff' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
