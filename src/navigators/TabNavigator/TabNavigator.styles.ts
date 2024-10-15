import { Colors } from "constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 92,
    flexDirection: "row",
    justifyContent: "center",
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
    paddingHorizontal: 14,
  },
  item: {
    width: 76,
    height: 76,
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginHorizontal: 6,
  },
});
