import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: [],


  reducers: {
    addItemToCart: (state, action) => {
      const foundItem = state.findIndex((item) => item.id === action.payload.id)
      if (!state[foundItem]) {
        action.payload.quantity = 1
        return state.concat([action.payload])
      } else if (state[foundItem]) {
        state[foundItem].quantity += 1
      }
    }
  }
})



export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;