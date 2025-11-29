import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Badge,
  Divider,
  Paper,
  Chip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';

const GOLD = '#d4af37';
const DARK = 'rgba(10,10,12,0.85)';

const MENU: Array<{
  label: string;
  to?: string;
  sub?: Array<{ label: string; to: string }>; 
}> = [
  { label: 'Home', to: '/' },
  {
    label: 'Poojas',
    to: '/poojas',
    sub: [
      { label: 'Daily Poojas', to: '/poojas/daily' },
      { label: 'Festival Poojas', to: '/poojas/festival' },
      { label: 'Special Poojas', to: '/poojas/special' },
      { label: 'Vazhipad List', to: '/poojas/vazhipad' },
      { label: 'Booking / Offerings', to: '/poojas/booking' },
    ],
  },
  {
    label: 'Donate',
    to: '/donate',
    sub: [
      { label: 'Donate Overview', to: '/donate' },
      { label: 'Online Donation', to: '/donate/online' },
      { label: 'Annadanam', to: '/donate/annadanam' },
      { label: 'Temple Renovation Fund', to: '/donate/renovation' },
      { label: 'Festival Contribution', to: '/donate/festival' },
    ],
  },
  {
    label: 'Gallery',
    to: '/gallery',
    sub: [
      { label: 'Gallery Overview', to: '/gallery' },
      { label: 'Photos', to: '/gallery/photos' },
      { label: 'Videos', to: '/gallery/videos' },
      { label: 'Events', to: '/gallery/events' },
      { label: 'Temple Premises', to: '/gallery/premises' },
    ],
  },
  {
    label: 'News / Event',
    to: '/news',
    sub: [
      { label: 'News Overview', to: '/news' },
      { label: 'Temple News', to: '/news/news' },
      { label: 'Announcements', to: '/news/announcements' },
      { label: 'Upcoming Events', to: '/news/upcoming' },
      { label: 'Past Events', to: '/news/past' },
      { label: 'Notices / Circulars', to: '/news/notices' },
    ],
  },
  {
    label: 'About',
    to: '/about',
    sub: [
      { label: 'About Overview', to: '/about' },
      { label: 'Temple History', to: '/about/history' },
      { label: 'Deities', to: '/about/deities' },
      { label: 'Festivals', to: '/about/festivals' },
      { label: 'Administration', to: '/about/administration' },
      { label: 'Temple Rules & Timings', to: '/about/rules' },
    ],
  },
  {
    label: 'Explore Nearby',
    to: '/nearby',
    sub: [
      { label: 'Nearby Overview', to: '/nearby' },
      { label: 'Tourist Places', to: '/nearby/tourist-places' },
      { label: 'Beaches', to: '/nearby/beaches' },
      { label: 'Boating', to: '/nearby/boating' },
      { label: 'Viewpoints', to: '/nearby/viewpoints' },
      { label: 'Heritage Sites', to: '/nearby/heritage' },
      { label: 'Temples Nearby', to: '/nearby/temples' },
      { label: 'Activities', to: '/nearby/activities' },
    ],
  },
  {
    label: 'Contact',
    to: '/contact',
    sub: [
      { label: 'Contact Overview', to: '/contact' },
      { label: 'Contact Info', to: '/contact/info' },
      { label: 'Map / Directions', to: '/contact/map' },
      { label: 'Feedback Form', to: '/contact/feedback' },
      { label: 'Temple Office Numbers', to: '/contact/office' },
    ],
  },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const closeTimerRef = React.useRef<number | null>(null);
  const location = useLocation();

  const isActive = (to?: string) => {
    if (!to) return false;
    const path = location.pathname || '/';
    if (to === '/') return path === '/';
    return path === to || path.startsWith(`${to}/`);
  };

  const handleMenuEnter = (label: string) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenSubmenu(label);
  };

  const handleMenuLeave = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setOpenSubmenu(null);
    }, 200);
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          const doc = document.documentElement;
          const total = doc.scrollHeight - doc.clientHeight;
          const pct = total > 0 ? Math.min(100, Math.max(0, (window.scrollY / total) * 100)) : 0;
          setProgress(pct);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Utility strip */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled 
            ? 'linear-gradient(180deg, rgba(8,8,10,0.92) 0%, rgba(8,8,10,0.88) 100%)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
          overflow: 'visible',
          transition: 'background 450ms cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 450ms cubic-bezier(0.4, 0, 0.2, 1), border-bottom 450ms cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'background, backdrop-filter',
        }}
      >
        {/* Scroll progress bar */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, height: 3, width: `${progress}%`, bgcolor: GOLD, boxShadow: `0 0 8px ${GOLD}`, transition: 'width 80ms linear', zIndex: 1500 }} />
        <Box sx={{ px: { xs: 1.5, md: 3 } }}>
          <Toolbar disableGutters sx={{ minHeight: 60, display: { xs: 'none', md: 'flex' }, py: 0.5, position: 'relative' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: '#fff' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTimeIcon sx={{ fontSize: 17, color: GOLD, filter: 'drop-shadow(0 1px 4px rgba(212,175,55,0.8)) drop-shadow(0 0 8px rgba(212,175,55,0.4))' }} />
                <Typography variant="caption" sx={{ letterSpacing: 0.4, fontWeight: 500, textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)' }}>
                  Temple Timings: 5:00 AM – 8:00 PM
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: 17, color: GOLD, filter: 'drop-shadow(0 1px 4px rgba(212,175,55,0.8)) drop-shadow(0 0 8px rgba(212,175,55,0.4))' }} />
                <Typography variant="caption" sx={{ letterSpacing: 0.4, fontWeight: 500, textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)' }}>
                  info@srikottakovilakamtemple.com
                </Typography>
              </Box>
            </Box>
            
            {/* Center Om icon in utility bar */}
            <Box sx={{ 
              position: 'absolute', 
              left: '50%', 
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}>
              <Box 
                component="img"
                src={`${process.env.PUBLIC_URL}/assets/icon_ohm_2.png`}
                alt="Om"
                sx={{ 
                  width: 50, 
                  height: 50, 
                  objectFit: 'contain',
                  filter: `drop-shadow(0 2px 8px ${GOLD}80) drop-shadow(0 0 16px ${GOLD}60)`,
                  opacity: scrolled ? 0.95 : 0.85,
                  transition: 'all 280ms ease',
                  animation: 'omRotate 4s ease-in-out infinite',
                  '@keyframes omRotate': {
                    '0%, 100%': { 
                      transform: 'rotateY(0deg) scale(1)',
                    },
                    '25%': { 
                      transform: 'rotateY(180deg) scale(1.1)',
                    },
                    '50%': { 
                      transform: 'rotateY(360deg) scale(1)',
                    },
                    '75%': { 
                      transform: 'rotateY(180deg) scale(1.1)',
                    },
                  },
                }} 
              />
            </Box>
            
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  transition: 'all 300ms ease',
                  '&:hover': { 
                    color: GOLD, 
                    transform: 'translateY(-3px) scale(1.1)',
                    filter: 'drop-shadow(0 4px 8px rgba(212,175,55,0.5))',
                  },
                }}
              >
                <FacebookIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  transition: 'all 300ms ease',
                  '&:hover': { 
                    color: GOLD, 
                    transform: 'translateY(-3px) scale(1.1)',
                    filter: 'drop-shadow(0 4px 8px rgba(212,175,55,0.5))',
                  },
                }}
              >
                <InstagramIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  transition: 'all 300ms ease',
                  '&:hover': { 
                    color: GOLD, 
                    transform: 'translateY(-3px) scale(1.1)',
                    filter: 'drop-shadow(0 4px 8px rgba(212,175,55,0.5))',
                  },
                }}
              >
                <YouTubeIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  transition: 'all 300ms ease',
                  '&:hover': { 
                    color: GOLD, 
                    transform: 'translateY(-3px) scale(1.1)',
                    filter: 'drop-shadow(0 4px 8px rgba(212,175,55,0.5))',
                  },
                }}
              >
                <TwitterIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <Chip
                label="Donate"
                size="small"
                icon={
                  <FavoriteIcon 
                    sx={{ 
                      color: GOLD,
                      fontSize: '1.2rem',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.9)) drop-shadow(0 0 8px rgba(212,175,55,0.8))',
                      animation: 'heartbeat 1.5s ease-in-out infinite',
                      '@keyframes heartbeat': {
                        '0%, 100%': { transform: 'scale(1)' },
                        '50%': { transform: 'scale(1.15)' },
                      },
                    }} 
                  />
                }
                component={RouterLink}
                to="/donate/online"
                clickable
                sx={{
                  bgcolor: scrolled ? 'rgba(212,175,55,0.18)' : 'transparent',
                  backdropFilter: scrolled ? 'blur(8px)' : 'none',
                  color: '#fff',
                  border: `1.5px solid ${GOLD}`,
                  fontWeight: 600,
                  textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)',
                  transition: 'all 220ms ease',
                  '&:hover': { 
                    bgcolor: 'rgba(212,175,55,0.28)', 
                    transform: 'translateY(-2px) scale(1.05)', 
                    boxShadow: `0 6px 16px ${GOLD}50` 
                  },
                }}
              />
              <Chip
                label="Book Pooja"
                size="small"
                icon={
                  <CardGiftcardIcon 
                    sx={{ 
                      color: '#fff',
                      fontSize: '1.2rem',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.9)) drop-shadow(0 0 8px rgba(255,255,255,0.6))',
                      animation: 'swing 2s ease-in-out infinite',
                      '@keyframes swing': {
                        '0%, 100%': { transform: 'rotate(0deg)' },
                        '25%': { transform: 'rotate(-12deg)' },
                        '75%': { transform: 'rotate(12deg)' },
                      },
                    }} 
                  />
                }
                component={RouterLink}
                to="/poojas/booking"
                clickable
                sx={{
                  bgcolor: scrolled ? 'rgba(255,255,255,0.12)' : 'transparent',
                  backdropFilter: scrolled ? 'blur(8px)' : 'none',
                  color: '#fff',
                  border: '1.5px solid rgba(255,255,255,0.5)',
                  fontWeight: 600,
                  textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)',
                  transition: 'all 220ms ease',
                  '&:hover': { 
                    bgcolor: 'rgba(255,255,255,0.22)', 
                    transform: 'translateY(-2px) scale(1.05)', 
                    borderColor: GOLD,
                    boxShadow: '0 6px 16px rgba(255,255,255,0.3)' 
                  },
                }}
              />
            </Box>
          </Toolbar>

          {/* Main header row */}
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                  px: 1.5,
                  py: 0.8,
                  borderRadius: 999,
                  bgcolor: scrolled ? 'rgba(212,175,55,0.12)' : 'transparent',
                  backdropFilter: scrolled ? 'blur(8px)' : 'none',
                  border: scrolled ? `1px solid ${GOLD}33` : 'none',
                  transition: 'all 280ms ease',
                  '&:hover': { bgcolor: 'rgba(212,175,55,0.18)', borderColor: `${GOLD}66` },
                }}
              >
                <Box 
                  component="img"
                  src={`${process.env.PUBLIC_URL}/assets/header_god_image.png`}
                  alt="Muchukunnu Temple"
                  sx={{ 
                    width: 55, 
                    height: 55, 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    boxShadow: `0 0 16px ${GOLD}60, inset 0 -2px 4px rgba(0,0,0,0.2)`,
                    border: '2px solid rgba(212,175,55,0.4)'
                  }} 
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: 0.8,
                    fontSize: { xs: '0.75rem', md: '0.9rem' },
                    textShadow: '0 2px 8px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.4)',
                    lineHeight: 1.3,
                  }}
                >
                Sri Kotta-Kovilakam Kshethram
                </Typography>
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop menu - transparent slider style */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', pr: 1, gap: 0.5 }}>
              {MENU.map((item, idx) => {
                const alignRight = idx >= MENU.length - 2; // right align last two
                const isOpen = openSubmenu === item.label;
                return (
                  <Box 
                    key={item.label} 
                    sx={{ position: 'relative' }}
                    onMouseEnter={() => item.sub && handleMenuEnter(item.label)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <Button
                      component={item.to ? RouterLink : 'button'}
                      to={item.to || '#'}
                      endIcon={item.sub ? <ExpandMoreIcon sx={{ 
                        fontSize: 20,
                        transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.6))'
                      }} /> : null}
                      sx={{
                        color: '#fff',
                        px: 2.2,
                        py: 1.1,
                        borderRadius: 999,
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        letterSpacing: 0.4,
                        minWidth: 0,
                        textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.7)',
                        border: isActive(item.to) ? `1.5px solid ${GOLD}` : scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
                        backgroundColor: isActive(item.to) 
                          ? 'rgba(212,175,55,0.22)' 
                          : isOpen
                          ? 'rgba(255,255,255,0.16)'
                          : scrolled 
                          ? 'rgba(255,255,255,0.06)'
                          : 'transparent',
                        backdropFilter: scrolled ? 'blur(10px)' : 'none',
                        transition: 'all 260ms cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          bgcolor: isActive(item.to) ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.18)',
                          borderColor: isActive(item.to) ? GOLD : 'rgba(255,255,255,0.25)',
                          boxShadow: isActive(item.to) 
                            ? `0 4px 16px ${GOLD}50, 0 0 20px ${GOLD}30`
                            : '0 4px 14px rgba(0,0,0,0.3)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      {item.label}
                    </Button>

                    {/* Active indicator with glow */}
                    {isActive(item.to) && (
                      <Box sx={{ 
                        position: 'absolute', 
                        bottom: -6, 
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 'calc(100% - 24px)',
                        height: 3, 
                        bgcolor: GOLD, 
                        borderRadius: 999, 
                        boxShadow: `0 0 12px ${GOLD}, 0 0 24px ${GOLD}70, 0 2px 8px ${GOLD}40`,
                        animation: 'pulse 2.5s ease-in-out infinite',
                        '@keyframes pulse': {
                          '0%, 100%': { opacity: 1, boxShadow: `0 0 12px ${GOLD}, 0 0 24px ${GOLD}70` },
                          '50%': { opacity: 0.7, boxShadow: `0 0 8px ${GOLD}, 0 0 16px ${GOLD}50` },
                        },
                      }} />
                    )}

                    {item.sub && (
                      <Box
                        sx={{
                          display: isOpen ? 'block' : 'none',
                          position: 'absolute',
                          top: '100%',
                          mt: 0.3,
                          left: alignRight ? 'auto' : 0,
                          right: alignRight ? 0 : 'auto',
                          zIndex: 1600,
                          animation: isOpen ? 'slideDown 280ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                          '@keyframes slideDown': {
                            '0%': { opacity: 0, transform: 'translateY(-8px) scale(0.96)' },
                            '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
                          },
                        }}
                      >
                      <Paper
                        elevation={24}
                        sx={{
                          bgcolor: 'rgba(12,12,16,0.88)',
                          backdropFilter: 'blur(28px) saturate(200%)',
                          color: '#fff',
                          border: `1.5px solid ${GOLD}55`,
                          borderTop: `3px solid ${GOLD}`,
                          minWidth: 280,
                          maxWidth: '90vw',
                          p: 1.5,
                          borderRadius: 4,
                          boxShadow: `0 12px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.3), 0 0 40px ${GOLD}20`,
                        }}
                      >
                        {item.sub.map((s, sidx) => (
                          <Button
                            key={s.label}
                            component={RouterLink}
                            to={s.to}
                            onClick={() => setOpenSubmenu(null)}
                            sx={{
                              justifyContent: 'flex-start',
                              width: '100%',
                              color: '#fff',
                              borderRadius: 3,
                              px: 2,
                              py: 1.3,
                              mb: sidx < item.sub!.length - 1 ? 0.7 : 0,
                              textTransform: 'none',
                              fontWeight: 500,
                              fontSize: '0.92rem',
                              letterSpacing: 0.3,
                              textShadow: '0 1px 3px rgba(0,0,0,0.7)',
                              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                              borderLeft: '3px solid transparent',
                              bgcolor: 'rgba(255,255,255,0.02)',
                              '&:hover': { 
                                bgcolor: 'rgba(212,175,55,0.2)',
                                borderLeftColor: GOLD,
                                pl: 2.5,
                                boxShadow: `inset 0 0 20px rgba(212,175,55,0.15), 0 2px 8px rgba(0,0,0,0.2)`,
                                transform: 'translateX(4px)',
                              },
                            }}
                          >
                            {s.label}
                          </Button>
                        ))}
                      </Paper>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>

            {/* Mobile actions */}
            <Box sx={{ display: { xs: 'flex', lg: 'none' }, alignItems: 'center', gap: 1 }}>
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)} aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>

      {/* Offset for fixed AppBar */}
      <Toolbar sx={{ minHeight: { xs: 100, md: 108 } }} />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '86vw', maxWidth: 360,
            bgcolor: 'rgba(15,15,18,0.98)',
            color: '#fff',
            borderLeft: '1px solid rgba(255,255,255,0.1)'
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1.5 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Menu</Typography>
          <IconButton onClick={() => setDrawerOpen(false)} color="inherit" aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        <List>
          {MENU.map((item) => (
            <Box key={item.label}>
              <ListItemButton
                component={item.to ? RouterLink : 'button'}
                to={item.to || '#'}
                onClick={() => {
                  if (item.sub) {
                    setMobileOpen((prev) => ({ ...prev, [item.label]: !prev[item.label] }));
                  } else {
                    setDrawerOpen(false);
                  }
                }}
              >
                <ListItemText primary={item.label} />
                {item.sub && (
                  <ExpandMoreIcon
                    sx={{
                      transform: mobileOpen[item.label] ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                    }}
                  />
                )}
              </ListItemButton>
              {item.sub && (
                <Collapse in={!!mobileOpen[item.label]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.sub.map((s) => (
                      <ListItemButton
                        key={s.label}
                        component={RouterLink}
                        to={s.to}
                        sx={{ pl: 4 }}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <ChevronRightIconWrapper />
                        <ListItemText primary={s.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </Box>
          ))}
        </List>

        <Box sx={{ mt: 'auto', p: 2 }}>
          <Button
            fullWidth
            variant="contained"
            component={RouterLink}
            to="/donate/online"
            startIcon={<FavoriteIcon />}
            sx={{
              bgcolor: GOLD,
              color: '#121212',
              fontWeight: 700,
              '&:hover': { bgcolor: '#e0c159' },
            }}
            onClick={() => setDrawerOpen(false)}
          >
            Donate
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

function ChevronRightIconWrapper() {
  return (
    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', mr: 1, opacity: 0.7 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M9 18l6-6-6-6v12z" />
      </svg>
    </Box>
  );
}
