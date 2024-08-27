import {TextInputProps} from 'react-native';

export interface InputProps extends TextInputProps {
  hasError?: boolean;
  errorMessage?: string;
  hintMessage?: string;
}
