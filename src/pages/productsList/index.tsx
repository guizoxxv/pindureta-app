import React, { useState } from 'react';
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
import CardTotal from './components/cardTotal';
import QuantityRow from './components/quantityRow';
import Product from '../../services/interfaces/product';
import { getProducts } from '../../services/api';

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    const productsJson = localStorage.getItem('@pinduretaFront:products');

    if (productsJson) {
      return  JSON.parse(productsJson);
    }

    const response = getProducts();

    localStorage.setItem('@pinduretaFront:products', JSON.stringify(response));
    
    return response;
  });

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
              {products.map((product, key) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">{product.price}</TableCell>
                  <TableCell align="center">
                    <QuantityRow />
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