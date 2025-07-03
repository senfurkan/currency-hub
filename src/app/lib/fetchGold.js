import axios from 'axios';

export async function fetchGoldData() {
  try {
    const response = await axios.get('api/gold');
    return response;
  } catch (error) {
    console.error('Altın verisi alınamadı:', error);
    return [];
  }
}
