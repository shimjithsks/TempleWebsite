import React, { useState, useEffect, useRef } from 'react';
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname === '/login';
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const loadingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Show loading screen for 1.2 seconds on initial load

    return () => clearTimeout(timer);
  }, []);

  // Smart page transition - only show loading if page takes time to load
  useEffect(() => {
    if (!isLoading) {
      // Set a delay before showing loading screen (only if content is slow)
      loadingTimerRef.current = setTimeout(() => {
        setIsTransitioning(true);
      }, 300); // Wait 300ms before showing loading screen

      // Simulate content ready after a short delay
      const readyTimer = setTimeout(() => {
        setIsTransitioning(false);
      }, 400); // Content typically ready after 400ms

      return () => {
        if (loadingTimerRef.current) {
          clearTimeout(loadingTimerRef.current);
        }
        clearTimeout(readyTimer);
      };
    }
  }, [location.pathname, isLoading]);

  // Show loading screen only on initial load or if transition is taking time
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <LanguageProvider>
      <CartProvider>
        {isTransitioning && <LoadingScreen />}
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
