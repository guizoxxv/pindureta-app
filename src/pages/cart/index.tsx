import React from 'react';
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

const Card: React.FC = () => {
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h4" component="h4">
          Cart 
        </Typography>
        <Button href="/" variant="contained" size="medium">
          <Box mr={1} display="flex" alignItems="center">
            <ArrowBackIcon />
          </Box>
          Return to list
        </Button>
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
            <TableRow>
              <TableCell component="th" scope="row">
                <Box display="flex" alignItems="center">
                  <IconButton aria-label="remove">
                    <DeleteIcon fontSize="large" />
                  </IconButton>
                  <Box ml={2}>
                    Produto 1
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="center">10</TableCell>
              <TableCell align="center">
                <QuantityRow />
              </TableCell>
              <TableCell align="center">100</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <PaymentButtons />
    </Container>
  );
};

export default Card;