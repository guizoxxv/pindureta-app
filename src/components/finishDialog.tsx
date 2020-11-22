import React, { useContext, useRef, useState } from 'react';
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
  const { isOpen, close } = useContext(DialogContext);
  const { logout } = useContext(AuthContext);
  const [count, setCount] = useState<number>(5);

  const handleFinish = () => {
    logout();

    close(dialogId);
  };

  const handleContinue = () => {
    clear();

    window.location.href = '/';
  }

  const countRef = useRef(count);
  countRef.current = count;

  const startCountDown = () => {
    const interval = setInterval(() => {
      if (countRef.current > 0) {
        setCount(countRef.current - 1);
      } else {
        clearInterval(interval);

        handleFinish();
      }
    }, 1000);
  }

  return (
    <Dialog
      onEntered={() => startCountDown()}
      open={isOpen[dialogId]}
      onClose={handleFinish}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <Box mb={2} display="flex" alignItems="center" justifyContent="center">
          <CheckCircleIcon fontSize="large" style={{ color: '#4CAF50' }} />
          <Typography>Order received</Typography>
        </Box>
        <Box my={1}>
          <Typography>You'll be logged out in {count}s</Typography>
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