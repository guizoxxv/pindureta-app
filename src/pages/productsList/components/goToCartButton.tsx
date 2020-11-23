import React from 'react';
import { Button, Box, Hidden } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

interface GoToCartButtonData {
  disabled?: boolean;
}

const GoToCartButton: React.FC<GoToCartButtonData> = ({ disabled }) => {
  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      size="large"
      disabled={disabled}
    >
      <ShoppingCartIcon />
      <Hidden xsDown>
        <Box ml={0.5}>
          Go to Cart
        </Box>
      </Hidden>
    </Button>
  );
};

export default GoToCartButton;