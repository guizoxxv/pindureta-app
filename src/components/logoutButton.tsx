import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import LogoutDialog from './logoutDialog';
import { DialogContext } from '../context/dialog';

const LogoutButton: React.FC = () => {
  const { open } = useContext(DialogContext);

  return (
    <>
      <Button
        type="button"
        variant="outlined"
        color="default"
        onClick={() => open('logout')}
      >
        Logout
      </Button>
      <LogoutDialog />
    </>
  );
};

export default LogoutButton;