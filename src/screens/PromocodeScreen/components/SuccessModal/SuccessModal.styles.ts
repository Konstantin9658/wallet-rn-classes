import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: { width: 120, height: 120, marginBottom: 24 },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  handleContainer: {
    top: -20,
    padding: 0,
  },
  handleIndicator: { backgroundColor: Colors.light60, width: 32 },
  close: {
    position: "absolute",
    right: 12,
    top: 12,
    zIndex: 1,
  },
  title: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: FontSize.fs20,
    lineHeight: LineHeight.lh30,
    color: Colors.dark80,
    marginBottom: 8,
  },
  description: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh24,
    color: Colors.dark80,
    marginBottom: 32,
  },
});
