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
} from '@mui/material';

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
              border: `2px solid #d4af37`,
              borderRadius: 4,
              boxShadow: '0 10px 30px rgba(212,175,55,0.15)',
              background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
              position: 'relative',
              overflow: 'visible',
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
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, color: '#d4af37' }}>
                Contact / Visit Us
              </Typography>

              <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
                Use the form to send us a message, or use the quick contact options and visiting information below to plan your visit.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={7}>
                  <Box component="form" onSubmit={submit} sx={{ display: 'grid', gap: 2 }}>
                    <TextField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                    <TextField label="Email" name="email" value={form.email} onChange={handleChange} required />
                    <TextField label="Phone" name="phone" value={form.phone} onChange={handleChange} />
                    <TextField label="Subject" name="subject" value={form.subject} onChange={handleChange} />
                    <TextField label="Message" name="message" value={form.message} onChange={handleChange} multiline rows={4} required />
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <Button 
                        type="submit" 
                        variant="contained" 
                        sx={{ 
                          bgcolor: '#d4af37',
                          color: '#000',
                          fontWeight: 800,
                          px: 3,
                          py: 1,
                          boxShadow: '0 4px 12px rgba(212,175,55,0.4)',
                          '&:hover': {
                            bgcolor: '#e5c158',
                            boxShadow: '0 6px 20px rgba(212,175,55,0.5)',
                          }
                        }}
                      >
                        Send Message
                      </Button>
                      <Button component={Link} href="tel:+91-XXXXXXXXXX" variant="outlined">
                        Call Office
                      </Button>
                      <Button component={Link} href="mailto:info@muchukunnu.org" variant="text">
                        Email Office
                      </Button>
                    </Stack>
                  </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Paper sx={{ p: 2, mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Office Hours</Typography>
                    <Typography variant="body2" sx={{ color: '#444' }}>Monday — Sunday: 6:00 AM — 8:00 PM</Typography>
                    <Typography variant="body2" sx={{ color: '#444' }}>Office Desk: 9:00 AM — 5:00 PM</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 1 }}>Contact Numbers</Typography>
                    <List>
                      <ListItem disableGutters>
                        <ListItemText primary={"Temple Office"} secondary={"+91-XXXXXXXXXX"} />
                      </ListItem>
                      <ListItem disableGutters>
                        <ListItemText primary={"Booking Desk"} secondary={"+91-YYYYYYYYYY"} />
                      </ListItem>
                    </List>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 1 }}>Quick Actions</Typography>
                    <Stack spacing={1} sx={{ mt: 1 }}>
                      <Button component={Link} href="/poojas/booking" variant="contained" size="small" sx={{ bgcolor: '#E63946' }}>
                        Book a Pooja
                      </Button>
                      <Button component={Link} href="/nearby" variant="outlined" size="small">
                        Explore Nearby
                      </Button>
                      <Button component={Link} href="/donate" variant="text" size="small">
                        Donate / Support
                      </Button>
                    </Stack>
                  </Paper>

                  <Paper sx={{ p: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Getting Here</Typography>
                    <Typography variant="body2" sx={{ color: '#444', mb: 1 }}>
                      Address: Muchukunnu Temple Road, Coastal Village, Kerala
                    </Typography>
                    <Button component={Link} href="https://www.google.com/maps" target="_blank">Get Directions →</Button>
                  </Paper>
                </Grid>
              </Grid>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Temple Location</Typography>
                <iframe
                  title="temple-map"
                  src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </Box>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Visitor FAQ</Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="What are the temple timings?" secondary="Daily: 5:00 AM — 8:00 PM; special festival timings vary." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Is photography allowed?" secondary="Photography inside sanctum areas is restricted; follow signage and staff instructions." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Where can I park?" secondary="Public parking is available near the east gate; use marked parking areas to the south." />
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