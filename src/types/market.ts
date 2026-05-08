export interface MarketItem {
  code?: string;
  currency?: string;
  name?: string;
  price?: number | string;
  buying?: number | string;
  selling?: number | string;
  rate?: number | string;
  time?: string;
  text?: string;
  [key: string]: unknown;
}

export interface MarketApiResponse {
  success?: boolean;
  result?: MarketItem[];
}

export interface CryptoItem {
  code?: string;
  currency?: string;
  name: string;
  price: number | string;
  pricestr?: string;
  changeRate?: number | string;
  [key: string]: unknown;
}

export interface CryptoApiResponse {
  success?: boolean;
  result?: CryptoItem[];
}

export interface ExchangeResultItem {
  calculated: number | string;
  rate: number | string;
  [key: string]: unknown;
}

export interface ExchangeApiResponse {
  success?: boolean;
  result?: {
    data?: ExchangeResultItem[];
  };
}

export interface ExchangeSymbol {
  code: string;
  name: string;
}

export interface SymbolsApiResponse {
  success?: boolean;
  result?: ExchangeSymbol[];
}
