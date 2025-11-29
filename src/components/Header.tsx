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
  Menu,
  MenuItem,
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
import LanguageIcon from '@mui/icons-material/Language';
import CheckIcon from '@mui/icons-material/Check';
import { useLanguage } from '../context/LanguageContext';

const GOLD = '#d4af37';
const DARK = 'rgba(10,10,12,0.85)';

// Menu structure with translation keys
const getMenuStructure = (t: (key: string) => string) => [
  { labelKey: 'menu.home', label: t('menu.home'), to: '/' },
  {
    labelKey: 'menu.poojas',
    label: t('menu.poojas'),
    to: '/poojas',
    sub: [
      { labelKey: 'submenu.dailyPoojas', label: t('submenu.dailyPoojas'), to: '/poojas/daily' },
      { labelKey: 'submenu.festivalPoojas', label: t('submenu.festivalPoojas'), to: '/poojas/festival' },
      { labelKey: 'submenu.specialPoojas', label: t('submenu.specialPoojas'), to: '/poojas/special' },
      { labelKey: 'submenu.vazhipadList', label: t('submenu.vazhipadList'), to: '/poojas/vazhipad' },
      { labelKey: 'submenu.booking', label: t('submenu.booking'), to: '/poojas/booking' },
    ],
  },
  {
    labelKey: 'menu.donate',
    label: t('menu.donate'),
    to: '/donate',
    sub: [
      { labelKey: 'submenu.donateOverview', label: t('submenu.donateOverview'), to: '/donate' },
      { labelKey: 'submenu.onlineDonation', label: t('submenu.onlineDonation'), to: '/donate/online' },
      { labelKey: 'submenu.annadanam', label: t('submenu.annadanam'), to: '/donate/annadanam' },
      { labelKey: 'submenu.renovationFund', label: t('submenu.renovationFund'), to: '/donate/renovation' },
      { labelKey: 'submenu.festivalContribution', label: t('submenu.festivalContribution'), to: '/donate/festival' },
    ],
  },
  {
    labelKey: 'menu.gallery',
    label: t('menu.gallery'),
    to: '/gallery',
    sub: [
      { labelKey: 'submenu.galleryOverview', label: t('submenu.galleryOverview'), to: '/gallery' },
      { labelKey: 'submenu.photos', label: t('submenu.photos'), to: '/gallery/photos' },
      { labelKey: 'submenu.videos', label: t('submenu.videos'), to: '/gallery/videos' },
      { labelKey: 'submenu.events', label: t('submenu.events'), to: '/gallery/events' },
      { labelKey: 'submenu.templePremises', label: t('submenu.templePremises'), to: '/gallery/premises' },
    ],
  },
  {
    labelKey: 'menu.news',
    label: t('menu.news'),
    to: '/news',
    sub: [
      { labelKey: 'submenu.newsOverview', label: t('submenu.newsOverview'), to: '/news' },
      { labelKey: 'submenu.templeNews', label: t('submenu.templeNews'), to: '/news/news' },
      { labelKey: 'submenu.announcements', label: t('submenu.announcements'), to: '/news/announcements' },
      { labelKey: 'submenu.upcomingEvents', label: t('submenu.upcomingEvents'), to: '/news/upcoming' },
      { labelKey: 'submenu.pastEvents', label: t('submenu.pastEvents'), to: '/news/past' },
      { labelKey: 'submenu.notices', label: t('submenu.notices'), to: '/news/notices' },
    ],
  },
  {
    labelKey: 'menu.about',
    label: t('menu.about'),
    to: '/about',
    sub: [
      { labelKey: 'submenu.aboutOverview', label: t('submenu.aboutOverview'), to: '/about' },
      { labelKey: 'submenu.templeHistory', label: t('submenu.templeHistory'), to: '/about/history' },
      { labelKey: 'submenu.deities', label: t('submenu.deities'), to: '/about/deities' },
      { labelKey: 'submenu.festivals', label: t('submenu.festivals'), to: '/about/festivals' },
      { labelKey: 'submenu.administration', label: t('submenu.administration'), to: '/about/administration' },
      { labelKey: 'submenu.rulesTimings', label: t('submenu.rulesTimings'), to: '/about/rules' },
    ],
  },
  {
    labelKey: 'menu.nearby',
    label: t('menu.nearby'),
    to: '/nearby',
    sub: [
      { labelKey: 'submenu.nearbyOverview', label: t('submenu.nearbyOverview'), to: '/nearby' },
      { labelKey: 'submenu.touristPlaces', label: t('submenu.touristPlaces'), to: '/nearby/tourist-places' },
      { labelKey: 'submenu.beaches', label: t('submenu.beaches'), to: '/nearby/beaches' },
      { labelKey: 'submenu.boating', label: t('submenu.boating'), to: '/nearby/boating' },
      { labelKey: 'submenu.viewpoints', label: t('submenu.viewpoints'), to: '/nearby/viewpoints' },
      { labelKey: 'submenu.heritageSites', label: t('submenu.heritageSites'), to: '/nearby/heritage' },
      { labelKey: 'submenu.templesNearby', label: t('submenu.templesNearby'), to: '/nearby/temples' },
      { labelKey: 'submenu.activities', label: t('submenu.activities'), to: '/nearby/activities' },
    ],
  },
  {
    labelKey: 'menu.contact',
    label: t('menu.contact'),
    to: '/contact',
    sub: [
      { labelKey: 'submenu.contactOverview', label: t('submenu.contactOverview'), to: '/contact' },
      { labelKey: 'submenu.contactInfo', label: t('submenu.contactInfo'), to: '/contact/info' },
      { labelKey: 'submenu.mapDirections', label: t('submenu.mapDirections'), to: '/contact/map' },
      { labelKey: 'submenu.feedbackForm', label: t('submenu.feedbackForm'), to: '/contact/feedback' },
      { labelKey: 'submenu.templeOffice', label: t('submenu.templeOffice'), to: '/contact/office' },
    ],
  },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);
  const { language, setLanguage, t } = useLanguage();
  const closeTimerRef = React.useRef<number | null>(null);
  const location = useLocation();

  const MENU = getMenuStructure(t);

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
                  {t('header.timings')}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: 17, color: GOLD, filter: 'drop-shadow(0 1px 4px rgba(212,175,55,0.8)) drop-shadow(0 0 8px rgba(212,175,55,0.4))' }} />
                <Typography variant="caption" sx={{ letterSpacing: 0.4, fontWeight: 500, textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)' }}>
                  {t('header.email')}
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
              {/* Language Dropdown */}
              <Button
                startIcon={<LanguageIcon sx={{ fontSize: 18 }} />}
                endIcon={<ExpandMoreIcon sx={{ fontSize: 18 }} />}
                onClick={(e) => setLangAnchor(e.currentTarget)}
                sx={{
                  color: '#fff',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  px: 1.5,
                  py: 0.6,
                  minWidth: 0,
                  borderRadius: 2,
                  border: `1px solid ${GOLD}60`,
                  bgcolor: 'rgba(212,175,55,0.12)',
                  backdropFilter: 'blur(8px)',
                  textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                  transition: 'all 220ms ease',
                  '&:hover': {
                    bgcolor: 'rgba(212,175,55,0.22)',
                    borderColor: GOLD,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px ${GOLD}40`,
                  },
                }}
              >
                {language === 'en' ? 'EN' : 'മലയാളം'}
              </Button>
              <Menu
                anchorEl={langAnchor}
                open={Boolean(langAnchor)}
                onClose={() => setLangAnchor(null)}
                PaperProps={{
                  sx: {
                    bgcolor: 'rgba(12,12,16,0.92)',
                    backdropFilter: 'blur(20px)',
                    border: `1.5px solid ${GOLD}55`,
                    borderTop: `3px solid ${GOLD}`,
                    borderRadius: 3,
                    mt: 1,
                    boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.3)`,
                    minWidth: 160,
                  },
                }}
              >
                <MenuItem
                  onClick={() => {
                    setLanguage('en');
                    setLangAnchor(null);
                  }}
                  sx={{
                    color: '#fff',
                    py: 1.2,
                    px: 2,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    borderRadius: 2,
                    mx: 0.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    bgcolor: language === 'en' ? 'rgba(212,175,55,0.15)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgba(212,175,55,0.2)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LanguageIcon sx={{ fontSize: 18, color: GOLD }} />
                    English
                  </Box>
                  {language === 'en' && <CheckIcon sx={{ fontSize: 18, color: GOLD }} />}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setLanguage('ml');
                    setLangAnchor(null);
                  }}
                  sx={{
                    color: '#fff',
                    py: 1.2,
                    px: 2,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    borderRadius: 2,
                    mx: 0.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    bgcolor: language === 'ml' ? 'rgba(212,175,55,0.15)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgba(212,175,55,0.2)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LanguageIcon sx={{ fontSize: 18, color: GOLD }} />
                    മലയാളം
                  </Box>
                  {language === 'ml' && <CheckIcon sx={{ fontSize: 18, color: GOLD }} />}
                </MenuItem>
              </Menu>
              
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
                label={t('header.donate')}
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
                label={t('header.bookPooja')}
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
                {t('header.templeName')}
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
                        bottom: -4, 
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
