import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

interface User {
  id: string | null;
  name: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  address: string | null;
  dateOfBirth: Date | null;
  token: string | null;
}

interface FailedResponse {
  
}

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

export const login = createAsyncThunk('user/login', async (credentials: { email: string, password: string }) => {
  try {
    const response = await api.post<User>('/api/users/login', credentials);
    return response.data;
  } catch (error) {
    throw new Error((error as any).response.data.message);
  }
});

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.currentUser = action.payload;
        console.log(state.currentUser);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.detail;
        console.log(state.error);
      });
  },
});

export default currentUserSlice.reducer;
