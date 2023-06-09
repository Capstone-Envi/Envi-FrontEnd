import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../utils/types";
import { createAccount, getUsers } from "./userManagementAction";

interface UserManagementState {
  users: User[] | null;
  count: number;
  loading: boolean;
  error: string | null | undefined;
}

const initialState = {
  users: null,
  loading: false,
  error: null,
} as UserManagementState;

// Load the state from localStorage if available
const storedState = localStorage.getItem('userManagementState');
const persistedState: UserManagementState = storedState ? JSON.parse(storedState) : initialState;

const userManagementSlice = createSlice({
  name: 'userManagement',
  initialState: persistedState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
        state.count = action.payload.count;
        saveState(state);
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createAccount.pending, (state) => {
      })
      .addCase(createAccount.fulfilled, (state) => {
      })
      .addCase(createAccount.rejected, (state) => {
      })
  },
});

const saveState = (state: UserManagementState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('userManagementState', serializedState);
  } catch (error) {

  }
};

export default userManagementSlice.reducer;
