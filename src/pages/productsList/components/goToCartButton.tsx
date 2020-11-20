import React from 'react';
import { Button, Box } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

interface GoToCartButtonData {
  disabled?: boolean;
}

const GoToCartButton: React.FC<GoToCartButtonData> = ({ disabled }) => (
  <Button type="button" variant="contained" color="primary" size="large" disabled={disabled}>
    <ShoppingCartIcon />
    <Box ml={0.5}>
      Go to Cart
    </Box>
  </Button>
);

export default GoToCartButton;