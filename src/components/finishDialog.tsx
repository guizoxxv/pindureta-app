import React, { useContext } from 'react';
import {
  Dialog,
  DialogActions,
  Button,
  Box,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import { DialogContext } from '../context/dialog';
import { OrderContext } from '../context/order';

const FinishDialog: React.FC = () => {
  const dialogId = 'finish';
  const { setOrder } = useContext(OrderContext);
  const { close, isOpen } = useContext(DialogContext);

  const handleConfirm = () => {
    setOrder({});

    close(dialogId);
  }
  
  return (
    <Dialog
      open={isOpen[dialogId]}
      onClose={() => close(dialogId)}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <Box>
          
        </Box>
        <DialogContentText>
          You will be logged out in 5s
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <Button onClick={() => close(dialogId)} variant="contained" color="secondary">
            Cancel
          </Button>
          <Box mx={1}></Box>
          <Button onClick={handleConfirm} variant="contained" color="primary">
            OK
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default FinishDialog;