import { configureStore } from '@reduxjs/toolkit';
import userRegistryReducer from '../features/UserRegistry/userRegistrySlice';

export const store = configureStore({
  reducer: {
    'userRegistry': userRegistryReducer
  },
});
