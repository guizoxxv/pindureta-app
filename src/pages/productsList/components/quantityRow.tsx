import React from 'react';
import PlusIcon from '@material-ui/icons/AddBox';
import MinusIcon from '@material-ui/icons/IndeterminateCheckBox';
import { Box, IconButton } from '@material-ui/core';

interface QuantityRowData {
  quantity: number;
}

const QuantityRow: React.FC<QuantityRowData> = (props: QuantityRowData) => (
  <Box display="flex" alignItems="center" justifyContent="center">
    <IconButton aria-label="decrease quantity">
      <MinusIcon fontSize="large" />
    </IconButton>
    <Box mx={1}>
      {props.quantity}
    </Box>
    <IconButton aria-label="increase quantify">
      <PlusIcon fontSize="large" />
    </IconButton>
  </Box>
);

export default QuantityRow;