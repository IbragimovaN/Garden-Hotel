import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    adult: 1,
    children: 0,
  },
  reducers: {
    incrementAdult: (state) => {
      state.adult += 1;
    },
    decrementAdult: (state) => {
      state.adult -= 1;
    },
    incrementChildren: (state) => {
      state.children += 1;
    },
    decrementChildren: (state) => {
      state.children -= 1;
    },
  },
});

export const {
  incrementAdult,
  decrementAdult,
  incrementChildren,
  decrementChildren,
} = counterSlice.actions;

export const adultCountSelector = (state) => state.counter.adult;
export const childrenCountSelector = (state) => state.counter.children;

export default counterSlice.reducer;
