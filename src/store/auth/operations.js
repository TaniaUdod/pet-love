import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://petlove.b.goit.study/api/";

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      setAuthHeader(data.token);
      toast.success("You have successfully register");
      return data;
    } catch (error) {
      toast.error("Email already in use!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signin", credentials);
      setAuthHeader(data.token);
      toast.success("You have successfully logged");
      return data;
    } catch (error) {
      toast.error("Email or password is wrong!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/signout");
    toast.success("Sign out success");
    clearAuthHeader();
  } catch (error) {
    toast.error("Error, server not answer!");
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get("/users/current/full");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userEdit = createAsyncThunk(
  "auth/edit",
  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.patch("/users/current/edit", body);
      toast.success("Successfully updated profile");
      return data;
    } catch (error) {
      toast.error("Error, server not answer!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userAddPet = createAsyncThunk(
  "auth/addPet",
  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.post("/users/current/pets/add", body);
      toast.success("Successfully added pet");
      return data;
    } catch (error) {
      toast.error("Error, server not answer!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userRemovePet = createAsyncThunk(
  "auth/removePet",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.delete(`/users/current/pets/remove/${id}`);
      toast.success("Successfully removed pet");
      return data;
    } catch (error) {
      toast.error("Error, server not answer!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
