import React from 'react';
import { AuthProvider } from './context/auth';
import { OrderProvider } from './context/order';
import { ProductProvider } from './context/product';
import { DialogProvider } from './context/dialog';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <OrderProvider>
          <DialogProvider>
            <Routes />
          </DialogProvider>
        </OrderProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
