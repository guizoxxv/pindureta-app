import { Button, Paper, Typography } from '@material-ui/core';
import React from 'react';

const CardTotal: React.FC = () => (
  <Paper
    square
    style={{
      position: 'fixed',
      bottom: 0,
      right: 0,
      width: '100%',
      backgroundColor: '#bdbdbd',
      padding: '0.5rem 2rem',
      textAlign: 'right',
    }}>
    <Typography component="span" style={{ marginRight: '2rem' }}>
      <b>Total:</b> $100.00
    </Typography>
    <Button variant="contained" color="primary" size="large">
      Pay
    </Button>
  </Paper>
);

export default CardTotal;