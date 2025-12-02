import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Paper, Typography, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
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
import HeroVideo from '../components/HeroVideo';


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
  const [aboutContent, setAboutContent] = useState({
    title: t('home.aboutIntro'),
    subtitle: t('home.aboutTemple'),
    description: t('home.aboutDescription'),
    imageUrl: '/assets/header_god_image.png'
  });

  const [poojaSection, setPoojaSection] = useState({
    title: 'Plan Your Devotional Day',
    subtitle: 'POOJA CENTRE',
    description: 'Browse pooja categories and book your offerings online with instant confirmation.',
    buttonText: 'Book a Pooja',
    buttonLink: '/poojas/booking',
    secondButtonText: 'View Vazhipads',
    secondButtonLink: '/poojas/vazhipad',
    tiles: poojaTiles
  });

  const [newsSection, setNewsSection] = useState({
    subtitle: 'NEWS OVERVIEW',
    title: 'Temple Announcements & Updates',
    description: 'Stay informed on announcements, upcoming events, notices, and recent news.',
    tiles: [
      { title: 'Announcements', description: 'Latest official temple announcements and bulletin items.', link: '/news/announcements', chip: 'New' },
      { title: 'News', description: 'Coverage and updates about temple activities and programs.', link: '/news/news', chip: 'Recent' },
      { title: 'Upcoming', description: 'Dates and details for scheduled poojas, utsavams, and events.', link: '/news/upcoming', chip: 'Schedule' },
      { title: 'Notices', description: 'Important notices and office circulars for devotees.', link: '/news/notices', chip: 'Official' }
    ]
  });

  const [donationSection, setDonationSection] = useState({
    subtitle: 'DONATION OVERVIEW',
    title: 'Support Temple Causes',
    description: 'Your contributions help maintain our sacred traditions and serve the community',
    tiles: [
      { title: 'Online Donation', description: 'Quick, secure contributions with instant receipt.', link: '/donate/online', tag: 'Popular' },
      { title: 'Annadanam', description: 'Join daily food offering and community welfare.', link: '/donate/annadanam', tag: 'Daily' },
      { title: 'Renovation', description: 'Help preserve and improve temple infrastructure.', link: '/donate/renovation', tag: 'Urgent' },
      { title: 'Festival Support', description: 'Sponsor arrangements for seasonal utsavams.', link: '/donate/festival', tag: 'Seasonal' }
    ]
  });

  const [gallerySection, setGallerySection] = useState({
    subtitle: 'GALLERY OVERVIEW',
    title: 'Explore Photos & Videos',
    description: 'A glimpse of temple moments — festivals, premises, events and serene views.',
    tiles: [
      { title: 'Photos', link: '/gallery/photos', chip: 'Curated', type: 'photo', imageUrl: '/assets/header_god_image.png' },
      { title: 'Videos', link: '/gallery/videos', chip: 'Highlights', type: 'video', youtubeId: 'bFHz3KocQc0' },
      { title: 'Events', link: '/gallery/events', chip: 'Recent', type: 'photo', imageUrl: '/assets/slide_3.png' },
      { title: 'Temple Tour', link: '/gallery/videos', chip: 'Tour', type: 'video', youtubeId: 'bFHz3KocQc0' }
    ]
  });

  const [contactSection, setContactSection] = useState({
    subtitle: 'CONTACT OVERVIEW',
    title: 'Get In Touch With Us',
    description: 'Find office details, map, general info, and share feedback easily.',
    tiles: [
      { title: 'Office', description: 'Temple office timings and phone numbers.', link: '/contact/office' },
      { title: 'Map', description: 'Locate the temple and plan your route.', link: '/contact/map' },
      { title: 'Info', description: 'General information for visitors.', link: '/contact/info' },
      { title: 'Feedback', description: 'Share suggestions and experiences.', link: '/contact/feedback' }
    ]
  });

  const [nearbySection, setNearbySection] = useState({
    subtitle: 'NEARBY OVERVIEW',
    title: 'Explore Nearby Attractions',
    description: 'Beaches, temples, viewpoints and heritage spots around the temple.',
    tiles: [
      { title: 'Beaches', description: 'Relax at serene shores and coastal walks.', link: '/nearby/beaches', chip: 'Scenic' },
      { title: 'Temples', description: 'Visit historic shrines and spiritual centers.', link: '/nearby/temples', chip: 'Pilgrimage' },
      { title: 'Viewpoints', description: 'Catch sunset vistas and hilltop views.', link: '/nearby/viewpoints', chip: 'Panorama' },
      { title: 'Heritage', description: 'Discover museums and cultural landmarks.', link: '/nearby/heritage', chip: 'Culture' },
      { title: 'Boating', description: 'Enjoy backwater rides and boat tours.', link: '/nearby/boating', chip: 'Leisure' },
      { title: 'Activities', description: 'Try hiking trails and outdoor fun.', link: '/nearby/activities', chip: 'Outdoor' }
    ]
  });

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const docRef = doc(db, 'homepage_content', 'about_section');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setAboutContent({
            title: data.title || t('home.aboutIntro'),
            subtitle: data.subtitle || t('home.aboutTemple'),
            description: data.description || t('home.aboutDescription'),
            imageUrl: data.imageUrl || '/assets/header_god_image.png'
          });
        }
      } catch (error) {
        console.error('Error fetching about content:', error);
      }
    };

    const fetchPoojaSection = async () => {
      try {
        const docRef = doc(db, 'homepage_content', 'pooja_section');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setPoojaSection({
            title: data.title || poojaSection.title,
            subtitle: data.subtitle || poojaSection.subtitle,
            description: data.description || poojaSection.description,
            buttonText: data.buttonText || poojaSection.buttonText,
            buttonLink: data.buttonLink || poojaSection.buttonLink,
            secondButtonText: data.secondButtonText || poojaSection.secondButtonText,
            secondButtonLink: data.secondButtonLink || poojaSection.secondButtonLink,
            tiles: data.tiles || poojaTiles
          });
        }
      } catch (error) {
        console.error('Error fetching pooja section:', error);
      }
    };

    const fetchNewsSection = async () => {
      try {
        const docRef = doc(db, 'homepage_content', 'news_section');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNewsSection(docSnap.data() as any);
        }
      } catch (error) {
        console.error('Error fetching news section:', error);
      }
    };

    const fetchDonationSection = async () => {
      try {
        const docRef = doc(db, 'homepage_content', 'donation_section');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDonationSection(docSnap.data() as any);
        }
      } catch (error) {
        console.error('Error fetching donation section:', error);
      }
    };

    const fetchGallerySection = async () => {
      try {
        const docRef = doc(db, 'homepage_content', 'gallery_section');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setGallerySection(docSnap.data() as any);
        }
      } catch (error) {
        console.error('Error fetching gallery section:', error);
      }
    };

    const fetchContactSection = async () => {
      try {
        const docRef = doc(db, 'homepage_content', 'contact_section');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContactSection(docSnap.data() as any);
        }
      } catch (error) {
        console.error('Error fetching contact section:', error);
      }
    };

    const fetchNearbySection = async () => {
      try {
        const docRef = doc(db, 'homepage_content', 'nearby_section');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNearbySection(docSnap.data() as any);
        }
      } catch (error) {
        console.error('Error fetching nearby section:', error);
      }
    };

    fetchAboutContent();
    fetchPoojaSection();
    fetchNewsSection();
    fetchDonationSection();
    fetchGallerySection();
    fetchContactSection();
    fetchNearbySection();
  }, [t]);
  
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
                  {aboutContent.subtitle}
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
                  {aboutContent.title}
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
                {aboutContent.description}
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
                src={
                  aboutContent.imageUrl 
                    ? (aboutContent.imageUrl.startsWith('data:') 
                        ? aboutContent.imageUrl 
                        : aboutContent.imageUrl.startsWith('http') 
                          ? aboutContent.imageUrl 
                          : `${process.env.PUBLIC_URL}${aboutContent.imageUrl}`)
                    : `${process.env.PUBLIC_URL}/assets/header_god_image.png`
                }
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
              {poojaSection.subtitle}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              {poojaSection.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {poojaSection.description}
            </Typography>
            <Box sx={{ height: 3, bgcolor: colors.secondary, borderRadius: 1, mb: 2, opacity: 0.6 }} />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button 
                component={RouterLink} 
                to={poojaSection.buttonLink}
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
                {poojaSection.buttonText}
              </Button>
              <Button
                component={RouterLink}
                to={poojaSection.secondButtonLink}
                variant="outlined"
                sx={{ color: colors.white, borderColor: colors.white, fontWeight: 700 }}
              >
                {poojaSection.secondButtonText}
              </Button>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            {poojaSection.tiles.map((tile, index) => (
              <Grid item xs={12} sm={6} key={tile.title || index}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: '100%',
                    background: index === 0 ? 'linear-gradient(135deg, #e8fff2, #ccf5e0)' : 
                                index === 1 ? 'linear-gradient(135deg, #f3f6ff, #e8ecff)' : 
                                index === 2 ? 'linear-gradient(135deg, #ffe1e7, #ffd6a5)' : 
                                'linear-gradient(135deg, #fef3d9, #ffe8ba)',
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
                  <Button component={RouterLink} to={(tile as any).link || tile.to} size="small" sx={{ color: colors.primary, fontWeight: 700 }}>
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
          {newsSection.subtitle}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          {newsSection.title}
        </Typography>
        <Typography variant="body1" sx={{ color: colors.textSecondary, mb: 3 }}>
          {newsSection.description}
        </Typography>

        <Grid container spacing={2}>
          {newsSection.tiles.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={item.title || index}>
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
                  {item.description}
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
                    to={item.link}
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
                  <Button component={RouterLink} to={item.link} size="small" variant="text" sx={{ color: colors.primary, fontWeight: 700 }}>
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
              <Typography variant="overline" sx={{ letterSpacing: 3, fontWeight: 800, fontSize: 13, opacity: 0.95 }}>{donationSection.subtitle}</Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 0.5, textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>{donationSection.title}</Typography>
              <Typography variant="body1" sx={{ mt: 1, opacity: 0.95, fontWeight: 500 }}>{donationSection.description}</Typography>
            </Box>
            <Box sx={{ position: 'absolute', right: -20, top: -20, width: 160, height: 160, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)', filter: 'blur(40px)' }} />
          </Box>

          <Grid container spacing={2} sx={{ mt: 2, px: { xs: 1, md: 2 }, pb: 2 }}>
            {donationSection.tiles.map((item, index) => (
              <Grid item xs={12} md={6} key={item.title || index}>
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
                        {index === 0 && <PaymentIcon sx={{ color: '#d4af37', fontSize: 32, position: 'relative', zIndex: 1 }} />}
                        {index === 1 && <FastfoodIcon sx={{ color: '#d4af37', fontSize: 32, position: 'relative', zIndex: 1 }} />}
                        {index === 2 && <BuildIcon sx={{ color: '#d4af37', fontSize: 32, position: 'relative', zIndex: 1 }} />}
                        {index === 3 && <CelebrationIcon sx={{ color: '#d4af37', fontSize: 32, position: 'relative', zIndex: 1 }} />}
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
                      <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 1.5, lineHeight: 1.6 }}>{item.description}</Typography>
                      <Box sx={{ position: 'relative' }}>
                        <Box sx={{ height: 8, borderRadius: 4, background: 'rgba(212,175,55,0.15)', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.2)' }}>
                          <Box sx={{ 
                            width: index === 1 ? '50%' : index === 2 ? '30%' : index === 3 ? '40%' : '60%', 
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
                          {index === 1 ? '50%' : index === 2 ? '30%' : index === 3 ? '40%' : '60%'} of goal reached
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box sx={{ mt: 2.5, display: 'flex', gap: 2, pt: 2, borderTop: '1px solid rgba(212,175,55,0.15)' }}>
                    <Button 
                      component={RouterLink} 
                      to={item.link}
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
                      to={item.link}
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
          {gallerySection.subtitle}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          {gallerySection.title}
        </Typography>
        <Typography variant="body1" sx={{ color: colors.textSecondary, mb: 3 }}>
          {gallerySection.description}
        </Typography>

        <Grid container spacing={2}>
            {gallerySection.tiles.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={item.title || index}>
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
                  {item.type === 'video' && item.youtubeId ? (
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
                      src={item.imageUrl?.startsWith('http') || item.imageUrl?.startsWith('data:') ? item.imageUrl : `${process.env.PUBLIC_URL}${item.imageUrl}`}
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
                      to={item.link}
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
                    <Button component={RouterLink} to={item.link} size="small" variant="text" sx={{ color: colors.primary, fontWeight: 700 }}>
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
          {nearbySection.subtitle}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          {nearbySection.title}
        </Typography>
        <Typography variant="body1" sx={{ color: colors.textSecondary, mb: 3 }}>
          {nearbySection.description}
        </Typography>

        <Grid container spacing={2}>
          {nearbySection.tiles.map((item, index) => {
            const IconComp = index === 0 ? BeachAccessIcon : index === 1 ? TempleIcon : index === 2 ? LandscapeIcon : index === 3 ? MuseumIcon : index === 4 ? DirectionsBoatIcon : HikingIcon;
            return (
            <Grid item xs={12} sm={6} md={4} key={item.title || index}>
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
                      <IconComp sx={{ color: '#d4af37' }} />
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: colors.textSecondary }}>
                      {item.description}
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
                    to={item.link} 
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
                  <Button component={RouterLink} to={item.link} variant="text" size="small" sx={{ color: colors.primary, fontWeight: 700 }}>Learn More →</Button>
                </Box>
              </Paper>
            </Grid>
            );
          })}
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
          {contactSection.subtitle}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          {contactSection.title}
        </Typography>
        <Typography variant="body1" sx={{ color: colors.textSecondary, mb: 3 }}>
          {contactSection.description}
        </Typography>

        <Grid container spacing={2}>
          {contactSection.tiles.map((item, index) => {
            const IconComp = index === 0 ? PhoneIcon : index === 1 ? MapIcon : index === 2 ? InfoOutlinedIcon : FeedbackIcon;
            return (
              <Grid item xs={12} sm={6} md={3} key={item.title || index}>
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
                      <IconComp sx={{ color: '#d4af37' }} />
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: colors.textSecondary }}>{item.description}</Typography>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 2, display: 'flex', gap: 1.5 }}>
                  <Button 
                    component={RouterLink} 
                    to={item.link} 
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
                  <Button component={RouterLink} to={item.link} variant="text" size="small" sx={{ color: colors.primary, fontWeight: 700 }}>Learn More →</Button>
                </Box>
              </Paper>
            </Grid>
            );
          })}
        </Grid>
      </Box>
      </AnimatedSection>
    </Box>
  );
}
