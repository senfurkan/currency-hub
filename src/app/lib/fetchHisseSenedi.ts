import axios from 'axios';

export interface IHisseSenedi {
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

export interface IHisseSenediResponse {
  success: boolean;
  result: IHisseSenedi[];
}


export async function fetchHisseSenediData() {
  try {
    const response = await axios.get<IHisseSenediResponse>('api/hisseSenedi');
    return response;
  } catch (error) {
    console.error('Hisse Senedi verisi alınamadı:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
