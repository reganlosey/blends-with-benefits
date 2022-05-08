import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getAllBrewsAsync = createAsyncThunk(
  'brews/getBrewsAsync',
  async () => {
    try {
      const resp = await fetch("https://brewedtoserve.herokuapp.com/brews")
      if (resp.ok) {
        const brews = await resp.json()
        return brews 
      }
    } catch (err) {
      throw new Error(err)
    }
  }
)

export const brewSlice = createSlice({
  name: 'brews',
  initialState: [
    // {
    //   id: 1,
    //   productName: 'Brazilian Arabica',
    //   type: 'Coffee',
    //   price: 10,
    //   hasCaffeine: true,
    //   quantity: 0
    // },
    // {
    //   id: 2,
    //   productName: 'Columbian Arabica',
    //   type: 'Coffee',
    //   price: 10,
    //   hasCaffeine: true,
    //   quantity: 0
    // },
    // {
    //   id: 3,
    //   productName: 'Peruvian Arabica',
    //   type: 'Coffee',
    //   price: 10,
    //   hasCaffeine: false,
    //   quantity: 0
    // },
    // {
    //   id: 4,
    //   productName: 'Vietnam Robusta',
    //   type: 'Espresso',
    //   price: 15,
    //   hasCaffeine: true,
    //   quantity: 0
    // },
    // {
    //   id: 5,
    //   productName: 'Guatemala Robusta',
    //   type: 'Espresso',
    //   price: 15,
    //   hasCaffeine: true,
    //   quantity: 0
    // }
  ],
  reducers: {
    addBrewToCart: (state, action) => {
      const newItem = action.payload
      state.push(newItem)
    },
  },
  extraReducers: {
    [getAllBrewsAsync.fulfilled]: (state, action) => {
      return action.payload
    }
  }
})


export const { addCartItem } = brewSlice.actions;
export default brewSlice.reducer;