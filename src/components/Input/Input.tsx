import React, { forwardRef, useState } from "react";
import { TextInput } from "react-native";
import { InputProps } from "./Input.types";
import { HelperText } from "components/HelperText/HelperText";
import { styles } from "./Input.styles";

export const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const { hasError = false, errorMessage, hintMessage, style, ...rest } = props;
  const [isFocused, setFocused] = useState<boolean>(false);

  const toggleFocused = () => setFocused(!isFocused);

  return (
    <>
      <TextInput
        ref={ref}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        allowFontScaling
        onFocus={toggleFocused}
        onBlur={toggleFocused}
        style={[
          styles.input,
          style,
          isFocused && styles.input_focus,
          hasError && styles.input_error,
        ]}
        {...rest}
      />
      {hasError ? <HelperText text={errorMessage} type="error" /> : null}
      {!hasError && hintMessage ? (
        <HelperText text={hintMessage} type="hint" />
      ) : null}
    </>
  );
});

Input.displayName = "Input";
