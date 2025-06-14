import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const exists = state.find(car => car.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
    deleteFromFavorites(state, action) {
      const updated = state.filter(car => car.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    },
    clearFavorites() {
      localStorage.removeItem('favorites');
      return [];
    },
  },
});

export const { addToFavorites, deleteFromFavorites, clearFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
