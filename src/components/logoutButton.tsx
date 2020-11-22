import React, { useContext } from 'react';
import { Box, Button } from '@material-ui/core';
import LogoutDialog from './logoutDialog';
import { DialogContext } from '../context/dialog';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const LogoutButton: React.FC = () => {
  const { open } = useContext(DialogContext);

  return (
    <>
      <Button
        type="button"
        variant="outlined"
        color="secondary"
        onClick={() => open('logout')}
      >
        <ExitToAppIcon />
        <Box ml={0.5}>
          Logout
        </Box>
      </Button>
      <LogoutDialog />
    </>
  );
};

export default LogoutButton;