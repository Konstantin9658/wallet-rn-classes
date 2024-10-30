import { PressableProps } from "react-native";

export interface ButtonActionProps extends PressableProps {
  type: "cross" | "back";
}
