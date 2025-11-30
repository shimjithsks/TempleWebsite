import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
  Link,
  Avatar,
  Chip,
} from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

const GOLD = '#d4af37';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder: replace with API call
    alert('Message sent. Temple office will contact you shortly.');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  }

  return (
    <>
      <PageBanner title="Contact & Visit" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={0} sx={{ 
              p: { xs: 3, md: 4 },
              border: `3px solid ${GOLD}`,
              borderRadius: 4,
              boxShadow: '0 8px 24px rgba(212,175,55,0.2)',
              background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
              position: 'relative',
              overflow: 'visible',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -3,
                left: 0,
                right: 0,
                height: 6,
                background: `linear-gradient(90deg, ${GOLD}, #e5c158, ${GOLD})`,
                borderRadius: '4px 4px 0 0',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s linear infinite',
              },
              '@keyframes shimmer': {
                '0%': { backgroundPosition: '-200% 0' },
                '100%': { backgroundPosition: '200% 0' },
              },
            }}>
              {/* Header with Avatar */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    background: `linear-gradient(135deg, #2196f3 0%, #00bcd4 100%)`,
                    boxShadow: '0 4px 12px rgba(33,150,243,0.3)',
                  }}
                >
                  <ContactMailIcon sx={{ fontSize: 36, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 900, color: GOLD, mb: 0.5 }}>
                    Contact & Visit Us
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    Send us a message or plan your visit to the temple
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 3, borderColor: `rgba(212,175,55,0.3)` }} />

              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                  <Box component="form" onSubmit={submit} sx={{ display: 'grid', gap: 2 }}>
                    <TextField 
                      label="Full Name" 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      required 
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: GOLD },
                          '&.Mui-focused fieldset': { borderColor: GOLD },
                        },
                        '& .MuiInputLabel-root.Mui-focused': { color: GOLD },
                      }}
                    />
                    <TextField 
                      label="Email" 
                      name="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      required 
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: GOLD },
                          '&.Mui-focused fieldset': { borderColor: GOLD },
                        },
                        '& .MuiInputLabel-root.Mui-focused': { color: GOLD },
                      }}
                    />
                    <TextField 
                      label="Phone" 
                      name="phone" 
                      value={form.phone} 
                      onChange={handleChange} 
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: GOLD },
                          '&.Mui-focused fieldset': { borderColor: GOLD },
                        },
                        '& .MuiInputLabel-root.Mui-focused': { color: GOLD },
                      }}
                    />
                    <TextField 
                      label="Subject" 
                      name="subject" 
                      value={form.subject} 
                      onChange={handleChange} 
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: GOLD },
                          '&.Mui-focused fieldset': { borderColor: GOLD },
                        },
                        '& .MuiInputLabel-root.Mui-focused': { color: GOLD },
                      }}
                    />
                    <TextField 
                      label="Message" 
                      name="message" 
                      value={form.message} 
                      onChange={handleChange} 
                      multiline 
                      rows={4} 
                      required 
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: GOLD },
                          '&.Mui-focused fieldset': { borderColor: GOLD },
                        },
                        '& .MuiInputLabel-root.Mui-focused': { color: GOLD },
                      }}
                    />
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <Button 
                        type="submit" 
                        variant="contained"
                        startIcon={<SendIcon />}
                        sx={{ 
                          bgcolor: GOLD,
                          color: '#000',
                          fontWeight: 700,
                          px: 3,
                          py: 1.2,
                          boxShadow: '0 4px 12px rgba(212,175,55,0.4)',
                          transition: 'all 300ms ease',
                          '&:hover': {
                            bgcolor: '#e5c158',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 20px rgba(212,175,55,0.5)',
                          }
                        }}
                      >
                        Send Message
                      </Button>
                      <Button 
                        component={Link} 
                        href="tel:+91-XXXXXXXXXX" 
                        variant="outlined"
                        startIcon={<PhoneIcon />}
                        sx={{ 
                          borderColor: GOLD,
                          color: GOLD,
                          '&:hover': { borderColor: '#e5c158', bgcolor: 'rgba(212,175,55,0.1)' }
                        }}
                      >
                        Call Office
                      </Button>
                      <Button 
                        component={Link} 
                        href="mailto:info@muchukunnu.org" 
                        variant="text"
                        startIcon={<EmailIcon />}
                        sx={{ color: GOLD, '&:hover': { bgcolor: 'rgba(212,175,55,0.1)' } }}
                      >
                        Email
                      </Button>
                    </Stack>
                  </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Paper sx={{ 
                    p: 2.5, 
                    mb: 2,
                    border: `3px solid ${GOLD}`,
                    boxShadow: '0 4px 12px rgba(212,175,55,0.2)',
                    borderLeft: `6px solid #2196f3`,
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <Avatar sx={{ bgcolor: '#2196f3', width: 40, height: 40 }}>
                        <AccessTimeIcon sx={{ fontSize: 22 }} />
                      </Avatar>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>Office Hours</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#444', mb: 0.5 }}>Monday — Sunday: 6:00 AM — 8:00 PM</Typography>
                    <Typography variant="body2" sx={{ color: '#444' }}>Office Desk: 9:00 AM — 5:00 PM</Typography>
                    <Divider sx={{ my: 2, borderColor: 'rgba(212,175,55,0.3)' }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <Avatar sx={{ bgcolor: '#4caf50', width: 40, height: 40 }}>
                        <PhoneIcon sx={{ fontSize: 22 }} />
                      </Avatar>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>Contact Numbers</Typography>
                    </Box>
                    <List sx={{ py: 0 }}>
                      <ListItem disableGutters sx={{ py: 0.5 }}>
                        <ListItemText 
                          primary={"Temple Office"} 
                          secondary={"+91-XXXXXXXXXX"}
                          primaryTypographyProps={{ fontWeight: 600 }}
                        />
                      </ListItem>
                      <ListItem disableGutters sx={{ py: 0.5 }}>
                        <ListItemText 
                          primary={"Booking Desk"} 
                          secondary="+91-YYYYYYYYYY"
                          primaryTypographyProps={{ fontWeight: 600 }}
                        />
                      </ListItem>
                    </List>
                    <Divider sx={{ my: 2, borderColor: 'rgba(212,175,55,0.3)' }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, fontSize: '1.1rem' }}>Quick Actions</Typography>
                    <Stack spacing={1.5}>
                      <Button 
                        component={Link} 
                        href="/poojas/booking" 
                        variant="contained" 
                        fullWidth
                        sx={{ 
                          bgcolor: GOLD, 
                          color: '#000',
                          fontWeight: 700,
                          '&:hover': { bgcolor: '#e5c158' }
                        }}
                      >
                        Book a Pooja
                      </Button>
                      <Button 
                        component={Link} 
                        href="/nearby" 
                        variant="outlined" 
                        fullWidth
                        sx={{ 
                          borderColor: GOLD,
                          color: GOLD,
                          fontWeight: 600,
                          '&:hover': { borderColor: '#e5c158', bgcolor: 'rgba(212,175,55,0.1)' }
                        }}
                      >
                        Explore Nearby
                      </Button>
                    </Stack>
                  </Paper>

                  <Paper sx={{ 
                    p: 2.5,
                    border: `3px solid ${GOLD}`,
                    boxShadow: '0 4px 12px rgba(212,175,55,0.2)',
                    borderLeft: `6px solid #ff9800`,
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <Avatar sx={{ bgcolor: '#ff9800', width: 40, height: 40 }}>
                        <LocationOnIcon sx={{ fontSize: 22 }} />
                      </Avatar>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>Getting Here</Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#444', mb: 2 }}>
                      Muchukunnu Temple Road, Coastal Village, Kerala
                    </Typography>
                    <Button 
                      component={Link} 
                      href="https://www.google.com/maps" 
                      target="_blank"
                      variant="contained"
                      fullWidth
                      sx={{ 
                        bgcolor: GOLD,
                        color: '#000',
                        fontWeight: 700,
                        '&:hover': { bgcolor: '#e5c158' }
                      }}
                    >
                      Get Directions →
                    </Button>
                  </Paper>
                </Grid>
              </Grid>

              <Divider sx={{ my: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, color: GOLD, mb: 3 }}>
                  Temple Location
                </Typography>
                <Box sx={{ 
                  border: `3px solid ${GOLD}`,
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(212,175,55,0.2)'
                }}>
                  <iframe
                    title="Muchukunnu Temple Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.8!2d75.51488!3d11.79765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba688f70ba4cc09%3A0xa1db14313acaad96!2sMuchukunnu%20Kottayil%20Sree%20Shiva%20Temple!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="360"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </Box>

              <Box sx={{ 
                mt: 4,
                p: 3,
                background: `linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(229,193,88,0.05) 100%)`,
                borderRadius: 2,
                border: `2px solid rgba(212,175,55,0.3)`,
              }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: GOLD, mb: 2 }}>
                  Visitor FAQ
                </Typography>
                <List>
                  <ListItem sx={{ alignItems: 'flex-start' }}>
                    <ListItemText 
                      primary="What are the temple timings?" 
                      secondary="Daily: 5:00 AM — 8:00 PM; special festival timings vary."
                      primaryTypographyProps={{ fontWeight: 700, color: '#333', mb: 0.5 }}
                      secondaryTypographyProps={{ color: '#666' }}
                    />
                  </ListItem>
                  <Divider sx={{ my: 1, borderColor: 'rgba(212,175,55,0.2)' }} />
                  <ListItem sx={{ alignItems: 'flex-start' }}>
                    <ListItemText 
                      primary="Is photography allowed?" 
                      secondary="Photography inside sanctum areas is restricted; follow signage and staff instructions."
                      primaryTypographyProps={{ fontWeight: 700, color: '#333', mb: 0.5 }}
                      secondaryTypographyProps={{ color: '#666' }}
                    />
                  </ListItem>
                  <Divider sx={{ my: 1, borderColor: 'rgba(212,175,55,0.2)' }} />
                  <ListItem sx={{ alignItems: 'flex-start' }}>
                    <ListItemText 
                      primary="Where can I park?" 
                      secondary="Public parking is available near the east gate; use marked parking areas to the south."
                      primaryTypographyProps={{ fontWeight: 700, color: '#333', mb: 0.5 }}
                      secondaryTypographyProps={{ color: '#666' }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="contact" activePath="/contact" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}