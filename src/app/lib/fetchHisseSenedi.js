import axiosInstance from './axiosInstance';

export async function fetchHisseSenediData() {
  try {
    const response = await axiosInstance.get('hisseSenedi');
    return response;
  } catch (error) {
    console.error('Hisse Senedi verisi alınamadı:', error);
    return [];
  }
}
