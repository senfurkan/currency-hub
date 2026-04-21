import { create } from 'zustand';
import { fetchHisseSenediData, IHisseSenedi } from '../app/lib/fetchHisseSenedi';

interface HisseSenediState {
  data: IHisseSenedi[];
  loading: boolean;
  error: string | null;
  fetchHisseSenedi: () => Promise<void>;
}

export const useHisseSenediStore = create<HisseSenediState>((set, get) => ({
  data: [],
  loading: false,
  error: null,

  fetchHisseSenedi: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await fetchHisseSenediData();
      set({ data: response.data.result, loading: false });
    } catch (error: any) {
      set({ error: error.message || 'Hisse senedi verileri alınırken hata oluştu', loading: false });
    }
  },
}));
