import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './ui/reducer';

const rootReducer = combineReducers({
  ui: uiReducer,
});

export default rootReducer;
