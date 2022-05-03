import { itemSlice } from "./ItemReducer";

export const {
  loadItemListAction,
  loadItemListEndAction,
  removeItemFromListAction,
  removeItemFromListEndAction,
  addItemToListAction,
  addItemToListEndAction,
  updateItemAction,
  updateItemEndAction,
} = itemSlice.actions;
