import React, { useContext, useEffect, useState } from 'react';
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
  IconButton,
} from '@material-ui/core';
import { appName } from '../../../config';
import { OrderContext } from '../../../context/order';
import DeleteIcon from '@material-ui/icons/Delete';
import QuantityRow from '../../../components/quantityRow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { DialogContext } from '../../../context/dialog';
import OrderTableMoreDialog from './orderTableMoreDialog';
import OrderItem from '../../../interfaces/orderItem';

const OrderTable: React.FC = () => {
  const { order, removeItem } = useContext(OrderContext);
  const { open } = useContext(DialogContext);
  const isMobile = true;
  const [selectedItem, setSelectedItem] = useState<OrderItem>({} as OrderItem);
  
  useEffect((): void => {
    localStorage.setItem(`@${appName}:order`, JSON.stringify(order));
  }, [order]);

  const handleOpenOrderTableMoreDialog = (product: OrderItem): void => {
    setSelectedItem(product);
    
    open('orderTableMore');
  }

  return (
    <TableContainer component={Paper}>
      {isMobile ? (
        <>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="center">
                  <Typography>Total</Typography>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(order).map(item => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    <Typography>{item.name}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>
                      ${item.price} x {item.quantity} = ${item.total}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton aria-label="more">
                      <MoreVertIcon onClick={() => handleOpenOrderTableMoreDialog(item)} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <OrderTableMoreDialog product={selectedItem} />
        </>
      ) : (
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="center"><Typography noWrap>Price ($)</Typography></TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center"><Typography noWrap>Total ($)</Typography></TableCell>
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
                    <Box ml={0.5}>
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
      )}
    </TableContainer>
  )
};

export default OrderTable;