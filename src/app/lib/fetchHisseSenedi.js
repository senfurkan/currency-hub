import axios from 'axios';

export async function fetchHisseSenediData() {
  try {
    const response = await axios.get('api/hisseSenedi');
    return response;
  } catch (error) {
    console.error('Hisse Senedi verisi alınamadı:', error);
    return [];
  }
}
