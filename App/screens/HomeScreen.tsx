import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, RefreshControl, SafeAreaView, Text, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { useSelector } from "react-redux";
import { AppState } from "../store/AppState";
import {
  loadItemListAction,
  removeItemFromListAction,
  updateItemAction,
} from "../store/Items/ItemAction";
import { store } from "../store/Store";
import ToDoItem from "./components/ToDoItem";
import { AppStackNavigationProps } from "./Index";

export default function HomeScreen() {
  const itemList = useSelector((state: AppState) => state.items);
  const navigation = useNavigation<AppStackNavigationProps>();

  useEffect(() => {
    loadData();
  }, []);

  const handlingOnRefreshList = () => {
    loadData();
  };

  const loadData = () => {
    store.dispatch({
      type: loadItemListAction.type,
    });
  };

  return (
    <SafeAreaView style={{ height: "100%", width: "100%" }}>
      {itemList.items?.length > 0 ? (
        <SwipeListView
          data={itemList.items}
          style={{ flexGrow: 1, width: "100%" }}
          refreshControl={
            <RefreshControl
              refreshing={itemList.loading}
              onRefresh={() => handlingOnRefreshList()}
            />
          }
          renderItem={(data) => {
            return (
              <ToDoItem
                loading={itemList.loading}
                key={data.item.id}
                item={data.item}
                onCheckPress={() => {
                  store.dispatch({
                    type: updateItemAction.type,
                    payload: { ...data.item, checked: !data.item.checked },
                  });
                }}
                onCheckDeletePress={() => {
                  store.dispatch({
                    type: removeItemFromListAction.type,
                    payload: data.item,
                  });
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{
            flexGrow: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text>Du hast noch keinen ToDo's angelegt.</Text>
        </View>
      )}
      <View style={{ padding: 10 }}>
        <Button
          title="Neuer Eintrag"
          onPress={() => {
            navigation.navigate("ItemScreen", { id: undefined, text: "" });
          }}
        />
      </View>
    </SafeAreaView>
  );
}
