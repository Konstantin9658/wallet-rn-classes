import { ReactNode } from "react";
import { PressableProps } from "react-native";
import { SvgProps } from "react-native-svg";

export type VariantButton = "primary" | "secondary";
export type SizeButton = "normal" | "small";

export interface CustomButtonProps extends PressableProps {
  isDisabled?: boolean;
  isLoading?: boolean;
  label?: string;
  IconComponent?: React.FC<SvgProps>;
  children?: ReactNode;
}
