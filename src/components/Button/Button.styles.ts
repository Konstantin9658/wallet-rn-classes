import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    minWidth: 180,
    backgroundColor: Colors.primary100,
    paddingHorizontal: 28,
    paddingVertical: 13,
    borderRadius: 12,
    shadowColor: Colors.primary100,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button_pressed: {
    opacity: 0.7,
  },
  button_disabled: {
    opacity: 0.4,
    shadowOpacity: 0,
  },
  text: {
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh22,
    color: Colors.white100,
    fontFamily: "Inter",
    fontWeight: "500",
  },
});
