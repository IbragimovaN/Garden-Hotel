import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../constants";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    isLoading: false,
    currentUser: null,
  },
  reducers: {
    deleteServerError(state, action) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(registrationUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registrationUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        if (payload.error) {
          console.log(payload.error);
          state.error = payload.error;
        } else {
          state.currentUser = payload;
        }
      })
      .addCase(registrationUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (payload.error) {
          state.error = payload.error;
        } else {
          state.currentUser = payload;
          sessionStorage.setItem("currentUser", JSON.stringify(payload));
        }
      })
      .addCase(loginUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(logout.fulfilled, (state, { error }) => {
        state.isLoading = false;
        state.currentUser = null;
        sessionStorage.removeItem("currentUser");
      });
  },
});

export const registrationUser = createAsyncThunk(
  "users/addUser",
  async (data) => {
    console.log(data);
    const response = await axios.post(`${baseURL}/auth/register`, data);

    return response.data;
  }
);

export const loginUser = createAsyncThunk("users/loginUser", async (data) => {
  console.log(data);
  const response = await axios.post(`${baseURL}/auth/login`, data);

  return response.data;
});

export const logout = createAsyncThunk("users/logout", async () => {
  const response = await axios.post(`${baseURL}/auth/logout`);

  return response.data;
});

const { actions, reducer: usersReducer } = usersSlice;
export const { deleteServerError } = actions;

export const roomsSelector = (state) => state.users.users;
export const isLoadingSelector = (state) => state.users.isLoading;
export const isErrorAuthSelector = (state) => state.users.error;
export const CurrentUserSelector = (state) => state.users.currentUser;

export default usersReducer;
