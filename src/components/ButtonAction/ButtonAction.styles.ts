import { Colors } from "constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    backgroundColor: Colors.gray20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  button_pressed: {
    opacity: 0.7,
  },
});
