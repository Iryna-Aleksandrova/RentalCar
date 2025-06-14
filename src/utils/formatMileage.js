export const formatMileage = mileage =>
  `${Number(mileage).toLocaleString('en-US').replace(/,/g, ' ')} km`;
