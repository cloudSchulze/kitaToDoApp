import React, { useEffect, useState } from "react";
import Landing from "./Landing";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
//import NewGroup, { NewGroupProps } from "./NewGroup";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import ItemScreen, { ItemScreenProps } from "./ItemScreen";
import HomeScreen from "./HomeScreen";
import { useSelector } from "react-redux";
import { AppState } from "../store/AppState";

export type AppStackNavigationProps = StackNavigationProp<AppStackParamList>;

export type AppStackParamList = {
  HomeScreen: undefined;
  ItemScreen: ItemScreenProps;
};

export type ItemNavigationRouteProps = RouteProp<
  AppStackParamList,
  "ItemScreen"
>;
export type ItemNavigationProps = NativeStackNavigationProp<
  AppStackParamList,
  "ItemScreen"
>;

export default function Index() {
  const AppStack = createNativeStackNavigator<AppStackParamList>();
  const [appLoading, setAppLoading] = useState<boolean>(true);
  const itemList = useSelector((state: AppState) => state.items);

  useEffect(() => {
    setAppLoading(false);
  }, []);

  const appStack = () => {
    return (
      <AppStack.Navigator initialRouteName="HomeScreen">
        <AppStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "ToDo-Liste" }}
        />
        <AppStack.Screen
          name="ItemScreen"
          component={ItemScreen}
          options={(props) => {
            return {
              presentation: "card",
              title: props.route.params?.id
                ? props.route.params?.text
                : "Neuer Eintrag",
            };
          }}
        />
      </AppStack.Navigator>
    );
  };

  if (appLoading) return <Landing></Landing>;
  return appStack();
}
