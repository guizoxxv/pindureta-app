import axios from 'axios';
import Product from '../interfaces/product';
import LoginCredentials from '../interfaces/loginCredentials';
import { apiBaseURL } from '../config';
import Order from '../interfaces/order';

interface LoginResponse {
  user: object;
  token: string;
}

const api = axios.create({
  baseURL: apiBaseURL,
});

export async function loginRequest(credentials: LoginCredentials): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/auth/login', {
    email: credentials.email,
    password: credentials.password,
  });

  return response.data;
};

export async function getProducts(token: string): Promise<Product[]> {
  const response = await api.get(
    '/products',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
}

export async function payRequest(
  token: string,
  order: Order,
  value?: number,
): Promise<void> {
  await api.post(
    '/orders',
    {
      items: Object.values(order),
      value,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
  );
}