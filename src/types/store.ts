import type { CryptoItem, ExchangeResultItem, ExchangeSymbol, MarketItem } from '@/types/market';

export interface CurrencyStoreState {
  data: MarketItem[];
  isLoading: boolean;
  error: string | null;
  fetchCurrency: () => Promise<void>;
  clearError: () => void;
}

export interface BorsaIstanbulStoreState {
  data: MarketItem[];
  isLoading: boolean;
  error: string | null;
  fetchBorsaIstanbul: () => Promise<void>;
  clearError: () => void;
}

export interface EmtiaStoreState {
  data: MarketItem[];
  isLoading: boolean;
  error: string | null;
  fetchEmtia: () => Promise<void>;
  clearError: () => void;
}

export interface GoldStoreState {
  data: MarketItem[];
  isLoading: boolean;
  error: string | null;
  fetchGold: () => Promise<void>;
  clearError: () => void;
}

export interface HisseSenediStoreState {
  data: MarketItem[];
  isLoading: boolean;
  error: string | null;
  fetchHisseSenedi: () => Promise<void>;
  clearError: () => void;
}

export interface CryptoStoreState {
  data: CryptoItem[];
  isLoading: boolean;
  error: string | null;
  fetchCrypto: () => Promise<void>;
  clearError: () => void;
}

export interface ExchangeStoreState {
  symbols: ExchangeSymbol[];
  result: ExchangeResultItem | null;
  isLoading: boolean;
  error: string | null;
  fetchSymbols: () => Promise<void>;
  fetchExchange: (amount: number | string, to: string, base: string) => Promise<void>;
  setResult: (result: ExchangeResultItem | null) => void;
  clearError: () => void;
}
