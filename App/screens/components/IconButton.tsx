import React from "react";
import { Pressable } from "react-native";

export type IconButtonProps = {
  onPress?: () => void;
  disabled?: boolean;
  icon: JSX.Element;
};

export default function IconButton(
  props: React.PropsWithChildren<IconButtonProps>
) {
  var { onPress, disabled, icon } = props;

  return (
    <Pressable
      style={{
        backgroundColor: disabled ? "darkred" : "red",
        borderRadius: 10,
        overflow: "hidden",
        padding: 8,
      }}
      disabled={disabled}
      onPress={() => {
        onPress ? onPress() : null;
      }}
    >
      {icon}
    </Pressable>
  );
}
