import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { StyleProp, Text, TextInput, View, ViewStyle } from "react-native";

export type FormFieldProps = {
  onPress?: () => void;
  disabled?: boolean;
  mandatory?: boolean;
  value: string;
  placeholder?: string;
  label: string;
  multiline?: boolean;
  maxLength?: number | undefined;
  onChangeText?: (text: string) => void;
  validation?: (text: string) => string | undefined;
};

export default function FormField(
  props: React.PropsWithChildren<FormFieldProps>
) {
  const [error, setError] = useState<string | undefined>(undefined);
  var {
    onChangeText,
    validation,
    label,
    mandatory,
    value,
    placeholder,
    multiline,
    maxLength,
    disabled,
  } = props;

  return (
    <View style={[{ width: "100%" }]}>
      <View style={{ flexDirection: "row", paddingBottom: 5 }}>
        <Text>{label}</Text>
        <Text
          style={{
            color: "black",
          }}
        >
          {mandatory ? "*" : ""}
        </Text>
      </View>
      <View
        style={[
          {
            borderRadius: 15,
            borderWidth: 1,
            paddingVertical: 2,
            paddingHorizontal: 10,
          },
        ]}
      >
        <TextInput
          editable={!disabled}
          maxLength={maxLength}
          multiline={multiline}
          onChangeText={(text: string) => {
            onChangeText ? onChangeText(text) : null;
            setError(validation ? validation(text) : undefined);
          }}
          placeholder={placeholder}
          style={{
            padding: 0,
            width: "100%",
          }}
          value={value}
        />
      </View>

      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 5,
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        {error && (
          <View
            style={{
              borderWidth: 2,
              borderRadius: 999,
              width: 18,
              height: 18,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
            }}
          >
            <FontAwesomeIcon
              icon={faExclamationCircle}
              size={8}
              color={"red"}
            />
          </View>
        )}

        <Text
          style={{
            paddingLeft: 5,
            fontSize: 12,
            color: "red",
          }}
        >
          {error ? error : null}
        </Text>
      </View>
    </View>
  );
}
