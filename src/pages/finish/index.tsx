import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const Finish: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.content} display="flex" alignItems="center" justifyContent="center">
      <Button variant="contained" size="large" color="primary" style={{marginRight:'2rem'}}>
        Finish
      </Button>
      <Button variant="contained" size="large" color="secondary">
        Return 
      </Button>
    </Box>
  );
}

export default Finish;