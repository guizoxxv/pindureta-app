import React, { useContext, useEffect } from 'react';
import {
  Paper,
  Typography,
  Box,
  Container,
  Grid,
} from '@material-ui/core';
import CardTotal from './components/cardTotal';
import QuantityRow from '../../components/quantityRow';
import { ProductContext } from '../../context/product';
import LogoutButton from '../../components/logoutButton';
import { Alert } from '@material-ui/lab';
import { getProducts } from '../../services/api';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/auth';

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
        <Box style={{ marginBottom: '70px' }}>
          <Grid container spacing={2}>
            {products && products.map((product, key) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <Paper>
                  <Box p={3} textAlign="center">
                    <Typography variant="h6" component="h6" noWrap>
                      {product.name}
                    </Typography>
                    <Box my={2}>
                      <Typography>
                        ${product.price}
                      </Typography>
                    </Box>
                    <Box>
                      <QuantityRow productId={product._id} />
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
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