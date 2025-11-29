import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Paper, Typography, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import InfoIcon from '@mui/icons-material/Info';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PaymentIcon from '@mui/icons-material/Payment';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BuildIcon from '@mui/icons-material/Build';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LandscapeIcon from '@mui/icons-material/Landscape';
import TempleIcon from '@mui/icons-material/TempleBuddhist';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import HikingIcon from '@mui/icons-material/Hiking';
import MuseumIcon from '@mui/icons-material/Museum';
import PhoneIcon from '@mui/icons-material/Phone';
import MapIcon from '@mui/icons-material/Map';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { colors } from '../theme/colors';
import SectionOrnament from '../components/SectionOrnament';
import { useLanguage } from '../context/LanguageContext';


// Pooja quick-access tiles
const poojaTiles = [
  {
    title: 'Daily Poojas',
    description: 'All nithya sevas performed every day at the temple.',
    to: '/poojas/daily',
    color: 'linear-gradient(135deg, #e8fff2, #ccf5e0)',
  },
  {
    title: 'Special Poojas',
    description: 'Unique sevas for specific occasions and personal offerings.',
    to: '/poojas/special',
    color: 'linear-gradient(135deg, #f3f6ff, #e8ecff)',
  },
  {
    title: 'Festival Poojas',
    description: 'Seasonal utsavams and festival-day pooja schedules.',
    to: '/poojas/festival',
    color: 'linear-gradient(135deg, #ffe1e7, #ffd6a5)',
  },
  {
    title: 'Vazhipad List',
    description: 'Complete vazhipad catalogue with descriptions and dakshina.',
    to: '/poojas/vazhipad',
    color: 'linear-gradient(135deg, #fef3d9, #ffe8ba)',
  },
];

