import { create } from 'zustand';
import type { MarketApiResponse } from '@/types/market';
import type { GoldStoreState } from '@/types/store';

const GOLD_API_URL = process.env.NEXT_PUBLIC_GOLD_API_URL ?? '/api/gold';

export const useGoldStore = create<GoldStoreState>((set, get) => ({
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

      const payload: MarketApiResponse = await response.json();

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
