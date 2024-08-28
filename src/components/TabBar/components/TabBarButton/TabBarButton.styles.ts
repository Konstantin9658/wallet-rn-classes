import { FontSize } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabButton: {
    width: 75,
    height: 76,
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  label: {
    fontSize: FontSize.fs13,
    marginTop: 6,
    textAlign: "center",
  },
});
