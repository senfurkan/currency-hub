import axios from 'axios';
import type { MarketApiResponse, MarketItem } from '@/types/market';

export type IHisseSenedi = MarketItem;
export type IHisseSenediResponse = MarketApiResponse;


export async function fetchHisseSenediData() {
  try {
    const response = await axios.get<IHisseSenediResponse>('api/hisseSenedi');
    return response;
  } catch (error) {
    console.error('Hisse Senedi verisi alınamadı:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
