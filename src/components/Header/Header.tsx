import React from 'react';
import {Text, View} from 'react-native';
import Logo from './images/logo.svg';
import Mercoin from './images/mercoin.svg';
import {styles} from './Header.styles';

function Header() {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.profile}>
        <Text style={styles.balance}>1430</Text>
        <Mercoin />
        <View style={styles.avatar} />
      </View>
    </View>
  );
}

export default Header;
