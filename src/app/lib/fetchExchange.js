import axiosInstance from './axiosInstance';

export async function fetchExchangeData(int, to, base) {
  try {
    const response = await axiosInstance.get(`exchange?int=${int}&to=${to}&base=${base}`);
    return response;
  } catch (error) {
    console.error('Hata 💥:', error);
    return [];
  }
}
