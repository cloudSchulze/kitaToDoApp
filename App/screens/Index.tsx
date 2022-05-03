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

export type AppStackNavigationProps = StackNavigationProp<AppStackParamList>;

export type AppStackParamList = {
  HomeScreen: undefined;
  ItemScreen: undefined;
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

  useEffect(() => {
    setAppLoading(false);
  }, []);

  const appStack = () => {
    return (
      <AppStack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false, headerTransparent: true }}
      >
        <AppStack.Screen name="HomeScreen" component={HomeScreen} />
        <AppStack.Screen name="ItemScreen" component={ItemScreen} />
      </AppStack.Navigator>
    );
  };

  if (appLoading) return <Landing></Landing>;
  return appStack();
}
