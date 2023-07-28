import { configureStore } from '@reduxjs/toolkit';

import mainSlice from './slices/mainSlice';

const store = configureStore({
  reducer: { mainSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

export type AppDispatch = typeof store.dispatch;
