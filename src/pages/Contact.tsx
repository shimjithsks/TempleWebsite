import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';
import { Box, Typography, TextField, Button, Container, Grid, Paper } from '@mui/material';

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact & Visit" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom>
                Contact / Visit Us
              </Typography>
              <Box component="form" sx={{ display: 'grid', gap: 2, maxWidth: 600 }}>
                <TextField label="Name" />
                <TextField label="Email" />
                <TextField label="Message" multiline rows={4} />
                <Button variant="contained">Send Message</Button>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6">Temple Location</Typography>
                <iframe
                  title="temple-map"
                  src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                />
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
