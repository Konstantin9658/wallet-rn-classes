import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    bottom: 20,
    flexDirection: "row",
    height: 102,
    borderRadius: 12,
    backgroundColor: Colors.white100,
    shadowColor: Colors.dark100,
    shadowOpacity: 0.15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    width: "100%",
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 150,
    paddingBottom: 16,
  },
  close: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  image: {
    width: 52,
    height: 52,
    marginRight: 12,
  },
  title: {
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: Colors.dark100,
    marginBottom: 2,
  },
  message: {
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh22,
    fontWeight: "400",
    fontFamily: "Inter",
    color: Colors.dark80,
  },
});
