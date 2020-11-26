import React, { useContext } from 'react';
import { Box, Button } from '@material-ui/core';
import PayNowDialog from './payNowDialog';
import { DialogContext } from '../../../context/dialog';
import FinishDialog from '../../../components/finishDialog';
import { OrderContext } from '../../../context/order';
import { AuthContext } from '../../../context/auth';
import { payRequest } from '../../../services/api';
import { toast } from 'react-toastify';
import { flash } from '../../../utils/flash';

const PaymentButtons: React.FC = () => {
  const { open } = useContext(DialogContext);
  const { order } = useContext(OrderContext);
  const { data, logout } = useContext(AuthContext);

  const handlePay = async () => {
    try {
      await payRequest(data.token, order);

      open('finish');
    } catch (err) {
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

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" mt={5}>
        <Button
          type="button"
          variant="contained"
          size="large"
          color="primary"
          style={{ marginRight:'2rem' }}
          onClick={() => open('payNow')}
        >
          Pay<br></br>Now
        </Button>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={() => handlePay()}
        >
          Pay<br></br>Later
        </Button>
      </Box>
      <PayNowDialog />
      <FinishDialog />
    </>
  );
}

export default PaymentButtons;