import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#1a1a1a', color: '#fff', py: 6, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Left Section - Logo & Description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ width: 60, height: 60, bgcolor: '#ffffff', borderRadius: 1, mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                🙏
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Muchukunnu Kshethram</Typography>
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#ccc' }}>
              Muchukunnu Sri Kotta-Kovilakam Kshethram provides spiritual guidance and services to help devotees with temple poojas, vazhipads, donations, and related needs.
            </Typography>
            <Link href="#" sx={{ display: 'inline-block', mt: 2, bgcolor: '#1e90ff', color: '#fff', px: 3, py: 1, textDecoration: 'none', borderRadius: 1, fontWeight: 600, '&:hover': { bgcolor: '#1a7acc' } }}>
              DISCOVER MORE
            </Link>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#ffffff' }}>Contact Info</Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, alignItems: 'flex-start' }}>
              <span style={{ color: '#ffffff', marginTop: '2px' }}>📍</span>
              <div>
                <Typography variant="body2">Muchukunnu, Kottayam,</Typography>
                <Typography variant="body2">Kerala 686601</Typography>
              </div>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mb: 2, alignItems: 'center' }}>
              <span style={{ color: '#ffffff' }}>📞</span>
              <Typography variant="body2">+91 9995939303</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <span style={{ color: '#ffffff' }}>✉️</span>
              <Typography variant="body2">temple@muchukunnu.org</Typography>
            </Box>
          </Grid>

          {/* Temple Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#ffffff' }}>Temple Info</Typography>
            <Link href="#" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ccc', textDecoration: 'none', mb: 1, '&:hover': { color: '#ffffff' } }}>
              <span>›</span> Temple Timings
            </Link>
            <Link href="/poojas" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ccc', textDecoration: 'none', mb: 1, '&:hover': { color: '#ffffff' } }}>
              <span>›</span> Poojas & Vazhipads
            </Link>
            <Link href="#" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ccc', textDecoration: 'none', mb: 1, '&:hover': { color: '#ffffff' } }}>
              <span>›</span> Event Management
            </Link>
            <Link href="#" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ccc', textDecoration: 'none', mb: 1, '&:hover': { color: '#ffffff' } }}>
              <span>›</span> Marriage Registration
            </Link>
            <Link href="/donate" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ccc', textDecoration: 'none', mb: 1, '&:hover': { color: '#ffffff' } }}>
              <span>›</span> Make a Donation
            </Link>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#ffffff' }}>Quick Links</Typography>
            <Link href="#" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ccc', textDecoration: 'none', mb: 1, '&:hover': { color: '#ffffff' } }}>
              <span>›</span> Accommodation Near Temple
            </Link>
            <Link href="#" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ccc', textDecoration: 'none', mb: 1, '&:hover': { color: '#ffffff' } }}>
              <span>›</span> Food & Refreshments
            </Link>
            <Link href="#" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ccc', textDecoration: 'none', mb: 1, '&:hover': { color: '#ffffff' } }}>
              <span>›</span> Temple Administration
            </Link>
            <Link href="/gallery" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ccc', textDecoration: 'none', mb: 1, '&:hover': { color: '#ffffff' } }}>
              <span>›</span> Gallery & Photos
            </Link>
            <Link href="/nearby" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ccc', textDecoration: 'none', mb: 1, '&:hover': { color: '#ffffff' } }}>
              <span>›</span> Nearby Services
            </Link>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ borderTop: '1px solid #444', py: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
          <Typography variant="caption" sx={{ color: '#999' }}>
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
              sx={{ bgcolor: '#1e90ff', color: '#fff', '&:hover': { bgcolor: '#1a7acc' } }}
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ bgcolor: '#1e90ff', color: '#fff', '&:hover': { bgcolor: '#1a7acc' } }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ bgcolor: '#1e90ff', color: '#fff', '&:hover': { bgcolor: '#1a7acc' } }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ bgcolor: '#1e90ff', color: '#fff', '&:hover': { bgcolor: '#1a7acc' } }}
            >
              <YouTubeIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
