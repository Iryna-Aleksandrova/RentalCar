import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectCars = state => state.cars;
export const selectLoading = state => state.cars.loading;
export const selectError = state => state.cars.error;

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (carsState, filters) => {
    const allCars = carsState.items;

    if (!filters || Object.keys(filters).length === 0) {
      return allCars;
    }

    return allCars.filter(car => {
      const { brand, price, mileageFrom, mileageTo } = filters;

      if (brand && car.brand !== brand) return false;
      if (price && Number(car.rentalPrice) !== Number(price)) return false;
      if (mileageFrom && car.mileage < Number(mileageFrom)) return false;
      if (mileageTo && car.mileage > Number(mileageTo)) return false;

      return true;
    });
  },
);
