
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react';
import { toast } from 'react-toastify';
import Product from '../interfaces/product';
import { getProducts } from '../services/api';

interface ProductContextData {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>
  getProduct(productId: string): (Product | undefined);
}

export const ProductContext = createContext<ProductContextData>({} as ProductContextData);

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect((): void => {
    getProducts()
      .then(res => {
        setProducts(res);
      })
      .catch(e => {
        toast.error('Error fetching products list');
      });
  }, []);

  const getProduct = useCallback((productId: string): (Product | undefined) => {
    return products.find(product => product._id === productId);
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, setProducts, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};