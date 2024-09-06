import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    marginTop: 10,
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh22,
    color: Colors.dark80,
  },
  placeholder: {
    width: 80,
    height: 80,
    opacity: 0.7,
  },
});
