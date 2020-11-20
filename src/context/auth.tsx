
import React, { createContext, useCallback } from 'react';
import { logInRequest } from '../services/api';
import LoginCredentials from '../interfaces/loginCredentials';

interface AuthContextData {
  logIn(credentials: LoginCredentials): Promise<void>,
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const logIn = useCallback(async (credentials: LoginCredentials) => {
    const response = logInRequest(credentials);
  }, []);

  return (
    <AuthContext.Provider value={{ logIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;