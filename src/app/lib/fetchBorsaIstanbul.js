import axiosInstance from './axiosInstance';

export async function fetchBorsaIstanbulData() {
  try {
    const response = await axiosInstance.get('borsaIstanbul');
    return response;
  } catch (error) {
    console.error('Borsa İstanbul verisi alınamadı:', error);
    return [];
  }
}
