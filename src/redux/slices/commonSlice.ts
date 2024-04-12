import {createSlice} from '@reduxjs/toolkit';
import {UserRole} from '../../models/UserModel';

interface ICommonSlice {
  theme: string;
  userInterface: string | undefined;
}

const initialState: ICommonSlice = {
  theme: 'light',
  userInterface: UserRole.tenant,
};

const commonSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setUserInterface: (state, action) => {
      state.userInterface = action.payload;
    },
  },
});

export const {setTheme, setUserInterface} = commonSlice.actions;

export default commonSlice.reducer;
