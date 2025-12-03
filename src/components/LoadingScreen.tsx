import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #fafaf8 0%, #ffffff 50%, #fafaf8 100%)',
        zIndex: 9999,
        animation: 'fadeIn 0.3s ease-in',
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%)',
          filter: 'blur(40px)',
          animation: 'pulse 3s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
            '50%': { transform: 'scale(1.2)', opacity: 0.8 },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%)',
          filter: 'blur(50px)',
          animation: 'pulse 3s ease-in-out infinite 1.5s',
        }}
      />

      {/* Main loading content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Om icon with animation */}
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d4af37, #e5c158)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(212,175,55,0.4), inset 0 2px 8px rgba(255,255,255,0.3)',
            animation: 'bounce 1.5s ease-in-out infinite',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            },
          }}
        >
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/assets/icon_ohm_2.png`}
            alt="Om"
            sx={{
              width: 50,
              height: 50,
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Loading spinner */}
        <Box sx={{ position: 'relative' }}>
          <CircularProgress
            size={60}
            thickness={3}
            sx={{
              color: '#d4af37',
              '& .MuiCircularProgress-circle': {
                strokeLinecap: 'round',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress
              variant="determinate"
              value={25}
              size={60}
              thickness={3}
              sx={{
                color: 'rgba(212,175,55,0.2)',
                position: 'absolute',
              }}
            />
          </Box>
        </Box>

        {/* Loading text */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #333 0%, #000 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 0.5,
            }}
          >
           Sri Kotta Kovilakam Temple
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#d4af37',
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
              animation: 'fadeInOut 2s ease-in-out infinite',
              '@keyframes fadeInOut': {
                '0%, 100%': { opacity: 0.4 },
                '50%': { opacity: 1 },
              },
            }}
          >
            Loading...
          </Typography>
        </Box>
      </Box>

      {/* Bottom decoration */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          display: 'flex',
          gap: 1,
        }}
      >
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: '#d4af37',
              animation: 'dotPulse 1.5s ease-in-out infinite',
              animationDelay: `${i * 0.2}s`,
              '@keyframes dotPulse': {
                '0%, 100%': { transform: 'scale(0.8)', opacity: 0.5 },
                '50%': { transform: 'scale(1.2)', opacity: 1 },
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
