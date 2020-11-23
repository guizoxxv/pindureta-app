import React, { useContext } from 'react';
import {
  Dialog,
  DialogActions,
  Button,
  DialogContent,
  Box,
  Typography,
} from '@material-ui/core';
import { DialogContext } from '../../../context/dialog';
import QuantityRow from '../../../components/quantityRow';
import { OrderContext } from '../../../context/order';
import DeleteIcon from '@material-ui/icons/Delete';
import OrderItem from '../../../interfaces/orderItem';

interface OrderTableMoreDialogData {
  product: OrderItem;
}

const OrderTableMoreDialog: React.FC<OrderTableMoreDialogData> = ({ product }) => {
  const dialogId = 'orderTableMore';
  const { isOpen, close } = useContext(DialogContext);
  const { removeItem } = useContext(OrderContext);

  const handleRemoveItem = () => {
    removeItem(product.id);

    close(dialogId);
  }

  return (
    <Dialog
      open={isOpen[dialogId]}
      onClose={() => close(dialogId)}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent style={{paddingTop:'8px'}}>
        <Box textAlign="center">
          <Typography>{product.name}</Typography>
        </Box>
        <QuantityRow productId={product.id} />
        <Button
          onClick={handleRemoveItem}
          variant="contained"
          color="default"
          size="small"
          fullWidth
        >
          <DeleteIcon fontSize="large" />
          <Box ml={0.5}>
            Remove
          </Box>
        </Button>
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