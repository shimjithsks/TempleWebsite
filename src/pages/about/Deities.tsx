import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';

export default function Deities() {
  const deities = [
    {
      name: 'Lord Shiva',
      title: 'Main Deity (Moolavar)',
      description: 'The presiding deity of the temple, worshipped in the form of Shivalinga. Daily abhishekam and special poojas performed.',
      significance: 'Represents the destroyer of evil and transformer. Devotees seek blessings for spiritual growth and material prosperity.'
    },
    {
      name: 'Goddess Parvati',
      title: 'Consort Deity',
      description: 'Installed alongside Lord Shiva, representing divine feminine energy (Shakti). Special worship during Navaratri.',
      significance: 'Symbolizes nurturing power and protection. Devotees pray for family harmony and well-being.'
    },
    {
      name: 'Lord Ganesha',
      title: 'Vighnaharta',
      description: 'Positioned at the entrance as per tradition. First deity to receive prayers before entering main sanctum.',
      significance: 'Remover of obstacles and lord of beginnings. Essential worship before any new venture or pooja.'
    },
    {
      name: 'Lord Ayyappa',
      title: 'Sub-deity',
      description: 'Separate shrine with special significance during Mandala-Makaravilakku season (November-January).',
      significance: 'Popular deity among devotees undertaking Sabarimala pilgrimage. Blessings sought for spiritual discipline.'
    },
    {
      name: 'Naga Devata (Serpent God)',
      title: 'Sarpa Kavu',
      description: 'Sacred grove dedicated to serpent gods. Special rituals performed for Naga Panchami and Ayilyam days.',
      significance: 'Worship for relief from Sarpa Dosha (serpent afflictions) and blessings for progeny.'
    },
    {
      name: 'Goddess Bhagavathy',
      title: 'Powerful Deity',
      description: 'Independent shrine with fierce form of divine mother. Tuesday and Friday considered auspicious for worship.',
      significance: 'Protection from evil forces and negative energies. Special prayers for courage and strength.'
    },
  ];

  return (
    <>
      <PageBanner title="Deities of Our Temple" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Our temple is blessed with the divine presence of several deities, each with unique significance and the power to bestow specific blessings upon devotees.
              </Typography>

              <Grid container spacing={3}>
                {deities.map((deity, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card
                      elevation={2}
                      sx={{
                        height: '100%',
                        borderTop: '4px solid #E63946',
                        '&:hover': { boxShadow: 6 },
                      }}
                    >
                      <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#E63946', mb: 0.5 }}>
                          {deity.name}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#E63946', fontWeight: 600, mb: 2 }}>
                          {deity.title}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                          {deity.description}
                        </Typography>
                        <Box sx={{ p: 2, bgcolor: '#ffebee', borderRadius: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                            Significance:
                          </Typography>
                          <Typography variant="body2">{deity.significance}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Darshan Etiquette</Typography>
                <Typography>• Remove footwear before entering temple premises</Typography>
                <Typography>• Maintain silence inside the sanctum</Typography>
                <Typography>• Photography not allowed inside main shrine</Typography>
                <Typography>• Follow priest's instructions during poojas</Typography>
                <Typography>• Dress modestly and traditionally</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="about" activePath="/about/deities" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
