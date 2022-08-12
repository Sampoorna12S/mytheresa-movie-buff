import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState: [],
  reducers: {
    addToWishList: (state, action) => {
      const list = [...state, { title: action.payload }];
      state = list;
      return state;
    },
  },
});

export default wishlistSlice;
