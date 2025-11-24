import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Paper, Grid, Card, CardContent } from '@mui/material';

export default function Heritage() {
  const sites = [
    { name: 'Thalassery Fort', year: '1708', description: 'Built by British East India Company. Well-preserved fort with underground tunnels and sea views.' },
    { name: 'Arakkal Museum', year: '1503', description: 'Museum of Kerala\'s only Muslim royal family. Rich collection of artifacts and historical documents.' },
    { name: 'St. Angelo Fort', year: '1505', description: 'Portuguese fort in Kannur. Important historical monument with triangular structure.' },
    { name: 'Gundert Bungalow', year: '1839', description: 'Home of Hermann Gundert who compiled first Malayalam-English dictionary.' },
  ];

  return (
    <>
      <PageBanner title="Heritage Sites" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Grid container spacing={3}>
                {sites.map((site, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={2} sx={{ '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946', mb: 1 }}>
                          {site.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#E63946', fontWeight: 600, mb: 2 }}>
                          Est. {site.year}
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                          {site.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="nearby" activePath="/nearby/heritage" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
