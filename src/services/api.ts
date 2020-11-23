import axios from 'axios';
import Product from '../interfaces/product';
import LoginCredentials from '../interfaces/loginCredentials';
import { apiBaseURL } from '../config';

interface LoginResponse {
  user: object;
  token: string;
}

const api = axios.create({
  baseURL: apiBaseURL,
});

export async function loginRequest(credentials: LoginCredentials): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/login', {
    email: credentials.email,
    password: credentials.password,
  });

  return response.data;
};

export async function getProducts(): Promise<Product[]> {
  const response = await api.get('/products');
  
  return response.data;
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