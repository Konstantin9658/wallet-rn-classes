import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

export interface TabBarButtonProps extends TouchableOpacityProps {
  isFocused: boolean;
  label: string;
  icon: ReactNode;
  options: BottomTabNavigationOptions;
}
