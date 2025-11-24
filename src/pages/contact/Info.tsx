import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function ContactInfo() {
  return (
    <>
      <PageBanner title="Contact Information" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Card elevation={2} sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <PhoneIcon sx={{ color: '#E63946', fontSize: 40 }} />
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946' }}>
                            Phone Numbers
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Temple Office:</strong> +91-XXXXXXXXXX
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Pooja Booking:</strong> +91-XXXXXXXXXX
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>President:</strong> +91-XXXXXXXXXX
                      </Typography>
                      <Typography variant="body1">
                        <strong>Emergency:</strong> +91-XXXXXXXXXX
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card elevation={2} sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <EmailIcon sx={{ color: '#E63946', fontSize: 40 }} />
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946' }}>
                            Email Addresses
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>General Queries:</strong> info@muchukunnutemple.org
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Pooja Booking:</strong> poojas@muchukunnutemple.org
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Donations:</strong> donations@muchukunnutemple.org
                      </Typography>
                      <Typography variant="body1">
                        <strong>Feedback:</strong> feedback@muchukunnutemple.org
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card elevation={2} sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <LocationOnIcon sx={{ color: '#E63946', fontSize: 40 }} />
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946' }}>
                            Address
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        Muchukunnu Sri Kotta-Kovilakam Kshethram
                        <br />
                        Near Muchukunnu Junction
                        <br />
                        Thalassery, Kannur District
                        <br />
                        Kerala - 670308
                        <br />
                        India
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card elevation={2} sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <AccessTimeIcon sx={{ color: '#E63946', fontSize: 40 }} />
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946' }}>
                            Office Hours
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Monday - Sunday:</strong> 9:00 AM - 6:00 PM
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        <strong>Temple Timings:</strong>
                      </Typography>
                      <Typography variant="body2" sx={{ pl: 2 }}>
                        Morning: 5:00 AM - 12:00 PM
                        <br />
                        Evening: 5:00 PM - 8:00 PM
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>How to Reach</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>By Air:</Typography>
                    <Typography variant="body2">Kannur International Airport (35 km)</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>By Train:</Typography>
                    <Typography variant="body2">Thalassery Railway Station (8 km)</Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>By Road:</Typography>
                    <Typography variant="body2">Well connected by State & Private buses</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="contact" activePath="/contact/info" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
