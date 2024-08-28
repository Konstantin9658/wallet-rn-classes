import { Text, TouchableOpacity, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Colors } from "constants/Colors";
import { styles } from "./TabBar.styles";
import { TabBarButton } from "./components/TabBarButton/TabBarButton";

export const TabBar = (props: BottomTabBarProps) => {
  const { state, descriptors, navigation } = props;
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const label = route.name;

        const icon =
          options.tabBarIcon !== undefined
            ? options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? Colors.accent100 : Colors.dark80,
                size: 0,
              })
            : null;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            label={label}
            options={options}
            {...props}
            isFocused={isFocused}
            icon={icon}
            key={`${state.key}-${route.name}`}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
};
