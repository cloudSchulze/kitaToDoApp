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
      if (!action.payload.error) state.items = action.payload.data;
      state.loading = false;
    },
    addItemToListAction: (state, action) => {
      state.loading = true;
    },
    addItemToListEndAction: (state, action) => {
      if (!action.payload.error) state.items.push(action.payload.data);
      state.loading = false;
    },
    removeItemFromListAction: (state, action) => {
      state.loading = true;
    },
    removeItemFromListEndAction: (state, action) => {
      if (!action.payload.error) {
        var items = state.items.filter(
          (item: Item) => item.id !== action.payload.data.id
        );

        state.items = items;
      }
      state.loading = false;
    },
    updateItemAction: (state, action) => {
      state.loading = true;
    },
    updateItemEndAction: (state, action) => {
      if (!action.payload.error) {
        var idx = state.items.findIndex(
          (item: Item) => item.id === action.payload.data.id
        );

        console.log("wewaeaweaw");
        state.items[idx] = action.payload.data;
      }
      state.loading = false;
    },
  },
});

export const itemReducer = itemSlice.reducer;
