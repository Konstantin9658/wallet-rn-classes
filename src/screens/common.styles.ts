import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const screensCommonStyles = StyleSheet.create({
  container: {
    paddingTop: 27,
    paddingBottom: 56,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    minHeight: "100%",
  },
  image: {
    marginBottom: 24,
    width: 120,
    height: 120,
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
    textAlign: "center",
    color: Colors.dark80,
  },
  inputContainer: {
    width: "100%",
    gap: 40,
    marginTop: 32,
  },
  button: {
    marginTop: "auto",
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
