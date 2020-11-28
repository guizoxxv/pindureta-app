import React, { useContext } from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import QuantityRow from '../../../components/quantityRow';
import Product from '../../../interfaces/product';
import { OrderContext } from '../../../context/order';

interface ProductsGridData {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridData> = ({ products }) => {
  const { hasProduct } = useContext(OrderContext);

  return (
    <Box style={{ marginBottom: '70px' }}>
      <Grid container spacing={2}>
        {products && products.map((product, key) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <Paper
              elevation={3}
              style={
                hasProduct(product._id)
                ? { backgroundColor: '#90ee90' }
                : {}
              }>
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
  );
}

export default ProductsGrid;