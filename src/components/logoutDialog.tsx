import React, { useContext } from 'react';
import {
  Dialog,
  DialogActions,
  Button,
  DialogTitle,
  Box,
} from '@material-ui/core';
import { DialogContext } from '../context/dialog';
import { AuthContext } from '../context/auth';

const LogoutDialog: React.FC = () => {
  const dialogId = 'logout';
  const { close, isOpen } = useContext(DialogContext);
  const { logout } = useContext(AuthContext);

  const handleConfirm = () => {
    logout();

    close(dialogId);
  }
  
  return (
    <Dialog
      open={isOpen[dialogId]}
      onClose={() => close(dialogId)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle>
        Logout?
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

export default LogoutDialog;