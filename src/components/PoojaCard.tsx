import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Checkbox, FormControlLabel, Button } from '@mui/material';
import { Pooja } from '../data/pooja-data';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface PoojaCardProps {
  pooja: Pooja;
  onSelect: (poojaId: number) => void;
  isSelected: boolean;
}

export default function PoojaCard({ pooja, onSelect, isSelected }: PoojaCardProps) {
  const [showOverlay, setShowOverlay] = React.useState(false);

  // Sync overlay state with isSelected prop
  React.useEffect(() => {
    if (!isSelected) {
      setShowOverlay(false);
    }
  }, [isSelected]);

  const handleCheckboxClick = (e: React.MouseEvent) => {
    if (!isSelected) {
      // select immediately and show overlay with green tick
      onSelect(pooja.id);
      setShowOverlay(true);
    }
    e.stopPropagation();
  };

  const handleOverlayCancel = () => {
    // deselect the pooja and close overlay
    onSelect(pooja.id);
    setShowOverlay(false);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Card 
        elevation={isSelected ? 8 : 2}
        sx={{ 
          textAlign: 'center', 
          height: '100%',
          width: '100%',
          minHeight: 400,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          border: isSelected ? '3px solid #d4af37' : '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: 3,
          background: isSelected 
            ? 'linear-gradient(135deg, #fffef7 0%, #fff9e6 100%)' 
            : 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
          position: 'relative',
          overflow: 'visible',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: isSelected 
              ? 'linear-gradient(90deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)'
              : 'linear-gradient(90deg, #d4af37 0%, #e5c158 100%)',
            borderRadius: '12px 12px 0 0',
            backgroundSize: '200% 100%',
            animation: isSelected ? 'shimmer 3s infinite' : 'none',
          },
          '&:hover': {
            boxShadow: '0 12px 28px rgba(212, 175, 55, 0.3)',
            transform: 'translateY(-8px) scale(1.02)',
            border: '3px solid #d4af37',
          },
          '@keyframes shimmer': {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' }
          }
        }}
      >
        <CardContent sx={{ pt: 3.5, pb: 2, px: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2.5 }}>
            <Box sx={{
              height: 72,
              width: 72,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
              border: '3px solid #d4af37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(212, 175, 55, 0.35)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1) rotate(5deg)',
                boxShadow: '0 6px 20px rgba(212, 175, 55, 0.5)'
              }
            }}>
              <img src={`${process.env.PUBLIC_URL}/assets/header_god_image.png`} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>

          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700, 
              minHeight: '64px',
              color: '#2c3e50',
              mb: 2,
              lineHeight: 1.3,
              fontSize: '1.15rem'
            }}
          >
            {pooja.name}
          </Typography>

          {pooja.description && (
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ 
                minHeight: '52px', 
                mb: 3,
                lineHeight: 1.6,
                fontSize: '0.9rem',
                color: '#546e7a'
              }}
            >
              {pooja.description}
            </Typography>
          )}

          <Chip 
            label={`₹ ${pooja.price.toFixed(2)}`} 
            sx={{ 
              bgcolor: '#d4af37', 
              color: '#fff', 
              fontWeight: 800,
              fontSize: '1.15rem',
              height: 38,
              px: 2.5,
              borderRadius: '24px',
              boxShadow: '0 3px 12px rgba(212, 175, 55, 0.4)',
              '&:hover': {
                bgcolor: '#c19b2f',
                transform: 'scale(1.08)',
                boxShadow: '0 4px 16px rgba(212, 175, 55, 0.5)'
              },
              transition: 'all 0.25s ease'
            }} 
          />
        </CardContent>
        <Box sx={{ p: 3, pt: 0 }}>
          {!isSelected && (
            <Button
              fullWidth
              variant="outlined"
              onClick={handleCheckboxClick}
              disabled={showOverlay}
              sx={{
                borderColor: '#d4af37',
                color: '#d4af37',
                fontWeight: 700,
                borderRadius: '12px',
                borderWidth: '2px',
                py: 1.2,
                textTransform: 'none',
                fontSize: '1rem',
                letterSpacing: '0.5px',
                '&:hover': {
                  borderColor: '#d4af37',
                  borderWidth: '2px',
                  bgcolor: 'rgba(212, 175, 55, 0.1)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(212, 175, 55, 0.25)'
                },
                transition: 'all 0.25s ease'
              }}
            >
              Select Pooja
            </Button>
          )}
        </Box>
      </Card>
      {showOverlay && (
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(6px)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 3
        }}>
          <Box sx={{
            bgcolor: 'white',
            borderRadius: 4,
            p: 4,
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '85%',
            border: '3px solid #d4af37',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '5px',
              background: 'linear-gradient(90deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)',
              borderRadius: '16px 16px 0 0'
            }
          }}>
            <CheckCircleIcon sx={{ 
              color: '#d4af37', 
              fontSize: 64, 
              mb: 1.5,
              filter: 'drop-shadow(0 3px 10px rgba(212, 175, 55, 0.4))' 
            }} />
            <Typography sx={{ 
              mt: 1, 
              color: '#2c3e50', 
              fontWeight: 800,
              fontSize: '1.15rem',
              textAlign: 'center'
            }}>
              {pooja.name}
            </Typography>
            <Typography sx={{ 
              mt: 0.5, 
              color: '#7f8c8d', 
              fontSize: '0.9rem',
              fontWeight: 500
            }}>
              Selected Successfully
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button 
                variant="outlined" 
                onClick={handleOverlayCancel} 
                sx={{ 
                  textTransform: 'none',
                  borderColor: '#d4af37',
                  borderWidth: '2px',
                  color: '#d4af37',
                  fontWeight: 700,
                  px: 5,
                  py: 1.2,
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  '&:hover': {
                    borderColor: '#c19b2f',
                    borderWidth: '2px',
                    bgcolor: 'rgba(212, 175, 55, 0.1)',
                    transform: 'scale(1.05)'
                  },
                  transition: 'all 0.25s ease'
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
