import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  separator: { marginBottom: 16 },
  title: {
    fontSize: FontSize.fs24,
    lineHeight: LineHeight.lh36,
    fontFamily: "Inter",
    fontWeight: "600",
    marginBottom: 24,
    color: Colors.dark80,
  },
  footer: {
    marginTop: 24,
  },
});
