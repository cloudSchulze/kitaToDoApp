import AsyncStorage from "@react-native-async-storage/async-storage";
import { Item } from "../../Common/dto";
import moment from "moment";

const storageKey = "toDoList";
export async function getItemsAsync() {
  return await new Promise(async (res, rej) => {
    const dataString = await AsyncStorage.getItem(storageKey);
    if (dataString) {
      const items: Item[] = JSON.parse(dataString);
      res(items);
    } else {
      res([]);
    }
  });
}

export async function addItemAsync(newItem: Item) {
  return await new Promise(async (res, rej) => {
    newItem.id = moment().unix();
    const dataString = await AsyncStorage.getItem(storageKey);
    if (dataString) {
      const items: Item[] = JSON.parse(dataString);
      items.push(newItem);
      await AsyncStorage.setItem(storageKey, JSON.stringify(items));
      res(items);
    } else {
      res([newItem]);
    }
  });
}

export async function deleteItemAsync(delItem: Item) {
  return await new Promise(async (res, rej) => {
    const dataString = await AsyncStorage.getItem(storageKey);
    var items: Item[] = JSON.parse(dataString!);

    items = items.filter((item: Item) => item.id !== delItem.id);
    await AsyncStorage.setItem("toDoList", JSON.stringify(items));
    res(delItem);
  });
}

export async function updateItemAsync(updateItem: Item) {
  return await new Promise(async (res, rej) => {
    const dataString = await AsyncStorage.getItem(storageKey);
    var items: Item[] = JSON.parse(dataString!);

    var idx = items.findIndex((i) => i.id === updateItem.id);
    items[idx].text = updateItem.text;
    items[idx].checked = updateItem.checked;

    await AsyncStorage.setItem("toDoList", JSON.stringify(items));
    res(updateItem);
  });
}
