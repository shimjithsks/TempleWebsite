import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Card, CardContent, Chip, Grid } from '@mui/material';

export default function TempleNews() {
  const news = [
    {
      title: 'New Annadanam Hall Inauguration',
      date: 'November 20, 2025',
      category: 'Development',
      content: 'The temple inaugurated a new, modern Annadanam hall that can accommodate 500 devotees at a time. The facility features improved kitchen equipment and dining space.'
    },
    {
      title: 'Temple Website Launch',
      date: 'November 15, 2025',
      category: 'Announcement',
      content: 'Our new website is now live! Devotees can now book poojas online, make donations, and stay updated with temple events and news.'
    },
    {
      title: 'Free Medical Camp Organized',
      date: 'November 10, 2025',
      category: 'Community Service',
      content: 'A free medical camp was organized at the temple premises serving over 300 people from the local community with health checkups and free medicines.'
    },
    {
      title: 'Temple Renovation Phase 1 Completed',
      date: 'November 5, 2025',
      category: 'Development',
      content: 'The first phase of temple renovation including the main sanctum restoration has been successfully completed. Phase 2 will begin next month.'
    },
  ];

  return (
    <>
      <PageBanner title="Temple News" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Stay updated with the latest news and developments at our temple.
              </Typography>

              {news.map((item, index) => (
                <Card key={index} elevation={2} sx={{ mb: 3, '&:hover': { boxShadow: 6 } }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: '#E63946', flex: 1 }}>
                        {item.title}
                      </Typography>
                      <Chip
                        label={item.category}
                        sx={{
                          bgcolor: '#E63946',
                          color: '#fff',
                          fontWeight: 600,
                        }}
                      />
                    </Box>
                    <Typography variant="subtitle2" sx={{ color: '#666', mb: 2 }}>
                      {item.date}
                    </Typography>
                    <Typography variant="body1">{item.content}</Typography>
                  </CardContent>
                </Card>
              ))}

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Subscribe to our newsletter for regular updates
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news/news" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
