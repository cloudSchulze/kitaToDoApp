import { Alert } from "react-native";
import { goBack, navigationRef } from "../../RootNavigation";
import {
  addItemToListEndAction,
  loadItemListEndAction,
  updateItemEndAction,
} from "./ItemAction";

export function itemMiddleware(md: any) {
  return function (next: any) {
    return function (action: any) {
      switch (action.type) {
        case loadItemListEndAction.type:
          if (action.payload.error) {
            Alert.alert(
              "Fehler beim Laden",
              "Die ToDo-Einträge konnten nicht geladen werden! Bitte versuche es erneut!",
              [{ text: "OK" }]
            );
          }
          console.log("loadItemListEndAction: ", action.payload);
          break;
        case addItemToListEndAction.type:
          if (action.payload.error) {
            Alert.alert(
              "Fehler beim Hinzufügen",
              "Der ToDo-Eintrag konnten nicht gespeichert werden! Bitte versuche es erneut!",
              [{ text: "OK" }]
            );
          } else {
            goBack();
          }
          break;
        case updateItemEndAction.type:
          if (action.payload.error) {
            Alert.alert(
              "Fehler beim Ändern",
              "Der ToDo-Eintrag konnten nicht geändert werden! Bitte versuche es erneut!",
              [{ text: "OK" }]
            );
          }
          break;
        default:
          break;
      }
      return next(action);
    };
  };
}
