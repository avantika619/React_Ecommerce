// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/features/cartSlice';
// import productsReducer from '../features/products/productsSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
