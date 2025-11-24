import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GavelIcon from '@mui/icons-material/Gavel';

export default function TempleRules() {
  const timings = [
    { day: 'Monday - Sunday', morning: '5:00 AM - 12:00 PM', evening: '5:00 PM - 8:00 PM' },
    { day: 'Festival Days', morning: '4:00 AM - 12:00 PM', evening: '4:00 PM - 10:00 PM' },
  ];

  const rules = [
    {
      category: 'Dress Code',
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
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        {/* TIMINGS SECTION */}
        <Box sx={{ mb: 5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <AccessTimeIcon sx={{ color: '#E63946', fontSize: 35 }} />
            <Typography variant="h5" sx={{ color: '#E63946', fontWeight: 600 }}>
              Temple Timings
            </Typography>
          </Box>
          
          <Grid container spacing={3}>
            {timings.map((timing, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card elevation={2} sx={{ bgcolor: '#ffebee' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946', mb: 2 }}>
                      {timing.day}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#666' }}>
                          Morning Darshan:
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#E63946' }}>
                          {timing.morning}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#666' }}>
                          Evening Darshan:
                        </Typography>
                        <Typography variant="h6" sx={{ color: '#E63946' }}>
                          {timing.evening}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 3, p: 2, bgcolor: '#e3f2fd', borderRadius: 2 }}>
            <Typography variant="body1">
              ⚠️ Temple remains closed between 12:00 PM - 5:00 PM on regular days
            </Typography>
            <Typography variant="body1">
              ℹ️ Timings may vary during festivals and special occasions
            </Typography>
          </Box>
        </Box>
        
        {/* RULES SECTION */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
            <GavelIcon sx={{ color: '#E63946', fontSize: 35 }} />
            <Typography variant="h5" sx={{ color: '#E63946', fontWeight: 600 }}>
              Temple Rules & Guidelines
            </Typography>
          </Box>
          
          <Grid container spacing={3}>
            {rules.map((section, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card elevation={2} sx={{ height: '100%', '&:hover': { boxShadow: 6 } }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946', mb: 2 }}>
                      {section.category}
                    </Typography>
                    <Box sx={{ pl: 1 }}>
                      {section.rules.map((rule, idx) => (
                        <Typography key={idx} variant="body2" sx={{ mb: 1, lineHeight: 1.6 }}>
                          • {rule}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        <Box sx={{ mt: 4, p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Important Notes</Typography>
          <Typography>• Children should be supervised by parents at all times</Typography>
          <Typography>• Mobile phones should be on silent mode</Typography>
          <Typography>• Smoking and alcohol strictly prohibited</Typography>
          <Typography>• Please maintain cleanliness throughout the premises</Typography>
          <Typography>• Cooperate with temple staff and volunteers</Typography>
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
