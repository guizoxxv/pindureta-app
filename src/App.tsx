import React from 'react';
import { AuthProvider } from './context/auth';
import { OrderProvider } from './context/order';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <OrderProvider>
        <Routes />
      </OrderProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
