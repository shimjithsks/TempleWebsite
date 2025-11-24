import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar } from '@mui/material';

const members = [
  { name: 'Sri. K. President', role: 'President', photo: '/assets/member1.jpg' },
  { name: 'Smt. X. Secretary', role: 'Secretary', photo: '/assets/member2.jpg' },
  { name: 'Sri. Y. Treasurer', role: 'Treasurer', photo: '/assets/member3.jpg' },
];

export default function Administration() {
  return (
    <>
      <Typography variant="h4" gutterBottom>Temple Administration</Typography>
      <Grid container spacing={2}>
        {members.map(m => (
          <Grid item xs={12} sm={6} md={4} key={m.name}>
            <Card>
              <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Avatar src={m.photo} sx={{ width: 72, height: 72 }} />
                <div>
                  <Typography variant="h6">{m.name}</Typography>
                  <Typography variant="body2">{m.role}</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
