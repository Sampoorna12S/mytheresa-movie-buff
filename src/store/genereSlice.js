import { createSlice } from "@reduxjs/toolkit";

const genereSlice = createSlice({
  name: "genereSlice",
  initialState: [],
  reducers: {
    storeGenere: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export default genereSlice;
