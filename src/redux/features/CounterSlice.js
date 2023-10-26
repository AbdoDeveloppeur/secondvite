import { createSlice } from "@reduxjs/toolkit";

//state //
const count = 0;

const CounterSlice = createSlice({
  name: "counter", //name slice in store //
  initialState: count, // cuurrent state value //
  //reducers //
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = CounterSlice.actions; //Actions //

export default CounterSlice.reducer; //Reducer //
