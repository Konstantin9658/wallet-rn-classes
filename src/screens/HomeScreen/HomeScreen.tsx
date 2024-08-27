import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './HomeScreen.styles';
import {Input} from 'components/Input/Input';
import {Button} from 'components/Button/Button';
import {useCredentials} from 'services/credentials';
import {LoginScreen} from 'screens/LoginScreen/LoginScreen';

export const HomeScreen = () => {
  const [credentials] = useCredentials();
  if (!credentials) {
    return <LoginScreen />;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./images/i120_mercoin.png')}
      />
      <Text style={styles.title}>Send Mercoins</Text>
      <Text style={styles.description}>
        Select a user and specify the number of&nbsp;mercoins to transfer
      </Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Enter user name or E-mail" />
        <Input placeholder="Amount of mercoins" keyboardType="numeric" />
      </View>
      <View style={styles.buttonContainer}>
        <Button isDisabled>Send Mercoins</Button>
      </View>
    </View>
  );
};
