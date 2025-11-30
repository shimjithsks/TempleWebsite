import React, { useState } from 'react';
import PageBanner from '../../components/PageBanner';
import SectionSidebar from '../../components/SectionSidebar';
import { Container, Typography, Box, Paper, TextField, Button, Grid, MenuItem, Rating, Avatar, Divider, Chip } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const GOLD = '#d4af37';

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
            <Paper elevation={0} sx={{ 
              p: 4,
              border: `3px solid ${GOLD}`,
              borderRadius: 4,
              boxShadow: '0 8px 24px rgba(212,175,55,0.2)',
              background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -3,
                left: 0,
                right: 0,
                height: 6,
                background: `linear-gradient(90deg, ${GOLD}, #e5c158, ${GOLD})`,
                borderRadius: '4px 4px 0 0',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s linear infinite',
              },
              '@keyframes shimmer': {
                '0%': { backgroundPosition: '-200% 0' },
                '100%': { backgroundPosition: '200% 0' },
              },
            }}>
              {/* Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    background: `linear-gradient(135deg, #e91e63 0%, #f06292 100%)`,
                    boxShadow: '0 4px 12px rgba(233,30,99,0.3)',
                  }}
                >
                  <FeedbackIcon sx={{ fontSize: 36, color: '#fff' }} />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 900, color: GOLD, mb: 0.5 }}>
                    Feedback Form
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666' }}>
                    Your feedback helps us improve our services
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: `rgba(212,175,55,0.3)` }} />

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box sx={{ 
                      textAlign: 'center', 
                      mb: 3,
                      p: 3,
                      background: `linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(229,193,88,0.05) 100%)`,
                      borderRadius: 2,
                      border: `2px solid rgba(212,175,55,0.3)`,
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
                        <StarIcon sx={{ color: GOLD, fontSize: 28 }} />
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>Rate Your Experience</Typography>
                      </Box>
                      <Rating
                        value={rating}
                        onChange={(event, newValue) => setRating(newValue)}
                        size="large"
                        sx={{ 
                          fontSize: '3rem',
                          '& .MuiRating-iconFilled': { color: GOLD },
                          '& .MuiRating-iconHover': { color: '#e5c158' },
                        }}
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
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: GOLD },
                          '&.Mui-focused fieldset': { borderColor: GOLD },
                        },
                        '& .MuiInputLabel-root.Mui-focused': { color: GOLD },
                      }}
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
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: GOLD },
                          '&.Mui-focused fieldset': { borderColor: GOLD },
                        },
                        '& .MuiInputLabel-root.Mui-focused': { color: GOLD },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: GOLD },
                          '&.Mui-focused fieldset': { borderColor: GOLD },
                        },
                        '& .MuiInputLabel-root.Mui-focused': { color: GOLD },
                      }}
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
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: GOLD },
                          '&.Mui-focused fieldset': { borderColor: GOLD },
                        },
                        '& .MuiInputLabel-root.Mui-focused': { color: GOLD },
                      }}
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
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: GOLD },
                          '&.Mui-focused fieldset': { borderColor: GOLD },
                        },
                        '& .MuiInputLabel-root.Mui-focused': { color: GOLD },
                      }}
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
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: GOLD },
                          '&.Mui-focused fieldset': { borderColor: GOLD },
                        },
                        '& .MuiInputLabel-root.Mui-focused': { color: GOLD },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      startIcon={<SendIcon />}
                      sx={{
                        bgcolor: GOLD,
                        color: '#000',
                        py: 1.8,
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        boxShadow: '0 4px 12px rgba(212,175,55,0.4)',
                        transition: 'all 300ms ease',
                        '&:hover': { 
                          bgcolor: '#e5c158',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(212,175,55,0.5)',
                        },
                      }}
                    >
                      Submit Feedback
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ 
                mt: 4, 
                p: 3, 
                background: `linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0.05) 100%)`,
                borderRadius: 2,
                border: `2px solid rgba(76,175,80,0.3)`,
                borderLeft: `6px solid #4caf50`,
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#4caf50', width: 45, height: 45 }}>
                    <CheckCircleIcon sx={{ fontSize: 24 }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#4caf50' }}>What Happens Next?</Typography>
                </Box>
                <Box sx={{ pl: 7.5, display: 'grid', gap: 1 }}>
                  <Typography>• Your feedback is reviewed by our management team</Typography>
                  <Typography>• Valid complaints are addressed within 48 hours</Typography>
                  <Typography>• You will receive a response via email</Typography>
                  <Typography>• Suggestions are considered for temple improvements</Typography>
                </Box>
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
