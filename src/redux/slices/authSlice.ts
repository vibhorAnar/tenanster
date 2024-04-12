import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../models/UserModel';

const initialState: {
  token: string | undefined;
  isAuthenticated: boolean;
  user: User | undefined;
} = {
  token: undefined,
  isAuthenticated: false,
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginState: (state, action) => {
      state.token = action.payload?.token;
      state.isAuthenticated = true;
      state.user = action.payload?.user;
    },
    logoutState: state => {
      state.token = undefined;
      state.user = undefined;
      state.isAuthenticated = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {loginState, logoutState, setUser} = authSlice.actions;

export default authSlice.reducer;
