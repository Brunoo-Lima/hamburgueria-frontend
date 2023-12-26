import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import { TokenError } from './errors/TokenError';
import { signOut } from '@/contexts/AuthContext';

export function setupAPIClient(context = undefined) {
  let cookies = parseCookies(context);

  const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
      Authorization: `Bearer ${cookies['@hamburgueria.token']}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (typeof window !== undefined) {
          signOut();
        } else {
          return Promise.reject(new TokenError());
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
}
