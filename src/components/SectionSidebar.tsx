import React from 'react';
import { Paper, Typography, List, ListItemButton, ListItemText, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SIDEBAR_SECTIONS, SectionKey } from '../data/sectionSidebarConfig';

interface SectionSidebarProps {
  sectionKey: SectionKey;
  activePath: string;
}

export default function SectionSidebar({ sectionKey, activePath }: SectionSidebarProps) {
  const config = SIDEBAR_SECTIONS[sectionKey];

  if (!config) {
    return null;
  }

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
        position: { md: 'sticky' },
        top: { md: 100 },
        border: '1px solid #ffe0e4',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#E63946' }}>
        {config.title}
      </Typography>
      <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
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
                borderRadius: 2,
                mb: 1,
                border: '1px solid #ffe0e4',
                bgcolor: selected ? 'rgba(230,57,70,0.08)' : '#fff',
                '&.Mui-selected': {
                  bgcolor: 'rgba(230,57,70,0.15)',
                  borderColor: '#E63946',
                  color: '#E63946',
                },
                '&:hover': {
                  bgcolor: 'rgba(230,57,70,0.12)',
                  borderColor: '#E63946',
                },
              }}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{ fontWeight: selected ? 700 : 600 }}
              />
            </ListItemButton>
          );
        })}
      </List>
      {config.tip && (
        <Box sx={{ mt: 2, p: 2, borderRadius: 2, bgcolor: '#fff5f5', border: '1px dashed #ffcdd2' }}>
          <Typography variant="body2" sx={{ color: '#c62828' }}>
            {config.tip}
          </Typography>
        </Box>
      )}
    </Paper>
  );
}
