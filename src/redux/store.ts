import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './slices/currentUser/currentUserSlice';

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
