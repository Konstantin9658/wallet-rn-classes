import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    position: "absolute",
    bottom: -20,
    fontSize: FontSize.fs13,
    lineHeight: LineHeight.lh20,
    fontFamily: "Inter",
    fontWeight: "400",
  },
  text_error: {
    color: Colors.red,
  },
  text_hint: {
    color: Colors.dark80,
  },
});
