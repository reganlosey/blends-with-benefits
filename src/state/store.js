import { configureStore } from '@reduxjs/toolkit';
import brewReducer from './brewSlice';


export default configureStore({
  reducer: {
    brews: brewReducer,
  },
});