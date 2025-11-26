import React from 'react';
import { Card, CardContent, Typography, Box, Chip } from '@mui/material';

interface PoojaDisplayCardProps {
  id?: number;
  name: string;
  price: number;
  description?: string;
  image: string;
  deity?: string;
  showPrice?: boolean;
}

const DEITY_COLORS: Record<string, string> = {
  BHAGAVATHY: '#E76F51',
  SIVA: '#264653',
  VISHNU: '#2A9D8F',
  GANAPATHY: '#E9C46A',
  AYYAPPA: '#8E7CC3',
  GENERAL: '#6C757D',
};

export default function PoojaDisplayCard({ id, name, price, description, image, deity = 'GENERAL', showPrice = true }: PoojaDisplayCardProps) {
  const color = DEITY_COLORS[deity] || DEITY_COLORS.GENERAL;

  return (
    <Card
      variant="outlined"
      sx={{
        textAlign: 'center',
        height: '100%',
        borderColor: 'rgba(0, 0, 0, 0.08)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.22s ease-in-out',
        '&:hover': {
          boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
          transform: 'translateY(-6px)'
        }
      }}
    >
      <Box sx={{ position: 'absolute', top: 12, left: 12 }}>
        <Chip label={deity} size="small" sx={{ bgcolor: color, color: '#fff', fontWeight: 700 }} />
      </Box>

      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center', minHeight: '56px' }}>
          {name}
        </Typography>

        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center', minHeight: '36px' }}>
            {description}
          </Typography>
        )}

        {showPrice && (
          <Chip
            label={`Rs ${price.toFixed(0)}`}
            sx={{
              mt: 2,
              bgcolor: color,
              color: 'white',
              fontWeight: 700,
            }}
          />
        )}
      </CardContent>

    </Card>
  );
}
