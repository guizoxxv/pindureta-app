import React, { FormEvent, useContext, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  FormHelperText,
  Container,
  makeStyles,
} from '@material-ui/core';
import * as Yup from 'yup';
import { ValidationErrors, getValidationErrors } from '../../utils/validationErrors';
import { AuthContext } from '../../context/auth'; 
import LoginCredentials from '../../interfaces/loginCredentials';

interface FormInputs extends LoginCredentials, ValidationErrors {};

const useStyles = makeStyles({
  card: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  cardContent: {
    padding: '1.5rem',
    width: '300px',
  }
});

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState<FormInputs | null>(null);
  const classes = useStyles();
  const { login } = useContext(AuthContext); 
  
  // Transformar em useCallback
  async function handleLogin(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {
      const schema = Yup.object().shape({
        email: Yup.string().required().email(),
        password: Yup.string().required(),
      });

      await schema.validate({
        email,
        password,
      }, {
        abortEarly: false,
      });

      login({
        email,
        password,
      });
    } catch(err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors = getValidationErrors(err);
        setValidationErrors(validationErrors as FormInputs);
      }
      
      // Open toast
    }
  }

  function setEmailHandler(value: string) {
    if (validationErrors?.email) {
     setValidationErrors({ ...validationErrors, email: '' }); 
    }

    setEmail(value);
  }

  function setPasswordHandler(value: string) {
    if (validationErrors?.password) {
     setValidationErrors({ ...validationErrors, password: '' }); 
    }

    setPassword(value);
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" component="h5" align="center">
        Pindureta
      </Typography>
      <Card className={classes.card} variant="outlined">
        <CardContent className={classes.cardContent}>
          <form onSubmit={handleLogin}>
            <div>
              <TextField
                label="E-mail"
                type="email"
                variant="outlined"
                value={email}
                onChange={e => setEmailHandler(e.target.value)}
                error={Boolean(validationErrors?.email)}
                fullWidth
              />
              {validationErrors?.email && (
                <FormHelperText error={true}>
                  {validationErrors.email}
                </FormHelperText>
              )}
            </div>
            <Box mt={2}>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={e => setPasswordHandler(e.target.value)}
                error={Boolean(validationErrors?.password)}
                fullWidth
              />
              {validationErrors?.password && (
                <FormHelperText error={true}>
                  {validationErrors.password}
                </FormHelperText>
              )}
            </Box>
            <Box mt={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;