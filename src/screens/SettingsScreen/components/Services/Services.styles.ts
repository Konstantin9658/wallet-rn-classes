import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 68,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 68,
  },
  item_pressed: {
    opacity: 0.7,
  },
  itemContainer: {
    flexDirection: "row",
  },
  itemLogo: {
    marginRight: 12,
  },
  itemTitle: {
    fontFamily: "Inter",
    fontSize: FontSize.fs16,
    fontWeight: "500",
    lineHeight: LineHeight.lh24,
    color: Colors.dark80,
  },
  itemDescription: {
    fontFamily: "Inter",
    fontSize: FontSize.fs13,
    fontWeight: "500",
    lineHeight: LineHeight.lh20,
    color: Colors.neutral100,
  },
});
