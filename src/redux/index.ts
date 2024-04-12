import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import commonSlice from './slices/commonSlice';
import locationSlice from './slices/locationSlice';
import authSlice from './slices/authSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  common: persistReducer(persistConfig, commonSlice),
  location: persistReducer(persistConfig, locationSlice),
  auth: persistReducer(persistConfig, authSlice),
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([]),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, persistor};
