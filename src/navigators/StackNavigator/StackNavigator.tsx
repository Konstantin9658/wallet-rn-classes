import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "navigators/TabNavigator/TabNavigator";
import { SettingsScreen } from "screens/SettingsScreen/SettingsScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={TabNavigator} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
