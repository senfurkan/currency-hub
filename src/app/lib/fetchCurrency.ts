import axios from 'axios';
import type { MarketApiResponse, MarketItem } from '@/types/market';

export type ICurrency = MarketItem;
export type ICurrencyResponse = MarketApiResponse;


export async function fetchCurrencyData() {
  try {
    const response = await axios.get<ICurrencyResponse>('api/currency');
    return response;
  } catch (error) {
    console.error('Döviz verisi alınamadı:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
