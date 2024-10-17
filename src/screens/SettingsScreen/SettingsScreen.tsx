import { commonStyles } from "common/styles";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./SettingsScreen.styles";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import { Header } from "./components/Header/Header";
import IconExit from "assets/icons/exit.svg";
import { useCredentials } from "services/credentials";
import { Services } from "./components/Services/Services";

export const SettingsScreen = () => {
  const [_, setCredentials] = useCredentials();

  const logOut = () => setCredentials(null);

  return (
    <ScrollView scrollEnabled={false} style={commonStyles.flex}>
      <View style={styles.container}>
        <Header />
        <View style={styles.theme}>
          <Text style={styles.title}>Theme</Text>
          <ThemeSwitcher />
        </View>
        <View style={styles.services}>
          <Text style={styles.title}>Services</Text>
          <Services />
        </View>
        <Pressable style={styles.logout} onPress={logOut}>
          <IconExit />
          <Text style={styles.logoutLabel}>Log out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};
