import { Colors } from "constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 8,
    backgroundColor: Colors.white100,
    shadowColor: Colors.black100,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: -15,
    },
    elevation: 5,
    shadowOpacity: 0.06,
  },
});
