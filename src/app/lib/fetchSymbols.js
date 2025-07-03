import axios from 'axios';

export async function fetchSymbolsData() {
  try {
    const response = await axios.get('api/symbols');
    return response;
  } catch (error) {
    console.error('Sembol verileri alınamadı:', error);
    return [];
  }
}
