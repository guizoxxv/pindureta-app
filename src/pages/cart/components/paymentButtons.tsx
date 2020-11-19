import React from 'react';
import { Box, Button } from '@material-ui/core';
import PayNowDialog from './payNowDialog';

const PaymentButtons: React.FC = () => (
  <Box display="flex" alignItems="center" justifyContent="center" mt={8}>
    <Button variant="contained" size="large" color="primary" style={{marginRight:'2rem'}}>
      Pay<br></br>Now
    </Button>
    <Button variant="contained" size="large" color="secondary">
      Pay<br></br>Later
    </Button>
    <PayNowDialog />
  </Box>
);

export default PaymentButtons;