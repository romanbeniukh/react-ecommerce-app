import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { createSagaInjector } from './sagas/config/createSagaInjector';
import rootReducer from './reducers';
import rootSaga from './sagas/rootSaga';

export const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [sagaMiddleware],
  devTools: true,
});

export const persistor = persistStore(store);

Object.assign(store, createSagaInjector(sagaMiddleware.run, rootSaga));
