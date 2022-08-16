import Cookies from 'js-cookie'

import { api } from './config';

export const login = async (user) => {
  try {
    const response = await api.post('/login', user);

    const { accessToken, refreshToken } = response.data;

    // accessToken - cookie
    Cookies.set('accessToken', accessToken);

    // refreshToken - localStorage
    localStorage.setItem('refreshToken', refreshToken);

    return response.data;
  } catch {
    // log to Sentry

  }
}
