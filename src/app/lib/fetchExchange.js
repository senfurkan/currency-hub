import axios from 'axios';

export async function fetchExchangeData(int, to, base) {
  try {
    const response = await axios.get(`api/exchange?int=${int}&to=${to}&base=${base}`);
    return response;
  } catch (error) {
    console.error('Hata 💥:', error);
    return [];
  }
}
