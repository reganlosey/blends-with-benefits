import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: [],


  reducers: {
    addItemToCart: (state, action) => {
      const foundItem = state.find((item) => item.id === action.payload.id)
      if(!foundItem){
        state.push(action.payload)
      }
    }
  }
})



export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;