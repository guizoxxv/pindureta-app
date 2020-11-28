import React, { useContext, useEffect } from 'react';
import {
  Typography,
  Box,
  Container,
} from '@material-ui/core';
import CardTotal from './components/cardTotal';
import { ProductContext } from '../../context/product';
import LogoutButton from '../../components/logoutButton';
import { Alert } from '@material-ui/lab';
import { getProducts } from '../../services/api';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/auth';
import ProductsGrid from './components/productsGrid';

const ProductsList: React.FC = () => {
  const { products, setProducts } = useContext(ProductContext);
  const { data, logout } = useContext(AuthContext);

  useEffect((): void => {
    getProducts(data.token)
      .then(res => {
        setProducts(res);
      })
      .catch(err => {
        if (err.response.status === 403) {
          logout();
        }

        toast.error('Error fetching products list');
      });
  }, [setProducts, data.token, logout]);

  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h5" component="h5">
          Products
        </Typography>
        <LogoutButton />
      </Box>
      {products.length > 0 ? (
        <ProductsGrid products={products} />
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Alert severity="warning">No products available</Alert>
        </Box>
      )}
      <CardTotal />
    </Container>
  );
};

export default ProductsList;