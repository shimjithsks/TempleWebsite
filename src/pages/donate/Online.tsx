import React, { useState } from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, TextField, Button, Grid, MenuItem, Card, CardContent } from '@mui/material';

export default function OnlineDonation() {
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');

  const predefinedAmounts = ['₹500', '₹1000', '₹2000', '₹5000', '₹10000'];
  const purposes = ['General Fund', 'Annadanam', 'Temple Renovation', 'Festival Contribution', 'Other'];

  return (
    <>
      <PageBanner title="Online Donation" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', textAlign: 'center' }}>
                Your generous contribution helps us maintain the temple and serve the community better.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>Select Amount</Typography>
                <Grid container spacing={2}>
                  {predefinedAmounts.map((amt) => (
                    <Grid item xs={6} md={2.4} key={amt}>
                      <Button
                        fullWidth
                        variant={amount === amt ? 'contained' : 'outlined'}
                        onClick={() => setAmount(amt)}
                        sx={{
                          py: 1.5,
                          bgcolor: amount === amt ? '#E63946' : 'transparent',
                          borderColor: '#E63946',
                          color: amount === amt ? '#fff' : '#E63946',
                          '&:hover': { bgcolor: '#E63946', color: '#fff' },
                        }}
                      >
                        {amt}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Custom Amount (₹)"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    select
                    label="Purpose of Donation"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                  >
                    {purposes.map((p) => (
                      <MenuItem key={p} value={p}>
                        {p}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth label="Full Name" required />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Email" type="email" required />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Phone Number" required />
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth label="Address" multiline rows={2} />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      bgcolor: '#E63946',
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': { bgcolor: '#d62839' },
                    }}
                  >
                    Proceed to Payment
                  </Button>
                </Grid>
              </Grid>
            </Paper>

            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Payment Methods Accepted</Typography>
                <Typography>• UPI (Google Pay, PhonePe, Paytm)</Typography>
                <Typography>• Credit/Debit Cards</Typography>
                <Typography>• Net Banking</Typography>
                <Typography>• 80G Tax Exemption Certificate Available</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="donate" activePath="/donate/online" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
