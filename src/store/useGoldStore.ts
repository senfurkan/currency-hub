import { create } from 'zustand';

interface GoldItem {
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

interface GoldApiResponse {
  success?: boolean;
  result?: GoldItem[];
}

interface GoldState {
  data: GoldItem[];
  isLoading: boolean;
  error: string | null;
  fetchGold: () => Promise<void>;
  clearError: () => void;
}

const GOLD_API_URL = process.env.NEXT_PUBLIC_GOLD_API_URL ?? '/api/gold';

export const useGoldStore = create<GoldState>((set, get) => ({
  data: [],
  isLoading: false,
  error: null,

  clearError: () => set({ error: null }),

  fetchGold: async () => {
    if (get().isLoading) return;

    set({ isLoading: true, error: null });

    try {
      const response = await fetch(GOLD_API_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Altin API istegi basarisiz oldu (${response.status})`);
      }

      const payload: GoldApiResponse = await response.json();

      if (!payload.result) {
        throw new Error('Altin API yanit formati gecersiz.');
      }

      set({ data: payload.result, isLoading: false });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Altin verileri alinamadi.';
      set({ error: message, isLoading: false });
    }
  },
}));
