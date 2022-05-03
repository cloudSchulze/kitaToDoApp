import AsyncStorage from "@react-native-async-storage/async-storage";
import { Item } from "../../Common/dto";
import moment from "moment";
import { http } from "../Axios";

const storageKey = "toDoList";
export async function getItemsAsync() {
  return await new Promise(async (res, rej) => {
    http
      .get("items")
      .then((result) => {
        res({ data: result.data });
      })
      .catch((error) => {
        res({ error: true, data: error });
      });
  });
}

export async function addItemAsync(newItem: Item) {
  return await new Promise(async (res, rej) => {
    http
      .post("items", newItem)
      .then((result) => {
        res({ data: result.data });
      })
      .catch((error) => {
        res({ error: true, data: error });
      });
  });
}

export async function deleteItemAsync(delItem: Item) {
  return await new Promise(async (res, rej) => {
    http
      .delete(`items/${delItem.id}`)
      .then((result) => {
        res({ data: result.data });
      })
      .catch((error) => {
        res({ error: true, data: error });
      });
  });
}

export async function updateItemAsync(updateItem: Item) {
  return await new Promise(async (res, rej) => {
    http
      .put(`items/${updateItem.id}`, updateItem)
      .then((result) => {
        res({ data: result.data });
      })
      .catch((error) => {
        res({ error: true, data: error });
      });
  });
}
