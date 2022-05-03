import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../../Common/dto";
import { itemState } from "./ItemTypes";

export const itemSlice = createSlice({
  name: "event",
  initialState: itemState,
  reducers: {
    loadItemListAction: (state, action) => {
      state.loading = true;
    },
    loadItemListEndAction: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    addItemToListAction: (state, action) => {
      state.loading = true;
    },
    addItemToListEndAction: (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    },
    removeItemFromListAction: (state, action) => {
      state.loading = true;
    },
    removeItemFromListEndAction: (state, action) => {
      state.items = action.payload.data;
      state.loading = false;

      var items = state.items.filter(
        (item: Item) => item.id !== action.payload.id
      );

      state.items = items;
      state.loading = false;
    },
    updateItemAction: (state, action) => {
      state.loading = true;
    },
    updateItemEndAction: (state, action) => {
      state.loading = false;

      var idx = state.items.findIndex(
        (item: Item) => item.id === action.payload.id
      );

      state.items[idx] = action.payload;
      state.loading = false;
    },
  },
});

export const itemReducer = itemSlice.reducer;
