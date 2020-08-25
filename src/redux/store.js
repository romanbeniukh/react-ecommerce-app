import ReduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [ReduxThunk],
  devTools: true,
});

export const persistor = persistStore(store);
