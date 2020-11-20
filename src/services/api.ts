import axios from 'axios';
import Product from '../interfaces/product';
import productsData from '../data/products.json';
import LoginCredentials from '../interfaces/loginCredentials';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export async function logInRequest(credentials: LoginCredentials): Promise<void> {
  const response = await api.post('/login', {
    email: credentials.email,
    password: credentials.password,
  });
};

export async function getProducts(): Promise<Product[]> {
  // return await api.get('/products');
  return await productsData.data;
}