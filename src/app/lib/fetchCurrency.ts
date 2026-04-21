import axios from 'axios';

export interface ICurrency {
  code?: string;
  currency?: string;
  name?: string;
  price?: number | string;
  buying?: number | string;
  selling?: number | string;
  rate?: number | string;
  time?: string;
  text?: string;
  [key: string]: any;
}

export interface ICurrencyResponse {
  success: boolean;
  result: ICurrency[];
}


export async function fetchCurrencyData() {
  try {
    const response = await axios.get<ICurrencyResponse>('api/currency');
    return response;
  } catch (error) {
    console.error('Döviz verisi alınamadı:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
