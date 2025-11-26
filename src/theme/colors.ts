export const colors = {
  // Brand
  primary: '#E63946',// #5A2E3A
  primaryDark: '#d62839',
  secondary: '#ffffff',

  // Base
  white: '#ffffff',
  black: '#000000',
  background: '#ffffff',
  surface: '#ffffff',

  // Text
  textPrimary: '#222',
  textDark: '#333',
  textSecondary: '#555',
  textSubtle: '#444',
  textMuted: '#666',
  textInverse: '#ffffff',

  // Neutrals & borders
  borderLight: '#eee',
  border: '#ddd',
  gray100: '#f8f9fa',
  gray200: '#e0e0e0',
  gray300: '#ddd',
  gray400: '#ccc',
  gray500: '#999',

  // Brand variants used in UI
  navy: '#1D3557',
  navyLight: '#457B9D',
  sky: '#1e90ff',
  twitter: '#1DA1F2',
  pink: '#e84393',
  pureRed: '#ff0000',
  goldBrown: '#804a0aff',  // Main menu icon color

  // Semantic backgrounds
  brandTint: '#ffe9ec',
  brandBorder: '#ffd4db',

  // Overlays
  overlayDark35: 'rgba(0,0,0,0.35)',
  overlayDark45: 'rgba(0,0,0,0.45)',
  overlayDark12: 'rgba(0,0,0,0.12)',
  white10: 'rgba(255,255,255,0.10)',
  white25: 'rgba(255,255,255,0.25)',
  white50: 'rgba(255,255,255,0.50)'
  ,
  // Brand color with alpha
  brandAlpha06: 'rgba(230,57,70,0.06)',
  brandAlpha12: 'rgba(230,57,70,0.12)',
  brandAlpha18: 'rgba(230,57,70,0.18)',
  brandAlpha85: 'rgba(230,57,70,0.85)',
  brandAlpha95: 'rgba(230,57,70,0.95)'
  ,
  // Additional tints commonly used
  lightPink: '#ffebee',
  lightBlue: '#e3f2fd',
  lightGreen: '#e8f5e9',
  
  // Extra accents
  warning: '#ff9800',
  danger: '#ff5252',
  darkRed700: '#c62828',
  olive: '#556B2F',

  // Extra overlays
  overlayDark04: 'rgba(0,0,0,0.04)',
  overlayDark30: 'rgba(0,0,0,0.30)',
  overlayDark80: 'rgba(0,0,0,0.80)'
} as const;

export type AppColors = typeof colors;