import axios from 'axios';

import { API_BASE_URL } from './config';

export const favorites = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/favorites`);

    return response.data;
  } catch {
    // log to Sentry

  }
}
