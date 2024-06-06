import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: { results: [], totalPages: 1 },
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, handlePending)
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isLoading = false;
      })
      .addCase(getNews.rejected, handleRejected);
  },
});

export const newsReducer = newsSlice.reducer;
