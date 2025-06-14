import { createSlice } from '@reduxjs/toolkit';
import { getCars, getCarById, getBrands, getAllCars } from './operations';

const initialState = {
  items: [],
  allCars: [],
  carDetails: null,
  brands: [],
  totalCount: 0,
  loading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    clearCarDetails(state) {
      state.carDetails = null;
    },
    clearCars(state) {
      state.items = [];
      state.totalCount = 0;
    },
  },
  extraReducers: builder => {
    builder
      // getCars
      .addCase(getCars.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.loading = false;
        const newCars = action.payload.cars.filter(
          newCar =>
            !state.items.some(existingCar => existingCar.id === newCar.id),
        );
        state.items = [...state.items, ...newCars];
        state.totalCount = action.payload.totalCount;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // getAllCars
      .addCase(getAllCars.pending, state => {
        state.loading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.loading = false;
        state.allCars = action.payload;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // getCarById
      .addCase(getCarById.pending, state => {
        state.loading = true;
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.carDetails = action.payload;
      })
      .addCase(getCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // getBrands
      .addCase(getBrands.pending, state => {
        state.loading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearCarDetails, clearCars } = carsSlice.actions;
export default carsSlice.reducer;
