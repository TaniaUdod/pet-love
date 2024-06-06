import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk(
  "news/getNews",
  async ({ keyword, page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/news?keyword=${keyword}&page=${page}&limit=${limit}`
      );
      return { results: data.results, totalPages: data.totalPages };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
