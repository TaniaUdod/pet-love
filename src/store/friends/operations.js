import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFriends = createAsyncThunk(
  "friends/getFriends",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/friends");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
