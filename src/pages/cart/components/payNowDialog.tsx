import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from '@material-ui/core';

const PayNowDialog: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Pay Now</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Inform the value you are paying now
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Value"
          type="number"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Pay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PayNowDialog;