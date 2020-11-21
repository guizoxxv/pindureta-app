import axios from 'axios';
import Product from '../interfaces/product';
import productsData from '../data/products.json';
import LoginCredentials from '../interfaces/loginCredentials';

interface LoginResponse {
  user: object;
  token: string;
}

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export async function loginRequest(credentials: LoginCredentials): Promise<LoginResponse> {
  try {
    const response = await api.post<LoginResponse>('/login', {
      email: credentials.email,
      password: credentials.password,
    });

    return response.data;
  } catch (e) {
    throw e;
  }
};

export function getProducts(): Product[] {
  // return await api.get('/products');
  return productsData.data;
}

export async function payRequest(value: number): Promise<void> {
  try {
    await api.post('/pay', {
      value,
    });
  } catch (e) {
    throw e;
  }
}