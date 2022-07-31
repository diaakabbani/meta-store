import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./data/addCartSlice";

export default configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
});
