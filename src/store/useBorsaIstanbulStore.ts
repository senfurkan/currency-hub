import { create } from 'zustand';
import { fetchBorsaIstanbulData, IBorsaIstanbul } from '../app/lib/fetchBorsaIstanbul';

interface BorsaIstanbulState {
  data: IBorsaIstanbul[];
  loading: boolean;
  error: string | null;
  fetchBorsaIstanbul: () => Promise<void>;
}

export const useBorsaIstanbulStore = create<BorsaIstanbulState>((set, get) => ({
  data: [],
  loading: false,
  error: null,

  fetchBorsaIstanbul: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await fetchBorsaIstanbulData();
      set({ data: response.data.result, loading: false });
    } catch (error: any) {
      set({ error: error.message || 'Borsa İstanbul verileri alınırken hata oluştu', loading: false });
    }
  },
}));
