import axios from 'axios';

export async function fetchEmtiaData() {
  try {
    const response = await axios.get('api/emtia');
    return response;
  } catch (error) {
    console.error('Emtia verisi alınamadı:', error);
    return [];
  }
}
