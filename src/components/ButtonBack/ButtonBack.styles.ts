import { Colors } from "constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    backgroundColor: Colors.gray20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button_pressed: {
    opacity: 0.7,
  },
});
