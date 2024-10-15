import { Colors } from "constants/Colors";
import { FontSize } from "constants/Typography";
import { ReactNode } from "react";
import { TextStyle, Text } from "react-native";

const $tabBarLabelStyle: TextStyle = {
  fontSize: FontSize.fs13,
  marginTop: 6,
  textAlign: "center",
};

const $tabBarLabelStyleActive: TextStyle = {
  color: Colors.accent100,
};

export const renderTabBarLabel = (props: {
  focused: boolean;
  children: ReactNode;
}) => (
  <Text
    numberOfLines={2}
    style={[$tabBarLabelStyle, props.focused ? $tabBarLabelStyleActive : null]}>
    {props.children}
  </Text>
);
