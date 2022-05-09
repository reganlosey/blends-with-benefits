import { configureStore } from '@reduxjs/toolkit';
import brewReducer from './brewSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';


export default configureStore({
  reducer: {
    brews: brewReducer,
    cart: cartReducer,
    users: userReducer
  },
});