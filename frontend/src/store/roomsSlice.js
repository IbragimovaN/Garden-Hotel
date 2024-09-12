import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3004";

function buildQueryUrl(baseUrl, queryParams) {
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
      urlWithParams = buildQueryUrl(`${url}/rooms`, queryParams);
      console.log(queryParams);
    }
    const response = await axios.get(urlWithParams || `${url}/rooms`);

    return response.data;
  }
);

export const deleteRoom = createAsyncThunk(
  "rooms/deleteRoom",
  async (roomId) => {
    await axios.delete(`${url}/rooms/${roomId}`);
    return roomId;
  }
);

export const addRoom = createAsyncThunk("rooms/addRoom", async (roomData) => {
  const response = await axios.post(`${url}/rooms`, roomData);
  return response.data;
});

export const updateRoom = createAsyncThunk(
  "rooms/updateRoom",
  async ({ roomId, roomData }) => {
    const response = await axios.patch(`${url}/rooms/${roomId}`, roomData);
    return response.data;
  }
);

export const addImageToRoom = createAsyncThunk(
  "rooms/addImageToRoom",
  async ({ roomId, formData }) => {
    const response = await axios.patch(
      `${url}/rooms/${roomId}/imagesUrl`,
      formData
    );
    return response.data;
  }
);

const { actions, reducer: roomsReducer } = roomsSlice;
export const { deleteImg, addImg } = actions;

export const roomsSelector = (state) => state.rooms.rooms;
export const isLoadingSelector = (state) => state.rooms.loading;
export const isErrorSelector = (state) => state.rooms.error;

export default roomsReducer;
