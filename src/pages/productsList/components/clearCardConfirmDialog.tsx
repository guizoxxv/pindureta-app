import React, { useContext } from 'react';
import {
  Dialog,
  DialogActions,
  Button,
  DialogTitle,
} from '@material-ui/core';
import { DialogContext } from '../../../context/dialog';

const ClearCardConfirmDialog: React.FC = () => {
  const dialogId = 'clearCardConfirm';
  const { close, isOpen } = useContext(DialogContext);
  
  return (
    <Dialog open={isOpen[dialogId]} onClose={() => close(dialogId)} aria-labelledby="form-dialog-title">
      <DialogTitle>
        Clear cart?
      </DialogTitle>
      <DialogActions>
        <Button onClick={() => close(dialogId)} color="secondary">
          Cancel
        </Button>
        <Button onClick={() => close(dialogId)} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ClearCardConfirmDialog;