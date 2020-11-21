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

interface FormInputs extends ValidationErrors {
  total: string;
};

const PayNowDialog: React.FC = () => {
  const dialogId = 'payNow';
  const { isOpen, open, close } = useContext(DialogContext);
  const { getTotal } = useContext(OrderContext);
  const [total, setTotal] = useState(getTotal());
  const [validationErrors, setValidationErrors] = useState<FormInputs | null>(null);

  const handlePay = async () => {
    try {
      const schema = Yup.object().shape({
        total: Yup.number().required().min(0),
      });

      await schema.validate({
        total,
      }, {
        abortEarly: false,
      });

      // Post to API
      // await payRequest(total);

      close(dialogId);

      open('finish');
    } catch(err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(err);
        setValidationErrors(validationErrors as FormInputs);
      }

      // Open toast
    }
  }

  const setTotalHandler = (value: number) => {
    if (validationErrors?.total) {
     setValidationErrors({ ...validationErrors, total: '' }); 
    }

    setTotal(value);
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
        <div>
          <TextField
            margin="dense"
            label="Value"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            value={total}
            onChange={e => setTotalHandler(parseInt(e.target.value))}
            error={Boolean(validationErrors?.total)}
            autoFocus
            fullWidth
          />
          {validationErrors?.total && (
            <FormHelperText error={true}>
              {validationErrors.total}
            </FormHelperText>
          )}
        </div>
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