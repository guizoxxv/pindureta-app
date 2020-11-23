import React, { useContext } from 'react';
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

const ProductsList: React.FC = () => {
  const { products } = useContext(ProductContext);

  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h5" component="h5">
          Products
        </Typography>
        <LogoutButton />
      </Box>
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
                    <QuantityRow productId={product.id} />
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <CardTotal />
    </Container>
  );
};

export default ProductsList;