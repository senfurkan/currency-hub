import axios from 'axios';

export interface IExchange {
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

export interface IExchangeResponse {
  success: boolean;
  result: IExchange[];
}


export async function fetchExchangeData(int, to, base) {
  try {
    const response = await axios.get(`api/exchange?int=${int}&to=${to}&base=${base}`);
    return response;
  } catch (error) {
    console.error('Hata 💥:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
