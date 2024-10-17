import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Logo from "./images/logo.svg";
import Mercoin from "assets/icons/mercoin.svg";
import { styles } from "./Header.styles";
import { useGetApiProfileMe } from "api/backend";
import { useCredentials } from "services/credentials";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "navigators/StackNavigator/StackNavigator.types";

function Header() {
  const [_, setCredentials] = useCredentials();

  const navigation = useNavigation<NavigationProp>();

  const { data: user } = useGetApiProfileMe();

  const signOut = () => {
    setCredentials(null);
  };

  if (!user) {
    return (
      <View>
        <Pressable onPress={signOut}>
          <Text>Sign Out</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <View style={styles.profile}>
        <Text style={styles.balance}>{user?.balance}</Text>
        <Mercoin />
        <Pressable onPress={() => navigation.navigate("Settings")}>
          {user?.userPhoto?.thumbnail ? (
            <Image
              style={styles.avatar}
              source={{ uri: user.userPhoto.thumbnail }}
            />
          ) : (
            <View style={styles.avatar} />
          )}
        </Pressable>
      </View>
    </View>
  );
}

export default Header;
