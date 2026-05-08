import axios from 'axios';
import type { MarketApiResponse, MarketItem } from '@/types/market';

export type IBorsaIstanbul = MarketItem;
export type IBorsaIstanbulResponse = MarketApiResponse;

export async function fetchBorsaIstanbulData() {
  try {
    const response = await axios.get<IBorsaIstanbulResponse>('api/borsaIstanbul');
    return response;
  } catch (error) {
    console.error('Borsa İstanbul verisi alınamadı:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
