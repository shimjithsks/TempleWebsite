import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';

export default function Ads() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Advertisements / Sponsorships</Typography>
      <Grid container spacing={2}>
        {[1,2].map(i => (
          <Grid item xs={12} md={6} key={i}>
            <Card>
              <CardContent>
                <Typography>Ad slot {i}</Typography>
                <Typography variant="caption">Sponsored listing (monthly/annual)</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
