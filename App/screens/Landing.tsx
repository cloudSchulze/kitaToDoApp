import React, { useEffect } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

export default function Landing() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color={"red"} />
      <Text>Daten werden geladen...</Text>
    </View>
  );
}
