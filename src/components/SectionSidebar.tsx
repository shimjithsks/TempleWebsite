import React from 'react';
import { Paper, Typography, List, ListItemButton, ListItemText, Box, Avatar, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SIDEBAR_SECTIONS, SectionKey } from '../data/sectionSidebarConfig';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface SectionSidebarProps {
  sectionKey: SectionKey;
  activePath: string;
}

export default function SectionSidebar({ sectionKey, activePath }: SectionSidebarProps) {
  const GOLD = '#d4af37';
  const config = SIDEBAR_SECTIONS[sectionKey];

  if (!config) {
    return null;
  }

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        boxShadow: '0 12px 40px rgba(212,175,55,0.2)',
        position: { md: 'sticky' },
        top: { md: 100 },
        border: `3px solid ${GOLD}`,
        background: 'linear-gradient(135deg, #fff 0%, #fafaf8 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: `linear-gradient(90deg, ${GOLD} 0%, #e5c158 25%, ${GOLD} 50%, #e5c158 75%, ${GOLD} 100%)`,
          animation: 'shimmer 3s linear infinite',
          backgroundSize: '200% 100%',
          '@keyframes shimmer': {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' },
          },
        }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, mt: 1 }}>
        <Avatar sx={{ 
          width: 45, 
          height: 45, 
          bgcolor: GOLD,
          background: `linear-gradient(135deg, ${GOLD} 0%, #e5c158 100%)`,
          boxShadow: '0 4px 16px rgba(212,175,55,0.4)'
        }}>
          <MenuBookIcon sx={{ fontSize: 24, color: '#fff' }} />
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: GOLD, lineHeight: 1.2 }}>
            {config.title}
          </Typography>
          <Typography variant="caption" sx={{ color: '#888', fontSize: '0.75rem' }}>
            Quick Navigation
          </Typography>
        </Box>
      </Box>
      
      <Divider sx={{ mb: 2, borderColor: 'rgba(212,175,55,0.3)' }} />
      
      <Typography variant="body2" sx={{ color: '#666', mb: 2.5, lineHeight: 1.6, fontSize: '0.875rem' }}>
        {config.description}
      </Typography>
      
      <List disablePadding>
        {config.links.map((link) => {
          const selected = link.to === activePath;
          return (
            <ListItemButton
              key={link.to}
              component={RouterLink}
              to={link.to}
              selected={selected}
              sx={{
                borderRadius: 3,
                mb: 1,
                border: selected ? `3px solid ${GOLD}` : '2px solid rgba(212,175,55,0.2)',
                bgcolor: selected ? 'rgba(212,175,55,0.15)' : '#fff',
                pl: 1.5,
                pr: 1,
                py: 1.2,
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': selected ? {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 5,
                  background: GOLD,
                } : {},
                '&.Mui-selected': {
                  bgcolor: 'rgba(212,175,55,0.15)',
                  borderColor: GOLD,
                  color: '#333',
                },
                '&:hover': {
                  bgcolor: 'rgba(212,175,55,0.1)',
                  borderColor: GOLD,
                  transform: 'translateX(4px)',
                  boxShadow: '0 4px 12px rgba(212,175,55,0.2)',
                },
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{ 
                  fontWeight: selected ? 700 : 600,
                  color: selected ? GOLD : '#555',
                  fontSize: '0.9rem'
                }}
              />
              <ChevronRightIcon sx={{ 
                color: selected ? GOLD : '#999', 
                fontSize: 20,
                opacity: selected ? 1 : 0.6,
                transition: 'all 300ms'
              }} />
            </ListItemButton>
          );
        })}
      </List>
      
      {config.tip && (
        <Box sx={{ 
          mt: 3, 
          p: 2.5, 
          borderRadius: 3, 
          background: `linear-gradient(135deg, rgba(212,175,55,0.08), rgba(229,193,88,0.15))`,
          border: `2px solid ${GOLD}`,
          position: 'relative',
          '&::before': {
            content: '"💡"',
            position: 'absolute',
            top: -12,
            left: 12,
            bgcolor: GOLD,
            width: 28,
            height: 28,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            boxShadow: '0 2px 8px rgba(212,175,55,0.3)'
          }
        }}>
          <Typography variant="body2" sx={{ color: '#555', fontWeight: 600, lineHeight: 1.6, fontSize: '0.85rem' }}>
            {config.tip}
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
