import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import { colors } from '../theme/colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        color: colors.white,
        py: { xs: 5, md: 7 },
        background:
          `radial-gradient(1400px 580px at 20% 0%, rgba(255,255,255,0.06), transparent), ` +
          `linear-gradient(180deg, #0f0f10 0%, #1b1c1e 40%, #0f0f10 100%)`,
        borderTop: `2px solid #2a2b2e`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Left Section - Logo & Description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ width: 60, height: 60, mr: 2, borderRadius: 2, border: `1px solid ${colors.brandAlpha18}`, overflow: 'hidden' }}>
                <Box component="img" src="/assets/header_god_image.png" alt="Temple" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Muchukunnu Kshethram</Typography>
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.7, color: colors.brandAlpha85 }}>
              Muchukunnu Sri Kotta-Kovilakam Kshethram provides spiritual guidance and services to help devotees with temple poojas, vazhipads, donations, and related needs.
            </Typography>
            <Link href="/about" sx={{ display: 'inline-block', mt: 2, bgcolor: '#2a2b2e', color: colors.white, px: 3, py: 1, textDecoration: 'none', borderRadius: 1, fontWeight: 600, boxShadow: `0 6px 14px rgba(0,0,0,0.25)`, '&:hover': { filter: 'brightness(1.12)' } }}>
              DISCOVER MORE
            </Link>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.white }}>Contact Info</Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, alignItems: 'flex-start' }}>
              <span style={{ color: colors.white, marginTop: '2px' }}>📍</span>
              <div>
                <Typography variant="body2">Muchukunnu, Kottayam,</Typography>
                <Typography variant="body2">Kerala 686601</Typography>
              </div>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, alignItems: 'center' }}>
              <span style={{ color: colors.white }}>📞</span>
              <Typography variant="body2">+91 9995939303</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <span style={{ color: colors.white }}>✉️</span>
              <Typography variant="body2">temple@muchukunnu.org</Typography>
            </Box>
          </Grid>

          {/* Temple Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.white }}>Temple Info</Typography>
            <Link href="/about/rules" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> Temple Timings
            </Link>
            <Link href="/poojas" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> Poojas & Vazhipads
            </Link>
            <Link href="/donate" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> Make a Donation
            </Link>
            <Link href="/about/history" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> Temple History
            </Link>
            <Link href="/about/deities" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> Deities
            </Link>
            <Link href="/about/festivals" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> Festivals
            </Link>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: colors.white }}>Quick Links</Typography>
            <Link href="/nearby/accommodation" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> Accommodation Near Temple
            </Link>
            <Link href="/about/food" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> Food & Refreshments
            </Link>
            <Link href="/administration" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> Temple Administration
            </Link>
            <Link href="/gallery" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> Gallery & Photos
            </Link>
            <Link href="/nearby" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> Nearby Services
            </Link>
            <Link href="/news" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> News & Announcements
            </Link>
            <Link href="/contact" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: colors.brandAlpha85, textDecoration: 'none', mb: 1, '&:hover': { color: colors.white } }}>
              <span>›</span> Contact & Services
            </Link>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ borderTop: `1px solid ${colors.brandAlpha18}`, py: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
          <Typography variant="caption" sx={{ color: colors.brandAlpha85 }}>
            © {new Date().getFullYear()} Muchukunnu Sri Kotta-Kovilakam Kshethram. All rights reserved.
          </Typography>
          
          {/* Social Media Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              component="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ bgcolor: '#2a2b2e', color: colors.white, '&:hover': { filter: 'brightness(1.12)' } }}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ bgcolor: '#2a2b2e', color: colors.white, '&:hover': { filter: 'brightness(1.12)' } }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ bgcolor: '#2a2b2e', color: colors.white, '&:hover': { filter: 'brightness(1.12)' } }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ bgcolor: '#2a2b2e', color: colors.white, '&:hover': { filter: 'brightness(1.12)' } }}
            >
              <YouTubeIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
