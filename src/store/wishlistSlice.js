
import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState: [],
  reducers: {
    addToWishList: (state, action) => {
      console.log([...state], 'action', action.payload);
      const list = [...state, {title: action.payload}]
      state = list; //action.payload;
      return state;
    }
  },
});

export default wishlistSlice;
