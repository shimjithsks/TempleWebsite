import React from 'react';
import { Box, Tabs, Tab, Grid, CardMedia } from '@mui/material';

export default function Gallery() {
  const [tab, setTab] = React.useState(0);
  return (
    <Box>
      <Tabs value={tab} onChange={(_, v) => setTab(v)}>
        <Tab label="Photos" />
        <Tab label="Videos" />
      </Tabs>

      {tab === 0 && (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {[1,2,3,4,5,6].map(i => (
            <Grid item xs={6} sm={4} md={3} key={i}>
              <CardMedia component="img" image={`/assets/gallery-${i}.jpg`} alt={`gallery-${i}`} sx={{ borderRadius: 1 }} />
            </Grid>
          ))}
        </Grid>
      )}

      {tab === 1 && (
        <Box sx={{ mt: 2 }}>
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Temple videos"
            allowFullScreen
            style={{ border: 0 }}
          />
        </Box>
      )}
    </Box>
  );
}
