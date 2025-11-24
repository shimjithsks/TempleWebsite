import React from 'react';
import { Container } from '@mui/material';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 3, mb: 8, px: { xs: 2, sm: 3, lg: 0 } }}>
        

        <AppRoutes />
      </Container>
      <Footer />
    </>
  );
}

export default App;
