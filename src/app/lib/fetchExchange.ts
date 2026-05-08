import axios from 'axios';
import type { ExchangeApiResponse } from '@/types/market';

export type IExchangeResponse = ExchangeApiResponse;


export async function fetchExchangeData(int: string | number, to: string, base: string) {
  try {
    const response = await axios.get(`api/exchange?int=${int}&to=${to}&base=${base}`);
    return response;
  } catch (error) {
    console.error('Hata 💥:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
