import {createSlice} from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    corrdinates: {
      latitude: 0,
      longitude: 0,
    },
    location: {
      city: '',
      country: '',
      countryCode: '',
      district: '',
      isoCountryCode: '',
      name: '',
      postalCode: '',
      region: '',
      street: '',
      subregion: '',
      timezone: '',
    },
  },
  reducers: {
    setCorrdinates: (state, action) => {
        state.corrdinates = action.payload;
    },
    setLocation: (state, action) => {
        state.location = action.payload;
    }
  },
});

export const {setCorrdinates, setLocation} = locationSlice.actions;

export default locationSlice.reducer;
