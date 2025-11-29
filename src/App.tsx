import React from 'react';
import { Container } from '@mui/material';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Header />
        <Container maxWidth="lg" sx={{ mt: 0, mb: 8, px: { xs: 0, sm: 0, lg: 0 } }}>
          <AppRoutes />
        </Container>
        <Footer />
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
