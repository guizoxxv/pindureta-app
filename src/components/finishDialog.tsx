import React, { useContext } from 'react';
import {
  Dialog,
  DialogActions,
  Button,
  Box,
  DialogContent,
  Typography,
} from '@material-ui/core';
import { DialogContext } from '../context/dialog';
import { AuthContext } from '../context/auth';
import { OrderContext } from '../context/order';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const FinishDialog: React.FC = () => {
  const dialogId = 'finish';
  const { clear } = useContext(OrderContext);
  const { close, isOpen } = useContext(DialogContext);
  const { logout } = useContext(AuthContext);

  const handleFinish = () => {
    logout();
  };

  const handleContinue = () => {
    clear();

    window.location.href = '/';
  }

  return (
    <Dialog
      open={isOpen[dialogId]}
      onClose={() => close(dialogId)}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <Box mb={2} display="flex" alignItems="center" justifyContent="center">
          <CheckCircleIcon fontSize="large" style={{ color: '#4CAF50' }} />
          <Typography>Order received</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <Button onClick={handleContinue} variant="contained" color="secondary">
            Continue
          </Button>
          <Box mx={1}></Box>
          <Button onClick={handleFinish} variant="contained" color="primary">
            Finish
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default FinishDialog;