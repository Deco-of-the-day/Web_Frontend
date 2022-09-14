import axios from 'axios';

const server = 'http://localhost:7001';

const api = {
  async get(endpoint: string, param: any) {
    try {
      const params = param;
      const res = await axios.get(`${server}${endpoint}`, params);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(`ERROR: ${error.response?.data}`);
        return false;
      }
      throw new Error('different error than axios');
    }
  },
  async post(endpoint: string, param: any) {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    try {
      const params = new URLSearchParams(param);
      const res = await axios.post(`${server}${endpoint}`, params, { headers });
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(`ERROR: ${error.response?.data}`);
        return false;
      }
      throw new Error('different error than axios');
    }
  },
};

export default api;
