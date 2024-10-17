import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import ChevronLeft from "assets/icons/chevron.svg";
import { styles } from "./ButtonBack.styles";

export const ButtonBack = (props: PressableProps) => {
  const { style, ...rest } = props;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.button_pressed,
        style as StyleProp<ViewStyle>,
      ]}
      {...rest}>
      <ChevronLeft />
    </Pressable>
  );
};
