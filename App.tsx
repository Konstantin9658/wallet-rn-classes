import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Header from './src/components/Header/Header';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
