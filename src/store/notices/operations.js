import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader } from "../auth/operations";

export const getNotices = createAsyncThunk(
  "notices/getNotices",
  async (params, thunkAPI) => {
    const {
      keyword,
      category,
      sex,
      species,
      locationId,
      radioSearch,
      page = 1,
      limit = 6,
    } = params;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const queryParams = {
      keyword,
      category,
      species,
      locationId,
      page: sex ? undefined : page,
      limit: sex ? 2000 : 6,
      byPrice:
        radioSearch === "Cheap"
          ? true
          : radioSearch === "Expensive"
          ? false
          : undefined,
      byPopularity:
        radioSearch === "Popular"
          ? false
          : radioSearch === "Unpopular"
          ? true
          : undefined,
    };
    try {
      const { data } = await axios.get("/notices", { params: queryParams });

      if (!sex) {
        return data;
      }

      let filteredResults = data.results.filter((item) => item.sex === sex);
      const totalPages = Math.ceil(filteredResults.length / limit);
      const allNotices = filteredResults.slice(startIndex, endIndex);

      return { results: allNotices, totalPages };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOneNotice = createAsyncThunk(
  "notices/getOneNotice",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/notices/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "notices/getCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/notices/categories");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getGenders = createAsyncThunk(
  "notices/getGenders",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/notices/sex");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTypes = createAsyncThunk(
  "notices/getTypes",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/notices/species");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getLocations = createAsyncThunk(
  "notices/getLocations",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/cities");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  "notices/addNotice",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.post(`/notices/favorites/add/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  "notices/deleteNotice",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.delete(`/notices/favorites/remove/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
