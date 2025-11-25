import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Container,
  Collapse,
  Divider
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

// Menu Icons
import HomeIcon from '@mui/icons-material/Home';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import InfoIcon from '@mui/icons-material/Info';
import ExploreIcon from '@mui/icons-material/Explore';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link as RouterLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

/* -----------------------------
   ⭐ MENU ICONS MAPPING
------------------------------*/
const menuIcons = {
  'Home': HomeIcon,
  'Poojas': TempleHinduIcon,
  'Donate': VolunteerActivismIcon,
  'Gallery': PhotoLibraryIcon,
  'News / Event': AnnouncementIcon,
  'About': InfoIcon,
  'Explore Nearby': ExploreIcon,
  'Contact': ContactMailIcon,
};

/* -----------------------------
   ⭐ NEW MENU WITH SUBMENUS
------------------------------*/
const menu = {
  Home: { to: '/', sub: [] },
  
  Poojas: {
    to: '/poojas',
    sub: [
      { label: 'Pooja Overview', to: '/poojas' },
      { label: 'Daily Poojas', to: '/poojas/daily' },
      { label: 'Special Poojas', to: '/poojas/special' },
      { label: 'Festival Poojas', to: '/poojas/festival' },
      { label: 'Vazhipad List', to: '/poojas/vazhipad' },
      { label: 'Booking / Offerings', to: '/poojas/booking' },
    ],
  },

  Donate: {
    to: '/donate',
    sub: [
      { label: 'Donate Overview', to: '/donate' },
      { label: 'Online Donation', to: '/donate/online' },
      { label: 'Annadanam', to: '/donate/annadanam' },
      { label: 'Temple Renovation Fund', to: '/donate/renovation' },
      { label: 'Festival Contribution', to: '/donate/festival' },
    ],
  },

  Gallery: {
    to: '/gallery',
    sub: [
      { label: 'Gallery Overview', to: '/gallery' },
      { label: 'Photos', to: '/gallery/photos' },
      { label: 'Videos', to: '/gallery/videos' },
      { label: 'Events', to: '/gallery/events' },
      { label: 'Temple Premises', to: '/gallery/premises' },
    ],
  },

  /* 🆕 NEW MENU ITEM */
  "News / Event": {
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

  About: {
    to: '/about',
    sub: [
      { label: 'About Overview', to: '/about' },
      { label: 'Temple History', to: '/about/history' },
      { label: 'Deities', to: '/about/deities' },
      { label: 'Festivals', to: '/about/festivals' },
      { label: 'Administration', to: '/about/administration' },
      // { label: 'Committee Members', to: '/about/committee' },
      { label: 'Temple Rules & Timings', to: '/about/rules' },
    ],
  },

  "Explore Nearby": {
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

  Contact: {
    to: '/contact',
    sub: [
      { label: 'Contact Overview', to: '/contact' },
      { label: 'Contact Info', to: '/contact/info' },
      { label: 'Map / Directions', to: '/contact/map' },
      { label: 'Feedback Form', to: '/contact/feedback' },
      { label: 'Temple Office Numbers', to: '/contact/office' },
    ],
  },
};


export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState({});
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMobile = (key) => {
    setOpenMobile((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* TOP BAR */}
      <Box
        sx={{
          bgcolor: '#E63946',
          py: 1.1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
        }}
      >
        <Typography
          sx={{
            color: '#ffffff',
            fontWeight: 700,
            fontSize: { xs: '0.72rem', md: '0.95rem' },
          }}
        >
          Welcome to Muchukunnu Sri Kotta-Kovilakam Kshethram
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton size="small" sx={{ bgcolor: '#1e90ff', color: '#fff' }}>
            <FacebookIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ bgcolor: '#e84393', color: '#fff' }}>
            <InstagramIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ bgcolor: '#ff0000', color: '#fff' }}>
            <YouTubeIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ bgcolor: '#1DA1F2', color: '#fff' }}>
            <TwitterIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* MAIN HEADER */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: '#fff',
          boxShadow: 'none',
          borderTop: '2px solid #E63946',
          borderBottom: '2px solid #E63946',
          pb: '20px',
        }}
      >
        <Container maxWidth="lg" disableGutters sx={{ pl: 0, ml: 0 }}>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '70px',
              pl: 8,
              pr: { xs: 1, md: 0 },
            }}
          >

            {/* LEFT SIDE — LOGO + TITLE */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, ml: 0, mt: '20px' }}>
              <Box
                sx={{
                  width: 55,
                  height: 55,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #E63946',
                }}
              >
                <Box
                  component="img"
                  src="/assets/header_god_image.png"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', ml: '-4px' }}>

                {/* Animated Icon */}
                <Box
                  component="img"
                  src="/assets/icon_ohm_2.png"
                  alt="Temple icon"
                  sx={{
                    width: 28,
                    height: 28,
                    mb: '2px',
                    ml: '85px',
                    position: 'relative',
                    animation: 'boundedMove 4.5s ease-in-out infinite',
                    '@keyframes boundedMove': {
                      '0%': { transform: 'translateX(40px)' },
                      '50%': { transform: 'translateX(110px)' },
                      '100%': { transform: 'translateX(40px)' },
                    },
                  }}
                />

                <Typography
                  sx={{
                    fontSize: { xs: '0.75rem', md: '0.90rem' },
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    mb: '28px',
                    color: '#E63946',
                  }}
                >
                  Muchukunnu Sri Kotta-Kovilakam Kshethram
                </Typography>
              </Box>
            </Box>

            {/* RIGHT SIDE — DESKTOP MENU WITH DROPDOWNS */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: { md: 1.5, lg: 2 },
                ml: 20,
                mt: '24px',
                alignItems: 'center',
              }}
            >
              {Object.keys(menu).map((title) => {
                const item = menu[title];
                const sub = Array.isArray(item) ? item : item.sub || [];
                const linkTo = Array.isArray(item) ? undefined : item.to;
                const IconComponent = menuIcons[title];

                return (
                  <Box key={title} sx={{ position: 'relative' }}>

                    {/* MAIN MENU BUTTON */}
                    <Button
                      component={sub.length === 0 ? RouterLink : 'button'}
                      to={sub.length === 0 ? linkTo : undefined}
                      sx={{
                        color: '#E63946',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        whiteSpace: 'nowrap',
                        textTransform: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 0.3,
                        minWidth: '70px',
                        '&:hover': { color: '#d62839', transform: 'scale(1.05)' },
                        transition: 'all 0.3s ease',
                      }}
                      className="menu-trigger"
                    >
                      {IconComponent && <IconComponent sx={{ fontSize: '1.5rem', color: '#804a0aff' }} />}
                      {title}
                    </Button>

                    {/* DROPDOWN */}
                    {sub.length > 0 && (
                      <Box
                        className="submenu"
                        sx={{
                          display: 'none',
                          position: 'absolute',
                          top: '52px',
                          left: 0,
                          minWidth: '210px',
                          bgcolor: '#E63946',
                          borderRadius: 2,
                          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                          zIndex: 20,
                          py: 1,
                          animation: 'fadeIn .2s ease',
                          '@keyframes fadeIn': {
                            '0%': { opacity: 0, transform: 'translateY(-6px)' },
                            '100%': { opacity: 1, transform: 'translateY(0)' },
                          },
                        }}
                      >
                        {sub.map((item) => (
                          <ListItemButton
                            key={item.label}
                            component={RouterLink}
                            to={item.to}
                            sx={{
                              px: 2,
                              py: 0.8,
                              '&:hover': { bgcolor: '#ffffff', color: '#E63946' },
                            }}
                          >
                            <ListItemText primary={item.label} />
                          </ListItemButton>
                        ))}
                      </Box>
                    )}
                  </Box>
                );
              })}

            </Box>

            {/* MOBILE MENU ICON */}
            <IconButton
              sx={{ display: { md: 'none' }, color: '#333' }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* HOVER CSS */}
      <style>{`
        .menu-trigger:hover + .submenu {
          display: block !important;
        }
        .submenu:hover {
          display: block !important;
        }
      `}</style>

      {/* MOBILE DRAWER WITH SUBMENU ACCORDIONS */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor="right">
        <Box sx={{ width: 280 }}>
          <Box sx={{ bgcolor: '#E63946', p: 2 }}>
            <Typography sx={{ color: '#fff', fontWeight: 700 }}>Menu</Typography>
          </Box>

          <List>
            {Object.keys(menu).map((title) => {
              const item = menu[title];
              const sub = Array.isArray(item) ? item : item.sub || [];
              const linkTo = Array.isArray(item) ? undefined : item.to;
              const hasChildren = sub.length > 0;
              const IconComponent = menuIcons[title];

              return (
                <Box key={title}>
                  <ListItemButton
                    onClick={() => (hasChildren ? toggleMobile(title) : setDrawerOpen(false))}
                    component={!hasChildren ? RouterLink : 'button'}
                    to={!hasChildren ? linkTo : undefined}
                    sx={{ justifyContent: 'space-between' }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      {IconComponent && <IconComponent sx={{ fontSize: '1.3rem', color: '#E63946' }} />}
                      <ListItemText primary={title} />
                    </Box>
                    {hasChildren &&
                      (openMobile[title] ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>

                  {/* MOBILE SUBMENU */}
                  {hasChildren && (
                    <Collapse in={openMobile[title]}>
                      {sub.map((x) => (
                        <ListItemButton
                          key={x.label}
                          component={RouterLink}
                          to={x.to}
                          sx={{ pl: 4 }}
                          onClick={() => setDrawerOpen(false)}
                        >
                          <ListItemText primary={x.label} />
                        </ListItemButton>
                      ))}
                    </Collapse>
                  )}

                  <Divider />
                </Box>
              );
            })}

            {/* MOBILE CART LINK */}
            <Divider />
            <ListItemButton
              component={RouterLink}
              to="/cart"
              onClick={() => setDrawerOpen(false)}
              sx={{ justifyContent: 'space-between' }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Badge badgeContent={totalItems} color="primary" sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#1D3557',
                    color: 'white'
                  }
                }}>
                  <ShoppingCartIcon sx={{ fontSize: '1.3rem', color: '#E63946' }} />
                </Badge>
                <ListItemText primary="View Cart" />
              </Box>
            </ListItemButton>
            <Divider />

          </List>
        </Box>
      </Drawer>
    </>
  );
}
