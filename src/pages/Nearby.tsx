import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';
import { Container, Typography, Grid, Card, CardContent, Button, Paper } from '@mui/material';

const boatServices = [
  { name: 'Muchukunnu Boat Service', route: 'Temple Pier - Backwaters', timing: '8 AM - 5 PM', phone: '+91-XXXXXXXXXX' }
];

export default function Nearby() {
  return (
    <>
      <PageBanner title="Nearby Services" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                Nearby Services
              </Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Boat Services
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {boatServices.map((b) => (
                  <Grid item xs={12} md={6} key={b.name}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6">{b.name}</Typography>
                        <Typography variant="body2">{b.route}</Typography>
                        <Typography variant="body2">Timing: {b.timing}</Typography>
                        <Typography variant="body2">Contact: {b.phone}</Typography>
                        <Button variant="contained" sx={{ mt: 1 }} href={`tel:${b.phone}`}>
                          Call to Book
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h6" sx={{ mt: 4 }}>
                Nearby Attractions
              </Typography>
              {/* Add list of nearby temples, homestays, etc. */}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
