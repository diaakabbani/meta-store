import { createSlice } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { date } from "yup";
export const cartSlice = createSlice({
  name: "cartReducer",
  initialState: {
    product: [],
  },
  reducers: {
    addCart: (state, { payload }) => {
      console.log("slice ====> ", payload);
      state.product = [...state.product, { ...payload }];
    },
    removeCart: (state, action) => {
      let items = state.product;
      items = items.filter((item) => item.id !== action.payload);
      state.product = items;
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
