import React from 'react';
import { AuthProvider } from './context/auth';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </BrowserRouter>
);

export default App;
