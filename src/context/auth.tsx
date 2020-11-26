
import React, { createContext, useCallback, useState } from 'react';
import { loginRequest } from '../services/api';
import LoginCredentials from '../interfaces/loginCredentials';
import { appName, flashMessageStorageId } from '../config';

interface AuthData {
  user: object;
  token: string;
}

interface AuthContextData {
  data: AuthData,
  login(credentials: LoginCredentials): Promise<void>,
  logout(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const user = localStorage.getItem(`@${appName}:user`);
    const token = localStorage.getItem(`@${appName}:userToken`);

    if (user && token) {
      return {
        user: JSON.parse(user),
        token,
      }
    }

    return {} as AuthData;
  });

  const login = useCallback(async (credentials: LoginCredentials) => {
    const { user, token } = await loginRequest(credentials);

    localStorage.setItem(`@${appName}:user`, JSON.stringify(user));
    localStorage.setItem(`@${appName}:userToken`, token);

    setData({
      user,
      token,
    });
  }, []);

  const logout = useCallback((): void => {
    Object.entries(localStorage)
      .map(item => item[0])
      .filter(item => item.startsWith(`@${appName}:`) && item !== flashMessageStorageId)
      .map(item => localStorage.removeItem(item));

    window.location.href = '/login';
  }, []);

  return (
    <AuthContext.Provider value={{
      data,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};