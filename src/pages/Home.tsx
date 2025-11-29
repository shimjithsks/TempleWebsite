import React from 'react';
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

export default function Home() {
  return (
    <Box sx={{ mt: 0, pt: 0, pb: 6 }}>
      <ImageSlider />
      {/* Enhanced About Temple section */}
      <Box
        sx={{
          mt: 4,
          mb: 5,
          position: 'relative',
          borderRadius: 4,
          overflow: 'visible',
          px: { xs: 2.5, md: 5 },
          py: { xs: 3.5, md: 5 },
          background: `linear-gradient(135deg, ${colors.white}, ${colors.brandAlpha06})`,
          border: `1px solid ${colors.primary}`,
          boxShadow: '0 10px 28px rgba(0,0,0,0.05)'
        }}
      >
        <SectionOrnament variant="om" opacity={0.35} size={140} color={colors.secondary} repeat={3} offset={-80} blendMode="normal" />
        <Box sx={{ height: 3, bgcolor: colors.primary, borderRadius: 1, mb: 2 }} />
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <Box sx={{
            position: 'absolute',
            top: -80,
            right: -60,
            width: 220,
            height: 220,
            borderRadius: '50%',
            bgcolor: colors.brandAlpha12,
            filter: 'blur(2px)',
          }} />
        </Box>
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: colors.primary, letterSpacing: 3, fontWeight: 600 }}>
              ABOUT TEMPLE
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1.5 }}>
              A Brief Introduction
            </Typography>
            <Typography variant="body1" sx={{ color: colors.textSecondary, mb: 3, lineHeight: 1.6 }}>
              Muchukunnu Temple is a sacred place of worship rooted in rich traditions, daily rituals and vibrant
              festival celebrations. Discover its history, revered deities and community programmes — whether you are
              visiting in person or connecting from afar.
            </Typography>
            <Stack direction="row" spacing={1.5} flexWrap="wrap" mb={3} useFlexGap>
              {[
                { label: 'Daily Rituals', icon: TempleHinduIcon },
                { label: 'Festival Utsavams', icon: AnnouncementIcon },
                { label: 'Community Seva', icon: VolunteerActivismIcon },
                { label: 'Historic Legacy', icon: InfoIcon },
              ].map((item) => {
                const IconComp = item.icon;
                return (
                  <Paper
                    key={item.label}
                    elevation={0}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.75,
                      px: 1.6,
                      py: 0.9,
                      borderRadius: 6,
                      bgcolor: colors.brandAlpha06,
                      border: `1px solid ${colors.primary}`,
                      boxShadow: `inset 0 -3px 0 ${colors.primary}`,
                    }}
                  >
                    <IconComp fontSize="small" sx={{ color: colors.primary }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, letterSpacing: 0.3, color: colors.textDark }}>
                      {item.label}
                    </Typography>
                  </Paper>
                );
              })}
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button component={RouterLink} to="/about" variant="contained" sx={{ fontWeight: 700 }}>
                Learn More
              </Button>
              <Button
                component={RouterLink}
                to="/gallery/photos"
                variant="text"
                sx={{ color: colors.primary, fontWeight: 700, '&:hover': { bgcolor: colors.brandAlpha06 } }}
              >
                View Gallery →
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/assets/header_god_image.png`}
                alt="Temple"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  height: { xs: 260, sm: 300, md: 340 },
                  objectFit: 'cover',
                  objectPosition: 'center',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
                  border: `1px solid ${colors.brandAlpha18}`,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  px: 1.4,
                  py: 0.7,
                  bgcolor: colors.primary,
                  color: colors.white,
                  fontSize: 12,
                  letterSpacing: 1.2,
                  fontWeight: 700,
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
                }}
              >
                TEMPLE
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Sections removed per request: Latest, Gallery, Nearby, Temple Essentials */}

      <Box sx={{ mt: 5, border: `1px solid ${colors.primary}`, borderRadius: 4, p: { xs: 2, md: 3 }, position: 'relative', overflow: 'visible' }}>
      <SectionOrnament variant="om" opacity={0.35} size={140} color={colors.secondary} repeat={3} offset={-80} blendMode="normal" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              background: `linear-gradient(130deg, ${colors.brandAlpha95}, ${colors.brandAlpha85}), url(${process.env.PUBLIC_URL}/assets/slide_3.png)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: colors.white,
              minHeight: 320,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              border: `1px solid ${colors.primary}`
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
              <Button component={RouterLink} to="/poojas/booking" variant="contained" sx={{ fontWeight: 700 }}>
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
                    border: `2px solid ${colors.primary}`,
                    transition: 'transform 220ms ease, box-shadow 220ms ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: `0 12px 30px rgba(0,0,0,0.12), 0 0 0 3px ${colors.primary}`
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
                    height: 6,
                    bgcolor: colors.primary,
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

      {/* News Overview: placed above Donation section */}
      <Box sx={{ mt: 8, border: `1px solid ${colors.primary}`, borderRadius: 4, p: { xs: 2, md: 3 }, background: `linear-gradient(135deg, ${colors.white}, ${colors.brandAlpha06})`, position: 'relative', overflow: 'visible' }}>
        <SectionOrnament variant="om" opacity={0.35} size={140} color={colors.secondary} repeat={3} offset={-80} blendMode="normal" />
        <Typography variant="overline" sx={{ color: colors.primary, letterSpacing: 2 }}>
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
                  border: `1px solid ${colors.brandAlpha12}`,
                  transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                  position: 'relative',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 28px rgba(0,0,0,0.12)', borderColor: colors.primary }
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: colors.textSecondary, mb: 2 }}>
                  {item.key === 'announcements' && 'Latest official temple announcements and bulletin items.'}
                  {item.key === 'news' && 'Coverage and updates about temple activities and programs.'}
                  {item.key === 'upcoming' && 'Dates and details for scheduled poojas, utsavams, and events.'}
                  {item.key === 'notices' && 'Important notices and office circulars for devotees.'}
                </Typography>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box sx={{ px: 1.2, py: 0.5, borderRadius: 16, bgcolor: colors.brandAlpha06, border: `1px solid ${colors.brandAlpha12}`, fontSize: 12, fontWeight: 700 }}>
                    {item.chip}
                  </Box>
                  <Button component={RouterLink} to={item.to} size="small" variant="contained" sx={{ fontWeight: 700 }}>
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

      {/* Donation Overview: new approach - ribbon header + stacked cards with progress */}
      <Box sx={{ mt: 8, border: `1px solid ${colors.primary}`, borderRadius: 4, p: { xs: 2, md: 3 }, background: `linear-gradient(135deg, ${colors.brandAlpha06}, ${colors.brandAlpha12})`, position: 'relative', overflow: 'visible' }}>
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
            px: { xs: 2, md: 3 },
            py: 2,
            borderRadius: 3,
            color: colors.white,
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            position: 'relative',
            transition: 'filter 220ms ease, opacity 220ms ease',
            '.MuiPaper-root:hover &': {
              filter: 'brightness(1.03)',
              opacity: 0.98,
            }
          }}>
            <Typography variant="overline" sx={{ letterSpacing: 2 }}>DONATION OVERVIEW</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>Support Temple Causes</Typography>
            <Box sx={{ position: 'absolute', right: 16, bottom: -8, width: 140, height: 8, borderRadius: 4, bgcolor: colors.white, opacity: 0.35 }} />
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
                    p: 2.5,
                    borderRadius: 3,
                    border: `1px solid ${colors.brandAlpha12}`,
                    position: 'relative',
                    transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                      borderColor: colors.primary,
                    },
                  }}
                >
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box sx={{ width: 56, height: 56, borderRadius: 3, bgcolor: colors.brandAlpha06, border: `1px solid ${colors.brandAlpha12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {item.key === 'online' && <PaymentIcon sx={{ color: colors.primary }} />}
                        {item.key === 'annadanam' && <FastfoodIcon sx={{ color: colors.primary }} />}
                        {item.key === 'renovation' && <BuildIcon sx={{ color: colors.primary }} />}
                        {item.key === 'festival' && <CelebrationIcon sx={{ color: colors.primary }} />}
                      </Box>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: colors.textSecondary }}>{item.desc}</Typography>
                      <Box sx={{ mt: 1.5, height: 6, borderRadius: 3, background: colors.brandAlpha06, overflow: 'hidden' }}>
                        <Box sx={{ width: item.key === 'annadanam' ? '50%' : item.key === 'renovation' ? '30%' : item.key === 'festival' ? '40%' : '60%', height: '100%', bgcolor: colors.primary }} />
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box sx={{ px: 1.2, py: 0.5, borderRadius: 20, bgcolor: item.tagColor, color: colors.white, fontSize: 12, fontWeight: 700 }}>
                        {item.tag}
                      </Box>
                    </Grid>
                  </Grid>
                  <Box sx={{ mt: 2, display: 'flex', gap: 1.5 }}>
                    <Button component={RouterLink} to={item.to} variant="contained" size="small" sx={{ fontWeight: 700 }}>Contribute</Button>
                    <Button component={RouterLink} to={item.to} variant="text" size="small" sx={{ color: colors.primary, fontWeight: 700 }}>Learn More →</Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ px: { xs: 2, md: 3 }, pb: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    border: `1px solid ${colors.brandAlpha12}`,
                    transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 10px 24px rgba(0,0,0,0.12)',
                      borderColor: colors.primary,
                    },
                  }}
                >
                  <Typography variant="caption" sx={{ color: colors.textSecondary }}>Monthly Annadanam Goal</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>₹ 2,50,000 / ₹ 5,00,000</Typography>
                  <Box sx={{ mt: 1.5, height: 8, borderRadius: 4, background: colors.brandAlpha06, overflow: 'hidden' }}>
                    <Box sx={{ width: '50%', height: '100%', background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    border: `1px solid ${colors.brandAlpha12}`,
                    transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 10px 24px rgba(0,0,0,0.12)',
                      borderColor: colors.primary,
                    },
                  }}
                >
                  <Typography variant="caption" sx={{ color: colors.textSecondary }}>Renovation Priority</Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Sanctum and Roofworks</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Box sx={{ px: 1.2, py: 0.3, borderRadius: 14, bgcolor: colors.brandAlpha06, border: `1px solid ${colors.brandAlpha12}`, fontSize: 12 }}>Sanctum</Box>
                    <Box sx={{ px: 1.2, py: 0.3, borderRadius: 14, bgcolor: colors.brandAlpha06, border: `1px solid ${colors.brandAlpha12}`, fontSize: 12 }}>Roof</Box>
                    <Box sx={{ px: 1.2, py: 0.3, borderRadius: 14, bgcolor: colors.brandAlpha06, border: `1px solid ${colors.brandAlpha12}`, fontSize: 12 }}>Lighting</Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      {/* Assistance section removed per request */}

      {/* Gallery Overview: modern material section with preview cards */}
      <Box sx={{ mt: 8, border: `1px solid ${colors.primary}`, borderRadius: 4, p: { xs: 2, md: 3 }, background: `linear-gradient(135deg, ${colors.white}, ${colors.brandAlpha06})`, position: 'relative', overflow: 'visible' }}>
        <SectionOrnament variant="om" opacity={0.35} size={140} color={colors.secondary} repeat={3} offset={-80} blendMode="normal" />
        <Typography variant="overline" sx={{ color: colors.primary, letterSpacing: 2 }}>
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
            { key: 'videos', title: 'Videos', to: '/gallery/videos', video: 'https://cdn.coverr.co/videos/coverr-hindu-temple-5112/1080p.mp4', chip: 'Highlights' },
            { key: 'events', title: 'Events', to: '/gallery/events', img: `${process.env.PUBLIC_URL}/assets/slide_3.png`, chip: 'Recent' },
            { key: 'premises', title: 'Premises', to: '/gallery/premises', img: `${process.env.PUBLIC_URL}/assets/slide_4.png`, chip: 'Scenic' },
          ].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.key}>
              <Paper
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                    border: `2px solid ${colors.primary}`,
                  transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: `0 12px 28px rgba(0,0,0,0.12), 0 0 0 3px ${colors.primary}`, borderColor: colors.primary }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  {item.key === 'videos' ? (
                    <Box sx={{ position: 'relative' }}>
                      <Box component="video" src={item.video} muted loop playsInline sx={{ width: '100%', height: 160, objectFit: 'cover', display: 'block', borderBottom: `2px solid ${colors.primary}` }} />
                      <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: colors.brandAlpha18, border: `2px solid ${colors.white}` }} />
                      </Box>
                    </Box>
                  ) : (
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.title}
                      sx={{ width: '100%', height: 160, objectFit: 'cover', borderBottom: `2px solid ${colors.primary}` }}
                      onError={(e: any) => { e.currentTarget.src = `${process.env.PUBLIC_URL}/assets/gallery_fallback.png`; }}
                    />
                  )}
                  <Box sx={{ position: 'absolute', top: 10, left: 10, px: 1, py: 0.5, borderRadius: 16, bgcolor: colors.brandAlpha06, border: `1px solid ${colors.brandAlpha12}`, fontSize: 12, fontWeight: 700 }}>
                    {item.chip}
                  </Box>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                    <Button component={RouterLink} to={item.to} size="small" variant="contained" sx={{ fontWeight: 700 }}>
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
          <Paper sx={{ p: 2, borderRadius: 3, border: `1px solid ${colors.brandAlpha12}` }}>
            <Typography variant="caption" sx={{ color: colors.textSecondary }}>Latest Uploads</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Festival Highlights & New Photos</Typography>
          </Paper>
          <Paper sx={{ p: 2, borderRadius: 3, border: `1px solid ${colors.brandAlpha12}` }}>
            <Typography variant="caption" sx={{ color: colors.textSecondary }}>Categories</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Events, Premises, Festivals</Typography>
          </Paper>
        </Box>
      </Box>

      {/* Nearby Overview: next-level design with icon cards */}
      <Box sx={{ mt: 8, border: `1px solid ${colors.primary}`, borderRadius: 4, p: { xs: 2, md: 3 }, background: `linear-gradient(135deg, ${colors.brandAlpha06}, ${colors.brandAlpha12})`, position: 'relative', overflow: 'visible' }}>
        <SectionOrnament variant="om" opacity={0.35} size={140} color={colors.secondary} repeat={3} offset={-80} blendMode="normal" />
        <Typography variant="overline" sx={{ color: colors.primary, letterSpacing: 2 }}>
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
                  border: `1px solid ${colors.brandAlpha12}`,
                  transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                  position: 'relative',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 28px rgba(0,0,0,0.12)', borderColor: colors.primary }
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Box sx={{ width: 56, height: 56, borderRadius: 3, bgcolor: colors.brandAlpha06, border: `1px solid ${colors.brandAlpha12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {(() => {
                        const IconComp = item.icon as React.ElementType;
                        return <IconComp sx={{ color: colors.primary }} />;
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
                    <Box sx={{ px: 1.2, py: 0.5, borderRadius: 16, bgcolor: colors.brandAlpha06, border: `1px solid ${colors.brandAlpha12}`, fontSize: 12, fontWeight: 700 }}>
                      {item.chip}
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 2, display: 'flex', gap: 1.5 }}>
                  <Button component={RouterLink} to={item.to} variant="contained" size="small" sx={{ fontWeight: 700 }}>Open</Button>
                  <Button component={RouterLink} to={item.to} variant="text" size="small" sx={{ color: colors.primary, fontWeight: 700 }}>View Map →</Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Overview: quick access to office, map, info, feedback */}
      <Box sx={{ mt: 8, border: `1px solid ${colors.primary}`, borderRadius: 4, p: { xs: 2, md: 3 }, background: `linear-gradient(135deg, ${colors.white}, ${colors.brandAlpha06})`, position: 'relative', overflow: 'visible' }}>
        <SectionOrnament opacity={0.85} size={88} />
        <Typography variant="overline" sx={{ color: colors.primary, letterSpacing: 2 }}>
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
                  border: `1px solid ${colors.brandAlpha12}`,
                  transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                  position: 'relative',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 28px rgba(0,0,0,0.12)', borderColor: colors.primary }
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Box sx={{ width: 56, height: 56, borderRadius: 3, bgcolor: colors.brandAlpha06, border: `1px solid ${colors.brandAlpha12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {(() => {
                        const IconComp = item.icon as React.ElementType;
                        return <IconComp sx={{ color: colors.primary }} />;
                      })()}
                    </Box>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: colors.textSecondary }}>{item.desc}</Typography>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 2, display: 'flex', gap: 1.5 }}>
                  <Button component={RouterLink} to={item.to} variant="contained" size="small" sx={{ fontWeight: 700 }}>Open</Button>
                  <Button component={RouterLink} to={item.to} variant="text" size="small" sx={{ color: colors.primary, fontWeight: 700 }}>Learn More →</Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
