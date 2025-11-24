import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Card, CardContent, Grid } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Notices() {
  const notices = [
    {
      title: 'Temple Closure Notice',
      date: 'November 22, 2025',
      content: 'The temple will remain closed on December 1st, 2025 for annual maintenance and cleaning. Normal operations will resume from December 2nd.'
    },
    {
      title: 'New Dress Code Guidelines',
      date: 'November 18, 2025',
      content: 'Traditional dress is encouraged. Men: Dhoti/Mundu with upper cloth. Women: Saree/Churidar/Traditional attire. Shorts and sleeveless tops not permitted inside sanctum.'
    },
    {
      title: 'Photography Policy Update',
      date: 'November 15, 2025',
      content: 'Photography is allowed in temple premises except inside the main sanctum. Flash photography is strictly prohibited. Video recording requires prior permission.'
    },
    {
      title: 'Committee Election Notice',
      date: 'November 10, 2025',
      content: 'Annual temple committee elections will be held on January 15, 2026. Nominations open from December 1st. All registered members are eligible to vote.'
    },
    {
      title: 'Festival Calendar Release',
      date: 'November 5, 2025',
      content: 'The 2026 festival calendar is now available at the temple office and on our website. Plan your visits for major festivals and special poojas.'
    },
  ];

  return (
    <>
      <PageBanner title="Notices & Circulars" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Official notices and circulars from the temple administration.
              </Typography>

              {notices.map((notice, index) => (
                <Card
                  key={index}
                  elevation={2}
                  sx={{
                    mb: 3,
                    borderLeft: '4px solid #E63946',
                    '&:hover': { boxShadow: 6 },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <DescriptionIcon sx={{ color: '#E63946', fontSize: 35, mt: 0.5 }} />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: '#E63946', mb: 1 }}>
                          {notice.title}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: '#666', mb: 2 }}>
                          Issued on: {notice.date}
                        </Typography>
                        <Typography variant="body1">{notice.content}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Notice Board</Typography>
                <Typography>
                  Physical notice board is available at the temple entrance. Important circulars are also announced during daily poojas and posted on our social media channels.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news/notices" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
