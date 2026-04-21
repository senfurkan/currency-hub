import { create } from 'zustand';
import { fetchEmtiaData, IEmtia } from '../app/lib/fetchEmtia';

interface EmtiaState {
  data: IEmtia[];
  loading: boolean;
  error: string | null;
  fetchEmtia: () => Promise<void>;
}

export const useEmtiaStore = create<EmtiaState>((set, get) => ({
  data: [],
  loading: false,
  error: null,

  fetchEmtia: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await fetchEmtiaData();
      set({ data: response.data.result, loading: false });
    } catch (error: any) {
      set({ error: error.message || 'Emtia verileri alınırken hata oluştu', loading: false });
    }
  },
}));
