import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const login = async (user) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, user);

    return response.data;
  } catch {
    // log to Sentry

  }
}
