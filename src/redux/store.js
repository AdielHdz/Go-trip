import { configureStore } from "@reduxjs/toolkit";
import Hotel from "./slices/hotel";
const store = configureStore({
  reducer: {
    hotel: Hotel.reducer,
  },
});

export default store;
