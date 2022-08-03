import { configureStore } from '@reduxjs/toolkit';
import brewReducer from './brewSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';
import { combineReducers } from "redux"

const combinedReducers = combineReducers({
  brews: brewReducer,
  cart: cartReducer,
  orders: orderReducer
})

export const store2 = configureStore({
  reducer: combinedReducers
})