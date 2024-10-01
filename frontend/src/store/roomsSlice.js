import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "../constants";

function buildQueryUrl(baseUrl, queryParams) {
  console.log(" buildQueryUrl", "baseUrl", baseUrl);
  const url = new URL(baseUrl);
  console.log(url);

  Object.entries(queryParams).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  return url.toString();
}

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {
    rooms: [],
    filteredRooms: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    deleteImg(state, action) {
      const { id, img } = action.payload;

      state.rooms = state.rooms.map((room) => {
        if (room._id === id) {
          const newImgArr = room.imagesUrl.filter((item) => item !== img);
          return { ...room, imagesUrl: newImgArr };
        }
        return room;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRooms.fulfilled, (state, { payload }) => {
        state.rooms = payload;
        state.filteredRooms = payload;
        state.isLoading = false;
      })
      .addCase(fetchRooms.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(deleteRoom.fulfilled, (state, { payload }) => {})
      .addCase(addRoom.fulfilled, (state, { payload }) => {})
      .addCase(updateRoom.fulfilled, (state, { payload }) => {
        state.rooms = state.rooms.map((room) =>
          room._id === payload._id ? payload : room
        );
      })
      .addCase(addImageToRoom.fulfilled, (state, { payload }) => {
        state.rooms = state.rooms.map((room) =>
          room._id === payload._id ? payload : room
        );
      });
  },
});

export const fetchRooms = createAsyncThunk(
  "rooms/fetchRooms",
  async (queryParams) => {
    console.log("fetch");
    let urlWithParams;
    if (queryParams) {
      console.log("fetch with queryParams ");
      urlWithParams = buildQueryUrl(`${baseURL}/rooms`, queryParams);
      console.log("queryParams", urlWithParams);
    }
    const response = await axios.get(urlWithParams || `${baseURL}/rooms`);

    return response.data;
  }
);

export const deleteRoom = createAsyncThunk(
  "rooms/deleteRoom",
  async (roomId) => {
    await axios.delete(`${baseURL}/rooms/${roomId}`);
    return roomId;
  }
);

export const addRoom = createAsyncThunk("rooms/addRoom", async (roomData) => {
  const response = await axios.post(`${baseURL}/rooms`, roomData);
  return response.data;
});

export const updateRoom = createAsyncThunk(
  "rooms/updateRoom",
  async ({ roomId, roomData }) => {
    const response = await axios.patch(`${baseURL}/rooms/${roomId}`, roomData);
    return response.data;
  }
);

export const addImageToRoom = createAsyncThunk(
  "rooms/addImageToRoom",
  async ({ roomId, formData }) => {
    const response = await axios.patch(
      `${baseURL}/rooms/${roomId}/imagesUrl`,
      formData
    );
    return response.data;
  }
);

const { actions, reducer: roomsReducer } = roomsSlice;
export const { deleteImg, addImg } = actions;

export const roomsSelector = (state) => state.rooms.rooms;
export const isLoadingSelector = (state) => state.rooms.isLoading;
export const isErrorSelector = (state) => state.rooms.error;

export default roomsReducer;
