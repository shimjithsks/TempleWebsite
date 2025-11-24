import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Typography,
  Paper,
  Container,
  Grid
} from '@mui/material';
import PageBanner from '../components/PageBanner';
import SectionSidebar from '../components/SectionSidebar';

const purposes = ['Annadanam', 'Festival', 'Renovation', 'General'];

export default function Donations() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', amount: '', purpose: purposes[0] });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Proceed to payment: ₹${form.amount} for ${form.purpose}`);
  }

  return (
    <>
      <PageBanner title="Support the Temple" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h4" gutterBottom>
                Donate
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>
                Contribute towards temple services, annadanam, festivals, and heritage upkeep using the quick form below.
              </Typography>
              <Box component="form" onSubmit={submit} sx={{ display: 'grid', gap: 2 }}>
                <TextField label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                <TextField label="Mobile" name="mobile" value={form.mobile} onChange={handleChange} required />
                <TextField label="Email" name="email" value={form.email} onChange={handleChange} />
                <TextField select label="Purpose" name="purpose" value={form.purpose} onChange={handleChange}>
                  {purposes.map((p) => (
                    <MenuItem key={p} value={p}>
                      {p}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Amount (INR)"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  required
                  type="number"
                />
                <Button type="submit" variant="contained" color="secondary">
                  Proceed to Payment
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="donate" activePath="/donate" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
