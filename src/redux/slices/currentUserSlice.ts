import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentUserState {
  id: string | null;
  name: string | null;
  email: string | null;
}

const initialState: CurrentUserState = {
  id: null,
  name: null,
  email: null,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (
      state,
      action: PayloadAction<{ id: string; name: string; email: string }>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearCurrentUser: (state) => {
      state.id = null;
      state.name = null;
      state.email = null;
    },
  },
});

export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
