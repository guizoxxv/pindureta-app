import React from 'react';
import { AuthProvider } from './context/auth';
import { AppProvider } from './context/app';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </AppProvider>
  </BrowserRouter>
);

export default App;
