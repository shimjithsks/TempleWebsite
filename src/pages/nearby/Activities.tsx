import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Paper, Grid, Card, CardContent, Box } from '@mui/material';

export default function Activities() {
  const activities = [
    { name: 'Theyyam Performance', season: 'Nov-May', description: 'Traditional ritual art form unique to North Kerala. Spectacular costumes and performances.' },
    { name: 'Parasailing', location: 'Muzhappilangad Beach', description: 'Thrilling water sport activity. Professional instructors and safety equipment provided.' },
    { name: 'Trekking', location: 'Ezhimala Hills', description: 'Scenic trekking trails with beautiful views. Suitable for beginners and experienced trekkers.' },
    { name: 'Photography Tours', location: 'Various', description: 'Guided photography tours covering beaches, backwaters, heritage sites, and culture.' },
    { name: 'Ayurvedic Massage', location: 'Multiple centers', description: 'Traditional Kerala Ayurvedic treatments and wellness packages available.' },
    { name: 'Fishing', location: 'Backwaters', description: 'Traditional fishing experience in backwaters. Learn local fishing techniques.' },
  ];

  return (
    <>
      <PageBanner title="Activities & Experiences" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Grid container spacing={3}>
                {activities.map((activity, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946', mb: 1 }}>
                          {activity.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#E63946', fontWeight: 600, mb: 2 }}>
                          {activity.season || activity.location}
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                          {activity.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Local Tour Operators</Typography>
                <Typography>
                  Contact temple office for recommendations on trusted tour operators and activity providers in the area.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby/activities" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
