import axiosInstance from './axiosInstance';

export async function fetchCurrencyData() {
  try {
    const response = await axiosInstance.get('allCurrency');
    return response;
  } catch (error) {
    console.error('Döviz verisi alınamadı:', error);
    return [];
  }
}
