import axios from 'axios';

export interface ICrypto {
  code?: string;
  currency?: string;
  name: string;
  price: number | string;
  pricestr?: string;
  changeRate?: number | string;
}

export interface ICryptoResponse {
  success: boolean;
  result: ICrypto[];
}

export async function fetchCryptoData() {
  try {
    const response = await axios.get<ICryptoResponse>('api/crypto');
    return response;
  } catch (error) {
    console.error('Kripto verisi alınamadı:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
