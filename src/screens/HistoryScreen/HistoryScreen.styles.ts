import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
    paddingHorizontal: 40,
  },
  placeholder: { marginBottom: 32 },
  title: {
    fontSize: FontSize.fs20,
    lineHeight: LineHeight.lh30,
    marginBottom: 8,
    color: Colors.dark80,
  },
  description: {
    fontSize: FontSize.fs16,
    textAlign: "center",
    lineHeight: LineHeight.lh24,
    color: Colors.dark80,
  },
});
