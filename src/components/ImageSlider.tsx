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
    <Box sx={{ position: 'relative', width: '100vw', marginLeft: 'calc(-50vw + 50%)', bgcolor: colors.black }}>
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
                        bgcolor: colors.white,
                        color: colors.primary,
                        fontWeight: 700,
                        '&:hover': { bgcolor: colors.gray100 },
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
                        borderColor: colors.white,
                        fontWeight: 700,
                        '&:hover': { bgcolor: colors.white10 },
                      }}
                    >
                      Book a Pooja
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ textAlign: 'center', color: colors.white }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {image.title}
                  </Typography>
                </Box>
              )}
            </Box>
          </Fade>
        ))}

        {/* Arrow buttons removed per request */}

        {/* Dot indicators removed per request */}
      </Box>
    </Box>
  );
}
