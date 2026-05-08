import axios from 'axios';
import type { CryptoApiResponse, CryptoItem } from '@/types/market';

export type ICrypto = CryptoItem;
export type ICryptoResponse = CryptoApiResponse;

export async function fetchCryptoData() {
  try {
    const response = await axios.get<ICryptoResponse>('/api/crypto');
    return response;
  } catch (error) {
    console.error('Kripto verisi alınamadı:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
