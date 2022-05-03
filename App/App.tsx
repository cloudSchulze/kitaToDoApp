import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import Index from "./screens/Index";
import { store } from "./store/Store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar></StatusBar>
        <SafeAreaView style={{ height: "100%", width: "100%" }}>
          <Index></Index>
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
