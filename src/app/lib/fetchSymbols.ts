import axios from 'axios';

export async function fetchSymbolsData() {
  try {
    const response = await axios.get('api/symbols');
    return response;
  } catch (error: unknown) {
    console.error('Sembol verileri alinamadi:', error);
    return [];
  }
}
