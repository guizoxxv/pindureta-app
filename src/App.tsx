import React from 'react';
import { AuthProvider } from './context/auth';
import { OrderProvider } from './context/order';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './context/product';
import './style.css';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <ProductProvider>
        <OrderProvider>
          <Routes />
        </OrderProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
