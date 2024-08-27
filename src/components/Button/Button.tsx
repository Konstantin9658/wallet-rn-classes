import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './Button.styles';
import {CustomButtonProps} from './Button.types';

export const Button = (props: CustomButtonProps) => {
  const {children, isDisabled, ...rest} = props;
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        pressed && styles.button_pressed,
        isDisabled && styles.button_disabled,
      ]}
      {...rest}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};
