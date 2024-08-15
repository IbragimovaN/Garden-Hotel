import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  const response = await axios.get("http://localhost:3004/rooms");
  return response.data;
});

export const deleteRoom = createAsyncThunk(
  "rooms/deleteRoom",
  async (roomId) => {
    await axios.delete(`http://localhost:3004/rooms/${roomId}`);
    return roomId;
  }
);

export const addRoom = createAsyncThunk("rooms/addRoom", async (roomData) => {
  const response = await axios.post("http://localhost:3004/rooms", roomData);
  return response.data;
});

export const updateRoom = createAsyncThunk(
  "rooms/updateRoom",
  async ({ roomId, roomData }) => {
    const response = await axios.patch(
      `http://localhost:3004/rooms/${roomId}`,
      roomData
    );
    return response.data;
  }
);

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
      });
  },
});

const { actions, reducer: roomsReducer } = roomsSlice;
export const { deleteImg } = actions;

export const roomsSelector = (state) => state.rooms.rooms;
export const isLoadingSelector = (state) => state.rooms.loading;
export const isErrorSelector = (state) => state.rooms.error;

export default roomsReducer;
