import axios from 'axios';
import type { MarketApiResponse, MarketItem } from '@/types/market';

export type IGold = MarketItem;
export type IGoldResponse = MarketApiResponse;


export async function fetchGoldData() {
  try {
    const response = await axios.get<IGoldResponse>('api/gold');
    return response;
  } catch (error) {
    console.error('Altın verisi alınamadı:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
