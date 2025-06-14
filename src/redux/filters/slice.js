import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  price: '',
  mileageFrom: '',
  mileageTo: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrandFilter(state, action) {
      state.brand = action.payload;
    },
    setPriceFilter(state, action) {
      state.price = action.payload;
    },
    setMileageFrom(state, action) {
      state.mileageFrom = action.payload;
    },
    setMileageTo(state, action) {
      state.mileageTo = action.payload;
    },
    setMileageFilter(state, action) {
      const { mileageFrom, mileageTo } = action.payload;
      if (mileageFrom !== undefined) state.mileageFrom = mileageFrom;
      if (mileageTo !== undefined) state.mileageTo = mileageTo;
    },
    clearFilters(state) {
      state.brand = '';
      state.price = '';
      state.mileageFrom = '';
      state.mileageTo = '';
    },
  },
});

export const {
  setBrandFilter,
  setPriceFilter,
  setMileageFrom,
  setMileageTo,
  setMileageFilter,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
