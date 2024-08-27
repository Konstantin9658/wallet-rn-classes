import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {InputProps} from './Input.types';
import {HelperText} from 'components/HelperText/HelperText';
import {styles} from './Input.styles';

export const Input = ({
  hasError = false,
  errorMessage,
  hintMessage,
  ...props
}: InputProps) => {
  const [isFocused, setFocused] = useState<boolean>(false);
  const toggleFocused = () => setFocused(!isFocused);
  return (
    <>
      <TextInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        allowFontScaling
        onFocus={toggleFocused}
        onBlur={toggleFocused}
        style={[
          styles.input,
          isFocused && styles.input_focus,
          hasError && styles.input_error,
        ]}
        {...props}
      />
      {hasError ? <HelperText text={errorMessage} type="error" /> : null}
      {!hasError && hintMessage ? (
        <HelperText text={hintMessage} type="hint" />
      ) : null}
    </>
  );
};
