import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Header from './src/components/Header/Header';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useCredentials } from 'services/credentials';
import { LoginScreen } from 'screens/LoginScreen/LoginScreen';
import { HomeScreen } from 'screens/HomeScreen/HomeScreen';
import { Colors } from 'constants/Colors';
// import TabNavigator from 'TabNavigator/TabNavigator';
// import {SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from 'TabNavigator/TabNavigator';

const queryClient = new QueryClient();

GoogleSignin.configure({
  iosClientId:
    '933758472213-66j0oji0cs6tmg054hd83smorsi85v5p.apps.googleusercontent.com',
  webClientId:
    '933758472213-e3fdion1orjo0fphfe4n5gemoj5nviv0.apps.googleusercontent.com',
});

function App(): React.JSX.Element {
  const [credentials] = useCredentials();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          {credentials ? <TabNavigator /> : <LoginScreen />}
        </SafeAreaView>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
