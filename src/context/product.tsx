
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useState
} from 'react';
import Product from '../interfaces/product';

interface ProductContextData {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>
  getProduct(productId: string): (Product | undefined);
}

export const ProductContext = createContext<ProductContextData>({} as ProductContextData);

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProduct = useCallback((productId: string): (Product | undefined) => {
    return products.find(product => product._id === productId);
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, setProducts, getProduct }}>
      {children}
    </ProductContext.Provider>
  );
};