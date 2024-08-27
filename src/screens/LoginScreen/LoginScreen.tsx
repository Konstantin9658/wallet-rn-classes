import React from 'react';
import {Text, View} from 'react-native';
import LoginLogo from './images/login-logo.svg';
import {styles} from './LoginScreen.styles';
import {Button} from 'components/Button/Button';
import {useCredentials} from 'services/credentials';
import {usePostApiAccountSsoGoogle} from 'api/backend';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const LoginScreen = () => {
  const [_, setCredentials] = useCredentials();
  const {mutateAsync: login} = usePostApiAccountSsoGoogle();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const authData = await login({data: {idToken: userInfo.idToken}});
      setCredentials(authData);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <LoginLogo style={styles.logo} />
        <Text style={styles.title}>Welcome to Wallet</Text>
        <Text style={styles.description}>
          This is an internal project for Mercury team. Please, log in with your
          corporate Google account.
        </Text>
        <Button onPress={signIn}>Log in with Google</Button>
      </View>
    </View>
  );
};
