import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: [],


  reducers: {
    addItemToCart: (state, action) => {
      const foundItem = state.find((item) => item.id === action.payload.id)
      if (!foundItem) {
        action.payload.quantity = 1
        return state = [...state, action.payload]
      } else if (foundItem) {
        foundItem.quantity += 1;
      }
    },
    removeItemFromCart: (state, action) => {
      const foundItem = state.find((item) => item.id === action.payload.id)
      if (foundItem) {
        foundItem.quantity -= 1
      } else {
        throw new Error ("Item not found")
      }
    }
  },
})



export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;