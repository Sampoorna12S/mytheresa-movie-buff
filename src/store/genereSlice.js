
import { createSlice } from "@reduxjs/toolkit";

const genereSlice = createSlice({
  name: "genereSlice",
  initialState: [],
  reducers: {
    storeGenere: (state, action) => {
      console.log('action', action)
      state = action.payload;
      return state;
    },
  },
});

export default genereSlice;
