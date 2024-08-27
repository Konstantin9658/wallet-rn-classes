import React from 'react';
import {Text} from 'react-native';
import {HelperTextProps} from './HelperText.types';
import {styles} from './HelperText.styles';

export const HelperText = ({type, text}: HelperTextProps) => {
  return <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>;
};
