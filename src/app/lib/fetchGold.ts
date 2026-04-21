import axios from 'axios';

export interface IGold {
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

export interface IGoldResponse {
  success: boolean;
  result: IGold[];
}


export async function fetchGoldData() {
  try {
    const response = await axios.get<IGoldResponse>('api/gold');
    return response;
  } catch (error) {
    console.error('Altın verisi alınamadı:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
