import { createSlice } from "@reduxjs/toolkit";
import { getFriends } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    friends: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFriends.pending, handlePending)
      .addCase(getFriends.fulfilled, (state, action) => {
        state.friends = action.payload;
        state.isLoading = false;
      })
      .addCase(getFriends.rejected, handleRejected);
  },
});

export const friendsReducer = friendsSlice.reducer;
