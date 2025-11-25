import React from 'react';
import { Box, Grid, Paper, Typography, Button, Stack, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import FeaturedPoojas from '../components/FeaturedPoojas';
import LatestAnnouncements from '../components/LatestAnnouncements';
import GalleryPreview from '../components/GalleryPreview';
import NearbyPreview from '../components/NearbyPreview';
import InfoIcon from '@mui/icons-material/Info';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ExploreIcon from '@mui/icons-material/Explore';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import GroupsIcon from '@mui/icons-material/Groups';
import MapIcon from '@mui/icons-material/Map';

const quickNav = [
  {
    title: 'Book a Seva',
    description: 'Daily, special, and festival poojas with instant booking confirmation.',
    to: '/poojas/booking',
    icon: TempleHinduIcon,
  },
  {
    title: 'Support the Temple',
    description: 'Annadanam, renovation fund, and festival seva contributions online.',
    to: '/donate/online',
    icon: VolunteerActivismIcon,
  },
  {
    title: 'Explore Temple Story',
    description: 'History, deities, festivals, and administration details in one place.',
    to: '/about/history',
    icon: InfoIcon,
  },
  {
    title: 'Plan Your Visit',
    description: 'Nearby attractions, maps, contacts, and travel assistance.',
    to: '/contact/map',
    icon: MapIcon,
  },
];

const navigatorSections = [
  {
    title: 'Temple Legacy & Rituals',
    description: 'Learn about the shrine, sacred customs, and governing trustees.',
    primary: { label: 'Go to About Section', to: '/about' },
    links: [
      { label: 'History', to: '/about/history' },
      { label: 'Deities', to: '/about/deities' },
      { label: 'Festivals', to: '/about/festivals' },
      { label: 'Administration', to: '/about/administration' },
      { label: 'Rules & Timings', to: '/about/rules' },
    ],
  },
  {
    title: 'Pooja Scheduler',
    description: 'Browse every vazhipad, book special sevas, and prepare your day plan.',
    primary: { label: 'Open Pooja Pages', to: '/poojas' },
    links: [
      { label: 'Daily Poojas', to: '/poojas/daily' },
      { label: 'Special Poojas', to: '/poojas/special' },
      { label: 'Festival Poojas', to: '/poojas/festival' },
      { label: 'Vazhipad List', to: '/poojas/vazhipad' },
      { label: 'Booking Desk', to: '/poojas/booking' },
    ],
  },
  {
    title: 'Devotion & Giving',
    description: 'Contribute to annadanam, renovations, or festival arrangements securely.',
    primary: { label: 'View Donation Centre', to: '/donate' },
    links: [
      { label: 'Online Donation', to: '/donate/online' },
      { label: 'Annadanam', to: '/donate/annadanam' },
      { label: 'Renovation Fund', to: '/donate/renovation' },
      { label: 'Festival Support', to: '/donate/festival' },
    ],
  },
  {
    title: 'Media & Updates',
    description: 'Catch up on temple announcements, galleries, and visit inspirations.',
    primary: { label: 'See News & Gallery', to: '/gallery' },
    links: [
      { label: 'Photo Gallery', to: '/gallery/photos' },
      { label: 'Video Moments', to: '/gallery/videos' },
      { label: 'Temple News', to: '/news/news' },
      { label: 'Announcements', to: '/news/announcements' },
      { label: 'Festival Calendar', to: '/news/upcoming' },
    ],
  },
  {
    title: 'Nearby Experiences',
    description: 'Craft a mindful journey with curated heritage walks and pilgrim routes.',
    primary: { label: 'Explore Nearby', to: '/nearby' },
    links: [
      { label: 'Tourist Spots', to: '/nearby/tourist-places' },
      { label: 'Beaches', to: '/nearby/beaches' },
      { label: 'Boating', to: '/nearby/boating' },
      { label: 'Viewpoints', to: '/nearby/viewpoints' },
      { label: 'Heritage Trails', to: '/nearby/heritage' },
      { label: 'Nearby Temples', to: '/nearby/temples' },
    ],
  },
  {
    title: 'Contact & Services',
    description: 'Reach the temple office, locate on the map, and share feedback.',
    primary: { label: 'Contact Desk', to: '/contact' },
    links: [
      { label: 'Information', to: '/contact/info' },
      { label: 'Temple Map', to: '/contact/map' },
      { label: 'Feedback Form', to: '/contact/feedback' },
      { label: 'Office Numbers', to: '/contact/office' },
    ],
  },
];

const featureTiles = [
  {
    title: 'Festival Bulletins',
    description: 'Plan your trip around upcoming utsavams and pooja mahotsavs.',
    to: '/news/upcoming',
    color: 'linear-gradient(135deg, #ffe1e7, #ffd6a5)',
  },
  {
    title: 'Temple Gallery',
    description: 'Swirl through photos, events, and the sacred premises.',
    to: '/gallery/photos',
    color: 'linear-gradient(135deg, #f3f6ff, #e8ecff)',
  },
  {
    title: 'Nearby Planner',
    description: 'Heritage walks, beaches, and pilgrim circuits to extend your visit.',
    to: '/nearby/tourist-places',
    color: 'linear-gradient(135deg, #e8fff2, #ccf5e0)',
  },
  {
    title: 'Temple Office',
    description: 'Office contacts, map, and assistance for devotees.',
    to: '/contact/office',
    color: 'linear-gradient(135deg, #fef3d9, #ffe8ba)',
  },
];

export default function Home() {
  return (
    <Box sx={{ mt: { xs: -4, md: -6 }, pb: 6 }}>
      <ImageSlider />

      

      {/* About Temple section (placed above Featured Offerings) */}
      <Box
        sx={{
          mt: 4,
          mb: 4,
          p: { xs: 2.5, md: 4 },
          borderRadius: 3,
          bgcolor: '#fff',
          border: '1px solid rgba(230,57,70,0.12)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/header_god_image.png"
              alt="Temple"
              sx={{
                width: '100%',
                borderRadius: 2,
                height: 260,
                objectFit: 'contain',
                objectPosition: 'center',
                bgcolor: '#fff',
                p: 0.5,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: '#E63946', letterSpacing: 2 }}>
              ABOUT TEMPLE
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              A Brief Introduction
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
              Muchukunnu Temple is a sacred place of worship with rich traditions, daily rituals, and festival
              celebrations. Explore the temple history, deities, and community programs — whether you're visiting in
              person or connecting from afar.
            </Typography>
            <Button component={RouterLink} to="/about" variant="contained" sx={{ bgcolor: '#E63946', fontWeight: 700 }}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>

      <FeaturedPoojas />

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6} lg={4}>
          <LatestAnnouncements />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <GalleryPreview />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <NearbyPreview />
        </Grid>
      </Grid>

      

      <Box sx={{ pt: { xs: 5, md: 7 }, pb: 5 }}>
        <Typography variant="overline" sx={{ color: '#E63946', letterSpacing: 2 }}>
          TEMPLE ESSENTIALS
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Navigate to Every Subpage in Moments
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', maxWidth: 760 }}>
          After enjoying the hero slider, jump into the section that matters most—booking poojas, making donations,
          learning temple history, or finding travel support. Each card below opens a dedicated sub page.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {navigatorSections.map((section) => (
          <Grid item xs={12} md={4} lg={3} key={section.title}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                height: '100%',
                borderTop: '4px solid #E63946',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 220ms ease, box-shadow 220ms ease',
                '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 12px 30px rgba(0,0,0,0.12)' },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                {section.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mb: 2 }}>
                {section.description}
              </Typography>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {section.links.slice(0, 5).map((link) => (
                  <Button
                    key={`${section.title}-${link.label}`}
                    component={RouterLink}
                    to={link.to}
                    size="small"
                    variant="text"
                    sx={{ px: 1.2, color: '#E63946', '&:hover': { bgcolor: 'rgba(230,57,70,0.06)' } }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>

              <Box sx={{ mt: 2 }}>
                <Button component={RouterLink} to={section.primary.to} variant="contained" sx={{ bgcolor: '#E63946', fontWeight: 700 }}>
                  {section.primary.label}
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      

      <Grid container spacing={3} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background:
                'linear-gradient(130deg, rgba(230,57,70,0.95), rgba(214,40,40,0.85)), url(/assets/slide_3.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              minHeight: 320,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography variant="overline" sx={{ letterSpacing: 2 }}>
              PLAN YOUR DEVOTIONAL DAY
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Book poojas, support temple causes, and stay informed.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Use the buttons below for the most requested actions from devotees around the world.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button component={RouterLink} to="/poojas/booking" variant="contained" sx={{ fontWeight: 700 }}>
                Book a Pooja
              </Button>
              <Button
                component={RouterLink}
                to="/donate/online"
                variant="outlined"
                sx={{ color: '#fff', borderColor: '#fff', fontWeight: 700 }}
              >
                Donate Online
              </Button>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {featureTiles.map((tile) => (
              <Grid item xs={12} sm={6} key={tile.title}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: '100%',
                    background: tile.color,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 220ms ease, box-shadow 220ms ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {tile.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#333', mb: 2 }}>
                    {tile.description}
                  </Typography>
                  <Button component={RouterLink} to={tile.to} size="small" sx={{ color: '#E63946', fontWeight: 700 }}>
                    Visit Page →
                  </Button>

                  <Box sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 6,
                    bgcolor: 'rgba(230,57,70,0.18)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 260ms ease'
                  }} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Paper
        sx={{
          mt: 5,
          p: { xs: 3, md: 4 },
          borderRadius: 4,
          bgcolor: '#ffe9ec',
          border: '1px solid #ffd4db',
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              Need human assistance?
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              The contact section lists office numbers, feedback forms, and the interactive map. Nearby pages help you
              with stay, travel, and amenities around the shrine.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} spacing={1} alignItems={{ sm: 'flex-end' }}>
              <Button component={RouterLink} to="/contact" variant="contained" sx={{ fontWeight: 700 }}>
                Contact Office
              </Button>
              <Button component={RouterLink} to="/nearby" variant="text" sx={{ color: '#E63946', fontWeight: 700 }}>
                Explore Nearby →
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
