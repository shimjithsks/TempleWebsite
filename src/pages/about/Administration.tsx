import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, Grid, Card, CardContent, Avatar } from '@mui/material';

export default function Administration() {
  const committee = [
    {
      name: 'Sri. Ramakrishnan Nair',
      position: 'Temple President',
      phone: '+91-XXXXXXXXXX',
      email: 'president@muchukunnutemple.org'
    },
    {
      name: 'Sri. Balakrishnan',
      position: 'Secretary',
      phone: '+91-XXXXXXXXXX',
      email: 'secretary@muchukunnutemple.org'
    },
    {
      name: 'Sri. Vijayan Pillai',
      position: 'Treasurer',
      phone: '+91-XXXXXXXXXX',
      email: 'treasurer@muchukunnutemple.org'
    },
    {
      name: 'Smt. Lakshmi Devi',
      position: 'Committee Member',
      phone: '+91-XXXXXXXXXX',
      email: 'committee@muchukunnutemple.org'
    },
    {
      name: 'Sri. Suresh Kumar',
      position: 'Committee Member',
      phone: '+91-XXXXXXXXXX',
      email: 'committee@muchukunnutemple.org'
    },
  ];

  const staff = [
    { role: 'Chief Priest', name: 'Pandit Vishwanathan Namboothiri' },
    { role: 'Assistant Priest', name: 'Pandit Ramachandran' },
    { role: 'Temple Manager', name: 'Sri. Krishna Menon' },
    { role: 'Accountant', name: 'Sri. Madhavan Pillai' },
  ];

  return (
    <>
      <PageBanner title="Temple Administration" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                The temple is managed by an elected committee of dedicated volunteers and experienced staff who ensure smooth operations and upkeep of traditions.
              </Typography>

              <Typography variant="h5" sx={{ mb: 3, color: '#E63946', fontWeight: 600 }}>
                Temple Committee
              </Typography>

              <Grid container spacing={3} sx={{ mb: 5 }}>
                {committee.map((member, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Card elevation={2} sx={{ '&:hover': { boxShadow: 6 } }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Avatar
                            sx={{
                              width: 60,
                              height: 60,
                              bgcolor: '#E63946',
                              fontSize: '1.5rem',
                              fontWeight: 700,
                            }}
                          >
                            {member.name.split(' ')[1][0]}
                          </Avatar>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946' }}>
                              {member.name}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: '#E63946', fontWeight: 600 }}>
                              {member.position}
                            </Typography>
                          </Box>
                        </Box>
                        <Box sx={{ pl: 1 }}>
                          <Typography variant="body2" sx={{ mb: 0.5 }}>
                            📞 {member.phone}
                          </Typography>
                          <Typography variant="body2">✉️ {member.email}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Typography variant="h5" sx={{ mb: 3, color: '#E63946', fontWeight: 600 }}>
                Temple Staff
              </Typography>

              <Grid container spacing={2}>
                {staff.map((member, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box
                      sx={{
                        p: 3,
                        bgcolor: '#ffebee',
                        borderRadius: 2,
                        textAlign: 'center',
                        height: '100%',
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#E63946', mb: 1 }}>
                        {member.role}
                      </Typography>
                      <Typography variant="body1">{member.name}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Committee Responsibilities</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography>• Overall temple management and operations</Typography>
                    <Typography>• Financial management and auditing</Typography>
                    <Typography>• Planning and organizing festivals</Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>• Maintenance and renovation projects</Typography>
                    <Typography>• Community outreach programs</Typography>
                    <Typography>• Resolving devotee concerns</Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mt: 3, p: 3, bgcolor: '#ffebee', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Contact Temple Office</Typography>
                <Typography>• Office Hours: 9:00 AM - 6:00 PM (Daily)</Typography>
                <Typography>• Phone: +91-XXXXXXXXXX</Typography>
                <Typography>• Email: office@muchukunnutemple.org</Typography>
                <Typography>• Address: Muchukunnu, Kerala - 670308</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="about" activePath="/about/administration" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
