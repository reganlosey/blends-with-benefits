import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    allOrders: []
  },
  reducers: {
    placeOrder: (state, action) => {
      state.allOrders.push(action.payload)
    },

  }
})

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;