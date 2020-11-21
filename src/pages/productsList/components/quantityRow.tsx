import React, { useContext } from 'react';
import PlusIcon from '@material-ui/icons/AddBox';
import MinusIcon from '@material-ui/icons/IndeterminateCheckBox';
import { Box, IconButton } from '@material-ui/core';
import { OrderContext } from '../../../context/order';

interface QuantityRowData {
  productId: string;
}

const QuantityRow: React.FC<QuantityRowData> = ({ productId }) => {
  const {
    getQuantityRow,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(OrderContext);

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <IconButton onClick={() => decreaseQuantity(productId)} aria-label="decrease quantity">
        <MinusIcon fontSize="large" />
      </IconButton>
      <Box mx={1}>
        {getQuantityRow(productId)}
      </Box>
      <IconButton onClick={() => increaseQuantity(productId)} aria-label="increase quantify">
        <PlusIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default QuantityRow;