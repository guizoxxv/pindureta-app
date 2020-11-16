import React from 'react';
import PlusIcon from '@material-ui/icons/AddBox';
import MinusIcon from '@material-ui/icons/IndeterminateCheckBox';

const RowActions: React.FC = () => (
  <div>
    <PlusIcon fontSize="large" />
    <MinusIcon fontSize="large" />
  </div>
);

export default RowActions;