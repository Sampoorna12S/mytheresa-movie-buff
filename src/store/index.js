import { configureStore } from "@reduxjs/toolkit";
import genereSlice from "./genereSlice";
import movieDataSlice from "./movieDataSlice";
import wishlistSlice from "./wishlistSlice";

const store = configureStore({
  reducer: {
    generes: genereSlice.reducer,
    wishlist: wishlistSlice.reducer,
    movieData: movieDataSlice.reducer,
  },
});

export default store;
