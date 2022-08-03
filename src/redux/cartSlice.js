import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCartAsync = createAsyncThunk(
  'cart/items/getCartAsync',
  async () => {
    try {
      const resp = await fetch("http://localhost:3001/cart")
      const cartItems = await resp.json()
      return cartItems
    } catch (err) {
      throw new Error({ message: err.message })
    }
  }
)

export const addToCartAsync = createAsyncThunk(
  'cart/items/addToCartAsync',
  async (data) => {
    try {
      const resp = await fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
      )
      const respJson = resp.json()
      return respJson
    } catch (err) {
      throw new Error({ message: err.message })
    }
  }
)

export const deleteFromCartAsync = createAsyncThunk(
  'cart/items/deleteFromCartAsync',
  async (id) => {
    try {
      await fetch(`http://localhost:3001/cart/${id}`, {
        method: "DELETE",
      }
      )
      // const respJson = resp.json()
      // return respJson
    } catch (err) {
      throw new Error({ message: err.message })
    }
  }
)


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },

  extraReducers: {
    [getCartAsync.fulfilled]: (state, action) => {
      state.items = action.payload
    },
    [addToCartAsync.fulfilled]: (state, action) => {
      state.items = action.payload
    }
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
      if (foundItem && foundItem.quantity > 1) {
        foundItem.quantity -= 1
      } else if (foundItem.quantity === 1) {
        state.items.splice(foundItem, 1)
      }
    },
    clearCart: (state, action) => {
      state.items = []
    }
  },
})



export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;