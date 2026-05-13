import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_COLLECTAPI_BASE,
  headers: {
    authorization: `apikey ${process.env.NEXT_PUBLIC_COLLECTAPI_KEY}`,
    'content-type': 'application/json',
  },
});

export default axiosInstance;
