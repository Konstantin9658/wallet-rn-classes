import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: Colors.mainBg,
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 48,
    backgroundColor: Colors.white100,
    borderRadius: 10,
    shadowColor: Colors.dark100,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  logo: {
    marginBottom: 16,
  },
  title: {
    fontSize: FontSize.fs24,
    lineHeight: LineHeight.lh36,
    marginBottom: 8,
    fontFamily: "Inter",
    fontWeight: "600",
    color: Colors.dark85,
  },
  description: {
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh24,
    color: Colors.dark80,
    textAlign: "center",
    marginBottom: 32,
  },
});
