import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: Colors.gray20,
    borderRadius: 8,
    gap: 10,
  },
  avatar: { width: 44, height: 44, borderRadius: 6 },
  name: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh22,
    color: Colors.dark80,
  },
  email: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: FontSize.fs13,
    lineHeight: LineHeight.lh20,
    color: Colors.gray100,
  },
});
