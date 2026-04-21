import { create } from 'zustand';
import { fetchExchangeData } from '../app/lib/fetchExchange';
import { fetchSymbolsData } from '../app/lib/fetchSymbols';

interface ExchangeState {
  symbols: any[];
  result: any | null;
  loading: boolean;
  error: string | null;
  fetchSymbols: () => Promise<void>;
  fetchExchange: (int: number | string, to: string, base: string) => Promise<void>;
  setResult: (result: any) => void;
}

export const useExchangeStore = create<ExchangeState>((set, get) => ({
  symbols: [],
  result: null,
  loading: false,
  error: null,

  fetchSymbols: async () => {
    if (get().symbols.length > 0) return; // Sadece ilk girişte çek

    try {
      const response = await fetchSymbolsData();
      if (response && !Array.isArray(response) && response.data) {
        set({ symbols: response.data.result });
      }
    } catch (error: any) {
      console.error('Semboller alınırken hata oluştu:', error);
    }
  },

  fetchExchange: async (int, to, base) => {
    if (get().loading) return;

    set({ loading: true, error: null });
    try {
      const response = await fetchExchangeData(int, to, base);
      set({ result: response.data.result.data[0], loading: false });
    } catch (error: any) {
      set({ error: error.message || 'Çeviri işlemi sırasında hata oluştu', loading: false });
    }
  },

  setResult: (result) => set({ result }),
}));
