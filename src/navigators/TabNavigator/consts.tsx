import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { styles } from "./TabNavigator.styles";
import { Colors } from "constants/Colors";
import Header from "components/Header/Header";
import { renderTabBarLabel } from "./utils";

export const TAB_NAVIGATOR_OPTIONS: BottomTabNavigationOptions = {
  header: () => <Header />,
  tabBarHideOnKeyboard: true,
  tabBarStyle: styles.container,
  tabBarItemStyle: styles.item,
  tabBarLabel: renderTabBarLabel,
  tabBarActiveBackgroundColor: Colors.accent10,
  tabBarInactiveTintColor: Colors.dark100,
};
