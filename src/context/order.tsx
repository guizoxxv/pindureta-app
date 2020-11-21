
import React, { createContext, useCallback, useContext, useState } from 'react';
import { appName } from '../config';
import Order from '../interfaces/order';
import { ProductContext } from './product';

interface OrderContextData {
  getQuantityRow(productId: string): number;
  increaseQuantity(productId: string): void;
  decreaseQuantity(productId: string): void;
  removeItem(productId: string): void;
  getTotal(): number;
  order: Order;
}

export const OrderContext = createContext<OrderContextData>({} as OrderContextData);

export const OrderProvider: React.FC = ({ children }) => {
  const { getProduct } = useContext(ProductContext);

  const [order, setOrder] = useState<Order>(() => {
    const orderFromStorage = localStorage.getItem(`@${appName}:order`);

    if (orderFromStorage) {
      return JSON.parse(orderFromStorage);
    }

    return {} as Order;
  });

  const getQuantityRow = useCallback((productId: string): number => {
    const orderItem = order[productId];

    if (orderItem) {
      return orderItem.quantity;
    }

    return 0;
  }, [order]);

  const increaseQuantity = useCallback((productId: string): void => {
    const orderItem = order[productId];

    if (orderItem) {
      setOrder({
        ...order,
        [productId]: {
          ...orderItem,
          quantity: orderItem.quantity + 1,
          total: orderItem.total + orderItem.price,
        }
      });
    } else {
      const product = getProduct(productId);

      if (!product) {
        throw Error('Invalid product id');
      }

      setOrder({
        ...order,
        [productId]: {
          ...product,
          quantity: 1,
          total: product.price,
        }
      });
    }
  }, [order]);

  const decreaseQuantity = useCallback((productId: string): void => {
    const orderItem = order[productId];

    if (orderItem) {
      if (orderItem.quantity > 1) {
        setOrder({
          ...order,
          [productId]: {
            ...orderItem,
            quantity: orderItem.quantity - 1,
            total: orderItem.total - orderItem.price,
          }
        });
      } else {
        removeItem(productId);
      }
    }
  }, [order]);

  const removeItem = useCallback((productId: string): void => {
    delete order[productId];
    
    setOrder({ ...order });
  }, [order]);

  const getTotal = useCallback((): number => {
    return Object.values(order).reduce((accumulator, currentValue) => {
      return accumulator + currentValue.total;
    }, 0);
  }, [order]);

  return (
    <OrderContext.Provider value={{
      getQuantityRow,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
      getTotal,
      order,
    }}>
      {children}
    </OrderContext.Provider>
  );
};