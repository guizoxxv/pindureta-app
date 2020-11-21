import { Button, Paper, Typography, Box, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useContext } from 'react';
import { OrderContext } from '../../../context/order';
import { Link } from 'react-router-dom';
import GoToCartButton from './goToCartButton';
import ClearCardConfirmDialog from './clearCardConfirmDialog';
import { DialogContext } from '../../../context/dialog';

const useStyles = makeStyles({
  paper: {
    position: 'fixed',
    boxSizing: 'border-box',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#bdbdbd',
    padding: '0.5rem 2rem',
  }
});

const CardTotal: React.FC = () => {
  const { getTotal } = useContext(OrderContext);
  const { open } = useContext(DialogContext);
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} square>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button
            type="button"
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => open('clearCardConfirm')}
          >
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
      <ClearCardConfirmDialog />
    </>
  );
};

export default CardTotal;