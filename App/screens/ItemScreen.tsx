import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";

export type ItemScreenProps = {
  id: number;
};

export default function ItemScreen() {
  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <Text>Item</Text>
    </SafeAreaView>
  );
}
