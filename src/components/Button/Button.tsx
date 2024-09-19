import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  Text,
  ViewStyle,
} from "react-native";
import { styles } from "./Button.styles";
import { CustomButtonProps } from "./Button.types";
import { Colors } from "constants/Colors";

export const Button = (props: CustomButtonProps) => {
  const {
    isDisabled = false,
    isLoading = false,
    style,
    label,
    IconComponent,
    ...rest
  } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        style as StyleProp<ViewStyle>,
        pressed && styles.button_pressed,
        isDisabled && styles.button_disabled,
      ]}
      {...rest}>
      {IconComponent ? (
        <IconComponent />
      ) : isLoading ? (
        <ActivityIndicator color={Colors.white100} />
      ) : null}
      {label && !isLoading ? <Text style={styles.text}>{label}</Text> : null}
    </Pressable>
  );
};
