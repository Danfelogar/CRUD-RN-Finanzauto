import {combineReducers} from '@reduxjs/toolkit';

import auth from './slices/auth';
import settings from './slices/settings';
import userData from './slices/userData';

export const rootReducer = combineReducers({
  auth,
  settings,
  userData,
});
