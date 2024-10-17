import { Colors } from "constants/Colors";
import { FontSize, LineHeight } from "constants/Typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  back: { position: "absolute", left: 12, top: 12 },
  profile: { flexDirection: "row", alignItems: "center" },
  avatarContainer: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.dark80,
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 8,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 14,
  },
  name: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: FontSize.fs18,
    lineHeight: LineHeight.lh26,
    color: Colors.dark80,
    marginBottom: 4,
  },
  balance: {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: FontSize.fs16,
    lineHeight: LineHeight.lh24,
    color: Colors.dark80,
    marginLeft: 4,
  },
  header: {
    backgroundColor: Colors.white100,
    paddingVertical: 25,
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginBottom: 8,
  },
});
