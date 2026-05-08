import axios from 'axios';
import type { MarketApiResponse, MarketItem } from '@/types/market';

export type IEmtia = MarketItem;
export type IEmtiaResponse = MarketApiResponse;


export async function fetchEmtiaData() {
  try {
    const response = await axios.get<IEmtiaResponse>('api/emtia');
    return response;
  } catch (error) {
    console.error('Emtia verisi alınamadı:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
