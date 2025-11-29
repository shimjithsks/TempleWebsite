import React from 'react';
import { Box, Typography, Container } from '@mui/material';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  imagePath?: string;
}

export default function PageBanner({ title, subtitle, imagePath = `${process.env.PUBLIC_URL}/assets/subpage_banner.png` }: PageBannerProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        height: { xs: 250, md: 350 },
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: -15,
        mb: 0,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', color: '#fff' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              mb: subtitle ? 2 : 0,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.5rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}
