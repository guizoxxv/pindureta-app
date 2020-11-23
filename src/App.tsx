import React from 'react';
import { AuthProvider } from './context/auth';
import { OrderProvider } from './context/order';
import { ProductProvider } from './context/product';
import { DialogProvider } from './context/dialog';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StylesProvider } from "@material-ui/core/styles";
import './style.css';

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
            <StylesProvider injectFirst>
              <Routes />
            </StylesProvider>
          </DialogProvider>
        </OrderProvider>
      </ProductProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
