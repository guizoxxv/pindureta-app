import React from 'react';
import { AuthProvider } from './context/auth';
import { OrderProvider } from './context/order';
import { ProductProvider } from './context/product';
import { DialogProvider } from './context/dialog';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
});

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
