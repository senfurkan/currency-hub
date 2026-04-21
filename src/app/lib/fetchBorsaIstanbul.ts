import axios from 'axios';

export interface IBorsaIstanbul {
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

export interface IBorsaIstanbulResponse {
  success: boolean;
  result: IBorsaIstanbul[];
}

import axiosInstance from './axiosInstance';

export async function fetchBorsaIstanbulData() {
  try {
    const response = await axios.get<IBorsaIstanbulResponse>('api/borsaIstanbul');
    return response;
  } catch (error) {
    console.error('Borsa İstanbul verisi alınamadı:', error);
    throw new Error('Veri Çekilemedi.');
  }
}
