import { createSlice } from "@reduxjs/toolkit";

const movieDataSlice = createSlice({
  name: "movieDataSlice",
  initialState: {},
  reducers: {
    putMovieData: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export default movieDataSlice;
