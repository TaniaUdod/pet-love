import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  getGenders,
  getLocations,
  getNotices,
  getTypes,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const noticesSlice = createSlice({
  name: "notices",
  initialState: {
    notices: {
      results: [],
      totalPages: 1,
    },
    categories: [],
    genders: [],
    species: [],
    locations: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNotices.pending, handlePending)
      .addCase(getNotices.fulfilled, (state, action) => {
        state.notices = action.payload;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(getNotices.rejected, handleRejected)

      .addCase(getCategories.pending, handlePending)
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, handleRejected)

      .addCase(getGenders.pending, handlePending)
      .addCase(getGenders.fulfilled, (state, action) => {
        state.genders = action.payload;
        state.isLoading = false;
      })
      .addCase(getGenders.rejected, handleRejected)

      .addCase(getTypes.pending, handlePending)
      .addCase(getTypes.fulfilled, (state, action) => {
        state.species = action.payload;
        state.isLoading = false;
      })
      .addCase(getTypes.rejected, handleRejected)

      .addCase(getLocations.pending, handlePending)
      .addCase(getLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
        state.isLoading = false;
      })
      .addCase(getLocations.rejected, handleRejected);
  },
});

export const noticesReducer = noticesSlice.reducer;
