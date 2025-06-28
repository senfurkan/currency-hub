import axiosInstance from './axiosInstance';

export async function fetchCryptoData() {
  try {
    const response = await axiosInstance.get('cripto');
    return response;
  } catch (error) {
    console.error('Kripto verisi alınamadı:', error);
    return [];
  }
}
