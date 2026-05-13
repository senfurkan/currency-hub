export const COLLECT_API_ENDPOINTS = {
  allCurrency: 'allCurrency',
  goldPrice: 'goldPrice',
  emtia: 'emtia',
  hisseSenedi: 'hisseSenedi',
  borsaIstanbul: 'borsaIstanbul',
  crypto: 'cripto',
  symbols: 'symbols',
  exchange: 'exchange',
} as const;

export type CollectApiEndpointKey = keyof typeof COLLECT_API_ENDPOINTS;
export type CollectApiEndpoint = (typeof COLLECT_API_ENDPOINTS)[CollectApiEndpointKey];
