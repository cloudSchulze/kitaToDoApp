import { StackActions } from "@react-navigation/native";
import React, { createRef } from "react";

export const navigationRef: any = createRef();

export function navigate(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function goBack() {
  navigationRef.current?.goBack();
}
