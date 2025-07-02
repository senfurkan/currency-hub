import axiosInstance from './axiosInstance';

export async function fetchSymbolsData() {
  try {
    const response = await axiosInstance.get('symbols');
    return response;
  } catch (error) {
    console.error('Sembol verileri alınamadı:', error);
    return [];
  }
}
