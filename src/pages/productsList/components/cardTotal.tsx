import { Button, Paper, Typography, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useContext } from 'react';
import { OrderContext } from '../../../context/order';
import { Link } from 'react-router-dom';
import GoToCartButton from './goToCartButton';

const CardTotal: React.FC = () => {
  const { getTotal } = useContext(OrderContext);

  return (
    <Paper
      square
      style={{
        position: 'fixed',
        boxSizing: 'border-box',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#bdbdbd',
        padding: '0.5rem 2rem',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Button type="button" variant="contained" color="secondary" size="large">
          <DeleteIcon />
          <Box ml={0.5}>
            Clear Cart
          </Box>
        </Button>
        <Box>
          <Typography component="span" style={{ marginRight: '2rem' }}>
            <b>Total:</b> ${getTotal()}
          </Typography>
          {getTotal() > 0 ? (
            <Link to="/cart">
              <GoToCartButton />
            </Link>
          ) : (
            <GoToCartButton disabled={true} />
          )}
        </Box>
      </Box>
    </Paper>
  );
};

export default CardTotal;