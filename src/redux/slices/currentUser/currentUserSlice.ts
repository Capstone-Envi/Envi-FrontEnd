import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../utils/types";
import { login, logout, register, resetCurrentUser } from "./currentUserAction";

export interface CurrentUserState {
  currentUser: User | null;
  loading: boolean;
  loginError: string | null | undefined;
  registerError: string | null | undefined;
}

const initialState: CurrentUserState = {
  currentUser: null,
  loading: false,
  loginError: null,
  registerError: null,
};

// Load the state from localStorage if available
const storedState = localStorage.getItem('currentUserState');
const persistedState: CurrentUserState = storedState ? JSON.parse(storedState) : initialState;

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: persistedState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.loginError = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        saveState(state);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.loginError = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.registerError = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        saveState(state);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.registerError = action.error.message;
      })
      .addCase(logout, (state) => {
        state.currentUser = null;
        state.loading = false;
        state.registerError = null;
        state.loginError = null;
        clearState(); 
      })
      .addCase(resetCurrentUser, (state) => {
        state.currentUser = null;
        state.loading = false;
        state.registerError = null;
        state.loginError = null;
        clearState(); 
      });
  },
});

const saveState = (state: CurrentUserState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('currentUserState', serializedState);
  } catch (error) {

  }
};

const clearState = () => {
  localStorage.removeItem('currentUserState');
};

export default currentUserSlice.reducer;
