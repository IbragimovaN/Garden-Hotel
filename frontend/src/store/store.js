import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import roomsReducer from "./roomsSlice";
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    counter: counterReducer,
    users: usersReducer,
  },
});
