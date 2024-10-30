import { Pressable, StyleProp, ViewStyle } from "react-native";
import ChevronLeft from "assets/icons/chevron.svg";
import Cross from "assets/icons/cross.svg";
import { styles } from "./ButtonAction.styles";
import { ButtonActionProps } from "./ButtonAction.types";

export const ButtonAction = (props: ButtonActionProps) => {
  const { style, type, ...rest } = props;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.button_pressed,
        style as StyleProp<ViewStyle>,
      ]}
      {...rest}>
      {type === "back" ? <ChevronLeft /> : null}
      {type === "cross" ? <Cross /> : null}
    </Pressable>
  );
};
