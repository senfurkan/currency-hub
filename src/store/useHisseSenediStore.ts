import { create } from 'zustand';

interface HisseSenediItem {
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

interface HisseSenediApiResponse {
  success?: boolean;
  result?: HisseSenediItem[];
}

interface HisseSenediState {
  data: HisseSenediItem[];
  isLoading: boolean;
  error: string | null;
  fetchHisseSenedi: () => Promise<void>;
  clearError: () => void;
}

const HISSE_SENEDI_API_URL = process.env.NEXT_PUBLIC_HISSE_SENEDI_API_URL ?? '/api/hisseSenedi';

export const useHisseSenediStore = create<HisseSenediState>((set, get) => ({
  data: [],
  isLoading: false,
  error: null,

  clearError: () => set({ error: null }),

  fetchHisseSenedi: async () => {
    if (get().isLoading) return;

    set({ isLoading: true, error: null });

    try {
      const response = await fetch(HISSE_SENEDI_API_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Hisse senedi API istegi basarisiz oldu (${response.status})`);
      }

      const payload: HisseSenediApiResponse = await response.json();

      if (!payload.result) {
        throw new Error('Hisse senedi API yanit formati gecersiz.');
      }

      set({ data: payload.result, isLoading: false });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Hisse senedi verileri alinamadi.';
      set({ error: message, isLoading: false });
    }
  },
}));
