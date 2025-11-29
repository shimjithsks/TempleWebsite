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
    <Box sx={{ position: 'relative', width: 320, height: 340 }}>
      <Card 
        variant="outlined" 
        sx={{ 
          textAlign: 'center', 
          height: '100%',
          width: '100%',
          minWidth: 320,
          minHeight: 340,
          maxWidth: 320,
          maxHeight: 340,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderColor: isSelected ? '#E63946' : 'rgba(0, 0, 0, 0.12)',
          borderWidth: isSelected ? '2px' : '1px',
          transition: 'all 0.2s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
            transform: 'translateY(-4px)',
            borderColor: '#E63946',
          }
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
            <Box sx={{
              height: 40,
              width: 40,
              borderRadius: '50%',
              bgcolor: 'white',
              border: '2px solid #d32f2f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <img src={`${process.env.PUBLIC_URL}/assets/header_god_image.png`} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 600, minHeight: '64px' }}>
            {pooja.name}
          </Typography>

          {pooja.description && (
            <Typography variant="body2" color="text.secondary" sx={{ minHeight: '40px', mb: 2 }}>
              {pooja.description}
            </Typography>
          )}

          <Chip 
            label={`Rs.${pooja.price.toFixed(2)}`} 
            sx={{ 
              bgcolor: '#E63946', 
              color: 'white', 
              fontWeight: 'bold',
              fontSize: '1rem'
            }} 
          />
        </CardContent>
        <Box sx={{ p: 2, pt: 0 }}>
          {!isSelected && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={isSelected}
                  onClick={handleCheckboxClick}
                  disabled={showOverlay}
                  icon={<Box sx={{ width: 32, height: 32, bgcolor: '#e63946', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />}
                  checkedIcon={<Box sx={{ width: 32, height: 32, bgcolor: '#e63946', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
                />
              }
              label="Select Pooja"
              sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
            />
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
          bgcolor: 'rgba(0,0,0,0.45)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Box sx={{
            bgcolor: 'white',
            borderRadius: 2,
            p: 3,
            boxShadow: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 300,
            height: 180,
            justifyContent: 'center',
          }}>
            <CheckCircleIcon sx={{ color: '#43a047', fontSize: 48, mb: 1 }} />
            <Typography sx={{ mt: 1, color: '#43a047', fontWeight: 600 }}>{pooja.name}</Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="error" onClick={handleOverlayCancel} sx={{ textTransform: 'none' }}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
