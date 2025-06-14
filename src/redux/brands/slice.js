import { createSlice } from '@reduxjs/toolkit';
import { getBrands } from '../cars/operations';

const initialState = {
  brands: [],
  loading: false,
  error: null,
  isLoaded: false,
};

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getBrands.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
        state.isLoaded = true;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default brandsSlice.reducer;
