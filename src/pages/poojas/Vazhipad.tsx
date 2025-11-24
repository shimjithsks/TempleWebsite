import React from 'react';
import PageBanner from '../../components/PageBanner';
import PoojaSidebar from '../../components/PoojaSidebar';
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Grid } from '@mui/material';

export default function VazhipadList() {
  const vazhipads = [
    { name: 'Archana', price: '₹50', description: 'Simple offering with name' },
    { name: 'Ganapathi Homam', price: '₹500', description: 'Special homam for Lord Ganesha' },
    { name: 'Sahasranamarchana', price: '₹200', description: '1000 names archana' },
    { name: 'Kalabhabhishekam', price: '₹300', description: 'Ritual bathing of deity' },
    { name: 'Pushpanjali', price: '₹100', description: 'Flower offering' },
    { name: 'Palpayasam', price: '₹250', description: 'Sweet offering to deity' },
    { name: 'Nivedyam', price: '₹150', description: 'Food offering' },
    { name: 'Vilakku', price: '₹75', description: 'Lamp offering' },
    { name: 'Appam', price: '₹200', description: 'Special sweet preparation' },
    { name: 'Aravana', price: '₹180', description: 'Traditional offering' },
  ];

  return (
    <>
      <PageBanner title="Vazhipad List" />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Vazhipad (offerings) are devotional offerings made to the deity. Choose from our list of traditional offerings.
              </Typography>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: '#E63946' }}>
                      <TableCell sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Vazhipad Name</TableCell>
                      <TableCell sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Price</TableCell>
                      <TableCell sx={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {vazhipads.map((item, index) => (
                      <TableRow 
                        key={index}
                        sx={{ '&:hover': { bgcolor: '#ffebee' } }}
                      >
                        <TableCell sx={{ fontWeight: 600 }}>{item.name}</TableCell>
                        <TableCell sx={{ color: '#E63946', fontWeight: 700 }}>{item.price}</TableCell>
                        <TableCell sx={{ color: '#666' }}>{item.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>How to Book Vazhipad</Typography>
                <Typography>1. Visit the temple counter directly</Typography>
                <Typography>2. Book online through our website</Typography>
                <Typography>3. Call temple office for advance booking</Typography>
                <Typography>4. Prasadam will be provided after the offering</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <PoojaSidebar activePath="/poojas/vazhipad" />
          </Grid>
        </Grid>
      </Container>
    </>

);
}
