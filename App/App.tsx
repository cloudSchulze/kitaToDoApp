import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { navigationRef } from "./RootNavigation";
import Index from "./screens/Index";
import { store } from "./store/Store";

export default function App() {
  const [navigationContainerLoaded, setNavigationContainerLoaded] =
    useState<boolean>(false);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        setNavigationContainerLoaded(true);
      }}
    >
      <Provider store={store}>
        <StatusBar></StatusBar>
        <SafeAreaView style={{ height: "100%", width: "100%" }}>
          {!navigationContainerLoaded || !navigationRef.current ? null : (
            <Index></Index>
          )}
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
