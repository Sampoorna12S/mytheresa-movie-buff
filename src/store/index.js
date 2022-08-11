import { configureStore } from "@reduxjs/toolkit";
import genereSlice from "./genereSlice";
import wishlistSlice from "./wishlistSlice"

const store = configureStore({
  reducer: {
    generes: genereSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

export default store;
