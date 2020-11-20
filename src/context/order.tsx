
import React, { createContext, useCallback, useState } from 'react';
import { appName } from '../config';
import OrderItem from '../interfaces/orderItem';

interface OrderContextData {
  getQuantityRow(productId: string): number;
  increaseQuantity(productId: string): void;
  decreaseQuantity(productId: string): void;
  removeItem(productId: string): void;
}

export const OrderContext = createContext<OrderContextData>({} as OrderContextData);

export const OrderProvider: React.FC = ({ children }) => {
  const [order, setOrder] = useState<OrderItem[]>(() => {
    const orderFromStorage = localStorage.getItem(`@${appName}:order`);

    if (orderFromStorage) {
      return JSON.parse(orderFromStorage);
    } 

    return []; 
  });

  const getQuantityRow = useCallback((productId: string): number => {
    const orderItem = order.find(orderItem => orderItem.id === productId);

    if (orderItem) {
      return orderItem.quantity;
    }

    return 0;
  }, [order]);

  const increaseQuantity = useCallback((productId: string): void => {
    const orderItem = order.find(orderItem => orderItem.id === productId);

    if (orderItem) {
      const newOrder = order.map(item => {
        if (item.id === orderItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }

        return item;
      });

      setOrder(newOrder);
    } else {
      setOrder([
        ...order,
        {
          id: productId,
          name: 'Product name',
          price: 10,
          quantity: 1,
          total: 10,
        }
      ]);
    }
  }, [order]);

  const decreaseQuantity = useCallback((productId: string): void => {
    console.log('decreaseQuantity');
  }, []);

  const removeItem = useCallback((productId: string): void => {
    console.log('removeItem');
  }, []);

  return (
    <OrderContext.Provider value={{
      getQuantityRow,
      increaseQuantity,
      decreaseQuantity,
      removeItem
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;