import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import { AppState } from "../store/AppState";
import {
  addItemToListAction,
  updateItemAction,
} from "../store/Items/ItemAction";
import { store } from "../store/Store";
import FormField from "./components/FormField";

export type ItemScreenProps = {
  id?: number;
  text: string;
};

export default function ItemScreen(props: ItemScreenProps) {
  const itemList = useSelector((state: AppState) => state.items);
  const { text, id } = props;
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    if (id) setValue(text);
  }, []);

  const saveItem = () => {
    if (id) {
      store.dispatch({
        type: updateItemAction.type,
        payload: { id, value },
      });
    } else {
      store.dispatch({
        type: addItemToListAction.type,
        payload: { text: value },
      });
    }
  };

  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <View style={{ padding: 10, flexGrow: 1, justifyContent: "center" }}>
        <FormField
          label="Bezeichnung"
          value={value}
          multiline={true}
          disabled={itemList.loading}
          validation={(value) => {
            const result = value ? undefined : "Bitte gib eine Bezeichnung an!";
            return result;
          }}
          maxLength={80}
          onChangeText={(newValue) => {
            setValue(newValue);
          }}
        />
      </View>
      <View style={{ padding: 10 }}>
        <Button
          disabled={value === "" || itemList.loading}
          title={id ? "Änderung speichern" : "Erstellen"}
          onPress={() => {
            saveItem();
          }}
        />
      </View>
    </SafeAreaView>
  );
}
