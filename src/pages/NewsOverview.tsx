import React from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';

const highlights = [
  {
    title: 'Temple News & Updates',
    detail: 'Stay informed about daily activities, special announcements, and important developments at the temple.',
  },
  {
    title: 'Upcoming Events',
    detail: 'View the calendar of festivals, special poojas, cultural programs, and community gatherings.',
  },
  {
    title: 'Past Events Gallery',
    detail: 'Browse memories from previously celebrated festivals, ceremonies, and special occasions.',
  },
];

export default function NewsOverview() {
  return (
    <>
      <PageBanner title="News & Events" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#E63946', mb: 2 }}>
                Temple News & Events Center
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                Welcome to the temple's information hub. Here you'll find the latest news, official announcements, 
                upcoming festivals and events, photo galleries from past celebrations, and important notices for devotees. 
                Stay connected with the temple community and never miss an important event.
              </Typography>

              <Grid container spacing={3}>
                {highlights.map((item) => (
                  <Grid item xs={12} md={4} key={item.title}>
                    <Box sx={{ p: 3, bgcolor: '#ffebee', borderRadius: 2, height: '100%' }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946', mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#444' }}>
                        {item.detail}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Stay Updated
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mb: 0.5 }}>
                  • Check Temple News for daily activities and general updates
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mb: 0.5 }}>
                  • View Announcements for official communications from temple administration
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mb: 0.5 }}>
                  • Browse Upcoming Events to plan your visit during special occasions
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mb: 0.5 }}>
                  • Explore Past Events to see photos and highlights from previous celebrations
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  • Read Notices & Circulars for important administrative information
                </Typography>
              </Box>

              <Box sx={{ mt: 3, p: 3, bgcolor: '#fff3e0', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#E63946' }}>
                  Recent Highlights
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mb: 0.5 }}>
                  📅 Annual Utsavam festival scheduled for next month
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', mb: 0.5 }}>
                  🎉 Over 2,000 devotees participated in last week's special pooja
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                  📢 New online booking system now available for all poojas
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
