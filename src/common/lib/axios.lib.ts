import axios, { AxiosInstance } from 'axios';

export const httpConnector: AxiosInstance = axios.create({
  baseURL: '/api',
});
