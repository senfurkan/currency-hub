import axiosInstance from './axiosInstance';

export async function fetchEmtiaData() {
  try {
    const response = await axiosInstance.get('emtia');
    return response;
  } catch (error) {
    console.error('Emtia verisi alınamadı:', error);
    return [];
  }
}
