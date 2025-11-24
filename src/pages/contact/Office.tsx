import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

export default function OfficeNumbers() {
  const departments = [
    {
      department: 'Main Office',
      numbers: ['+91-XXXXXXXXXX', '+91-XXXXXXXXXX'],
      timing: '9:00 AM - 6:00 PM',
      email: 'office@muchukunnutemple.org',
    },
    {
      department: 'Pooja Booking Counter',
      numbers: ['+91-XXXXXXXXXX'],
      timing: '5:00 AM - 8:00 PM',
      email: 'poojas@muchukunnutemple.org',
    },
    {
      department: 'Donation Department',
      numbers: ['+91-XXXXXXXXXX'],
      timing: '9:00 AM - 6:00 PM',
      email: 'donations@muchukunnutemple.org',
    },
    {
      department: 'Temple President',
      numbers: ['+91-XXXXXXXXXX'],
      timing: '10:00 AM - 5:00 PM',
      email: 'president@muchukunnutemple.org',
    },
    {
      department: 'Temple Secretary',
      numbers: ['+91-XXXXXXXXXX'],
      timing: '9:00 AM - 6:00 PM',
      email: 'secretary@muchukunnutemple.org',
    },
    {
      department: 'Annadanam Coordination',
      numbers: ['+91-XXXXXXXXXX'],
      timing: '8:00 AM - 7:00 PM',
      email: 'annadanam@muchukunnutemple.org',
    },
  ];

  return (
    <>
      <PageBanner title="Temple Office Numbers" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Direct contact numbers for different departments and services at our temple.
              </Typography>

              <Grid container spacing={3}>
                {departments.map((dept, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <PhoneIcon sx={{ color: '#E63946', fontSize: 35, mt: 0.5 }} />
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946', mb: 2 }}>
                              {dept.department}
                            </Typography>
                            {dept.numbers.map((number, idx) => (
                              <Typography key={idx} variant="h6" sx={{ color: '#E63946', mb: 0.5 }}>
                                {number}
                              </Typography>
                            ))}
                            <Typography variant="body2" sx={{ color: '#666', mt: 2, mb: 0.5 }}>
                              ⏰ {dept.timing}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666' }}>
                              ✉️ {dept.email}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Emergency Contacts</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Temple Security:</Typography>
                    <Typography variant="body1" sx={{ color: '#E63946', fontWeight: 700 }}>
                      +91-XXXXXXXXXX
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Medical Emergency:</Typography>
                    <Typography variant="body1" sx={{ color: '#E63946', fontWeight: 700 }}>
                      +91-XXXXXXXXXX
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>After Hours:</Typography>
                    <Typography variant="body1" sx={{ color: '#E63946', fontWeight: 700 }}>
                      +91-XXXXXXXXXX
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mt: 3, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>WhatsApp Services</Typography>
                <Typography>• Pooja Booking: +91-XXXXXXXXXX</Typography>
                <Typography>• General Queries: +91-XXXXXXXXXX</Typography>
                <Typography>• Share photos or updates: +91-XXXXXXXXXX</Typography>
                <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
                  Note: WhatsApp service available 8:00 AM - 8:00 PM
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="contact" activePath="/contact/office" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
