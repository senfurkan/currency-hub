import { create } from 'zustand';
import { fetchGoldData, IGold } from '../app/lib/fetchGold';

interface GoldState {
  data: IGold[];
  loading: boolean;
  error: string | null;
  fetchGold: () => Promise<void>;
}

export const useGoldStore = create<GoldState>((set, get) => ({
  data: [],
  loading: false,
  error: null,

  fetchGold: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await fetchGoldData();
      set({ data: response.data.result, loading: false });
    } catch (error: any) {
      set({ error: error.message || 'Altın verileri alınırken hata oluştu', loading: false });
    }
  },
}));
