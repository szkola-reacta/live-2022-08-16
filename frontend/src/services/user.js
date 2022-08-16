
import { api } from './config';

export const favorites = async () => {
  try {
    const response = await api.post('/favorites');

    return response.data;
  } catch {
    // log to Sentry

  }
}
