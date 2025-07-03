import axios from 'axios';
import axiosInstance from './axiosInstance';

export async function fetchBorsaIstanbulData() {
  try {
    const response = await axios.get('api/borsaIstanbul');
    return response;
  } catch (error) {
    console.error('Borsa İstanbul verisi alınamadı:', error);
    return [];
  }
}
