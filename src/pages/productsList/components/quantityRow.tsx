import React from 'react';
import PlusIcon from '@material-ui/icons/AddBox';
import MinusIcon from '@material-ui/icons/IndeterminateCheckBox';
import { Box } from '@material-ui/core';

const QuantityRow: React.FC = () => (
  <Box display="flex" alignItems="center" justifyContent="center">
    <MinusIcon fontSize="large" />
    <Box mx={1}>
      10
    </Box>
    <PlusIcon fontSize="large" />
  </Box>
);

export default QuantityRow;