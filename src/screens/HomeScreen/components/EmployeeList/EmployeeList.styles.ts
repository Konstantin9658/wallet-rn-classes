import { Colors } from "constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: { paddingHorizontal: 16 },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    borderColor: Colors.neutral40,
    backgroundColor: Colors.neutral20,
    color: Colors.dark80,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  inputContainer: { justifyContent: "center" },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  clearButton: {
    position: "absolute",
    right: 6,
    width: 32,
    height: 32,
  },
});
