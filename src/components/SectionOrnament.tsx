import React from 'react';
import { Box } from '@mui/material';
import { colors } from '../theme/colors';

type SectionOrnamentProps = {
  opacity?: number;
  size?: number;
  color?: string;
  variant?: 'lotus' | 'mandala' | 'bars' | 'om';
  repeat?: 1 | 2 | 3;
  offset?: number; // negative pulls it further outside
  showSides?: 'both' | 'left' | 'right';
  blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'soft-light';
};

// Renders subtle devotional motifs outside the left/right edges of a section
export default function SectionOrnament({
  opacity = 0.22,
  size = 64,
  color = colors.primary,
  variant = 'lotus',
  repeat = 2,
  offset,
  showSides = 'both',
  blendMode = 'normal',
}: SectionOrnamentProps) {
  const motif = (v: SectionOrnamentProps['variant']) => {
    if (v === 'om') {
      const fontStack = '"Noto Sans Devanagari", "Segoe UI Symbol", "Arial Unicode MS", system-ui, sans-serif';
      const fontSize = Math.max(10, size * 0.6);
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="omGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 32) rotate(90) scale(28)">
              <stop offset="0%" stopColor={color} stopOpacity="0.18" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="32" cy="32" r="26" fill="url(#omGlow)" />
          <text
            x="50%"
            y="54%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontSize}
            fill={color}
            opacity="0.45"
            style={{ fontFamily: fontStack }}
          >
            ॐ
          </text>
        </svg>
      );
    }
    if (v === 'bars') {
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.35" />
              <stop offset="100%" stopColor={color} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect x="10" y="6" width="3" height="52" rx="1.5" fill="url(#barGrad)" />
          <rect x="30" y="10" width="3" height="44" rx="1.5" fill="url(#barGrad)" />
          <rect x="50" y="6" width="3" height="52" rx="1.5" fill="url(#barGrad)" />
          <circle cx="11.5" cy="6" r="2.5" fill={color} opacity={0.18} />
          <circle cx="31.5" cy="10" r="2.5" fill={color} opacity={0.18} />
          <circle cx="51.5" cy="6" r="2.5" fill={color} opacity={0.18} />
        </svg>
      );
    }

    if (v === 'mandala') {
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 32) rotate(90) scale(32)">
              <stop offset="0%" stopColor={color} stopOpacity="0.14" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="32" cy="32" r="32" fill="url(#glow)" />
          <circle cx="32" cy="32" r="24" stroke={color} strokeWidth="1.5" opacity="0.45" />
          <circle cx="32" cy="32" r="16" stroke={color} strokeWidth="1.2" opacity="0.45" />
          <circle cx="32" cy="32" r="8" stroke={color} strokeWidth="1.2" opacity="0.45" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * Math.PI) / 6;
            const x1 = 32 + 8 * Math.cos(angle);
            const y1 = 32 + 8 * Math.sin(angle);
            const x2 = 32 + 24 * Math.cos(angle);
            const y2 = 32 + 24 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1" opacity="0.4" />;
          })}
          <circle cx="32" cy="32" r="3" fill={color} opacity="0.3" />
        </svg>
      );
    }

    // lotus (default)
    return (
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="lotusGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 40) rotate(90) scale(28)">
            <stop offset="0%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="32" cy="42" rx="22" ry="10" fill="url(#lotusGlow)" />
        {Array.from({ length: 6 }).map((_, i) => {
          const rot = i * 30;
          return (
            <g key={i} transform={`translate(32 36) rotate(${rot})`} opacity="0.8">
              <ellipse cx="0" cy="-8" rx="6" ry="12" fill={color} opacity="0.12" />
              <ellipse cx="0" cy="-8" rx="6" ry="12" stroke={color} strokeWidth="1" opacity="0.45" />
            </g>
          );
        })}
        <circle cx="32" cy="36" r="3" fill={color} opacity="0.4" />
        <path d="M16 48 C24 44, 40 44, 48 48" stroke={color} strokeWidth="1.2" opacity="0.35" />
      </svg>
    );
  };

  const sideOffset = offset !== undefined ? offset : -size / 2;
  const midStyle = { top: '50%', transform: 'translateY(-50%)' as const };

  const leftNodes = (
    <>
      <Box sx={{ position: 'absolute', top: 16, left: sideOffset, opacity, mixBlendMode: blendMode, pointerEvents: 'none', zIndex: 1 }}>{motif(variant)}</Box>
      {repeat >= 2 && (
        <Box sx={{ position: 'absolute', bottom: 16, left: sideOffset * 0.66, opacity: opacity * 0.85, mixBlendMode: blendMode, pointerEvents: 'none', zIndex: 1 }}>{motif(variant)}</Box>
      )}
      {repeat >= 3 && (
        <Box sx={{ position: 'absolute', left: sideOffset, ...midStyle, opacity: opacity * 0.9, mixBlendMode: blendMode, pointerEvents: 'none', zIndex: 1 }}>{motif(variant)}</Box>
      )}
    </>
  );

  const rightNodes = (
    <>
      <Box sx={{ position: 'absolute', top: 16, right: sideOffset, opacity, mixBlendMode: blendMode, pointerEvents: 'none', zIndex: 1 }}>{motif(variant)}</Box>
      {repeat >= 2 && (
        <Box sx={{ position: 'absolute', bottom: 16, right: sideOffset * 0.66, opacity: opacity * 0.85, mixBlendMode: blendMode, pointerEvents: 'none', zIndex: 1 }}>{motif(variant)}</Box>
      )}
      {repeat >= 3 && (
        <Box sx={{ position: 'absolute', right: sideOffset, ...midStyle, opacity: opacity * 0.9, mixBlendMode: blendMode, pointerEvents: 'none', zIndex: 1 }}>{motif(variant)}</Box>
      )}
    </>
  );

  return (
    <>
      {(showSides === 'both' || showSides === 'left') && leftNodes}
      {(showSides === 'both' || showSides === 'right') && rightNodes}
    </>
  );
}
