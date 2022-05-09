import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },


  reducers: {
    addItemToCart: (state, action) => {
      const foundItem = state.items.find((item) => item.id === action.payload.id)
      if (!foundItem) {
        action.payload.quantity = 1
        state.items = [...state.items, action.payload]
      } else if (foundItem) {
        foundItem.quantity += 1;
      }
    },
    removeItemFromCart: (state, action) => {
      const foundItem = state.items.find((item) => item.id === action.payload.id)
      if (foundItem) {
        foundItem.quantity -= 1
      } else {
        throw new Error("Item not found")
      }
    },
    clearCart: (state, action) => {
      state.items = []
    }
  },
})



export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;