import axiosInstance from './axiosInstance';

export async function fetchGoldData() {
  try {
    const response = await axiosInstance.get('goldPrice');
    return response;
  } catch (error) {
    console.error('Altın verisi alınamadı:', error);
    return [];
  }
}
