import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './features/book/bookSlice'
import { api } from './api/apiSlice';
import userReducer from './features/user/userSlice'
import productReducer from './features/products/productSlice'
import wishReducer from './features/wishList/wishSlice'

const store = configureStore({
  reducer: {
    book: bookReducer,
    product : productReducer,
    wish: wishReducer,
    user : userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;