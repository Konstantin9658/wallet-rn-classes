import {ReactNode} from 'react';
import {PressableProps} from 'react-native';

export type VariantButton = 'primary' | 'secondary';
export type SizeButton = 'normal' | 'small';

export interface CustomButtonProps extends PressableProps {
  isDisabled?: boolean;
  children?: ReactNode;
}
