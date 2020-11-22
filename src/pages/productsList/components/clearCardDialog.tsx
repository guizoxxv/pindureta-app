import React, { useContext } from 'react';
import {
  Dialog,
  DialogActions,
  Button,
  DialogTitle,
  Box,
} from '@material-ui/core';
import { DialogContext } from '../../../context/dialog';
import { OrderContext } from '../../../context/order';

const ClearCardDialog: React.FC = () => {
  const dialogId = 'clearCard';
  const { clear } = useContext(OrderContext);
  const { close, isOpen } = useContext(DialogContext);

  const handleConfirm = () => {
    clear();

    close(dialogId);
  }
  
  return (
    <Dialog
      open={isOpen[dialogId]}
      onClose={() => close(dialogId)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle>
        Clear cart?
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => close(dialogId)} variant="contained" color="secondary">
          Cancel
        </Button>
        <Box mx={1}></Box>
        <Button onClick={handleConfirm} variant="contained" color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ClearCardDialog;