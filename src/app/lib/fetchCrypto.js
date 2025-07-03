import axios from 'axios';

export async function fetchCryptoData() {
  try {
    const response = await axios.get('api/crypto');
    return response;
  } catch (error) {
    console.error('Kripto verisi alınamadı:', error);
    return [];
  }
}
