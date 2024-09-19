import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    color: Colors.dark80,
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh22,
  },
  date: {
    color: Colors.dark40,
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: FontSize.fs13,
    lineHeight: LineHeight.lh20,
  },
  amount: {
    fontSize: FontSize.fs18,
    lineHeight: LineHeight.lh28,
  },
  amount_increase: {
    color: Colors.success,
  },
  amount_decrease: {
    color: Colors.error,
  },
});
