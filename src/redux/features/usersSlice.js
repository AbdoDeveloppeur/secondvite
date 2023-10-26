import { createSlice } from "@reduxjs/toolkit";

//state //
const initialState = {
  user: {
    username: "abdelaziz",
    email: "abdelazizeljazouli378@gmail.com",
    adresse: "48,Hay ben Tachfine_Marrakech",
    loged: "false",
    count: 0,
  },
};


const userSlice = createSlice({
  name: "users", //name slice in store //
  initialState, // cuurrent state value //
  //reducers //
  reducers: {
    setuser: (state, action) => {
      //action //
      state.user = action.payload;
    },
    increment: (state) => {
      state.user.count = state.user.count + 1;
    },
    admin: (state) => {
      state.loged = "true";
    },
  },
});

export const { setuser, increment, admin } = userSlice.actions; //Ac tions //

export default userSlice.reducer; //Recucer //
