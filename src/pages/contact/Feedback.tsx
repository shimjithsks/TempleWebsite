import React, { useState } from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, TextField, Button, Grid, MenuItem, Rating } from '@mui/material';

export default function Feedback() {
  const [rating, setRating] = useState<number | null>(4);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    message: ''
  });

  const categories = [
    'Temple Services',
    'Pooja Experience',
    'Staff Behavior',
    'Cleanliness',
    'Facilities',
    'Website',
    'General Feedback',
    'Complaint',
    'Suggestion'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your feedback! We will review it carefully.');
  };

  return (
    <>
      <PageBanner title="Feedback Form" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', textAlign: 'center' }}>
                Your feedback helps us improve our services. Please share your experience and suggestions.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Typography variant="h6" sx={{ mb: 1 }}>Rate Your Experience</Typography>
                      <Rating
                        value={rating}
                        onChange={(event, newValue) => setRating(newValue)}
                        size="large"
                        sx={{ fontSize: '3rem' }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      select
                      label="Feedback Category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      required
                    >
                      {categories.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                          {cat}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Feedback / Suggestions"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Please share your thoughts, experiences, or suggestions..."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
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
                      Submit Feedback
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>What Happens Next?</Typography>
                <Typography>• Your feedback is reviewed by our management team</Typography>
                <Typography>• Valid complaints are addressed within 48 hours</Typography>
                <Typography>• You will receive a response via email</Typography>
                <Typography>• Suggestions are considered for temple improvements</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <SectionSidebar sectionKey="contact" activePath="/contact/feedback" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
