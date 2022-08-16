import Cookies from 'js-cookie'

import { api } from './config';

export const favorites = async () => {
  try {
    const token = Cookies.get('accessToken');
    const response = await api.post('/favorites', { token }); // { token: 'value' } 

    // axios interceptors

    return response.data;
  } catch {
    // log to Sentry

    await api.post('/refresh');
    
  }
}
