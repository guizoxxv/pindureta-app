import React, { useContext, useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Box,
  Container,
  Button,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import QuantityRow from '../productsList/components/quantityRow';
import PaymentButtons from './components/paymentButtons';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { OrderContext } from '../../context/order';
import { Link } from 'react-router-dom';
import FinishDialog from '../../components/finishDialog';
import { appName } from '../../config';

const Card: React.FC = () => {
  const { order, removeItem, getTotal } = useContext(OrderContext);
  
  useEffect((): void => {
    localStorage.setItem(`@${appName}:order`, JSON.stringify(order));
  }, []);

  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h4" component="h4">
          Cart 
        </Typography>
        <Link to="/">
          <Button type="button" variant="contained" size="medium">
            <Box mr={1} display="flex" alignItems="center">
              <ArrowBackIcon />
            </Box>
            Return to list
          </Button>
        </Link>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="center">Price ($)</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Total ($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(order).map(item => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  <Box display="flex" alignItems="center">
                    <IconButton onClick={() => removeItem(item.id)} aria-label="remove">
                      <DeleteIcon fontSize="large" />
                    </IconButton>
                    <Box ml={2}>
                      {item.name}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="center">
                  <QuantityRow productId={item.id} />
                </TableCell>
                <TableCell align="center">{item.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box my={3} textAlign="right">
        <Typography variant="h5" component="h5">
          Total: ${getTotal()}
        </Typography>
      </Box>
      {getTotal() > 0 && (
        <PaymentButtons />
      )}
      <FinishDialog />
    </Container>
  );
};

export default Card;