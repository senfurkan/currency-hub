import { create } from 'zustand';

interface BorsaIstanbulItem {
  code?: string;
  currency?: string;
  name?: string;
  price?: number | string;
  buying?: number | string;
  selling?: number | string;
  rate?: number | string;
  time?: string;
  text?: string;
}

interface BorsaIstanbulApiResponse {
  success?: boolean;
  result?: BorsaIstanbulItem[];
}

interface BorsaIstanbulState {
  data: BorsaIstanbulItem[];
  isLoading: boolean;
  error: string | null;
  fetchBorsaIstanbul: () => Promise<void>;
  clearError: () => void;
}

const BORSA_ISTANBUL_API_URL = process.env.NEXT_PUBLIC_BORSA_ISTANBUL_API_URL ?? '/api/borsaIstanbul';

export const useBorsaIstanbulStore = create<BorsaIstanbulState>((set, get) => ({
  data: [],
  isLoading: false,
  error: null,

  clearError: () => set({ error: null }),

  fetchBorsaIstanbul: async () => {
    if (get().isLoading) return;

    set({ isLoading: true, error: null });

    try {
      const response = await fetch(BORSA_ISTANBUL_API_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Borsa Istanbul API istegi basarisiz oldu (${response.status})`);
      }

      const payload: BorsaIstanbulApiResponse = await response.json();

      if (!payload.result) {
        throw new Error('Borsa Istanbul API yanit formati gecersiz.');
      }

      set({ data: payload.result, isLoading: false });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Borsa Istanbul verileri alinamadi.';
      set({ error: message, isLoading: false });
    }
  },
}));