// Animated section wrapper component
function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </Box>
  );
}

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <Box sx={{ mt: 0, pt: 0, pb: 6 }}>
      <ImageSlider />
      {/* Premium About Temple section */}
      <AnimatedSection delay={100}>
      <Box
        sx={{
          mt: 4,
          mb: 5,
          position: 'relative',
          borderRadius: 5,
          overflow: 'hidden',
          background: `linear-gradient(135deg, #fff 0%, #fafaf8 50%, #fff 100%)`,
          border: `3px solid #d4af37`,
          boxShadow: '0 20px 60px rgba(212,175,55,0.25), 0 0 0 1px rgba(212,175,55,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #d4af37 0%, #e5c158 25%, #d4af37 50%, #e5c158 75%, #d4af37 100%)',
            boxShadow: '0 2px 8px rgba(212,175,55,0.4)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at top right, rgba(212,175,55,0.08), transparent 50%), radial-gradient(circle at bottom left, rgba(212,175,55,0.06), transparent 50%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 6 }, py: { xs: 4, md: 6 } }}>
          <SectionOrnament variant="om" opacity={0.25} size={160} color={colors.secondary} repeat={3} offset={-100} blendMode="normal" />
          
          {/* Decorative elements */}
          <Box sx={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
          <Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
          
          <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid item xs={12} md={6}>
              {/* Header with decorative line */}
              <Box sx={{ position: 'relative', mb: 3 }}>
                <Box sx={{ 
                  position: 'absolute', 
                  left: -20, 
                  top: 0, 
                  bottom: 0, 
                  width: 4, 
                  background: 'linear-gradient(to bottom, #d4af37, #e5c158)',
                  borderRadius: 2,
                  boxShadow: '0 0 12px rgba(212,175,55,0.5)'
                }} />
                <Typography variant="overline" sx={{ 
                  color: '#d4af37', 
                  letterSpacing: 4, 
                  fontWeight: 900,
                  fontSize: 14,
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}>
                  {t('home.aboutTemple')}
                </Typography>
                <Typography variant="h2" sx={{ 
                  fontWeight: 900, 
                  mb: 0.5,
                  background: 'linear-gradient(135deg, #333 0%, #000 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  letterSpacing: -0.5
                }}>
                  {t('home.aboutIntro')}
                </Typography>
                <Box sx={{ 
                  width: 80, 
                  height: 4, 
                  background: 'linear-gradient(90deg, #d4af37, #e5c158)', 
                  borderRadius: 2,
                  mb: 2,
                  boxShadow: '0 2px 8px rgba(212,175,55,0.4)'
                }} />
              </Box>
              
              {/* Enhanced description with better typography */}
              <Typography variant="body1" sx={{ 
                color: colors.textSecondary, 
                mb: 4, 
                lineHeight: 1.9,
                fontSize: '1.125rem',
                fontWeight: 400,
                maxWidth: 560
              }}>
                {t('home.aboutDescription')}
              </Typography>
              
              {/* Premium feature chips */}
              <Stack direction="row" spacing={2} flexWrap="wrap" mb={4} useFlexGap>
                {[
                  { label: 'Daily Rituals', icon: TempleHinduIcon, color: '#d4af37' },
                  { label: 'Festival Utsavams', icon: AnnouncementIcon, color: '#e5c158' },
                  { label: 'Community Seva', icon: VolunteerActivismIcon, color: '#d4af37' },
                  { label: 'Historic Legacy', icon: InfoIcon, color: '#e5c158' },
                ].map((item) => {
                  const IconComp = item.icon;
                  return (
                    <Paper
                      key={item.label}
                      elevation={0}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 2.5,
                        py: 1.2,
                        borderRadius: 10,
                        background: `linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.2))`,
                        border: `2px solid rgba(212,175,55,0.4)`,
                        boxShadow: '0 4px 12px rgba(212,175,55,0.15), inset 0 1px 0 rgba(255,255,255,0.5)',
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'radial-gradient(circle at top left, rgba(255,255,255,0.3), transparent 70%)',
                          pointerEvents: 'none',
                        },
                        '&:hover': {
                          transform: 'translateY(-4px) scale(1.02)',
                          boxShadow: '0 8px 24px rgba(212,175,55,0.35)',
                          borderColor: item.color,
                          background: `linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.28))`,
                        }
                      }}
                    >
                      <Box sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${item.color}, #e5c158)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(212,175,55,0.3)',
                      }}>
                        <IconComp sx={{ color: '#000', fontSize: 18 }} />
                      </Box>
                      <Typography variant="body2" sx={{ 
                        fontWeight: 800, 
                        letterSpacing: 0.5, 
                        color: '#333',
                        fontSize: 13
                      }}>
                        {item.label}
                      </Typography>
                    </Paper>
                  );
                })}
              </Stack>
              
              {/* Premium action buttons */}
              {/* Premium action buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button 
                component={RouterLink} 
                to="/about" 
                variant="contained" 
                size="large"
                sx={{ 
                  fontWeight: 800,
                  bgcolor: '#d4af37',
                  color: '#000',
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  boxShadow: '0 6px 20px rgba(212,175,55,0.5), inset 0 1px 0 rgba(255,255,255,0.4)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    transition: 'left 0.5s',
                  },
                  '&:hover': {
                    bgcolor: '#e5c158',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 30px rgba(212,175,55,0.6)',
                    '&::before': {
                      left: '100%',
                    }
                  }
                }}
              >
                Learn More
              </Button>
              <Button
                component={RouterLink}
                to="/gallery/photos"
                variant="outlined"
                size="large"
                sx={{ 
                  color: '#d4af37', 
                  borderColor: '#d4af37',
                  borderWidth: 2,
                  fontWeight: 800,
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.2))',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s ease',
                    zIndex: -1,
                  },
                  '&:hover': { 
                    borderWidth: 2,
                    borderColor: '#e5c158',
                    bgcolor: 'transparent',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 20px rgba(212,175,55,0.3)',
                    '&::before': {
                      transform: 'scaleX(1)',
                    }
                  }
                }}
              >
                View Gallery →
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              {/* Premium image container with multiple effects */}
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/assets/header_god_image.png`}
                alt="Temple"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  height: { xs: 280, sm: 320, md: 380 },
                  objectFit: 'cover',
                  objectPosition: 'center',
                  boxShadow: '0 20px 60px rgba(212,175,55,0.4), 0 0 0 4px #d4af37, 0 0 0 8px rgba(212,175,55,0.2)',
                  border: `4px solid #fff`,
                  position: 'relative',
                  zIndex: 2,
                  transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.02) translateY(-8px)',
                    boxShadow: '0 30px 80px rgba(212,175,55,0.5), 0 0 0 4px #e5c158, 0 0 0 8px rgba(212,175,55,0.3)',
                  }
                }}
              />
              
              {/* Premium badge with animation */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  px: 2.5,
                  py: 1.2,
                  background: 'linear-gradient(135deg, #d4af37 0%, #e5c158 100%)',
                  color: '#000',
                  fontSize: 14,
                  letterSpacing: 2,
                  fontWeight: 900,
                  borderRadius: 3,
                  boxShadow: '0 6px 20px rgba(212,175,55,0.6), inset 0 1px 0 rgba(255,255,255,0.4)',
                  zIndex: 3,
                  border: '2px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(8px)',
                  animation: 'pulse 2s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 6px 20px rgba(212,175,55,0.6)',
                    },
                    '50%': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 8px 30px rgba(212,175,55,0.8)',
                    }
                  }
                }}
              >
                TEMPLE
              </Box>
              
              {/* Decorative corner elements */}
              <Box sx={{
                position: 'absolute',
                top: -12,
                right: -12,
                width: 80,
                height: 80,
                border: '4px solid #d4af37',
                borderRadius: 2,
                zIndex: 1,
                opacity: 0.6,
              }} />
              <Box sx={{
                position: 'absolute',
                bottom: -12,
                left: -12,
                width: 80,
                height: 80,
                border: '4px solid #d4af37',
                borderRadius: 2,
                zIndex: 1,
                opacity: 0.6,
              }} />
              
              {/* Glow effect behind image */}
              <Box sx={{
                position: 'absolute',
                inset: -20,
                background: 'radial-gradient(circle, rgba(212,175,55,0.3), transparent 70%)',
                filter: 'blur(30px)',
                zIndex: 0,
                pointerEvents: 'none',
              }} />
            </Box>
          </Grid>
        </Grid>
        </Box>
      </Box>
      </AnimatedSection>

      {/* Sections removed per request: Latest, Gallery, Nearby, Temple Essentials */}

      <AnimatedSection delay={200}>
      <Box sx={{ 
        mt: 5, 
        border: `2px solid #d4af37`, 
        borderRadius: 4, 
        p: { xs: 2, md: 3 }, 
        position: 'relative', 
        overflow: 'visible',
        background: 'linear-gradient(135deg, #fff 0%, #faf8f5 100%)',
        boxShadow: '0 10px 30px rgba(212,175,55,0.12)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          left: 20,
          right: 20,
          height: 4,
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
          borderRadius: '2px 2px 0 0',
        }
      }}>
      <SectionOrnament variant="om" opacity={0.35} size={140} color={colors.secondary} repeat={3} offset={-80} blendMode="normal" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background: `linear-gradient(130deg, rgba(212,175,55,0.95), rgba(212,175,55,0.85)), url(${process.env.PUBLIC_URL}/assets/slide_3.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: colors.white,
              minHeight: 320,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              border: `2px solid #d4af37`,
              boxShadow: '0 12px 40px rgba(212,175,55,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
          >
            <Typography variant="overline" sx={{ letterSpacing: 2 }}>
              POOJA CENTRE
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Plan Your Devotional Day
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Browse pooja categories and book your offerings online with instant confirmation.
            </Typography>
            <Box sx={{ height: 3, bgcolor: colors.secondary, borderRadius: 1, mb: 2, opacity: 0.6 }} />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button 
                component={RouterLink} 
                to="/poojas/booking" 
                variant="contained" 
                sx={{ 
                  fontWeight: 700,
                  bgcolor: '#fff',
                  color: '#000',
                  px: 3,
                  py: 1.2,
                  boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
                  }
                }}
              >
                Book a Pooja
              </Button>
              <Button
                component={RouterLink}
                to="/poojas/vazhipad"
                variant="outlined"
                sx={{ color: colors.white, borderColor: colors.white, fontWeight: 700 }}
              >
                View Vazhipads
              </Button>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            {poojaTiles.map((tile) => (
              <Grid item xs={12} sm={6} key={tile.title}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: '100%',
                    background: tile.color,
                    position: 'relative',
                    overflow: 'hidden',
                    border: `2px solid rgba(212,175,55,0.3)`,
                    transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 12px 30px rgba(212,175,55,0.25)`,
                      borderColor: '#d4af37'
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {tile.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.textDark, mb: 2 }}>
                    {tile.description}
                  </Typography>
                  <Button component={RouterLink} to={tile.to} size="small" sx={{ color: colors.primary, fontWeight: 700 }}>
                    Open →
                  </Button>

                  <Box sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 4,
                    background: 'linear-gradient(90deg, #d4af37, #e5c158)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 260ms ease',
                    '.MuiPaper-root:hover &': {
                      transform: 'scaleX(1)'
                    }
                  }} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </Box>
      </AnimatedSection>

      {/* News Overview: placed above Donation section */}
      <AnimatedSection delay={300}>
      <Box sx={{ 
        mt: 8, 
        border: `2px solid #d4af37`, 
        borderRadius: 4, 
        p: { xs: 2, md: 3 }, 
        background: `linear-gradient(135deg, ${colors.white} 0%, #faf8f5 50%, ${colors.white} 100%)`, 
        position: 'relative', 
        overflow: 'visible',
        boxShadow: '0 10px 30px rgba(212,175,55,0.12)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          left: 20,
          right: 20,
          height: 4,
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
          borderRadius: '2px 2px 0 0',
        }
      }}>
        <SectionOrnament variant="om" opacity={0.35} size={140} color={colors.secondary} repeat={3} offset={-80} blendMode="normal" />
        <Typography variant="overline" sx={{ color: '#d4af37', letterSpacing: 2, fontWeight: 800 }}>
          NEWS OVERVIEW
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Temple Announcements & Updates
        </Typography>
        <Typography variant="body1" sx={{ color: colors.textSecondary, mb: 3 }}>
          Stay informed on announcements, upcoming events, notices, and recent news.
        </Typography>

        <Grid container spacing={2}>
          {[
            { key: 'announcements', title: 'Announcements', to: '/news/announcements', chip: 'New' },
            { key: 'news', title: 'News', to: '/news/news', chip: 'Recent' },
            { key: 'upcoming', title: 'Upcoming', to: '/news/upcoming', chip: 'Schedule' },
            { key: 'notices', title: 'Notices', to: '/news/notices', chip: 'Official' },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.key}>
              <Paper
                sx={{
                  p: 2.5,
                  borderRadius: 4,
                  border: `2px solid rgba(212,175,55,0.2)`,
                  transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                  position: 'relative',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  '&:hover': { 
                    transform: 'translateY(-4px)', 
                    boxShadow: '0 12px 28px rgba(212,175,55,0.2)', 
                    borderColor: '#d4af37' 
                  }
                }}
              >
                <Box sx={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  height: 4, 
                  background: `linear-gradient(90deg, #d4af37, #e5c158)` 
                }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 2 }}>
                  {item.key === 'announcements' && 'Latest official temple announcements and bulletin items.'}
                  {item.key === 'news' && 'Coverage and updates about temple activities and programs.'}
                  {item.key === 'upcoming' && 'Dates and details for scheduled poojas, utsavams, and events.'}
                  {item.key === 'notices' && 'Important notices and office circulars for devotees.'}
                </Typography>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box sx={{ 
                    px: 1.2, 
                    py: 0.5, 
                    borderRadius: 16, 
                    bgcolor: 'rgba(212,175,55,0.1)', 
                    border: `1.5px solid rgba(212,175,55,0.3)`, 
                    fontSize: 12, 
                    fontWeight: 700,
                    color: '#d4af37'
                  }}>
                    {item.chip}
                  </Box>
                  <Button 
                    component={RouterLink} 
                    to={item.to} 
                    size="small" 
                    variant="contained" 
                    sx={{ 
                      fontWeight: 700,
                      bgcolor: '#d4af37',
                      color: '#000',
                      '&:hover': {
                        bgcolor: '#e5c158',
                      }
                    }}
                  >
                    Open
                  </Button>
                  <Button component={RouterLink} to={item.to} size="small" variant="text" sx={{ color: colors.primary, fontWeight: 700 }}>
                    Read More →
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      </AnimatedSection>

      {/* Donation Overview: new approach - ribbon header + stacked cards with progress */}
      <AnimatedSection delay={400}>
      <Box sx={{ 
        mt: 8, 
        border: `2px solid #d4af37`, 
        borderRadius: 4, 
        p: { xs: 2, md: 3 }, 
        background: `linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.15) 100%)`, 
        position: 'relative', 
        overflow: 'visible',
        boxShadow: '0 10px 30px rgba(212,175,55,0.15)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          left: 20,
          right: 20,
          height: 4,
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
          borderRadius: '2px 2px 0 0',
        }
      }}>
        <SectionOrnament variant="om" opacity={0.35} size={140} color={colors.secondary} repeat={3} offset={-80} blendMode="normal" />
        <Paper
          sx={{
            p: { xs: 2, md: 3 },
            borderRadius: 4,
            overflow: 'hidden',
            transition: 'transform 220ms ease, box-shadow 220ms ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 10px 24px rgba(0,0,0,0.12)'
            }
          }}
        >
          <Box sx={{
            px: { xs: 2, md: 4 },
            py: 3,
            borderRadius: 4,
            color: colors.white,
            background: `linear-gradient(135deg, #d4af37 0%, #e5c158 50%, #d4af37 100%)`,
            position: 'relative',
            boxShadow: '0 6px 20px rgba(212,175,55,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
            overflow: 'hidden',
            transition: 'all 300ms ease',
            '.MuiPaper-root:hover &': {
              filter: 'brightness(1.08)',
              transform: 'scale(1.01)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2), transparent 60%)',
              pointerEvents: 'none',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.3), transparent)',
            }
          }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="overline" sx={{ letterSpacing: 3, fontWeight: 800, fontSize: 13, opacity: 0.95 }}>DONATION OVERVIEW</Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 0.5, textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>Support Temple Causes</Typography>
              <Typography variant="body1" sx={{ mt: 1, opacity: 0.95, fontWeight: 500 }}>Your contributions help maintain our sacred traditions and serve the community</Typography>
            </Box>
            <Box sx={{ position: 'absolute', right: -20, top: -20, width: 160, height: 160, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)', filter: 'blur(40px)' }} />
          </Box>

          <Grid container spacing={2} sx={{ mt: 2, px: { xs: 1, md: 2 }, pb: 2 }}>
            {[
              { key: 'online', title: 'Online Donation', desc: 'Quick, secure contributions with instant receipt.', to: '/donate/online', tag: 'Popular', tagColor: colors.secondary },
              { key: 'annadanam', title: 'Annadanam', desc: 'Join daily food offering and community welfare.', to: '/donate/annadanam', tag: 'Daily', tagColor: colors.primary },
              { key: 'renovation', title: 'Renovation', desc: 'Help preserve and improve temple infrastructure.', to: '/donate/renovation', tag: 'Urgent', tagColor: colors.primaryDark },
              { key: 'festival', title: 'Festival Support', desc: 'Sponsor arrangements for seasonal utsavams.', to: '/donate/festival', tag: 'Seasonal', tagColor: colors.primary },
            ].map((item) => (
              <Grid item xs={12} md={6} key={item.key}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    border: `2px solid rgba(212,175,55,0.3)`,
                    position: 'relative',
                    transition: 'all 280ms cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 6px 16px rgba(212,175,55,0.08)',
                    background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-6px) scale(1.01)',
                      boxShadow: '0 16px 40px rgba(212,175,55,0.3)',
                      borderColor: '#d4af37',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 5,
                      background: `linear-gradient(90deg, #d4af37 0%, #e5c158 50%, #d4af37 100%)`,
                      boxShadow: '0 2px 8px rgba(212,175,55,0.4)',
                    }
                  }}
                >
                  <Grid container spacing={2} alignItems="flex-start">
                    <Grid item>
                      <Box sx={{ 
                        width: 64, 
                        height: 64, 
                        borderRadius: 3, 
                        background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.25))',
                        border: `2px solid rgba(212,175,55,0.4)`, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxShadow: 'inset 0 2px 8px rgba(212,175,55,0.2)',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          inset: 0,
                          borderRadius: 3,
                          background: 'radial-gradient(circle at top left, rgba(255,255,255,0.4), transparent 70%)',
                        }
                      }}>
                        {item.key === 'online' && <PaymentIcon sx={{ color: '#d4af37', fontSize: 32, position: 'relative', zIndex: 1 }} />}
                        {item.key === 'annadanam' && <FastfoodIcon sx={{ color: '#d4af37', fontSize: 32, position: 'relative', zIndex: 1 }} />}
                        {item.key === 'renovation' && <BuildIcon sx={{ color: '#d4af37', fontSize: 32, position: 'relative', zIndex: 1 }} />}
                        {item.key === 'festival' && <CelebrationIcon sx={{ color: '#d4af37', fontSize: 32, position: 'relative', zIndex: 1 }} />}
                      </Box>
                    </Grid>
                    <Grid item xs>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: '#333' }}>{item.title}</Typography>
                        <Box sx={{ 
                          px: 1.5, 
                          py: 0.4, 
                          borderRadius: 20, 
                          background: `linear-gradient(135deg, #d4af37, #e5c158)`,
                          color: '#000',
                          fontSize: 11, 
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                          boxShadow: '0 2px 8px rgba(212,175,55,0.3)'
                        }}>
                          {item.tag}
                        </Box>
                      </Box>
                      <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 1.5, lineHeight: 1.6 }}>{item.desc}</Typography>
                      <Box sx={{ position: 'relative' }}>
                        <Box sx={{ height: 8, borderRadius: 4, background: 'rgba(212,175,55,0.15)', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.2)' }}>
                          <Box sx={{ 
                            width: item.key === 'annadanam' ? '50%' : item.key === 'renovation' ? '30%' : item.key === 'festival' ? '40%' : '60%', 
                            height: '100%', 
                            background: `linear-gradient(90deg, #d4af37, #e5c158)`,
                            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)',
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              height: '50%',
                              background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
                            }
                          }} />
                        </Box>
                        <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: '#d4af37', fontWeight: 700, fontSize: 11 }}>
                          {item.key === 'annadanam' ? '50%' : item.key === 'renovation' ? '30%' : item.key === 'festival' ? '40%' : '60%'} of goal reached
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box sx={{ mt: 2.5, display: 'flex', gap: 2, pt: 2, borderTop: '1px solid rgba(212,175,55,0.15)' }}>
                    <Button 
                      component={RouterLink} 
                      to={item.to} 
                      variant="contained" 
                      size="medium" 
                      sx={{ 
                        fontWeight: 800,
                        bgcolor: '#d4af37',
                        color: '#000',
                        px: 3,
                        py: 1,
                        borderRadius: 2,
                        textTransform: 'uppercase',
                        letterSpacing: 0.5,
                        boxShadow: '0 4px 12px rgba(212,175,55,0.4)',
                        '&:hover': {
                          bgcolor: '#e5c158',
                          boxShadow: '0 6px 20px rgba(212,175,55,0.5)',
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      Contribute Now
                    </Button>
                    <Button 
                      component={RouterLink} 
                      to={item.to} 
                      variant="outlined" 
                      size="medium" 
                      sx={{ 
                        color: '#d4af37', 
                        borderColor: '#d4af37',
                        borderWidth: 2,
                        fontWeight: 700,
                        px: 2.5,
                        borderRadius: 2,
                        '&:hover': {
                          borderWidth: 2,
                          borderColor: '#e5c158',
                          bgcolor: 'rgba(212,175,55,0.08)',
                        }
                      }}
                    >
                      Learn More →
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ px: { xs: 2, md: 3 }, pb: 2, pt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, color: '#333' }}>Campaign Progress</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    border: `2px solid rgba(212,175,55,0.3)`,
                    transition: 'all 280ms ease',
                    boxShadow: '0 6px 16px rgba(212,175,55,0.12)',
                    background: 'linear-gradient(135deg, #fff, #fafaf8)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(212,175,55,0.25)',
                      borderColor: '#d4af37',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, #d4af37, #e5c158)`,
                    }
                  }}
                >
                  <Typography variant="overline" sx={{ color: '#d4af37', fontWeight: 800, letterSpacing: 1.5 }}>Monthly Annadanam Goal</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800, mt: 1, color: '#333' }}>₹ 2,50,000 / ₹ 5,00,000</Typography>
                  <Box sx={{ mt: 2, height: 10, borderRadius: 5, background: 'rgba(212,175,55,0.15)', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <Box sx={{ width: '50%', height: '100%', background: `linear-gradient(90deg, #d4af37, #e5c158)`, boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)' }} />
                  </Box>
                  <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#d4af37', fontWeight: 700 }}>50% Complete - Help us reach our goal!</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    border: `2px solid rgba(212,175,55,0.3)`,
                    transition: 'all 280ms ease',
                    boxShadow: '0 6px 16px rgba(212,175,55,0.12)',
                    background: 'linear-gradient(135deg, #fff, #fafaf8)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(212,175,55,0.25)',
                      borderColor: '#d4af37',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, #d4af37, #e5c158)`,
                    }
                  }}
                >
                  <Typography variant="overline" sx={{ color: '#d4af37', fontWeight: 800, letterSpacing: 1.5 }}>Renovation Priority</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800, mt: 1, mb: 2, color: '#333' }}>Sanctum and Roofworks</Typography>
                  <Stack direction="row" spacing={1.5} sx={{ mt: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Box sx={{ 
                      px: 2, 
                      py: 0.8, 
                      borderRadius: 20, 
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.25))',
                      border: `2px solid rgba(212,175,55,0.4)`, 
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#d4af37',
                      boxShadow: 'inset 0 1px 2px rgba(212,175,55,0.2)'
                    }}>Sanctum</Box>
                    <Box sx={{ 
                      px: 2, 
                      py: 0.8, 
                      borderRadius: 20, 
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.25))',
                      border: `2px solid rgba(212,175,55,0.4)`, 
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#d4af37',
                      boxShadow: 'inset 0 1px 2px rgba(212,175,55,0.2)'
                    }}>Roof</Box>
                    <Box sx={{ 
                      px: 2, 
                      py: 0.8, 
                      borderRadius: 20, 
                      background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.25))',
                      border: `2px solid rgba(212,175,55,0.4)`, 
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#d4af37',
                      boxShadow: 'inset 0 1px 2px rgba(212,175,55,0.2)'
                    }}>Lighting</Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
      </AnimatedSection>

      {/* Assistance section removed per request */}

      {/* Gallery Overview: modern material section with preview cards */}
      <AnimatedSection delay={500}>
      <Box sx={{ 
        mt: 8, 
        border: `2px solid #d4af37`, 
        borderRadius: 4, 
        p: { xs: 2, md: 3 }, 
        background: `linear-gradient(135deg, ${colors.white} 0%, #faf8f5 50%, ${colors.white} 100%)`, 
        position: 'relative', 
        overflow: 'visible',
        boxShadow: '0 10px 30px rgba(212,175,55,0.12)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          left: 20,
          right: 20,
          height: 4,
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
          borderRadius: '2px 2px 0 0',
        }
      }}>
        <SectionOrnament variant="om" opacity={0.35} size={140} color={colors.secondary} repeat={3} offset={-80} blendMode="normal" />
        <Typography variant="overline" sx={{ color: '#d4af37', letterSpacing: 2, fontWeight: 800 }}>
          GALLERY OVERVIEW
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Explore Photos & Videos
        </Typography>
        <Typography variant="body1" sx={{ color: colors.textSecondary, mb: 3 }}>
          A glimpse of temple moments — festivals, premises, events and serene views.
        </Typography>

        <Grid container spacing={2}>
            {[
              { key: 'photos', title: 'Photos', to: '/gallery/photos', img: `${process.env.PUBLIC_URL}/assets/header_god_image.png`, chip: 'Curated' },
            { key: 'videos', title: 'Videos', to: '/gallery/videos', youtubeId: 'bFHz3KocQc0', chip: 'Highlights' },
            { key: 'events', title: 'Events', to: '/gallery/events', img: `${process.env.PUBLIC_URL}/assets/slide_3.png`, chip: 'Recent' },
            { key: 'videos2', title: 'Videos', to: '/gallery/videos', youtubeId: 'bFHz3KocQc0', chip: 'Temple Tour' },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.key}>
              <Paper
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: `2px solid rgba(212,175,55,0.3)`,
                  transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                  '&:hover': { 
                    transform: 'translateY(-4px)', 
                    boxShadow: `0 12px 28px rgba(212,175,55,0.25)`, 
                    borderColor: '#d4af37' 
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  {(item.key === 'videos' || item.key === 'videos2') && item.youtubeId ? (
                    <Box sx={{ position: 'relative' }}>
                      <Box
                        component="iframe"
                        src={`https://www.youtube.com/embed/${item.youtubeId}`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        sx={{
                          width: '100%',
                          height: 160,
                          border: 'none',
                          borderBottom: `2px solid #d4af37`,
                          display: 'block',
                        }}
                      />
                    </Box>
                  ) : (
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.title}
                      sx={{ width: '100%', height: 160, objectFit: 'cover', borderBottom: `2px solid #d4af37` }}
                      onError={(e: any) => { e.currentTarget.src = `${process.env.PUBLIC_URL}/assets/gallery_fallback.png`; }}
                    />
                  )}
                  <Box sx={{ position: 'absolute', top: 10, left: 10, px: 1, py: 0.5, borderRadius: 16, bgcolor: 'rgba(212,175,55,0.9)', border: `1.5px solid #d4af37`, fontSize: 12, fontWeight: 700, color: '#000' }}>
                    {item.chip}
                  </Box>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Button 
                      component={RouterLink} 
                      to={item.to} 
                      size="small" 
                      variant="contained" 
                      sx={{ 
                        fontWeight: 700,
                        bgcolor: '#d4af37',
                        color: '#000',
                        '&:hover': {
                          bgcolor: '#e5c158',
                        }
                      }}
                    >
                      Open
                    </Button>
                    <Button component={RouterLink} to={item.to} size="small" variant="text" sx={{ color: colors.primary, fontWeight: 700 }}>
                      View More →
                    </Button>
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Paper sx={{ p: 2, borderRadius: 3, border: `2px solid rgba(212,175,55,0.25)`, boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
            <Typography variant="caption" sx={{ color: colors.textSecondary }}>Latest Uploads</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Festival Highlights & New Photos</Typography>
          </Paper>
          <Paper sx={{ p: 2, borderRadius: 3, border: `2px solid rgba(212,175,55,0.25)`, boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
            <Typography variant="caption" sx={{ color: colors.textSecondary }}>Categories</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Events, Premises, Festivals</Typography>
          </Paper>
        </Box>
      </Box>
      </AnimatedSection>

      {/* Nearby Overview: next-level design with icon cards */}
      <AnimatedSection delay={600}>
      <Box sx={{ 
        mt: 8, 
        border: `2px solid #d4af37`, 
        borderRadius: 4, 
        p: { xs: 2, md: 3 }, 
        background: `linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(212,175,55,0.12) 100%)`, 
        position: 'relative', 
        overflow: 'visible',
        boxShadow: '0 10px 30px rgba(212,175,55,0.12)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          left: 20,
          right: 20,
          height: 4,
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
          borderRadius: '2px 2px 0 0',
        }
      }}>
        <SectionOrnament variant="om" opacity={0.35} size={140} color={colors.secondary} repeat={3} offset={-80} blendMode="normal" />
        <Typography variant="overline" sx={{ color: '#d4af37', letterSpacing: 2, fontWeight: 800 }}>
          NEARBY OVERVIEW
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Explore Nearby Attractions
        </Typography>
        <Typography variant="body1" sx={{ color: colors.textSecondary, mb: 3 }}>
          Beaches, temples, viewpoints and heritage spots around the temple.
        </Typography>

        <Grid container spacing={2}>
          {[
            { key: 'beaches', title: 'Beaches', to: '/nearby/beaches', icon: BeachAccessIcon, chip: 'Scenic' },
            { key: 'temples', title: 'Temples', to: '/nearby/temples', icon: TempleIcon, chip: 'Pilgrimage' },
            { key: 'viewpoints', title: 'Viewpoints', to: '/nearby/viewpoints', icon: LandscapeIcon, chip: 'Panorama' },
            { key: 'heritage', title: 'Heritage', to: '/nearby/heritage', icon: MuseumIcon, chip: 'Culture' },
            { key: 'boating', title: 'Boating', to: '/nearby/boating', icon: DirectionsBoatIcon, chip: 'Leisure' },
            { key: 'activities', title: 'Activities', to: '/nearby/activities', icon: HikingIcon, chip: 'Outdoor' },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.key}>
              <Paper
                sx={{
                  p: 2.5,
                  borderRadius: 4,
                  border: `2px solid rgba(212,175,55,0.2)`,
                  transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                  position: 'relative',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  '&:hover': { 
                    transform: 'translateY(-4px)', 
                    boxShadow: '0 12px 28px rgba(212,175,55,0.2)', 
                    borderColor: '#d4af37' 
                  }
                }}
              >
                <Box sx={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  height: 4, 
                  background: `linear-gradient(90deg, #d4af37, #e5c158)` 
                }} />
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Box sx={{ width: 56, height: 56, borderRadius: 3, bgcolor: 'rgba(212,175,55,0.1)', border: `1.5px solid rgba(212,175,55,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {(() => {
                        const IconComp = item.icon as React.ElementType;
                        return <IconComp sx={{ color: '#d4af37' }} />;
                      })()}
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: colors.textSecondary }}>
                      {item.key === 'beaches' && 'Relax at serene shores and coastal walks.'}
                      {item.key === 'temples' && 'Visit historic shrines and spiritual centers.'}
                      {item.key === 'viewpoints' && 'Catch sunset vistas and hilltop views.'}
                      {item.key === 'heritage' && 'Discover museums and cultural landmarks.'}
                      {item.key === 'boating' && 'Enjoy backwater rides and boat tours.'}
                      {item.key === 'activities' && 'Try hiking trails and outdoor fun.'}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Box sx={{ px: 1.2, py: 0.5, borderRadius: 16, bgcolor: 'rgba(212,175,55,0.1)', border: `1.5px solid rgba(212,175,55,0.3)`, fontSize: 12, fontWeight: 700, color: '#d4af37' }}>
                      {item.chip}
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 2, display: 'flex', gap: 1.5 }}>
                  <Button 
                    component={RouterLink} 
                    to={item.to} 
                    variant="contained" 
                    size="small" 
                    sx={{ 
                      fontWeight: 700,
                      bgcolor: '#d4af37',
                      color: '#000',
                      '&:hover': {
                        bgcolor: '#e5c158',
                      }
                    }}
                  >Open</Button>
                  <Button component={RouterLink} to={item.to} variant="text" size="small" sx={{ color: colors.primary, fontWeight: 700 }}>View Map →</Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      </AnimatedSection>

      {/* Contact Overview: quick access to office, map, info, feedback */}
      <AnimatedSection delay={700}>
      <Box sx={{ 
        mt: 8, 
        border: `2px solid #d4af37`, 
        borderRadius: 4, 
        p: { xs: 2, md: 3 }, 
        background: `linear-gradient(135deg, ${colors.white} 0%, #faf8f5 50%, ${colors.white} 100%)`, 
        position: 'relative', 
        overflow: 'visible',
        boxShadow: '0 10px 30px rgba(212,175,55,0.12)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          left: 20,
          right: 20,
          height: 4,
          background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
          borderRadius: '2px 2px 0 0',
        }
      }}>
        <SectionOrnament opacity={0.85} size={88} />
        <Typography variant="overline" sx={{ color: '#d4af37', letterSpacing: 2, fontWeight: 800 }}>
          CONTACT OVERVIEW
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Get In Touch With Us
        </Typography>
        <Typography variant="body1" sx={{ color: colors.textSecondary, mb: 3 }}>
          Find office details, map, general info, and share feedback easily.
        </Typography>

        <Grid container spacing={2}>
          {[
            { key: 'office', title: 'Office', to: '/contact/office', icon: PhoneIcon, desc: 'Temple office timings and phone numbers.' },
            { key: 'map', title: 'Map', to: '/contact/map', icon: MapIcon, desc: 'Locate the temple and plan your route.' },
            { key: 'info', title: 'Info', to: '/contact/info', icon: InfoOutlinedIcon, desc: 'General information for visitors.' },
            { key: 'feedback', title: 'Feedback', to: '/contact/feedback', icon: FeedbackIcon, desc: 'Share suggestions and experiences.' },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.key}>
              <Paper
                sx={{
                  p: 2.5,
                  borderRadius: 4,
                  border: `2px solid rgba(212,175,55,0.2)`,
                  transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                  position: 'relative',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  '&:hover': { 
                    transform: 'translateY(-4px)', 
                    boxShadow: '0 12px 28px rgba(212,175,55,0.2)', 
                    borderColor: '#d4af37' 
                  }
                }}
              >
                <Box sx={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  height: 4, 
                  background: `linear-gradient(90deg, #d4af37, #e5c158)` 
                }} />
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Box sx={{ width: 56, height: 56, borderRadius: 3, bgcolor: 'rgba(212,175,55,0.1)', border: `1.5px solid rgba(212,175,55,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {(() => {
                        const IconComp = item.icon as React.ElementType;
                        return <IconComp sx={{ color: '#d4af37' }} />;
                      })()}
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: colors.textSecondary }}>{item.desc}</Typography>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 2, display: 'flex', gap: 1.5 }}>
                  <Button 
                    component={RouterLink} 
                    to={item.to} 
                    variant="contained" 
                    size="small" 
                    sx={{ 
                      fontWeight: 700,
                      bgcolor: '#d4af37',
                      color: '#000',
                      '&:hover': {
                        bgcolor: '#e5c158',
                      }
                    }}
                  >Open</Button>
                  <Button component={RouterLink} to={item.to} variant="text" size="small" sx={{ color: colors.primary, fontWeight: 700 }}>Learn More →</Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      </AnimatedSection>
    </Box>
  );
}
