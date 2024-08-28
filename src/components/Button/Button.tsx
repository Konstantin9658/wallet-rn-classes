import React from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { styles } from './Button.styles';
import { CustomButtonProps } from './Button.types';

export const Button = (props: CustomButtonProps) => {
  const { children, isDisabled, style, label, IconComponent, ...rest } = props;

  const content = children || (
    <Text style={styles.text}>{label}</Text>
  );
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        style as StyleProp<ViewStyle>,
        pressed && styles.button_pressed,
        isDisabled && styles.button_disabled,
      ]}
      {...rest}>
      {IconComponent ? <IconComponent /> : null}
      {label ? <Text style={styles.text}>{label}</Text> : null}
    </Pressable>
  );
};
