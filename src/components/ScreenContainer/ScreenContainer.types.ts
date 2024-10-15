import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export interface ScreenContainerProps {
  children: ReactNode;
  title: string;
  description: string;
  imageSrc: ImageSourcePropType;
  ButtonComponent: ReactNode;
  BottomSheetComponent?: ReactNode;
}
