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
  ],
  extraReducers: {
    [getAllBrewsAsync.fulfilled]: (state, action) => {
      return action.payload
    }
  }
})


export const { addItemToCart } = brewSlice.actions;
export default brewSlice.reducer;