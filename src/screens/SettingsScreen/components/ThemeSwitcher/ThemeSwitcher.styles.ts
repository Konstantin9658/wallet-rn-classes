import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
  },
  item_pressed: {
    opacity: 0.7,
  },
  itemContent: {
    flexDirection: "row",
  },
  icon: {
    color: Colors.dark80,
  },
  icon_active: {
    color: Colors.accent100,
  },
  label: {
    fontFamily: "Inter",
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh24,
    marginLeft: 10,
    color: Colors.dark80,
  },
  label_active: {
    color: Colors.accent100,
  },
});
