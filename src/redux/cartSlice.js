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
  (data) => {
    try {
      const resp = fetch("http://localhost:3001/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
      )
      const respJson = resp.json()
      console.log(respJson)
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
    } catch (err) {
      throw Error({ message: err.message })
    }
  }
)

export const patchCartItemAsync = createAsyncThunk(
  "/cart/items/patchCartItemAsync",
  async (payload) => {
    try {
      const resp = await fetch(`http://localhost:3001/cart/${payload.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          quantity: payload.quantity
        })
      })
      const respJson = await resp.json()
      return respJson
    } catch (err) {
      throw new Error({ error: err })
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
    },
    [deleteFromCartAsync.fulfilled]: (state, action) => {
      state.items = action.payload
    },
    [patchCartItemAsync.fulfilled]: (state, action) => {
      state.items = action.payload
    }
  },
  reducers: {
    //   addItemToCart: (state, action) => {
    //     const foundItem = state.items.find((item) => item.id === action.payload.id)
    //     if (!foundItem) {
    //       action.payload.quantity = 1
    //       state.items = [...state.items, action.payload]
    //     } else if (foundItem) {
    //       foundItem.quantity += 1;
    //     }
    //   },
    //   removeItemFromCart: (state, action) => {
    //     const foundItem = state.items.find((item) => item.id === action.payload.id)
    //     if (foundItem && foundItem.quantity > 1) {
    //       foundItem.quantity -= 1
    //     } else if (foundItem.quantity === 1) {
    //       state.items.splice(foundItem, 1)
    //     }
    //   },
    clearCart: (state, action) => {
      state.items = []
    }
  },
})



export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;