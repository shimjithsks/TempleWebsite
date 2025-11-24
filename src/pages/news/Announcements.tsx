import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Card, CardContent, Alert, Grid } from '@mui/material';
import AnnouncementIcon from '@mui/icons-material/Announcement';

export default function Announcements() {
  const announcements = [
    {
      title: 'Temple Timings During Festival Season',
      date: 'November 22, 2025',
      priority: 'high',
      content: 'During the upcoming festival season (Dec 1-15), temple will remain open from 4:00 AM to 10:00 PM. Extended darshan hours for devotees.'
    },
    {
      title: 'Online Booking System Update',
      date: 'November 18, 2025',
      priority: 'medium',
      content: 'We have upgraded our online booking system. Devotees can now book poojas up to 3 months in advance. Payment gateway updated for better security.'
    },
    {
      title: 'Parking Arrangements',
      date: 'November 15, 2025',
      priority: 'medium',
      content: 'Additional parking space has been arranged near the temple. Shuttle service available from main parking area. Please follow volunteer instructions.'
    },
    {
      title: 'COVID-19 Safety Guidelines',
      date: 'November 10, 2025',
      priority: 'high',
      content: 'Masks are recommended but not mandatory. Hand sanitizers available at all entry points. Maintain social distancing during crowded times.'
    },
  ];

  const getPriorityColor = (priority: string) => {
    return priority === 'high' ? '#ff5252' : '#ff9800';
  };

  return (
    <>
      <PageBanner title="Announcements" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Alert severity="info" sx={{ mb: 4 }}>
                <Typography variant="body1">
                  Important announcements and updates for devotees. Please read carefully.
                </Typography>
              </Alert>

              {announcements.map((item, index) => (
                <Card
                  key={index}
                  elevation={2}
                  sx={{
                    mb: 3,
                    borderLeft: `5px solid ${getPriorityColor(item.priority)}`,
                    '&:hover': { boxShadow: 6 },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <AnnouncementIcon
                        sx={{ color: getPriorityColor(item.priority), fontSize: 40, mt: 0.5 }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, color: '#E63946', mb: 1 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ color: '#666', mb: 2 }}>
                          {item.date}
                        </Typography>
                        <Typography variant="body1">{item.content}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="news" activePath="/news/announcements" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
