import { api } from './config';

export const login = async (user) => {
  try {
    const response = await api.post('/login', user);

    return response.data;
  } catch {
    // log to Sentry

  }
}
