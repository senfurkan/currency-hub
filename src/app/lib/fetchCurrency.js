import axios from 'axios';

export async function fetchCurrencyData() {
  try {
    const response = await axios.get('api/currency');
    return response;
  } catch (error) {
    console.error('Döviz verisi alınamadı:', error);
    return [];
  }
}
