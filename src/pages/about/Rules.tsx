import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar, Divider, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GavelIcon from '@mui/icons-material/Gavel';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function TempleRules() {
  const GOLD = '#d4af37';

  const timings = [
    { day: 'Monday - Sunday', morning: '5:00 AM - 12:00 PM', evening: '5:00 PM - 8:00 PM', color: '#2196f3' },
    { day: 'Festival Days', morning: '4:00 AM - 12:00 PM', evening: '4:00 PM - 10:00 PM', color: '#ff9800' },
  ];

  const rules = [
    {
      category: 'Dress Code',
      color: '#9c27b0',
      rules: [
        'Traditional attire is encouraged',
        'Men: Dhoti/Mundu with upper cloth preferred',
        'Women: Saree/Churidar/Traditional dress',
        'Shorts, mini skirts, and sleeveless tops not allowed',
        'Modest and respectful clothing required'
      ]
    },
    {
      category: 'General Conduct',
      color: '#4caf50',
      rules: [
        'Remove footwear before entering temple',
        'Maintain silence inside the sanctum',
        'Follow queue system during peak hours',
        'Do not touch the deities or offerings',
        'Respect other devotees and maintain distance'
      ]
    },
    {
      category: 'Photography & Videography',
      color: '#ff5722',
      rules: [
        'Photography allowed in outer premises only',
        'No photography inside main sanctum',
        'Flash photography strictly prohibited',
        'Commercial photography requires permission',
        'Respect privacy of other devotees'
      ]
    },
    {
      category: 'Offerings & Donations',
      color: '#00bcd4',
      rules: [
        'Use official counters for all offerings',
        'Receipts will be provided for donations',
        'Outside food offerings not allowed',
        'Purchase prasadam from temple only',
        'Report any irregularities to office'
      ]
    },
  ];

  return (
    <>
      <PageBanner title="Temple Rules & Timings" />
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
        {/* TIMINGS SECTION */}
        <Box sx={{ mb: 5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, mt: 2 }}>
            <Avatar sx={{ 
              width: 70, 
              height: 70, 
              bgcolor: '#2196f3',
              background: 'linear-gradient(135deg, #2196f3 0%, #64b5f6 100%)',
              boxShadow: '0 4px 20px rgba(33,150,243,0.4)'
            }}>
              <AccessTimeIcon sx={{ fontSize: 40, color: '#fff' }} />
            </Avatar>
            <Box>
              <Typography variant="h5" sx={{ color: GOLD, fontWeight: 700 }}>
                Temple Timings
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Darshan schedule for devotees
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 3, borderColor: 'rgba(212,175,55,0.3)' }} />
          
          <Grid container spacing={3}>
            {timings.map((timing, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card elevation={0} sx={{ 
                  border: `3px solid ${GOLD}`,
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(212,175,55,0.2)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 6,
                    background: timing.color,
                  }
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Chip
                      label={timing.day}
                      sx={{
                        bgcolor: `${timing.color}20`,
                        color: timing.color,
                        fontWeight: 700,
                        border: `2px solid ${timing.color}`,
                        fontSize: '0.95rem',
                        mb: 2
                      }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ 
                          width: 45, 
                          height: 45,
                          bgcolor: '#FFA726',
                          boxShadow: '0 4px 12px rgba(255,167,38,0.3)'
                        }}>
                          <WbSunnyIcon sx={{ fontSize: 24, color: '#fff' }} />
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: '#666', mb: 0.5 }}>
                            Morning Darshan
                          </Typography>
                          <Typography variant="h6" sx={{ color: '#333', fontWeight: 700 }}>
                            {timing.morning}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ 
                          width: 45, 
                          height: 45,
                          bgcolor: '#5C6BC0',
                          boxShadow: '0 4px 12px rgba(92,107,192,0.3)'
                        }}>
                          <NightsStayIcon sx={{ fontSize: 24, color: '#fff' }} />
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: '#666', mb: 0.5 }}>
                            Evening Darshan
                          </Typography>
                          <Typography variant="h6" sx={{ color: '#333', fontWeight: 700 }}>
                            {timing.evening}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ 
            mt: 3, 
            p: 3, 
            background: `linear-gradient(135deg, rgba(212,175,55,0.15), rgba(229,193,88,0.15))`,
            borderRadius: 4,
            border: `2px solid ${GOLD}`
          }}>
            <Typography variant="body1" sx={{ color: '#555', mb: 1 }}>
              ⚠️ Temple remains closed between 12:00 PM - 5:00 PM on regular days
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              ℹ️ Timings may vary during festivals and special occasions
            </Typography>
          </Box>
        </Box>
        
        {/* RULES SECTION */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Avatar sx={{ 
              width: 70, 
              height: 70, 
              bgcolor: '#4caf50',
              background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
              boxShadow: '0 4px 20px rgba(76,175,80,0.4)'
            }}>
              <GavelIcon sx={{ fontSize: 40, color: '#fff' }} />
            </Avatar>
            <Box>
              <Typography variant="h5" sx={{ color: GOLD, fontWeight: 700 }}>
                Temple Rules & Guidelines
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Please follow these guidelines for a peaceful darshan
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 3, borderColor: 'rgba(212,175,55,0.3)' }} />
          
          <Grid container spacing={3}>
            {rules.map((section, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card elevation={0} sx={{ 
                  height: '100%',
                  border: `3px solid ${GOLD}`,
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': { 
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(212,175,55,0.3)'
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 6,
                    background: section.color,
                  }
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Chip
                      label={section.category}
                      sx={{
                        bgcolor: `${section.color}20`,
                        color: section.color,
                        fontWeight: 700,
                        border: `2px solid ${section.color}`,
                        fontSize: '0.95rem',
                        mb: 2
                      }}
                    />
                    <Box sx={{ pl: 0 }}>
                      {section.rules.map((rule, idx) => (
                        <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1.5 }}>
                          <CheckCircleIcon sx={{ fontSize: 18, color: section.color, mt: 0.3, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#555' }}>
                            {rule}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        <Box sx={{ 
          mt: 4, 
          p: 4, 
          background: `linear-gradient(135deg, rgba(212,175,55,0.15), rgba(229,193,88,0.15))`,
          borderRadius: 4,
          border: `3px solid ${GOLD}`,
          boxShadow: '0 8px 24px rgba(212,175,55,0.2)'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: GOLD, mb: 2 }}>⚠️ Important Notes</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography sx={{ color: '#555' }}>• Children should be supervised by parents at all times</Typography>
            <Typography sx={{ color: '#555' }}>• Mobile phones should be on silent mode</Typography>
            <Typography sx={{ color: '#555' }}>• Smoking and alcohol strictly prohibited</Typography>
            <Typography sx={{ color: '#555' }}>• Please maintain cleanliness throughout the premises</Typography>
            <Typography sx={{ color: '#555' }}>• Cooperate with temple staff and volunteers</Typography>
          </Box>
        </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="about" activePath="/about/rules" />
          </Grid>
        </Grid>
    </Container>
    </>
  );
}
