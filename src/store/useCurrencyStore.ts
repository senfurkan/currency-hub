import { create } from 'zustand';
import { fetchCurrencyData, ICurrency } from '../app/lib/fetchCurrency';

interface CurrencyState {
  data: ICurrency[];
  loading: boolean;
  error: string | null;
  fetchCurrency: () => Promise<void>;
}

export const useCurrencyStore = create<CurrencyState>((set, get) => ({
  data: [],
  loading: false,
  error: null,

  fetchCurrency: async () => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await fetchCurrencyData();
      set({ data: response.data.result, loading: false });
    } catch (error: any) {
      set({ error: error.message || 'Döviz verileri alınırken hata oluştu', loading: false });
    }
  },
}));
