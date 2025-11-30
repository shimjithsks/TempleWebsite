import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Fade } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { colors } from '../theme/colors';

const sliderImages = [
  {
    id: 1,
    title: 'Welcome to Muchukunnu Sri Kotta-Kovilakam Kshethram',
    subtitle: 'Preserving tradition. Serving devotion.',
    color: colors.primary,
    image: `${process.env.PUBLIC_URL}/assets/slider_1.jpg`,
    overlay: 'rgba(0,0,0,0.45)',
    isMain: true,
  },
  {
    id: 2,
  //  title: 'Temple Main Entrance',
    color: colors.primary,
    image: `${process.env.PUBLIC_URL}/assets/slider_2.jpg`,
    overlay: 'rgba(0,0,0,0.35)',
  },
  {
    id: 3,
  //  title: 'Temple Premises',
    color: colors.primary,
    image: `${process.env.PUBLIC_URL}/assets/slide_3.png`,
    overlay: 'rgba(0,0,0,0.35)',
  },
  {
    id: 4,
   // title: 'Festive Moments',
    color: colors.white,
    image: `${process.env.PUBLIC_URL}/assets/slide_4.png`,
    overlay: 'rgba(0,0,0,0.35)',
  },
  {
    id: 5,
    title: 'Devotee Gatherings',
    color: colors.olive,
    image: `${process.env.PUBLIC_URL}/assets/slide_5.png`,
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

  // Manual navigation removed (prev/next arrows) – auto-advance only.

  return (
    <Box sx={{ position: 'relative', width: '100vw', marginLeft: 'calc(-50vw + 50%)', bgcolor: colors.black, mt: -15 }}>
      <Box sx={{ position: 'relative', height: 790, overflow: 'hidden', width: '100%' }}>
        {sliderImages.map((image, idx) => (
          <Fade in={idx === visibleSlide} timeout={700} mountOnEnter unmountOnExit key={image.id}>
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: image.color,
                backgroundImage: image.image
                  ? `linear-gradient(${image.overlay || colors.overlayDark30}, ${image.overlay || colors.overlayDark30}), url(${image.image})`
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
                <Box sx={{ textAlign: 'center', color: colors.white, px: 3 }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, mb: 1.5, textShadow: '0 6px 22px rgba(0,0,0,0.55)' }}>
                    {image.title}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 400, opacity: 0.95 }}>
                    {image.subtitle}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      component={RouterLink}
                      to="/donate"
                      sx={{
                        bgcolor: '#d4af37',
                        color: '#000',
                        fontWeight: 800,
                        px: 3.5,
                        py: 1.2,
                        fontSize: '1rem',
                        borderRadius: 999,
                        boxShadow: '0 8px 24px rgba(212,175,55,0.4), 0 4px 12px rgba(0,0,0,0.3)',
                        border: '2px solid rgba(255,255,255,0.3)',
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                        '&:hover': { 
                          bgcolor: '#e5c158',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 32px rgba(212,175,55,0.5), 0 6px 16px rgba(0,0,0,0.4)',
                        },
                      }}
                    >
                      Donate Now
                    </Button>
                    <Button
                      variant="outlined"
                      component={RouterLink}
                      to="/poojas"
                      sx={{
                        color: colors.white,
                        borderColor: 'rgba(255,255,255,0.7)',
                        borderWidth: 2,
                        fontWeight: 800,
                        px: 3.5,
                        py: 1.2,
                        fontSize: '1rem',
                        borderRadius: 999,
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(4px)',
                        bgcolor: 'rgba(0,0,0,0.15)',
                        '&:hover': { 
                          bgcolor: 'rgba(255,255,255,0.2)',
                          borderColor: 'rgba(255,255,255,0.9)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Book a Pooja
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ textAlign: 'center', color: colors.white }}>
                  {image.title && (
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                      {image.title}
                    </Typography>
                  )}
                  <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      component={RouterLink}
                      to="/donate"
                      sx={{
                        bgcolor: '#d4af37',
                        color: '#000',
                        fontWeight: 800,
                        px: 3.5,
                        py: 1.2,
                        fontSize: '1rem',
                        borderRadius: 999,
                        boxShadow: '0 8px 24px rgba(212,175,55,0.4), 0 4px 12px rgba(0,0,0,0.3)',
                        border: '2px solid rgba(255,255,255,0.3)',
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                        '&:hover': { 
                          bgcolor: '#e5c158',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 32px rgba(212,175,55,0.5), 0 6px 16px rgba(0,0,0,0.4)',
                        },
                      }}
                    >
                      Donate Now
                    </Button>
                    <Button
                      variant="outlined"
                      component={RouterLink}
                      to="/poojas"
                      sx={{
                        color: colors.white,
                        borderColor: 'rgba(255,255,255,0.7)',
                        borderWidth: 2,
                        fontWeight: 800,
                        px: 3.5,
                        py: 1.2,
                        fontSize: '1rem',
                        borderRadius: 999,
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(4px)',
                        bgcolor: 'rgba(0,0,0,0.15)',
                        '&:hover': { 
                          bgcolor: 'rgba(255,255,255,0.2)',
                          borderColor: 'rgba(255,255,255,0.9)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Book a Pooja
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Fade>
        ))}

        {/* Overlay scrims and chips */}
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {/* Top gradient for header readability */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 140,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.0))',
          }} />

        </Box>

        {/* Arrow buttons removed per request */}

        {/* Dot indicators removed per request */}
      </Box>
    </Box>
  );
}
