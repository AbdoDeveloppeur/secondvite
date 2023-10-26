import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/usersSlice"; //reducer for users //
// import postsSlice from "../features/postsSlice"; //reducer for posts //
import ProductsSlice from "../features/CounterSlice";

const store = configureStore({
  reducer: {
    //users Slice State //
    usersRed: userSlice, //reducers for users //
   // postRed: postsSlice, //reducer for posts //
    Products: ProductsSlice,
  },
  devTools: true,
});

export default store;
