import React, { useContext } from 'react';
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
import { ProductContext } from '../../context/product';

const ProductsList: React.FC = () => {
  const { products } = useContext(ProductContext);

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
              {products && products.map((product, key) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">{product.price}</TableCell>
                  <TableCell align="center">
                    <QuantityRow productId={product.id} />
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