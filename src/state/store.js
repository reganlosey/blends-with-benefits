import { configureStore } from '@reduxjs/toolkit';
import brewReducer from './brewSlice';
import cartReducer from './cartSlice'


export default configureStore({
  reducer: {
    brews: brewReducer,
    cartItems: cartReducer
  },
});