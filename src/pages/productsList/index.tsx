import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Box,
  Container,
} from '@material-ui/core';
import React from 'react';
import CardTotal from './components/cardTotal';
import RowActions from './components/rowActions';

const ProductsList: React.FC = () => {
  const rows = [
    {
      name:'Frozen yoghurt',
      price: 10,
    },
    {
      name:'Ice cream sandwich',
      price: 15,
    },
    {
      name:'Eclair',
      price: 20,
    },
    {
      name:'Cupcake',
      price: 25,
    },
    {
      name:'Gingerbread',
      price: 30,
    },
  ];

  return (
    <Container>
      <Box mb={3}>
        <Typography variant="h4" component="h4">
          What do you want? 
        </Typography>
      </Box>
      <Box mb={3}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="center">Price ($)</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, key) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">
                    <RowActions />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <CardTotal />
    </Container>
  );
};

export default ProductsList;