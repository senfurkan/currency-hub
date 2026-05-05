import { create } from 'zustand';

interface EmtiaItem {
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

interface EmtiaApiResponse {
  success?: boolean;
  result?: EmtiaItem[];
}

interface EmtiaState {
  data: EmtiaItem[];
  isLoading: boolean;
  error: string | null;
  fetchEmtia: () => Promise<void>;
  clearError: () => void;
}

const EMTIA_API_URL = process.env.NEXT_PUBLIC_EMTIA_API_URL ?? '/api/emtia';

export const useEmtiaStore = create<EmtiaState>((set, get) => ({
  data: [],
  isLoading: false,
  error: null,

  clearError: () => set({ error: null }),

  fetchEmtia: async () => {
    if (get().isLoading) return;

    set({ isLoading: true, error: null });

    try {
      const response = await fetch(EMTIA_API_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Emtia API istegi basarisiz oldu (${response.status})`);
      }

      const payload: EmtiaApiResponse = await response.json();

      if (!payload.result) {
        throw new Error('Emtia API yanit formati gecersiz.');
      }

      set({ data: payload.result, isLoading: false });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Emtia verileri alinamadi.';
      set({ error: message, isLoading: false });
    }
  },
}));
