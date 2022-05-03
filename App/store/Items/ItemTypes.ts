import { Item } from "../../../Common/dto";

export type itemStateType = {
  items: Item[];
  loading: boolean;
};

export const itemState: itemStateType = {
  items: [],
  loading: false,
};
