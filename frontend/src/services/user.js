
import { api } from './config';

export const favorites = async (token) => {
  try {
    const response = await api.post('/favorites', { "costam": 'sdfsdf' }); // { token: 'value' } 

    return response.data;
  } catch {
    // log to Sentry

  }
}
