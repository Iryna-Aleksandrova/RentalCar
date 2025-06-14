import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getCars = createAsyncThunk(
  'cars/getAllCars',
  async (filters, thunkAPI) => {
    try {
      const response = await api.get('/cars', { params: filters });
      return {
        cars: response.data.cars,
        totalCount: response.data.totalCars,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getAllCars = createAsyncThunk(
  'cars/getAllCarsFull',
  async (_, thunkAPI) => {
    try {
      const response = await api.get('/cars');
      return response.data.cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getCarById = createAsyncThunk(
  'cars/getCarById',
  async (carId, thunkAPI) => {
    try {
      const response = await api.get(`/cars/${carId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getBrands = createAsyncThunk(
  'brands/getAllBrands',
  async (_, thunkAPI) => {
    try {
      const response = await api.get('/brands');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
