import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './slices/currentUser/currentUserSlice';
import userManagementReducer from './slices/userManagement/userManagementSlice';

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    userManagement: userManagementReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
