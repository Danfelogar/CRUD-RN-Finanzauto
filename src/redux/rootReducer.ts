import {combineReducers} from '@reduxjs/toolkit';

import auth from './slices/auth';

export const rootReducer = combineReducers({
  auth,
});
