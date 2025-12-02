import React from 'react';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname === '/login';

  return (
    <LanguageProvider>
      <CartProvider>
        {!isAdminRoute && <Header />}
        <Container maxWidth={isAdminRoute ? 'xl' : 'lg'} sx={{ mt: 0, mb: 8, px: { xs: 0, sm: 0, lg: 0 } }}>
          <AppRoutes />
        </Container>
        {!isAdminRoute && <Footer />}
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
