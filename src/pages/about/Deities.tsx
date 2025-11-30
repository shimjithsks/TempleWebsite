import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar, Divider, Chip } from '@mui/material';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import StarIcon from '@mui/icons-material/Star';

export default function Deities() {
  const GOLD = '#d4af37';

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
            <Paper elevation={0} sx={{ 
              p: 4, 
              mb: 4,
              border: `3px solid ${GOLD}`,
              borderRadius: 5,
              boxShadow: '0 20px 60px rgba(212,175,55,0.25)',
              background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 6,
                background: `linear-gradient(90deg, ${GOLD} 0%, #e5c158 25%, ${GOLD} 50%, #e5c158 75%, ${GOLD} 100%)`,
                animation: 'shimmer 3s linear infinite',
                backgroundSize: '200% 100%',
                '@keyframes shimmer': {
                  '0%': { backgroundPosition: '-200% 0' },
                  '100%': { backgroundPosition: '200% 0' },
                },
              }
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, mt: 2 }}>
                <Avatar sx={{ 
                  width: 70, 
                  height: 70, 
                  bgcolor: '#ff9800',
                  background: 'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)',
                  boxShadow: '0 4px 20px rgba(255,152,0,0.4)'
                }}>
                  <TempleHinduIcon sx={{ fontSize: 40, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: GOLD }}>
                    Deities of Our Temple
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                    Divine presence and spiritual blessings
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: 'rgba(212,175,55,0.3)' }} />
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Our temple is blessed with the divine presence of several deities, each with unique significance and the power to bestow specific blessings upon devotees.
              </Typography>

              <Grid container spacing={3}>
                {deities.map((deity, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card
                      elevation={0}
                      sx={{
                        height: '100%',
                        border: `3px solid ${GOLD}`,
                        borderRadius: 4,
                        boxShadow: '0 8px 20px rgba(212,175,55,0.2)',
                        background: 'linear-gradient(135deg, #fff, #fafaf8)',
                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': { 
                          transform: 'translateY(-6px)',
                          boxShadow: '0 16px 48px rgba(212,175,55,0.3)',
                        },
                        position: 'relative',
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                          <Avatar sx={{ 
                            width: 50, 
                            height: 50,
                            bgcolor: GOLD,
                            background: `linear-gradient(135deg, ${GOLD} 0%, #e5c158 100%)`,
                            boxShadow: '0 4px 12px rgba(212,175,55,0.4)'
                          }}>
                            <StarIcon sx={{ fontSize: 28, color: '#fff' }} />
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, color: GOLD }}>
                              {deity.name}
                            </Typography>
                            <Chip
                              label={deity.title}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(212,175,55,0.15)',
                                color: GOLD,
                                fontWeight: 700,
                                border: `2px solid ${GOLD}`,
                                mt: 0.5
                              }}
                            />
                          </Box>
                        </Box>
                        <Typography variant="body1" sx={{ mb: 2.5, lineHeight: 1.7, color: '#555' }}>
                          {deity.description}
                        </Typography>
                        <Box sx={{ 
                          p: 2.5, 
                          background: `linear-gradient(135deg, rgba(212,175,55,0.06), rgba(212,175,55,0.12))`,
                          borderRadius: 3,
                          border: `2px solid rgba(212,175,55,0.3)`
                        }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: GOLD }}>
                            ✨ Significance:
                          </Typography>
                          <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#555' }}>{deity.significance}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ 
                mt: 4, 
                p: 4, 
                background: `linear-gradient(135deg, rgba(212,175,55,0.15), rgba(229,193,88,0.15))`,
                borderRadius: 4,
                border: `3px solid ${GOLD}`,
                boxShadow: '0 8px 24px rgba(212,175,55,0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: GOLD }}>🙏 Darshan Etiquette</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ color: '#555' }}>• Remove footwear before entering temple premises</Typography>
                  <Typography sx={{ color: '#555' }}>• Maintain silence inside the sanctum</Typography>
                  <Typography sx={{ color: '#555' }}>• Photography not allowed inside main shrine</Typography>
                  <Typography sx={{ color: '#555' }}>• Follow priest's instructions during poojas</Typography>
                  <Typography sx={{ color: '#555' }}>• Dress modestly and traditionally</Typography>
                </Box>
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
