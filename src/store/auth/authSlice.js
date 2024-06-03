import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  logOut,
  refreshUser,
  register,
  userAddPet,
  userEdit,
  userFullInfo,
  userRemovePet,
} from "./operations";

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const initialState = {
  user: {
    name: null,
    email: null,
    avatar: null,
    pets: [],
    noticesViewed: [],
    noticesFavorites: [],
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleFulfilled)

      .addCase(logIn.fulfilled, handleFulfilled)

      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          pets: [],
          noticesViewed: [],
          noticesFavorites: [],
        };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })

      .addCase(userFullInfo.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(userFullInfo.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(userFullInfo.rejected, (state) => {
        state.isRefreshing = false;
      })

      .addCase(userEdit.fulfilled, (state, action) => {
        const { name, email, phone, avatar } = action.payload;
        state.user = { ...state.user, name, email, phone, avatar };
      })

      .addCase(userAddPet.fulfilled, (state, action) => {
        state.user.pets = [...state.user.pets, action.payload];
      })

      .addCase(userRemovePet.fulfilled, (state, action) => {
        state.user.pets = state.user.pets.filter(
          (pet) => pet.id !== action.meta.arg
        );
      });
  },
});

export const authReducer = authSlice.reducer;
