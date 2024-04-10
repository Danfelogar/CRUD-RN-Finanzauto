import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  UnknownAction,
  Store,
  ThunkDispatch,
  configureStore,
  Tuple,
} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';

import {setupAxiosInterceptors} from '../services/userData';
import {TypeSlices} from '../utils';

import {rootReducer} from './rootReducer';

const persisConfig = {
  key: TypeSlices.Root,
  storage: AsyncStorage,
  whitelist: [TypeSlices.Auth],
  // blacklist: [],
};

const persistedReducer = persistReducer(persisConfig, rootReducer);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const reduxInmmutable = require('redux-immutable-state-invariant').default();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    __DEV__
      ? new Tuple(
          ...getDefaultMiddleware({serializableCheck: false}),
          reduxInmmutable,
        )
      : getDefaultMiddleware({
          serializableCheck: false,
        }),
  devTools: true,
});

export const persistor = persistStore(store);

// 1. Get the root state's type from reducers
export type RootState = ReturnType<typeof store.getState>;

// 2. Create a type for thunk dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, UnknownAction>; // Updated from AnyAction

// 3. Create a type for store using RootState and Thunk enabled dispatch
export type AppStore = Omit<Store<RootState, UnknownAction>, 'dispatch'> & {
  // Updated from AnyAction
  dispatch: AppThunkDispatch;
};
setupAxiosInterceptors(store.dispatch, store.getState);
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
