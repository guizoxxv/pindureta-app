import React, { useContext } from 'react';
import {
  Dialog,
  DialogActions,
  Button,
  DialogContent,
  IconButton,
  Box,
  Typography,
} from '@material-ui/core';
import { DialogContext } from '../../../context/dialog';
import QuantityRow from '../../../components/quantityRow';
import { OrderContext } from '../../../context/order';
import DeleteIcon from '@material-ui/icons/Delete';

const OrderTableMoreDialog: React.FC = () => {
  const dialogId = 'orderTableMore';
  const { isOpen, close } = useContext(DialogContext);
  const { removeItem } = useContext(OrderContext);
  const productId = 'ffeab1dd-302e-40ce-9c1b-77ba8d0ac86a';

  const getOrderItem = () => {
    //
  };

  const handleRemoveItem = () => {
    removeItem(productId);
    
    close(dialogId);
  }

  return (
    <Dialog
      onEntered={() => getOrderItem()}
      open={isOpen[dialogId]}
      onClose={() => close(dialogId)}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <Box textAlign="center" mb={1}>
          <Typography>Product Name</Typography>
        </Box>
        <QuantityRow productId={productId} />
        <Box textAlign="center">
          <IconButton onClick={handleRemoveItem} aria-label="remove">
            <DeleteIcon fontSize="large" />
          </IconButton>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => close(dialogId)}
          variant="contained"
          color="secondary"
          fullWidth
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderTableMoreDialog;