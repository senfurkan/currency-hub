import { create } from 'zustand';
import { fetchCryptoData, ICrypto } from '../app/lib/fetchCrypto';

interface CryptoState {
  data: ICrypto[];
  loading: boolean;
  error: string | null;
  fetchCrypto: () => Promise<void>;
}

export const useCryptoStore = create<CryptoState>((set, get) => ({
  data: [],
  loading: false,
  error: null,

  fetchCrypto: async () => {
    if (get().loading) return; // Zaten yükleniyorsa ikinci isteği engelle (React Strict Mode koruması)

    // İstek başlamadan önce loading'i true, error'u temizliyoruz.
    set({ loading: true, error: null });
    try {
      const response = await fetchCryptoData();
      // Veri başarılı gelirse data'ya yazıp loading'i kapatıyoruz.
      set({ data: response.data.result, loading: false });
    } catch (error: any) {
      // Hata durumunda hatayı kaydedip loading'i kapatıyoruz.
      set({ error: error.message || 'Kripto verileri alınırken bir hata oluştu', loading: false });
    }
  },
}));
