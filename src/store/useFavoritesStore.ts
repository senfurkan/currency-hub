import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[];
  addFavorite: (symbol: string) => void;
  removeFavorite: (symbol: string) => void;
  toggleFavorite: (symbol: string) => void;
  isFavorite: (symbol: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      
      // Favorilere ekle
      addFavorite: (symbol) => 
        set((state) => ({
          favorites: state.favorites.includes(symbol) 
            ? state.favorites 
            : [...state.favorites, symbol],
        })),
        
      // Favorilerden çıkar
      removeFavorite: (symbol) => 
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== symbol),
        })),
        
      // Varsa çıkar, yoksa ekle (Toggle)
      toggleFavorite: (symbol) => {
        const { favorites, addFavorite, removeFavorite } = get();
        if (favorites.includes(symbol)) {
          removeFavorite(symbol);
        } else {
          addFavorite(symbol);
        }
      },
      
      // Bir sembolün favorilerde olup olmadığını kontrol et
      isFavorite: (symbol) => get().favorites.includes(symbol),
    }),
    {
      name: 'currency-hub-favorites', // Tarayıcıda localStorage'a kaydedilecek anahtar ismi
    }
  )
);
