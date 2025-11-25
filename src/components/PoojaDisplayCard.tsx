import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';

interface PoojaDisplayCardProps {
  name: string;
  price: number;
  description?: string;
  image: string;
  showPrice?: boolean;
}

export default function PoojaDisplayCard({ name, price, description, image, showPrice = true }: PoojaDisplayCardProps) {
  return (
    <Card 
      variant="outlined" 
      sx={{ 
        textAlign: 'center', 
        height: '100%',
        borderColor: 'rgba(0, 0, 0, 0.12)',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
          transform: 'translateY(-4px)'
        }
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(230,57,70,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#fff',
            mb: 1.5,
          }}
        >
          <Box component="img" src={image} alt="pooja icon" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center', minHeight: '56px' }}>
          {name}
        </Typography>

        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center', minHeight: '36px' }}>
            {description}
          </Typography>
        )}

        {showPrice && (
          <Chip
            label={`Rs.${price.toFixed(2)}`}
            sx={{
              mt: 2,
              bgcolor: '#E63946',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          />
        )}
      </CardContent>
    </Card>
  );
}
