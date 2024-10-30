import { ButtonAction } from "components/ButtonAction/ButtonAction";
import { View, Image, Text } from "react-native";
import { styles } from "./Header.styles";
import { useGetApiProfileMe } from "api/backend";
import Mercoin from "assets/icons/mercoin.svg";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "navigators/StackNavigator/StackNavigator.types";

export const Header = () => {
  const { data: user } = useGetApiProfileMe();
  const navigation = useNavigation<NavigationProp>();

  const handleGoBack = () => navigation.goBack();

  return (
    <View style={styles.header}>
      <ButtonAction type="back" style={styles.back} onPress={handleGoBack} />
      {user?.userPhoto?.thumbnail ? (
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: user.userPhoto.thumbnail }}
          />
        </View>
      ) : null}
      <Text style={styles.name}>{user?.firstName}</Text>
      <View style={styles.profile}>
        <Mercoin />
        <Text style={styles.balance}>{user?.balance}</Text>
      </View>
    </View>
  );
};
