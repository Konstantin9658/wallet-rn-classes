import { Text, TouchableOpacity } from "react-native";
import { TabBarButtonProps } from "./TabBarButton.types";
import { styles } from "./TabBarButton.styles";
import { Colors } from "constants/Colors";

export const TabBarButton = (props: TabBarButtonProps) => {
  const { isFocused, label, icon, options, ...rest } = props;
  return (
    <TouchableOpacity
      {...rest}
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      style={{
        ...styles.tabButton,
        backgroundColor: isFocused ? Colors.accent10 : "transparent",
      }}>
      {icon}
      <Text
        style={{
          ...styles.label,
          color: isFocused ? Colors.accent100 : Colors.dark80,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
