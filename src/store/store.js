import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { showModalReducer } from './modal/modalSlice';
import { waterReducer } from './water/waterSlice';
import { waterRateReducer } from './waterRate/waterRateSlice';
import { settingsReducer } from './settings/settingsSlice';
import { rootReducer } from './Root/rootSlice';
import { monthReducer } from './month/monthSlice';

/* const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
]; */

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const waterRatePersistConfig = {
  key: 'waterRate',
  storage,
}

const waterListPersisConfig = {
  key: "water",
  storage,
  whitelist: ['items'],
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    modal: showModalReducer,
    water: persistReducer(waterListPersisConfig, waterReducer),
    waterRate: persistReducer(waterRatePersistConfig, waterRateReducer),
    month: monthReducer,
    settings: settingsReducer,
    root: rootReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
