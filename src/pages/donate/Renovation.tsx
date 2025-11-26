import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, LinearProgress } from '@mui/material';
import { colors } from '../../theme/colors';

export default function TempleRenovation() {
  const goalAmount = 50000000;
  const raisedAmount = 32000000;
  const progress = (raisedAmount / goalAmount) * 100;

  return (
    <>
      <PageBanner title="Temple Renovation Fund" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Our temple is undergoing major renovation to preserve its heritage and improve facilities for devotees. Your support will help us complete this sacred project.
              </Typography>

              <Box sx={{ mb: 4, p: 4, bgcolor: colors.lightPink, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, textAlign: 'center' }}>
                  Fundraising Progress
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    height: 20,
                    borderRadius: 2,
                    mb: 2,
                    bgcolor: colors.gray200,
                    '& .MuiLinearProgress-bar': { bgcolor: colors.primary },
                  }}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.primary }}>
                    ₹{(raisedAmount / 10000000).toFixed(1)} Cr
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textMuted }}>
                    Goal: ₹{goalAmount / 10000000} Cr
                  </Typography>
                </Box>

                <Typography variant="h6" sx={{ textAlign: 'center', color: colors.primary, fontWeight: 600 }}>
                  {progress.toFixed(1)}% Complete
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>Renovation Projects</Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 3, border: `1px solid ${colors.border}`, borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary, mb: 2 }}>
                      Main Sanctum Restoration
                    </Typography>
                    <Typography>• Gold plating of the main deity</Typography>
                    <Typography>• Structural reinforcement</Typography>
                    <Typography>• Traditional art restoration</Typography>
                    <Typography sx={{ mt: 2, fontWeight: 600 }}>Cost: ₹2 Crores</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 3, border: `1px solid ${colors.border}`, borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary, mb: 2 }}>
                      Infrastructure Development
                    </Typography>
                    <Typography>• New visitor facilities</Typography>
                    <Typography>• Improved parking area</Typography>
                    <Typography>• Wheelchair accessibility</Typography>
                    <Typography sx={{ mt: 2, fontWeight: 600 }}>Cost: ₹1.5 Crores</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 3, border: `1px solid ${colors.border}`, borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary, mb: 2 }}>
                      Cultural Center
                    </Typography>
                    <Typography>• Auditorium for events</Typography>
                    <Typography>• Library and study room</Typography>
                    <Typography>• Traditional arts training</Typography>
                    <Typography sx={{ mt: 2, fontWeight: 600 }}>Cost: ₹80 Lakhs</Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 3, border: `1px solid ${colors.border}`, borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: colors.primary, mb: 2 }}>
                      Annadanam Hall Expansion
                    </Typography>
                    <Typography>• Larger dining space</Typography>
                    <Typography>• Modern kitchen facilities</Typography>
                    <Typography>• Storage and cooling systems</Typography>
                    <Typography sx={{ mt: 2, fontWeight: 600 }}>Cost: ₹70 Lakhs</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: colors.lightBlue, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Donor Recognition</Typography>
                <Typography>• Names inscribed on the temple wall of honor</Typography>
                <Typography>• Special blessings and certificates</Typography>
                <Typography>• 80G tax exemption available</Typography>
                <Typography>• Major donors: Permanent recognition plaque</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="donate" activePath="/donate/renovation" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
