// import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
// import axios from 'axios';

// // First, create the thunk
// export const fetchProd = createAsyncThunk(
//   'products/fetchProd',
//   async () => {
//     const response = await axios.get("https://fakestoreapi.com/products")
//     return response.data
//   }
// )
// const ProductsSlice = createSlice({
//   name: "products", //name slice in store //
//   initialState:{
//     data=[],
//     status=null
//   }  // cuurrent state value //
//   //reducers //
//   reducers: {
   
//   },
//   extraReducers:{
//     [fetchProd.isFulfilled]:(state,payload) => {
//       state.data=payload,
//       state.status="success"
      
//     }, [fetchProd.isPending]:(state) => {
//       state.status="loading"
//     }, [fetchProd.isRejected]:(state) => {
//       state.status="failed"
//     },
    

//   }
  
// });

// // export const { increment, decrement, reset } = CounterSlice.actions; //Actions //

// export default ProductsSlice.reducer; //Reducer //
