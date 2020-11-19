import { Button, Paper, Typography, Box } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';

const CardTotal: React.FC = () => (
  <Paper
    square
    style={{
      position: 'fixed',
      bottom: 0,
      right: 0,
      width: '100%',
      backgroundColor: '#bdbdbd',
      padding: '0.5rem 2rem',
      textAlign: 'right',
    }}>
    <Typography component="span" style={{ marginRight: '2rem' }}>
      <b>Total:</b> $100.00
    </Typography>
    <Button href="/cart" variant="contained" color="primary" size="large">
      <ShoppingCartIcon />
      <Box ml={0.5}>
        Go to Cart
      </Box>
    </Button>
  </Paper>
);

export default CardTotal;