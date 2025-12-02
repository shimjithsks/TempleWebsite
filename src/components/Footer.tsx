import React from 'react';
import { Box, Typography, Container, Grid, IconButton, Divider, Stack, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// import { colors } from '../theme/colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const GOLD = '#d4af37';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Main Footer Content */}
      <Box
        sx={{
          background: 'linear-gradient(180deg, rgba(15,15,18,0.98) 0%, rgba(8,8,10,1) 100%)',
          borderTop: `3px solid ${GOLD}`,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            backgroundImage: `radial-gradient(circle at 20% 50%, ${GOLD}08 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${GOLD}05 0%, transparent 50%)`,
            pointerEvents: 'none',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 }, position: 'relative', zIndex: 1 }}>
          {/* Top Section */}
          <Grid container spacing={4} sx={{ mb: 5 }}>
            {/* Logo & Description */}
            <Grid item xs={12} md={3.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
                <Box 
                  sx={{ 
                    width: 70, 
                    height: 70, 
                    borderRadius: '50%', 
                    border: `3px solid ${GOLD}`,
                    overflow: 'hidden',
                    boxShadow: `0 0 20px ${GOLD}40, inset 0 0 20px rgba(0,0,0,0.3)`,
                  }}
                >
                  <Box 
                    component="img" 
                    src={`${process.env.PUBLIC_URL}/assets/header_god_image.png`} 
                    alt="Temple" 
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: 0.5, color: GOLD, textShadow: `0 2px 8px ${GOLD}60` }}>
                    Muchukunnu
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
                    Sri Kotta-Kovilakam Kshethram
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', mb: 3 }}>
                A sacred place of worship dedicated to preserving ancient traditions, daily rituals, and vibrant festival celebrations for devotees worldwide.
              </Typography>
              <Chip 
                label="Temple Timings: 5:00 AM – 8:00 PM"
                icon={<AccessTimeIcon sx={{ color: GOLD + '!important' }} />}
                sx={{ 
                  bgcolor: 'rgba(212,175,55,0.15)',
                  color: '#fff',
                  border: `1px solid ${GOLD}60`,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                }}
              />
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 3, 
                  color: GOLD,
                  fontSize: '1.1rem',
                  letterSpacing: 0.5,
                  textTransform: 'uppercase',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 3,
                    bgcolor: GOLD,
                    borderRadius: 2,
                  }
                }}
              >
                Temple
              </Typography>
              <Stack spacing={1.5} sx={{ mt: 2 }}>
                {[
                  { label: 'About Temple', href: '/about' },
                  { label: 'Deities', href: '/about/deities' },
                  { label: 'History', href: '/about/history' },
                  { label: 'Festivals', href: '/about/festivals' },
                  { label: 'Rules & Guidelines', href: '/about/rules' },
                ].map((link) => (
                  <Box 
                    key={link.label}
                    component={RouterLink}
                    to={link.href} 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      color: 'rgba(255,255,255,0.75)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'all 200ms ease',
                      '&:hover': { 
                        color: GOLD,
                        transform: 'translateX(4px)',
                      } 
                    }}
                  >
                    <Box sx={{ width: 4, height: 4, bgcolor: GOLD, borderRadius: '50%' }} />
                    {link.label}
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Services */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 3, 
                  color: GOLD,
                  fontSize: '1.1rem',
                  letterSpacing: 0.5,
                  textTransform: 'uppercase',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 3,
                    bgcolor: GOLD,
                    borderRadius: 2,
                  }
                }}
              >
                Services
              </Typography>
              <Stack spacing={1.5} sx={{ mt: 2 }}>
                {[
                  { label: 'Book Pooja', href: '/poojas/booking' },
                  { label: 'Vazhipads', href: '/poojas/vazhipad' },
                  { label: 'Donate Online', href: '/donate/online' },
                  { label: 'Annadanam', href: '/donate/annadanam' },
                  { label: 'Gallery', href: '/gallery' },
                ].map((link) => (
                  <Box 
                    key={link.label}
                    component={RouterLink}
                    to={link.href} 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      color: 'rgba(255,255,255,0.75)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'all 200ms ease',
                      '&:hover': { 
                        color: GOLD,
                        transform: 'translateX(4px)',
                      } 
                    }}
                  >
                    <Box sx={{ width: 4, height: 4, bgcolor: GOLD, borderRadius: '50%' }} />
                    {link.label}
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Explore - Nearby Attractions */}
            <Grid item xs={12} sm={6} md={2}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 3, 
                  color: GOLD,
                  fontSize: '1.1rem',
                  letterSpacing: 0.5,
                  textTransform: 'uppercase',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 3,
                    bgcolor: GOLD,
                    borderRadius: 2,
                  }
                }}
              >
                Explore
              </Typography>
              <Stack spacing={1.5} sx={{ mt: 2 }}>
                {[
                  { label: 'Nearby Temples', href: '/nearby/temples' },
                  { label: 'Beaches', href: '/nearby/beaches' },
                  { label: 'Viewpoints', href: '/nearby/viewpoints' },
                  { label: 'Heritage Sites', href: '/nearby/heritage' },
                  { label: 'Tourist Places', href: '/nearby/tourist-places' },
                ].map((link) => (
                  <Box 
                    key={link.label}
                    component={RouterLink}
                    to={link.href} 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      color: 'rgba(255,255,255,0.75)', 
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      transition: 'all 200ms ease',
                      '&:hover': { 
                        color: GOLD,
                        transform: 'translateX(4px)',
                      } 
                    }}
                  >
                    <Box sx={{ width: 4, height: 4, bgcolor: GOLD, borderRadius: '50%' }} />
                    {link.label}
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={2.5}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 3, 
                  color: GOLD,
                  fontSize: '1.1rem',
                  letterSpacing: 0.5,
                  textTransform: 'uppercase',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 3,
                    bgcolor: GOLD,
                    borderRadius: 2,
                  }
                }}
              >
                Contact
              </Typography>
              <Stack spacing={2} sx={{ mt: 2 }}>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <LocationOnIcon sx={{ color: GOLD, fontSize: 20, mt: 0.3 }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, mb: 0.5 }}>
                      Temple Address
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                      Muchukunnu, Kottayam<br/>Kerala 686601, India
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <PhoneIcon sx={{ color: GOLD, fontSize: 20 }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, mb: 0.3 }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      +91 9995939303
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                  <EmailIcon sx={{ color: GOLD, fontSize: 20 }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, mb: 0.3 }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      info@srikottakovilakmtemple.com
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider sx={{ borderColor: 'rgba(212,175,55,0.2)', my: 4 }} />

          {/* Bottom Section */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', textAlign: { xs: 'center', md: 'left' } }}>
              © {new Date().getFullYear()} Muchukunnu Sri Kotta-Kovilakam Kshethram. All rights reserved.
            </Typography>
            
            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {[
                { icon: FacebookIcon, href: 'https://facebook.com' },
                { icon: InstagramIcon, href: 'https://instagram.com' },
                { icon: YouTubeIcon, href: 'https://youtube.com' },
                { icon: TwitterIcon, href: 'https://twitter.com' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <IconButton
                    key={idx}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      bgcolor: 'rgba(212,175,55,0.1)',
                      border: `1px solid ${GOLD}40`,
                      color: '#fff',
                      transition: 'all 300ms ease',
                      '&:hover': { 
                        bgcolor: GOLD,
                        color: '#000',
                        transform: 'translateY(-4px) scale(1.1)',
                        boxShadow: `0 8px 20px ${GOLD}40`,
                      } 
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                );
              })}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Bottom Gold Strip */}
      <Box 
        sx={{ 
          height: 4,
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
        }} 
      />
    </Box>
  );
}
