import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../utils/types";
import { login, register } from "./currentUserAction";

interface CurrentUserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: CurrentUserState = {
  currentUser: null,
  loading: false,
  error: null,
};

// Load the state from localStorage if available
const storedState = localStorage.getItem('currentUserState');
const persistedState = storedState ? JSON.parse(storedState) : initialState;

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: persistedState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        saveState(state);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        saveState(state);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
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

export default currentUserSlice.reducer;
