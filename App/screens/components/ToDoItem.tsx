import React, { forwardRef } from "react";
import { Text, View } from "react-native";
import { Item } from "../../../Common/dto";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import IconButton from "./IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export type ToDoItemProps = {
  onCheckPress: () => void;
  onCheckDeletePress: () => void;
  item: Item;
  loading: boolean;
};

const ToDoItem = (props: ToDoItemProps, ref?: React.Ref<View>) => {
  const { item, onCheckPress, onCheckDeletePress, loading } = props;
  return (
    <View
      ref={ref}
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
        backgroundColor: "white",
      }}
    >
      <BouncyCheckbox
        isChecked={item.checked}
        disableBuiltInState={true}
        onPress={() => {
          onCheckPress();
        }}
      />
      <Text style={{ flex: 1 }} numberOfLines={1} ellipsizeMode="tail">
        {item.text}
      </Text>
      <IconButton
        disabled={loading}
        icon={<FontAwesomeIcon icon={faTrashCan} size={16} color={"white"} />}
        onPress={() => {
          onCheckDeletePress();
        }}
      />
    </View>
  );
};

export default forwardRef(ToDoItem);
