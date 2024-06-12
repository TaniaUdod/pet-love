import { createSlice } from "@reduxjs/toolkit";
import {
  logIn,
  logOut,
  refreshUser,
  register,
  userAddPet,
  userEdit,
  // userFullInfo,
  userRemovePet,
} from "./operations";

const handleFulfilled = (state, action) => {
  state.user = action.payload;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const initialState = {
  user: {
    name: null,
    email: null,
    phone: null,
    avatar: null,
  },
  pets: [],
  noticesViewed: [],
  noticesFavorites: [],
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
          phone: null,
          avatar: null,
        };
        state.pets = [];
        state.noticesViewed = [];
        state.noticesFavorites = [];
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.phone = action.payload.phone;
        state.user.avatar = action.payload.avatar;
        state.pets = action.payload.pets;
        state.noticesViewed = action.payload.noticesViewed;
        state.noticesFavorites = action.payload.noticesFavorites;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })

      // .addCase(userFullInfo.pending, (state) => {
      //   state.isRefreshing = true;
      // })
      // .addCase(userFullInfo.fulfilled, (state, action) => {
      //   state.user = action.payload;
      //   state.pets = action.payload.pets;
      //   state.noticesViewed = action.payload.noticesViewed;
      //   state.noticesFavorites = action.payload.noticesFavorites;
      //   state.isLoggedIn = true;
      //   state.isRefreshing = false;
      // })
      // .addCase(userFullInfo.rejected, (state) => {
      //   state.isRefreshing = false;
      // })

      .addCase(userEdit.fulfilled, (state, action) => {
        const { name, email, phone, avatar } = action.payload;
        state.user = { ...state.user, name, email, phone, avatar };
      })

      .addCase(userAddPet.fulfilled, (state, action) => {
        state.pets = [...state.pets, action.payload];
      })

      .addCase(userRemovePet.fulfilled, (state, action) => {
        state.pets = state.pets.filter((pet) => pet.id !== action.meta.arg);
      });
  },
});

export const authReducer = authSlice.reducer;
