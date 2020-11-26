import React, { useContext, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Box,
  FormHelperText,
  Typography,
} from '@material-ui/core';
import { DialogContext } from '../../../context/dialog';
import * as Yup from 'yup';
import { ValidationErrors, getValidationErrors } from '../../../utils/validationErrors';
import { OrderContext } from '../../../context/order';
import { payRequest } from '../../../services/api';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/auth';
import { flash } from '../../../utils/flash';

interface FormInputs extends ValidationErrors {
  value: string;
};

const PayNowDialog: React.FC = () => {
  const dialogId = 'payNow';
  const { logout, data } = useContext(AuthContext);
  const { isOpen, open, close } = useContext(DialogContext);
  const { order, getTotal } = useContext(OrderContext);
  const [value, setValue] = useState(getTotal());
  const [validationErrors, setValidationErrors] = useState<FormInputs | null>(null);

  const handlePay = async () => {
    try {
      const schema = Yup.object().shape({
        value: Yup.number().required().min(0),
      });

      await schema.validate({
        value,
      }, {
        abortEarly: false,
      });

      await payRequest(data.token, order, value);

      close(dialogId);

      open('finish');
    } catch(err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(err);
        setValidationErrors(validationErrors as FormInputs);
      }

      if (err.response.status === 403) {
        flash({
          level: 'error',
          message: 'Session expired',
        });

        logout();
        
        return;
      }

      toast.error('Payment failed');
    }
  }

  const setValueHandler = (value: number) => {
    if (validationErrors?.total) {
     setValidationErrors({ ...validationErrors, value: '' }); 
    }

    setValue(value);
  }

  return (
    <Dialog
      open={isOpen[dialogId]}
      onClose={() => close(dialogId)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Pay Now</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Inform the value you are paying now
        </DialogContentText>
        <Box my={1}>
          <Typography>
            Total: ${getTotal()}
          </Typography>
        </Box>
        <Box mb={1}>
          <TextField
            margin="dense"
            label="Value"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={value}
            onChange={e => setValueHandler(parseInt(e.target.value))}
            error={Boolean(validationErrors?.total)}
            autoFocus
            fullWidth
          />
          {validationErrors?.total && (
            <FormHelperText error={true}>
              {validationErrors.total}
            </FormHelperText>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <Button onClick={() => close(dialogId)} variant="contained" color="secondary">
            Cancel
          </Button>
          <Box mx={1}></Box>
          <Button onClick={handlePay} variant="contained" color="primary">
            Pay
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default PayNowDialog;