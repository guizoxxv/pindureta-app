import React, { useContext } from 'react';
import {
  Typography,
  Box,
  Container,
  Button,
} from '@material-ui/core';
import PaymentButtons from './components/paymentButtons';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { OrderContext } from '../../context/order';
import { Link } from 'react-router-dom';
import LogoutButton from '../../components/logoutButton';
import { Alert } from '@material-ui/lab';
import OrderTable from './components/orderTable';

const Card: React.FC = () => {
  const { getTotal } = useContext(OrderContext);
  
  return (
    <Container disableGutters>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
        <Typography variant="h5" component="h5">
          Cart 
        </Typography>
        <LogoutButton />
      </Box>
      <Box mb={3}>
        <Link to="/">
          <Button type="button" variant="contained" size="medium">
            <Box mr={0.5} display="flex" alignItems="center">
              <ArrowBackIcon />
            </Box>
            Return to list
          </Button>
        </Link>
      </Box>
      {getTotal() > 0 ? (
        <>
          <OrderTable />
          <Box my={2} textAlign="right">
            <Typography variant="h5" component="h5">
              Total: ${getTotal()}
            </Typography>
          </Box>
          <PaymentButtons />
        </>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography>
            <Alert severity="warning">Empty card</Alert>
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Card;