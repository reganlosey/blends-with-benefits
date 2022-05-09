import { createSlice } from '@reduxjs/toolkit';



const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: []
  },
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload;
    }
  }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;