import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import Reactotron from "reactotron-react-native";
import { SafeAreaView, StatusBar } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useCredentials } from "services/credentials";
import { LoginScreen } from "screens/LoginScreen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "TabNavigator/TabNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { commonStyles } from "common/styles";

if (__DEV__) {
  require("./ReactotronConfig");
}

const queryClient = new QueryClient();

GoogleSignin.configure({
  iosClientId:
    "933758472213-66j0oji0cs6tmg054hd83smorsi85v5p.apps.googleusercontent.com",
  webClientId:
    "933758472213-e3fdion1orjo0fphfe4n5gemoj5nviv0.apps.googleusercontent.com",
});

function App(): React.JSX.Element {
  const [credentials] = useCredentials();

  return (
    <GestureHandlerRootView style={commonStyles.flex}>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView style={commonStyles.flex}>
            <StatusBar barStyle="dark-content" />
            {credentials ? <TabNavigator /> : <LoginScreen />}
          </SafeAreaView>
        </QueryClientProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

// @ts-expect-error Reactotron forgotten add overlay
export default __DEV__ ? Reactotron.overlay(App) : App;
