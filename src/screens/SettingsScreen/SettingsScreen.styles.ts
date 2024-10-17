import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    flex: 1,
    minHeight: "100%",
  },
  title: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: FontSize.fs18,
    lineHeight: LineHeight.lh26,
    color: Colors.dark80,
    marginBottom: 8,
  },
  theme: {
    backgroundColor: Colors.white100,
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderRadius: 16,
    marginBottom: 8,
  },
  services: {
    backgroundColor: Colors.white100,
    paddingTop: 16,
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderRadius: 16,
    marginBottom: 8,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: "auto",
  },
  logoutLabel: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: FontSize.fs14,
    lineHeight: LineHeight.lh22,
    color: Colors.dark80,
    marginLeft: 6,
  },
});
