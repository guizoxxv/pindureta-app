import { Button, Paper, Typography, Box } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useContext } from 'react';
import { OrderContext } from '../../../context/order';

const CardTotal: React.FC = () => {
  const { getTotal } = useContext(OrderContext);

  return (
    <Paper
      square
      style={{
        position: 'fixed',
        boxSizing: 'border-box',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#bdbdbd',
        padding: '0.5rem 2rem',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Button type="button" variant="contained" color="secondary" size="large">
          Clear cart
        </Button>
        <Box>
          <Typography component="span" style={{ marginRight: '2rem' }}>
            <b>Total:</b> ${getTotal()}
          </Typography>
          <Button href="/cart" variant="contained" color="primary" size="large">
            <ShoppingCartIcon />
            <Box ml={0.5}>
              Go to Cart
            </Box>
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default CardTotal;