import axios from 'axios';

import { env } from '@/utils/env';

const instance = axios.create({
  baseURL: env.baseURL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => config,
  async (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    Promise.reject(error);
  }
);

export const requester = instance;
export default instance;
