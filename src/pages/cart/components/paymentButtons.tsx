import React, { useContext } from 'react';
import { Box, Button } from '@material-ui/core';
import PayNowDialog from './payNowDialog';
import { DialogContext } from '../../../context/dialog';

const PaymentButtons: React.FC = () => {
  const { open } = useContext(DialogContext);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={8}>
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
        onClick={() => open('finish')}
      >
        Pay<br></br>Later
      </Button>
      <PayNowDialog />
    </Box>
  );
}

export default PaymentButtons;