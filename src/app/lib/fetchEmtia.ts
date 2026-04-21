import axios from 'axios';

export interface IEmtia {
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

export interface IEmtiaResponse {
  success: boolean;
  result: IEmtia[];
}


export async function fetchEmtiaData() {
  try {
    const response = await axios.get<IEmtiaResponse>('api/emtia');
    return response;
  } catch (error) {
    console.error('Emtia verisi alınamadı:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
